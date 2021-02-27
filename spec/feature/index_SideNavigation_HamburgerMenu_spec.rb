# frozen_string_literal: true

require 'spec_helper'

describe 'page [/]', type: :feature do
  LOCALES.each do |lang, data|
    context "#{lang}" do
      describe 'SideNavigation' do
        before do
          visit data[:path]
        end

        example 'Hamburger Menu default' do
          expect(page).to have_selector 'div.naviContainer > div.SideNavigation > header.SideNavigation-Header > button.SideNavigation-OpenIcon'
          expect(page).not_to have_selector 'div.naviContainer > div.SideNavigation.open'
          expect(page).not_to have_selector 'div.naviContainer > div.SideNavigation.open > div.SideNavigation-Body.-opened'
        end

        example 'Hamburger Menu Open' do
          find('div.naviContainer > div.SideNavigation > header.SideNavigation-Header > button.SideNavigation-OpenIcon').click
          expect(page).to have_selector 'div.naviContainer > div.SideNavigation.open > div.SideNavigation-Body.-opened > button.SideNavigation-CloseIcon'
        end

        example 'Hamburger Menu Open -> Close' do
          find('header.SideNavigation-Header > button.SideNavigation-OpenIcon').click
          find('div.SideNavigation.open > div.SideNavigation-Body.-opened > button.SideNavigation-CloseIcon').click
          expect(page).not_to have_selector 'div.naviContainer > div.SideNavigation.open'
          expect(page).not_to have_selector 'div.naviContainer > div.SideNavigation.open > div.SideNavigation-Body.-opened'
        end
      end
    end
  end
end
