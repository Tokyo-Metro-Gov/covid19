# frozen_string_literal: true

require 'spec_helper'

card_ids = [
  '#PositiveNumberByDevelopedDateCard',
  '#PositiveNumberByDiagnosedDateCard',
  '#TestedNumberCard',
  '#TelephoneAdvisoryReportsNumberCard',
  '#MonitoringConsultationDeskReportsNumberCard',
  '#TokyoFeverConsultationCenterReportsNumberCard',
  '#MetroCard',
  '#AgencyCard'
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
          expect(page).not_to have_selector("#{card_id} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).not_to have_selector("#{card_id} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")
          find("#{card_id} .DataView-ExpantionPanel button.v-expansion-panel-header").click
          expect(page).to have_selector("#{card_id} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).to have_selector("#{card_id} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")

          # Close Panel
          find("#{card_id} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active").click
          expect(page).not_to have_selector("#{card_id} .DataView-ExpantionPanel .v-expansion-panel--active")
          expect(page).not_to have_selector("#{card_id} .DataView-ExpantionPanel button.v-expansion-panel-header.v-expansion-panel-header--active")
        end
      end

      card_ids.each do |card_id|
        context card_id do
          let(:card_id) { card_id }
          it_behaves_like 'DataViewExpansionPanel'
        end
      end
    end
  end
end
