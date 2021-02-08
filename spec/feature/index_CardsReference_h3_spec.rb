# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h3' do
        before do
          visit data[:path]
          render_lazy_contents
          find('a[href="#tab-1"]').click
          render_lazy_contents
        end

        context 'CardsReference' do
          it 'has h3' do
            expect(find('#tab-1 .DataCard.ConfirmedCasesAttributesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者の属性')
            expect(find('#tab-1 .DataCard.ConfirmedCasesByMunicipalitiesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者数（区市町村別）')
            expect(find('#tab-1 .DataCard.PositiveNumberByDevelopedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '発症日別による陽性者数の推移')
            expect(find('#tab-1 .DataCard.PositiveNumberByDiagnosedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '確定日別による陽性者数の推移')
            expect(find('#tab-1 .DataCard.TestedNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査実施件数')
            expect(find('#tab-1 .DataCard.TelephoneAdvisoryReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '新型コロナコールセンター相談件数')
            expect(find('#tab-1 .DataCard.MonitoringConsultationDeskReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '受診相談窓口における相談件数')
            expect(find('#tab-1 .DataCard.TokyoFeverConsultationCenterReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '東京都発熱相談センターにおける相談件数')
            expect(find('#tab-1 .DataCard.MetroCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都営地下鉄の利用者数の推移')
            expect(find('#tab-1 .DataCard.AgencyCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都庁来庁者数の推移')
          end
        end
      end
    end
  end
end
