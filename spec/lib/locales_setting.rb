# frozen_string_literal: true

require 'json'

LOCALES = {
  ja: {
    path: '/',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/ja.json'))),
    logo: 'logo.svg'
  },
  en: {
    path: '/en/',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/en.json'))),
    logo: 'logo-en.png'
  },
  zh_cn: {
    path: '/zh-cn/',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/zh_CN.json'))),
    logo: 'logo-zh-cn.png'
  },
  zh_tw: {
    path: '/zh-tw/',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/zh_TW.json'))),
    logo: 'logo.svg'
  },
  ko: {
    path: '/ko/',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/ko.json'))),
    logo: 'logo-ko.png'
  },
  ja_basic: {
    path: '/ja-basic',
    locale: JSON.parse(File.read(File.join(__dir__, '../../assets/locales/ja-Hira.json'))),
    logo: 'logo.svg'
  }
}.freeze

def t(key, string)
  LOCALES[key][:locale][string] ? LOCALES[key][:locale][string] : LOCALES[:ja][:locale][string]
end
