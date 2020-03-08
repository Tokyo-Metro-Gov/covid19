from selenium import webdriver
import os

os.mkdir('ogps')

size = [959,840]
PATHS = [
    '/cards/details-of-confirmed-cases',
    '/cards/number-of-confirmed-cases',
    '/cards/attributes-of-confirmed-cases',
    '/cards/number-of-tested',
    '/cards/number-of-reports-to-covid19-telephone-advisory-center',
    '/cards/number-of-reports-to-covid19-consultation-desk',
    '/cards/predicted-number-of-toei-subway-passengers'
]
browser = 'Chrome'

driver = getattr(webdriver, browser)()
driver.set_window_size(size[0], size[1])
for path in PATHS:
    driver.get("http://localhost:8000"+path+"?embed=true&share=false")
    driver.save_screenshot('ogps/ogp-'+path.replace('/cards/', '').replace('/', '_')+'.png')
