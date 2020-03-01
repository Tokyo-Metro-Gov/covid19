from selenium import webdriver
import os

os.mkdir('screenshots')

SIZES = [[320,480],[375,812],[768,1024],[1024,768],[1920,1080]]
PATHS = ['/', '/about']
BROWSERS = ['Chrome', 'Firefox']

for browser in BROWSERS:
	driver = getattr(webdriver, browser)()
	for size in SIZES:
		driver.set_window_size(size[0], size[1])
		for path in PATHS:
			driver.get("http://localhost:8000"+path)
			driver.save_screenshot('screenshots/'+browser+'_'+str(size[0])+'x'+str(size[1])+'_'+path.replace('/', '_')+'.png')
