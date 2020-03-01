from selenium import webdriver
import os

os.mkdir('screenshots')

def capture(browser, path):
	driver = getattr(webdriver, browser)()
	driver.set_window_size(1280, 720)
	driver.get("http://localhost:8000"+path)
	driver.save_screenshot('screenshots/'+browser+'.png')
PATHS = ['/']
BROWSERS = ['Chrome', 'Firefox']

for browser in BROWSERS:
	for path in PATHS:
		capture(browser,path)
