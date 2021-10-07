import os
import time
import json

from selenium import webdriver

if not os.path.exists("ogp"):
    os.mkdir("ogp")

f = open('assets/json/cardRoutesSettings.json', 'r')
card_data = json.load(f)

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

for lang in ("ja", "en", "zh-cn", "zh-tw", "ko", "ja-basic"):
    if not os.path.exists("ogp/{}".format(lang)):
        os.mkdir("ogp/{}".format(lang))
    for value in card_data:
        driver.set_window_size(*(value['ogpWidth'], value['ogpHeight']))
        path = value['path']
        driver.get(
            "http://localhost:8000{}?ogp=true".format(
                path if lang == "ja" else "/{}{}".format(lang, path)
            )
        )
        path = path.replace("/cards/", "").replace("/", "_")
        if ('heatmap' in path):
            time.sleep(20)
        driver.save_screenshot(
            "ogp/{}.png".format(
                path if lang == "ja" else "{}/{}".format(lang, path)
            )
        )
