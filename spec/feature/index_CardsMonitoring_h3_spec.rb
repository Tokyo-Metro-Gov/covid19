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

        context 'CardsMonitoring' do
          it 'has h3' do
            expect(find('#tab-0 .DataCard.ConfirmedCasesDetailsCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査陽性者の状況')
            expect(find('#tab-0 .DataCard.ConfirmedCasesNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '報告日別による陽性者数の推移')
            expect(find('#tab-0 .DataCard.MonitoringItemsOverviewCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目')
            expect(find('#tab-0 .DataCard.MonitoringConfirmedCasesNumberCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(1)')
            expect(find('#tab-0 .DataCard.ConsultationAboutFeverNumberCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(2)')
            expect(find('#tab-0 .DataCard.UntrackedRateCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(3)')
            expect(find('#tab-0 .DataCard.PositiveRateCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(4)')
            expect(find('#tab-0 .DataCard.TokyoRulesApplicationNumberCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(5)')
            expect(find('#tab-0 .DataCard.HospitalizedNumberCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(6)')
            expect(find('#tab-0 .DataCard.SevereCaseCard > div > div > div.DataView-Header.with-dataSetPanel > h3').text).to eq t(lang, 'モニタリング項目(7)')
          end
        end
      end
    end
  end
end
