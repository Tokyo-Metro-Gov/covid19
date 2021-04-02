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
            expect(find('.InfectionMedicalcareprovisionStatus h3.InfectionMedicalcareprovisionStatus-title').text).to match /^#{t(lang, '感染状況・医療提供体制（サマリ）')}/
            expect(find('.MonitoringComment h3.MonitoringComment-title').text).to eq t(lang, '感染状況・医療提供体制の分析')
          end
        end
      end
    end
  end
end
