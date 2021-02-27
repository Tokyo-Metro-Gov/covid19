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
  }
}.freeze

def t(key, string)
  LOCALES[key][:locale][string] ? LOCALES[key][:locale][string] : LOCALES[:ja][:locale][string]
end
