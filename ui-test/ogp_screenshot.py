import os
import time

from selenium import webdriver

if not os.path.exists("ogp"):
    os.mkdir("ogp")

PATHS = {
    "/?dummy": (959, 500),
    "/cards/details-of-confirmed-cases": (959, 500),
    "/cards/number-of-confirmed-cases": (959, 500),
    "/cards/attributes-of-confirmed-cases": (959, 480),
    "/cards/number-of-tested": (959, 540),
    "/cards/number-of-reports-to-covid19-telephone-advisory-center": (959, 500),
    "/cards/predicted-number-of-toei-subway-passengers": (959, 750),
    "/cards/agency": (959, 730),
    "/cards/positive-number-by-diagnosed-date":(959, 730),
    "/cards/positive-rate": (959, 730),
    "/cards/monitoring-number-of-confirmed-cases": (959, 500),
    "/cards/untracked-rate": (959, 500),
    "/cards/positive-status-severe-case": (959, 500),
    "/cards/number-of-hospitalized": (959, 500),
    "/cards/monitoring-number-of-reports-to-covid19-consultation-desk": (959, 500),
    "/cards/monitoring-status-overview": (959, 570),
    "/cards/number-of-reports-to-consultations-about-fever-in-7119": (959, 500),
    "/cards/number-of-tokyo-rules-applied": (959, 500),
    "/cards/monitoring-items-overview": (959, 570),
    "/cards/positive-number-by-developed-date": (959, 570),
    "/cards/number-of-reports-to-tokyo-fever-consultation-center": (959, 570),
    "/cards/deaths-by-death-date": (959, 570),
    "/cards/variant": (959, 730),
}

options = webdriver.ChromeOptions()
options.add_argument("--headless")
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)

for lang in ("ja", "en", "zh-cn", "zh-tw", "ko", "ja-basic"):
    if not os.path.exists("ogp/{}".format(lang)):
        os.mkdir("ogp/{}".format(lang))
    for path, size in PATHS.items():
        driver.set_window_size(*size)
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
