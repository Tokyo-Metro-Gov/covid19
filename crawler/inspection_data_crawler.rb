require "bundler/setup"
Bundler.require
require 'open-uri'
require 'json'

json_file = "./data/inspection_persons.json"

if __FILE__ == $0
  url = 'https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/new_coronavirus_portal.html'
  charset = nil
  doc = Nokogiri::HTML(open(url), nil, charset)

  insperson = doc.css('table')[0].css('tbody')[0].css('th')[22].text.gsub('人', '')
  # positive = doc.css('table')[0].css('tbody')[0].css('th')[23].text.gsub('人', '')
  date = doc.css('table')[0].css('tbody')[0].css('th')[21].text.gsub('日', '')
  update_time =  DateTime.new(Date.today.year, Date.today.month, date.to_i).iso8601

  json_data = open(json_file) do |f|
    JSON.load(f)
  end

  json_date_time = DateTime.parse(json_data['inspection_persons']['labels'].last)
  update_date_time = DateTime.parse(update_time)

  # jsonファイルのlabelsとスクレイピング日付の比較
  if (update_date_time.day != json_date_time.day && update_date_time > json_date_time)
    json_data['inspection_persons']['labels'].push(update_time)
    json_data['inspection_persons']['datasets'][0]['data'].push(insperson.to_i)
    open(json_file, 'w') do |f|
      JSON.dump(json_data, f)
    end
  end
end
