import time
import os

from selenium import webdriver
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.ui import WebDriverWait

USERNAME = os.environ['TWITTER_USERNAME']
PASSWORD = os.environ['TWITTER_PASSWORD']

HOST = 'https://stopcovid19.metro.tokyo.lg.jp'

PATHS = (
    'cards/details-of-confirmed-cases',
    'cards/number-of-confirmed-cases',
    'cards/attributes-of-confirmed-cases',
    'cards/number-of-tested',
    'cards/number-of-reports-to-covid19-telephone-advisory-center',
    'cards/number-of-reports-to-covid19-consultation-desk',
    'cards/predicted-number-of-toei-subway-passengers',
    'cards/agency',
    'cards/details-of-tested-cases',
    'cards/number-of-inspection-persons',
)

LANGS = (
    'ja',
    'en',
    'zh-cn',
    'zh-tw',
    'ko',
    'ja-basic',
)

URLS = ['/'.join([HOST, path] if lang == 'ja' else [HOST, lang, path]) for lang in LANGS for path in PATHS]

options = webdriver.ChromeOptions()
options.add_argument("--headless")


driver = webdriver.Chrome(options=options)
wait = WebDriverWait(driver, 10)

driver.get('https://twitter.com/login?redirect_after_login=https%3A%2F%2Fcards-dev.twitter.com%2Fvalidator')

wait.until(expected_conditions.title_contains('Twitter'))

driver.find_element_by_css_selector('input[name="session[username_or_email]"]').send_keys(USERNAME)
driver.find_element_by_css_selector('input[name="session[password]"]').send_keys(PASSWORD)
driver.find_element_by_css_selector('div[role]').click()

wait.until(expected_conditions.title_contains('Card Validator'))

url_input = driver.find_element_by_css_selector('input[name="url"]')
submit_button = driver.find_element_by_css_selector('input[type="submit"]')

def twitter_card_validate(url):
    url_input.clear()
    url_input.send_keys(url)
    submit_button.click()


for url in URLS:
    twitter_card_validate(url)
    time.sleep(5)

driver.quit()
