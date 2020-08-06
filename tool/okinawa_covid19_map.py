
# Last Updated: April 20, 2020
# Author: Soshi Mizutani (soshi.mizutani@oist.jp)

# 必要なライブラリのインストール
#!pip install geocoder==1.3 geopandas folium pandas numpy matplotlib seaborn

from folium.plugins import MarkerCluster, FeatureGroupSubGroup
from folium import LayerControl, Map, Marker, Icon, TileLayer
import geocoder
import pandas as pd
import numpy as np
import matplotlib.pylab as plt
from math import isnan
import seaborn as sb
import datetime
import copy
sb.set('poster')


def load_data():
    # load raw data (source: 'https://okinawa.stopcovid19.jp/')
    url = 'https://raw.githubusercontent.com/Code-for-OKINAWA/covid19/development/data/data.json'
    all_df = pd.read_json(url, orient='columns')

    df = pd.DataFrame(all_df['patients']['data'])

    df = df.drop(columns=['備考'])

    return df, all_df


def translate_df(df, key_list, JPtoEN_dict_list):

    df_en = copy.deepcopy(df)

    for key, JPtoEN_dict in zip(key_list, JPtoEN_dict_list):
        if key == 'column':
            df_en = df.rename(columns=JPtoEN_dict)

        else:
            df_en[key] = df_en[key].replace(JPtoEN_dict)

    return df_en


def load_data_en():

    # load raw data in JP
    df, all_df = load_data()

    # translate from JP to EN
    column_dict = {'date': 'date', '居住地': 'place', '年代': 'age',  '性別': 'gender',
                   '確定日': 'confirm_date', '状態': 'status', '退院': 'discharged'}
    age_dict = {'10歳未満': 'Under 10', '10代': '10s', '20代': '20s', '30代': '30s', '40代': '40s', '50代': '50s',
            '60代': '60s', '70代': '70s', '80代': '80s', '90代': '90s', '90歳以上': 'Above 90', '非公表': 'N/A', '不明': 'N/A', '調査中': 'N/A', '確認中':'N/A'}
    gender_dict = {'女性': 'Female', '男性': 'Male', '不明': 'N/A', '調査中': 'N/A', '確認中':'N/A'}
    status_dict = {'退院': 'discharged', '入院勧告解除': 'discharged', '入院': 'hospitalized',
                   '調査中': 'N/A', '入院調整中': 'being arranged', '入院調整': 'to be hospitalized', '不明': 'N/A', '確認中':'N/A'}

    key_list = ['column', 'age', 'gender', 'status']
    JPtoEN_dict_list = [column_dict, age_dict, gender_dict, status_dict]
    df_en = translate_df(df, key_list, JPtoEN_dict_list)

    # shorten confirm-date
    for ind, d in df_en.iterrows():

        df_en['confirm_date'][ind] = df_en['confirm_date'][ind][5:10]

    return df_en


def get_count_df(data_df):
    count_df = data_df['place'].value_counts().rename_axis('place').reset_index(name='counts')
    return count_df


def get_loc_df():

    place_list = ['那覇市', '中部保健所管内', '南部保健所管内', '沖縄市', '浦添市', '豊見城市', '宜野湾市', '石垣市',
       '名護市', '南城市', 'うるま市', '糸満市', '北部保健所管内','宮古保健所管内', '宮古島市', '調査中', '県外']

    lat_list = [26.2122345, 26.319941 , 26.192634 , 26.3343738, 26.249754 ,
       26.1772381, 26.2815839, 24.366098 , 26.5914524, 26.142512 ,
       26.384705 , 26.106017 ,
                26.633257,
                24.790582,
                24.805460, 26.32, 26.5]

    lng_list = [127.6791452, 127.763825 , 127.729369 , 127.8056597, 127.716591 ,
       127.6863791, 127.7785754, 124.163499 , 127.9773062, 127.765058 ,
       127.851324 , 127.686066,
           128.157012,
                125.298005,
                125.281102, 127.69, 127.69]

    loc_df = pd.DataFrame(
        {'place': place_list,
         'lat': lat_list,
         'lng': lng_list})

    return loc_df



def make_map(data_df, loc_df):
    OK_COORDINATES = (26.43, 127.8)

    # base map
    my_map = Map(location=OK_COORDINATES, zoom_start=10.12, min_zoom=8, max_zoom=13, tiles='cartodb positron')

    # tiles = [”OpenStreetMap”, ”Stamen Terrain”, “Stamen Toner”, “Stamen Watercolor”, ”CartoDB positron”, “CartoDB dark_matter”, ”Mapbox Bright”, “Mapbox Control Room” ]
    tile_options = ['cartodb positron', 'stamen terrain']
    tile_names = ["simple map", "terrain map"]
    for name, opt in zip(tile_names, tile_options):
        TileLayer(opt).add_to(my_map, name=name)

    # cluster object
    cluster = MarkerCluster(control=False)
    my_map.add_child(cluster)

    group_list = []
    for age_id in range(12):
        if age_id == 9:
            age_str = 'N/A'
        elif age_id == 10:
            age_str = 'Under 10'
        elif age_id == 11:
            age_str = 'Above 90'
        else:
            age_str = '%d0s' % (age_id + 1)

        group = FeatureGroupSubGroup(cluster, age_str)
        my_map.add_child(group)
        group_list.append(group)

    # add a marker for every record in the filtered data, use a clustered view
    for ind, d in data_df.iterrows():

        # make pop-up string
        place = d['place']
        age = d['age']
        gender = d['gender']
        conf_date = d['confirm_date']
        status = d['status']

        if age == 'N/A':
            age_id = 9
        elif 'Under' in age:
            age_id = 10
        elif 'Above' in age:
            age_id = 11
        else:
            age_id = int(age[0])-1

        pop_str = 'date:%s, age:%s' % (conf_date, age)


        if gender == 'Male':
            icon = Icon(color='blue', icon='male', prefix='fa')
        elif gender == 'Female':
            icon = Icon(color='red', icon='female', prefix='fa')
        else:
            icon = Icon(color='black', icon='question-circle', prefix='fa')

        # get coordinates
        try:
            lat_value = loc_df[loc_df.place == place].lat.values[0]
            lng_value = loc_df[loc_df.place == place].lng.values[0]
        except:
            lat_value = loc_df[loc_df.place == '県外'].lat.values[0]
            lng_value = loc_df[loc_df.place == '県外'].lng.values[0]
            pop_str = 'date:%s, age:%s, place=%s' % (conf_date, age, 'outside Okinawa')

        #print(place, lat_value, lng_value)

        # create marker with coordinates & pop-up info
        marker = Marker(location=[lat_value,  lng_value],
                        popup=pop_str, icon=icon)

        # add marker to gorup
        group_list[age_id].add_child(marker)

    LayerControl().add_to(my_map)

    my_map.save("covid19_okinawa_map.html")
    #display(my_map)

    return my_map




# data
data_df = load_data_en()
loc_df = get_loc_df()

# plot map
my_map = make_map(data_df, loc_df)
