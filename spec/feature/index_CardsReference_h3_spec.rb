# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h3' do
        before do
          visit "#{data[:path]}reference"
          render_lazy_contents
        end

        context 'CardsReference' do
          it 'has cardTab' do
            expect(find('.v-tabs a#cardTab-2.v-tab--active').text).to eq t(lang, 'その他 参考指標').upcase
          end

          it 'has h3' do
            expect(find('.DataCard.ConfirmedCasesAttributesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者の属性')
            expect(find('.DataCard.ConfirmedCasesByMunicipalitiesCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '陽性者数（区市町村別）')
            expect(find('.DataCard.PositiveNumberOver65Card > div > div > div.DataView-Header > h3').text).to eq t(lang, '報告日別による陽性者数（65歳以上）の推移')
            expect(find('.DataCard.PositiveNumberByDevelopedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '発症日別による陽性者数の推移')
            expect(find('.DataCard.PositiveNumberByDiagnosedDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '確定日別による陽性者数の推移')
            expect(find('.DataCard.DeathsByDeathDateCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '死亡日別による死亡者数の推移')
            expect(find('.DataCard.VariantCard > div > div > div.DataView-Header > h3').text).to eq t(lang, 'L452R変異株スクリーニングの実施状況')
            expect(find('.DataCard.MetroCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都営地下鉄の利用者数の推移')
            expect(find('.DataCard.AgencyCard > div > div > div.DataView-Header > h3').text).to eq t(lang, '都庁来庁者数の推移')
          end
        end
      end
    end
  end
end
