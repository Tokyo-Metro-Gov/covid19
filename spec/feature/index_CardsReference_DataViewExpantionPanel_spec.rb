# frozen_string_literal: true

require 'spec_helper'

card_classes = [
  '.DataCard.PositiveNumberByDevelopedDateCard',
  '.DataCard.PositiveNumberByDiagnosedDateCard',
  '.DataCard.TestedNumberCard',
  '.DataCard.TelephoneAdvisoryReportsNumberCard',
  '.DataCard.MonitoringConsultationDeskReportsNumberCard',
  '.DataCard.TokyoFeverConsultationCenterReportsNumberCard',
  '.DataCard.MetroCard',
  '.DataCard.AgencyCard'
]

describe 'page [/]', type: :feature do
  context 'ja' do
    describe 'CardsMonitoring' do
      before do
        visit '/'
        render_lazy_contents
        find('a[href="#tab-1"]').click
        render_lazy_contents
      end

      shared_examples 'DataViewExpansionPanel' do
        example 'Open Panel -> Close Panel' do
          # Open Panel
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")
          find("#{card_class} .DataView-ExpantionPanel button.v-expansion-panel-header").click
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")

          # Close Panel
          find("#{card_class} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active").click
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")
        end
      end

      card_classes.each do |card_class|
        context card_class do
          let(:card_class) { card_class }
          it_behaves_like 'DataViewExpansionPanel'
        end
      end
    end
  end
end
