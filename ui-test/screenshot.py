import os
from selenium import webdriver

os.mkdir("screenshots")

SIZES = ((320, 480), (375, 812), (768, 1024), (1024, 768), (1920, 1080))
PATHS = ("/", "/about")
BROWSERS = ("Chrome", "Firefox")

for browser in BROWSERS:
    driver = getattr(webdriver, browser)()
    for size in SIZES:
        driver.set_window_size(*size)
        for path in PATHS:
            driver.get("http://localhost:8000{}".format(path))
            driver.save_screenshot(
                "screenshots/{}_{}x{}_{}.png".format(
                    browser, *size, path.replace("/", "_")
                )
            )
