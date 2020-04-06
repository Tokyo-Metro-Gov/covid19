# coding: utf-8

import pandas as pd
import numpy as np 
import datetime
import json


if __name__ == "__main__":

	excel_name 	= "tochigi_covid19_data.xlsx"

	start_index	= {	"電話相談件数(contacts)":3,
					"陽性患者属性(patients)":2,
					"陽性患者数(patients_summary)":2,
					"検査実施数(inspections_summary)":3
				  }

	colum_names = {	"電話相談件数(contacts)":("date","number","unname1","update","source","unname2"),
					"陽性患者属性(patients)":("id","date","location","age","sex","discharge_day","unname1","update","source","unname2"),
					"陽性患者数(patients_summary)":("date","number","unname1","update","source","unname3","unname4"),
					"検査実施数(inspections_summary)":("date","number_prefecture","number_city","sum","update","source","unname")
				  }

	json_open 	= open("tmplate_data.json","r")
	json_data	= json.load(json_open)

	#UPDATE "電話相談件数(contacts)"
	sheet_name = "電話相談件数(contacts)"
	df = pd.read_excel(excel_name,header=start_index[sheet_name],sheet_name=sheet_name,names=colum_names[sheet_name])
	df = df.dropna(subset=['date'])
	json_data["contacts"]["date"] = list(df["update"])[-1].strftime('%Y-%m-%d %H:%M')
	json_data["contacts"]["data"] = list(map(lambda x,y:[x.strftime('%Y-%m-%d'),int(y)],list(df["date"]),list(df["number"])))


	# #UPDATE "陽性患者属性(patients)"
	sheet_name = "陽性患者属性(patients)"
	df = pd.read_excel(excel_name,header=start_index[sheet_name],sheet_name=sheet_name,names=colum_names[sheet_name])
	df = df.dropna(subset=['date'])
	json_data["patients"]["date"] = list(df['update'])[-1].strftime('%Y-%m-%d %H:%M')
	json_data["patients"]["data"] = list(map(lambda day,loc,age,sex,discharge:
											{	"リリース日":day.strftime("%Y-%m-%d"),
												"居住地":loc,
												"年代":age,
												"性別":sex,
												"退院":discharge.strftime("%Y-%m-%d") if not pd.isnull(discharge) else None 
											},
										list(df['date']),list(df['location']),list(df['age']),list(df['sex']),list(df['discharge_day'])))

	num_in_hospital = df["discharge_day"].isnull().sum()

	#UPDATE "陽性患者数(patients_summary)"
	sheet_name = "陽性患者数(patients_summary)"
	df = pd.read_excel(excel_name,header=start_index[sheet_name],sheet_name=sheet_name,names=colum_names[sheet_name])
	df = df.dropna(subset=['date'])
	json_data["patients_summary"]["date"] = list(df['update'])[-1].strftime('%Y-%m-%d %H:%M')
	json_data["patients_summary"]["data"] = list(map(lambda x,y:[x.strftime('%Y-%m-%d'),int(y)],
												list(df["date"]),list(df["number"])))
	num_patients = df["number"].sum() 


	#UPDATE "検査実施数(inspections_summary)"
	sheet_name = "検査実施数(inspections_summary)"
	df = pd.read_excel(excel_name,header=start_index[sheet_name],sheet_name=sheet_name,names=colum_names[sheet_name])
	df = df.dropna(subset=['date'])
	json_data["inspections_summary"]["date"] = list(df['update'])[-1].strftime('%Y-%m-%d %H:%M')
	json_data["inspections_summary"]["data"] = list(map(lambda x,y,z:[x.strftime('%Y-%m-%d'),int(y),int(z)],
													list(df["date"]),list(df["number_prefecture"]),list(df["number_city"])))
	num_inspections = df["number_prefecture"].sum() + df["number_city"].sum()
	# print(df)

	#UPDATE "main_summary"
	num_death = 0
	num_serious = 0
	#update "検査実施人数"
	json_data["main_summary"]["value"] = int(num_inspections)
	#update "陽性患者数"
	json_data["main_summary"]["children"][0]["value"] = int(num_patients)
	#update "入院中"
	json_data["main_summary"]["children"][0]["children"][0]["value"] = int(num_in_hospital)
	#update "軽症・中等症"
	json_data["main_summary"]["children"][0]["children"][0]["children"][0]["value"] = int(num_in_hospital - num_serious)
	#update "重傷"
	json_data["main_summary"]["children"][0]["children"][0]["children"][1]["value"] = int(num_serious)
	#update "退院"
	json_data["main_summary"]["children"][0]["children"][1]["value"] = int(num_patients - num_in_hospital)
	#update "死亡"
	json_data["main_summary"]["children"][0]["children"][2]["value"] = int(num_death)

	#UPDATE "lastUpdate"
	json_data["lastUpdate"] = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")

	json_output = open("../data.json","w")
	json.dump(json_data,json_output,indent=2,ensure_ascii=False)


	json_open.close()
	json_output.close()





