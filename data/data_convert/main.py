import datetime
import re
from urllib.parse import urljoin

import pandas as pd
import requests
from bs4 import BeautifulSoup

import simplejson as json

JST = datetime.timezone(datetime.timedelta(hours=+9), "JST")

dt_now = datetime.datetime.now(JST)
dt_update = dt_now.strftime("%Y/%m/%d %H:%M")

data = {"lastUpdate": dt_update}

# データラングリング

url = "http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/coronakensahasseijyoukyou.html"

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko",
}

r = requests.get(url, headers=headers)

r.raise_for_status()

soup = BeautifulSoup(r.content, "html.parser")

# 新型コロナウイルス感染症検査件数

# inspections_summary
tag_kensa = soup.find("a", text=re.compile("^新型コロナウイルス感染症検査件数.+エクセル"))

link_kensa = urljoin(url, tag_kensa.get("href"))

df_kensa = pd.read_excel(link_kensa, header=[2, 3])
df_kensa.columns = df_kensa.columns.to_flat_index()
df_kensa.rename(columns={("検査日", "Unnamed: 0_level_1"): "検査日"}, inplace=True)

df_kensa.set_index("検査日", inplace=True)

df_kensa["日付"] = df_kensa.index.strftime("%Y-%m-%d")

df_insp_sum = df_kensa.loc[:, ["日付", ("検査件数", "栃木県"), ("検査件数", "宇都宮市")]]

data["inspections_summary"] = {
    "data": df_insp_sum.values.tolist(),
    "date": dt_update,
}

# 栃木県における新型コロナウイルス感染症の発生状況一覧

tag_kanja = soup.find("a", text=re.compile("^栃木県における新型コロナウイルス感染症の発生状況一覧.+エクセル"))

link_kanja = urljoin(url, tag_kanja.get("href"))

df_kanja = pd.read_excel(link_kanja, index_col="番号", header=1, skipfooter=2)

df_kanja["陽性判明日"] = df_kanja["陽性判明日"].apply(
    lambda date: pd.to_datetime(date, unit="D", origin=pd.Timestamp("1899/12/30"))
)

df_kanja["退院日"] = df_kanja["退院日"].apply(
    lambda date: pd.to_datetime(date, unit="D", origin=pd.Timestamp("1899/12/30"))
)

df_kanja["退院"] = df_kanja["退院日"].dt.strftime("%Y-%m-%d")
df_kanja["状態"] = "入院中"
df_kanja["状態"] = df_kanja["状態"].where(df_kanja["退院日"].isnull(), "退院")

## main_summary

sr_situ = df_kanja["状態"].value_counts()
sr_situ = sr_situ.reindex(["入院中", "退院", "死亡"], fill_value=0)

data["main_summary"] = {
    "attr": "検査実施人数",
    "value": int(df_kensa.iloc[-1][("累積検査件数", "合計")]),
    "children": [
        {
            "attr": "陽性患者数",
            "value": len(df_kanja),
            "children": [
                {"attr": "入院中", "value": int(sr_situ["入院中"])},
                {"attr": "退院", "value": int(sr_situ["退院"])},
                {"attr": "死亡", "value": int(sr_situ["死亡"])},
            ],
        }
    ],
}

## patients

df_kanja["リリース日"] = df_kanja["陽性判明日"].dt.strftime("%Y-%m-%d")

df_patients = df_kanja.loc[:, ["リリース日", "居住地", "年代", "性別", "退院"]]

data["patients"] = {
    "data": df_patients.to_dict(orient="records"),
    "date": dt_update,
}

## patients_summary

df_patients_sum = (
    df_kanja["陽性判明日"]
    .value_counts()
    .sort_index()
    .asfreq("D", fill_value=0)
    .reset_index()
)

df_patients_sum["日付"] = df_patients_sum["index"].dt.strftime("%Y-%m-%d")
df_patients_sum.rename(columns={"陽性判明日": "小計"}, inplace=True)
df_patients_sum.drop(columns=["index"], inplace=True)

data["patients_summary"] = {
    "data": df_patients_sum.loc[:, ["日付", "小計"]].values.tolist(),
    "date": dt_update,
}

with open("../data.json", "w", encoding="utf-8") as fw:
    json.dump(data, fw, ignore_nan=True, ensure_ascii=False, indent=4)
