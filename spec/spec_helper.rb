# frozen_string_literal: true

require 'capybara/rspec'
require 'capybara/dsl'
require 'selenium-webdriver'

APP_HOST = 'http://localhost:3000'

Capybara.register_driver :emulated_chrome_ios do |app|
  # Run tests with Headless Chrome(iPhone6/7/8 Emulation Mode)
  options = Selenium::WebDriver::Chrome::Options.new
  options.add_argument('--headless')
  options.add_argument('--disable-gpu')
  options.add_emulation(device_name: 'iPhone 6/7/8')
  Capybara::Selenium::Driver.new(app,
                                 browser: :chrome,
                                 options: options)
end

Capybara.default_driver = :emulated_chrome_ios
Capybara.app_host = APP_HOST

