# frozen_string_literal: true

require 'capybara/rspec'
require 'capybara/dsl'
require 'selenium-webdriver'

require 'lib/locales_setting'

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

RSpec.configure do |config|
  config.color = true
  config.tty = true
  # Save Screenshot for failed test cases
  config.after do |example|
    if example.exception
      meta = example.metadata
      spec_file_name = File.basename(meta[:file_path])
      line_number = meta[:line_number]
      screenshot_file_name = "#{Time.now.strftime('%Y%m%d%H%M%S%3N').to_i}-#{spec_file_name}-#{line_number}.png"
      screenshot_path = "spec/screenshot/#{screenshot_file_name}"
      page.save_screenshot screenshot_path
    end
  end
end

def render_lazy_contents
  # Scroll to Bottom for building all lazy-loading DOM
  scroll_to = 1600
  scroll_step = 600
  loop do
    page.evaluate_script "window.scroll(0,#{scroll_to})"
    lazy_row = page.all('div.v-lazy').count * 2
    scroll_to = scroll_to > scroll_step * lazy_row ? 0 : scroll_to + scroll_step
    card_count = page.all('div.v-lazy > div.row > div.DataCard').count
    break if [lazy_row - 1, lazy_row].include?(card_count)
  end
end
