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
            expect(find('#tab-1 #ConfirmedCasesAttributesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者の属性')
            expect(find('#tab-1 #ConfirmedCasesByMunicipalitiesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者数（区市町村別）')
            expect(find('#tab-1 #PositiveNumberByDevelopedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '発症日別による陽性者数の推移')
            expect(find('#tab-1 #PositiveNumberByDiagnosedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '確定日別による陽性者数の推移')
            expect(find('#tab-1 #TestedNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査実施件数')
            expect(find('#tab-1 #TelephoneAdvisoryReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '新型コロナコールセンター相談件数')
            expect(find('#tab-1 #MonitoringConsultationDeskReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '受診相談窓口における相談件数')
            expect(find('#tab-1 #TokyoFeverConsultationCenterReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '東京都発熱相談センターにおける相談件数')
            expect(find('#tab-1 #MetroCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都営地下鉄の利用者数の推移')
            expect(find('#tab-1 #AgencyCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都庁来庁者数の推移')
          end
        end
      end
    end
  end
end
