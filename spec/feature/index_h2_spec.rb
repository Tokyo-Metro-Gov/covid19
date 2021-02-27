# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h2' do
        before do
          visit data[:path]
        end

        it 'has mdiChartTimelineVariant v-icon' do
          expect(find('h2.pageTitle > span.v-icon > svg > path')[:d]).to eq 'M3,14L3.5,14.07L8.07,9.5C7.89,8.85 8.06,8.11 8.59,7.59C9.37,6.8 10.63,6.8 11.41,7.59C11.94,8.11 12.11,8.85 11.93,9.5L14.5,12.07L15,12C15.18,12 15.35,12 15.5,12.07L19.07,8.5C19,8.35 19,8.18 19,8A2,2 0 0,1 21,6A2,2 0 0,1 23,8A2,2 0 0,1 21,10C20.82,10 20.65,10 20.5,9.93L16.93,13.5C17,13.65 17,13.82 17,14A2,2 0 0,1 15,16A2,2 0 0,1 13,14L13.07,13.5L10.5,10.93C10.18,11 9.82,11 9.5,10.93L4.93,15.5L5,16A2,2 0 0,1 3,18A2,2 0 0,1 1,16A2,2 0 0,1 3,14Z'
        end

        it 'has pageTitle' do
          expect(find('h2.pageTitle').text).to eq t(lang, '都内の最新感染動向')
        end
      end
    end
  end
end
