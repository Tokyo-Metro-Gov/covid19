# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h3' do
        before do
          visit data[:path]
          render_lazy_contents
        end

        context 'SiteTopUpper' do
          it 'has h3' do
            expect(find('.WhatsNew h3.WhatsNew-title').text).to eq t(lang, '最新のお知らせ')
            expect(find('.MonitoringComment h3.MonitoringComment-title').text).to eq t(lang, '感染状況・医療提供体制の分析')
            expect(find('.StayingPopulation h3.StayingPopulation-heading').text).to eq t(lang, '都内の滞在人口の増減状況（毎週月曜日更新）')
          end
        end
      end
    end
  end
end
