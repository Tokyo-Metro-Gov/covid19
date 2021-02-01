# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'h1' do
        before do
          visit data[:path]
        end

        it 'has HeaderLogo image with lang' do
          expect(find('h1.SideNavigation-HeaderTitle > a.SideNavigation-HeaderLink > img.SideNavigation-HeaderLogo')[:src]).to match /\/#{data[:logo]}$/
        end

        it 'has HeaderText' do
          expect(find('h1.SideNavigation-HeaderTitle > a.SideNavigation-HeaderLink > div.SideNavigation-HeaderText').text).to eq "#{t(lang, 'menu/新型コロナウイルス感染症')}\n#{t(lang, 'menu/対策サイト')}"
        end
      end
    end
  end
end
