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

        context 'CardsFeatured' do
          it 'has cardTab' do
            expect(find('.v-tabs a#cardTab-0.v-tab--active').text).to eq t(lang, '注目の指標').upcase
          end

          it 'has h3' do
            expect(find('.DataCard.InfectionMedicalCareSummaryCard > div > div > div.DataView-Header > h3').text).to match /#{t(lang, '{date}の状況').gsub('{date}', '')}/
            expect(find('.DataCard.ConfirmedCasesDetailsCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査陽性者の状況')
            expect(find('.DataCard.MonitoringItemsOverviewCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'モニタリング項目')
            expect(find('.DataCard.MonitoringCommentCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '感染状況・医療提供体制の分析')
            expect(find('.DataCard.VaccinationCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'ワクチン接種数（累計）')
            expect(find('.DataCard.ConfirmedCasesNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '報告日別による陽性者数の推移')
            expect(find('.DataCard.TestedNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '検査実施件数')
            expect(find('.DataCard.TokyoFeverConsultationCenterReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '東京都発熱相談センターにおける相談件数')
            expect(find('.DataCard.TelephoneAdvisoryReportsNumberCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '新型コロナコールセンター相談件数')
          end
        end
      end
    end
  end
end
