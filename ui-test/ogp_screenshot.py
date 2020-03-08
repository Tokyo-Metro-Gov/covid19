from selenium import webdriver
import os

os.mkdir('ogps')

size = [1200,630]
PATHS = [
    '/cards/details-of-confirmed-cases',
    '/cards/number-of-confirmed-cases',
    '/cards/attributes-of-confirmed-cases'
]
browser = 'Chrome'

driver = getattr(webdriver, browser)()
driver.set_window_size(size[0], size[1])
for path in PATHS:
    driver.get("http://localhost:8000"+path)
    driver.save_screenshot('ogps/'+browser+'_'+str(size[0])+'x'+str(size[1])+'_'+path.replace('/', '_')+'.png')
