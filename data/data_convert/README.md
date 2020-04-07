# Data convert

## これは何か

convert_data_to_json.pyはtochigi_covid19_data.xlsxファイルの中身をdata.jsonに変換するプログラムである

## 必要なライブラリー

- pandas
- xlrd (pandasからExcelを読み込むために必要) 
  
## 使い方

・最新の"tochigi_covid19_data.xlsx"ファイルをこのフォルダ（data_convert)にダウンロード
・ターミナル上で"python convert_data_tojson.py"を実行

## 注意点

・”tochigi_covid19_data.xlsx"のファイル名
・Excelファイルの各シート名
・カラム名
に変化があるとconvert_data_to_json.pyは正常どおりに動かない！



