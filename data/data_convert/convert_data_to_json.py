# coding: utf-8
# https://docs.google.com/spreadsheets/d/1aCIRyol3UncEtstWhT_Yw3I8mCbvpGQU5_HUKB_0JFA/edit#gid=0 属性
# https://docs.google.com/spreadsheets/d/1aCIRyol3UncEtstWhT_Yw3I8mCbvpGQU5_HUKB_0JFA/edit#gid=2013091340 検査
# https://docs.google.com/spreadsheets/d/1aCIRyol3UncEtstWhT_Yw3I8mCbvpGQU5_HUKB_0JFA/edit#gid=1042219446 電話
import io 
import json
import requests
import numpy as np 
import pandas as pd 
from collections import OrderedDict
from dateutil.parser import parse 
from datetime import datetime,timedelta

def goo_sheet_to_pandas(sheet_name):

	goo_sheet_info 	= {	"sheetID":"1aCIRyol3UncEtstWhT_Yw3I8mCbvpGQU5_HUKB_0JFA",
						"sheetGID":{
								"陽性患者属性(patients)":0,
								"電話相談件数(contacts)":1042219446,
								"検査実施数(inspections_summary)":2013091340
								}
				  }

	colum_names 	= { 
						"陽性患者属性(patients)":("id","日付","場所","年齢","性別","退院日","unname1","更新日","ソース","unname2"),
						"電話相談件数(contacts)":("日付","件数","unname1","更新日","ソース","unname2"),
						"検査実施数(inspections_summary)":("日付","県の数","市の数","sum","更新日","ソース","unname")
					  }

	start_index		= { 	
						"陽性患者属性(patients)":2,
						"電話相談件数(contacts)":3,
						"検査実施数(inspections_summary)":3
					  }

	sheetID = goo_sheet_info["sheetID"]
	sheetGID= goo_sheet_info["sheetGID"][str(sheet_name)]
	url 	= "https://docs.google.com/spreadsheets/d/{0}/export?format=csv&id={0}&gid={1}".format(sheetID, sheetGID)
	res 	= requests.get(url)
	df 		= pd.read_csv(io.BytesIO(res.content),sep=",",header=start_index[str(sheet_name)],names=colum_names[str(sheet_name)])

	date_format1 = lambda x: datetime.strftime(parse(x),"%Y-%m-%d")
	date_format2 = lambda x: datetime.strftime(parse(x),"%Y/%m/%d %H:%M") if not pd.isnull(x) else datetime.now().strftime("%Y/%m/%d %H:%M")

	df 			= df.dropna(subset=["日付"])
	df["日付"]	= df["日付"].apply(date_format1)
	df["更新日"] = df["更新日"].apply(date_format2)

	return df 


def github_data_json():
	url = 'https://github.com/covid19-tochigi/covid19/raw/development/data/data.json'
	res = requests.get(url)
	current_data = json.loads(res.text)
	return current_data



if __name__ == '__main__':

	#get data.json format
	json_data 	= github_data_json()

	#update 電話相談件数(contacts)
	sheet_name 	= "電話相談件数(contacts)"
	df 			= goo_sheet_to_pandas(sheet_name)
	json_data["contacts"]["date"] = list(df["更新日"])[-1]
	json_data["contacts"]["data"] = list(map(lambda x,y:[x,int(y)],list(df["日付"]),list(df["件数"])))

	#update 陽性患者属性(patients)
	sheet_name 	= "陽性患者属性(patients)"
	df 			= goo_sheet_to_pandas(sheet_name)
	json_data["patients"]["date"] = list(df['更新日'])[-1]
	json_data["patients"]["data"] = list(map(lambda day,loc,age,sex,discharge:
											{	"リリース日":day,
												"居住地":loc,
												"年代":age,
												"性別":sex,
												"退院":discharge if not pd.isnull(discharge) else None 
											},
										list(df['日付']),list(df['場所']),list(df['年齢']),list(df['性別']),list(df['退院日'])))
	NUM_in_hospital = df["退院日"].isnull().sum() 
	NUM_patients	= len(list(df['日付']))

 	#update patients_summary
	start_date 		= datetime.strptime("2020-01-14","%Y-%m-%d")
	last_date		= datetime.strptime(list(df['日付'])[-1],"%Y-%m-%d") + timedelta(days=1)
	date_list		= list(map(lambda day:(start_date+timedelta(day)).strftime("%Y-%m-%d"),range((last_date - start_date).days)))
	od_date			= OrderedDict()
	for date in date_list:
		od_date[str(date)] = 0
	for date in df['日付']:
		od_date[str(date)] +=1

	json_data["patients_summary"]["date"] = list(df['更新日'])[-1]
	json_data["patients_summary"]["data"] = list(map(lambda day,number:[day,int(number)],od_date.keys(),od_date.values()))

	#update 検査実施数(inspections_summary)
	sheet_name 	= "検査実施数(inspections_summary)"
	df 			= goo_sheet_to_pandas(sheet_name)
	json_data["inspections_summary"]["date"] = list(df['更新日'])[-1]
	json_data["inspections_summary"]["data"] = list(map(lambda day,x,y:[day,int(x),int(y)],list(df['日付']),list(df['県の数']),list(df['市の数'])))

	NUM_inspections = df['県の数'].sum()+df['市の数'].sum()

	#update main_summary
	NUM_death = 0
	NUM_serious = 0

	#update "検査実施人数"
	json_data["main_summary"]["value"] = int(NUM_inspections)
	#update "陽性患者数"
	json_data["main_summary"]["children"][0]["value"] = int(NUM_patients)
	#update "入院中"
	json_data["main_summary"]["children"][0]["children"][0]["value"] = int(NUM_in_hospital)
	#update "軽症・中等症"
	json_data["main_summary"]["children"][0]["children"][0]["children"][0]["value"] = int(NUM_in_hospital - NUM_serious)
	#update "重傷"
	json_data["main_summary"]["children"][0]["children"][0]["children"][1]["value"] = int(NUM_serious)
	#update "退院"
	json_data["main_summary"]["children"][0]["children"][1]["value"] = int(NUM_patients - NUM_in_hospital)
	#update "死亡"
	json_data["main_summary"]["children"][0]["children"][2]["value"] = int(NUM_death)


	#UPDATE "lastUpdate"
	json_data["lastUpdate"] = datetime.now().strftime("%Y/%m/%d %H:%M")


	json_output = open("../data.json","w")
	json.dump(json_data,json_output,indent=2,ensure_ascii=False)

	json_output.close()





















	
