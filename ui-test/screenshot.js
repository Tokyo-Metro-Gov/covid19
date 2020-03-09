const fs = require('fs')
const { Builder, By, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const firefox = require('selenium-webdriver/firefox')

if (!fs.existsSync(`ui-test/screenshots`)) fs.mkdirSync(`ui-test/screenshots`)

const URL = `http://localhost:3000`
const SIZES = [
  [320, 480],
  [375, 812],
  [768, 1024],
  [1024, 768],
  [1920, 1080]
]
const PATHS = ['/', '/about']
const BROWSERS = ['chrome', 'firefox']

const saveScreenshot = (driver, filename) => {
  return driver.takeScreenshot().then(data => {
    fs.writeFile(
      `${__dirname}/screenshots/${filename}`,
      data.replace(/^data:image\/png;base64,/, ''),
      'base64',
      err => {
        if (err) throw err
      }
    )
  })
}

async function takePageScreenshot(browser, size, path) {
  const [width, height] = size
  const driver = new Builder()
    .forBrowser(browser)
    .setChromeOptions(
      new chrome.Options().headless().windowSize({ width, height })
    )
    .setFirefoxOptions(
      new firefox.Options().headless().windowSize({ width, height })
    )
    .build()
  driver.get(`${URL}${path}`)
  await driver.wait(until.elementLocated(By.id('app')), 10000)
  await saveScreenshot(
    driver,
    `${browser}_${width}x${height}_${path.replace('/', '_')}.png`
  )
}

async function main() {
  for (const browser of BROWSERS) {
    for (const size of SIZES) {
      for (const path of PATHS) {
        await takePageScreenshot(browser, size, path)
      }
    }
  }
}

main()
