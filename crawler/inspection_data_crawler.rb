require "bundler/setup"
Bundler.require
require 'open-uri'
require 'json'

URL = 'https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/new_coronavirus_portal.html'
CHARSET = nil
inspection_json_file = "./data/inspection_persons.json"
main_summary_json_file = "./data/main_summary.json"
patients_summary_json_file = "./data/patients_summary.json"

def doc
 Nokogiri::HTML(open(URL), nil, CHARSET)
end

def insperson
  doc.css('table')[0].css('tbody')[0].css('th')[22].text.gsub('人', '')
end

def positive_insperson
  doc.css('table')[0].css('tbody')[0].css('th')[23].text.gsub('人', '')
end

def html_date
  date = doc.css('table')[0].css('tbody')[0].css('th')[21].text.gsub('日', '')
  DateTime.new(Date.today.year, Date.today.month, date.to_i).iso8601
end

if __FILE__ == $0
  ENV['TZ'] = 'JP'
  update_date_time = DateTime.parse(html_date)

  # inspection_persons.jsonの更新
  # main_summary.jsonの日付の更新
  json_data = open(inspection_json_file) do |f|
    JSON.load(f)
  end
　
  main_summary_json_data = open(main_summary_json_file) do |f|
    JSON.load(f)
  end

  inspection_json_date_time = DateTime.parse(json_data['inspection_persons']['labels'].last)

  # jsonファイルのlabelsとスクレイピング日付の比較
  if (update_date_time.day != inspection_json_date_time.day && update_date_time > inspection_json_date_time)
    json_data['inspection_persons']['date'] = (DateTime.now + Rational(9, 24)).strftime("%Y\/%m/%d %H:%M")
    json_data['inspection_persons']['labels'].push(update_date_time)
    json_data['inspection_persons']['datasets'][0]['data'].push(insperson.to_i)
    open(inspection_json_file, 'w') do |f|
      JSON.dump(json_data, f)
    end
    main_summary_json_data['lastUpdate'] = (DateTime.now + Rational(9, 24)).strftime("%Y\/%m/%d %H:%M")
    open(main_summary_json_file, 'w') do |f|
      JSON.dump(main_summary_json_data, f)
    end
  end

  # patients_summary.jsonの更新
  json_data = open(patients_summary_json_file) do |f|
    JSON.load(f)
  end

  patients_summary_json_date_time = DateTime.parse(json_data['patients_summary']['data'].last["日付"])

  if (update_date_time.day != patients_summary_json_date_time.day && update_date_time > patients_summary_json_date_time)
    json_data['patients_summary']['date'] = (DateTime.now + Rational(9, 24)).strftime("%Y\/%m/%d %H:%M")
    hash = {"日付": update_date_time, "小計": positive_insperson.to_i}
    json_data['patients_summary']['data'].push(hash)
    open(patients_summary_json_file, 'w') do |f|
      JSON.dump(json_data, f)
    end
  end
end
