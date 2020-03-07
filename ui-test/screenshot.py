import functools
import os
from http.server import SimpleHTTPRequestHandler
from http.server import ThreadingHTTPServer
import threading

from selenium import webdriver

os.mkdir('screenshots')

RequestHandlerClass = functools.partial(SimpleHTTPRequestHandler,
                                        directory='dist')
with ThreadingHTTPServer(('localhost', 8000), RequestHandlerClass) as httpd:
    thread = threading.Thread(target=lambda httpd: httpd.serve_forever(),
                              args=(httpd,))
    thread.start()

    SIZES = [[320, 480], [375, 812], [768, 1024], [1024, 768], [1920, 1080]]
    PATHS = ['/', '/about']
    BROWSERS = ['Chrome', 'Firefox']

    for browser in BROWSERS:
        driver = getattr(webdriver, browser)()
        for size in SIZES:
            driver.set_window_size(size[0], size[1])
            for path in PATHS:
                driver.get("http://localhost:8000" + path)
                filename = '{}_{}x{}_{}.png'.format(browser,
                                                    size[0], size[1],
                                                    path.replace('/', '_'))
                driver.save_screenshot(os.path.join('screenshots', filename))

    httpd.shutdown()
