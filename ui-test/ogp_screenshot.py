from selenium import webdriver
import os

os.mkdir('ogp')

SIZES = [[959,650],[959,600],[959,920]]
PATHS = {
    '/cards/details-of-confirmed-cases': SIZES[0],
    '/cards/number-of-confirmed-cases': SIZES[1],
    '/cards/attributes-of-confirmed-cases': SIZES[1],
    '/cards/number-of-tested': SIZES[1],
    '/cards/number-of-reports-to-covid19-telephone-advisory-center': SIZES[1],
    '/cards/number-of-reports-to-covid19-consultation-desk': SIZES[1],
    '/cards/predicted-number-of-toei-subway-passengers': SIZES[2],
    '/cards/agency': SIZES[1]
}

options = webdriver.ChromeOptions()
options.add_argument('--headless')
options.add_argument("--hide-scrollbars")

driver = webdriver.Chrome(options=options)
for path, size in PATHS.items():
    driver.set_window_size(size[0], size[1])
    driver.get("http://localhost:8000"+path+"?embed=true")
    driver.save_screenshot('ogp/ogp-'+path.replace('/cards/', '').replace('/', '_')+'.png')
