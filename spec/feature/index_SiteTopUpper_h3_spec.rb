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
            expect(find('.StayingPopulation h3.StayingPopulation-heading').text).to eq t(lang, '都内の滞在人口の増減状況（毎週月曜日更新）')
            expect(find('.ConsultationWrap h3.StaticInfo-Text').text).to eq t(lang, 'ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら')
          end
        end
      end
    end
  end
end
