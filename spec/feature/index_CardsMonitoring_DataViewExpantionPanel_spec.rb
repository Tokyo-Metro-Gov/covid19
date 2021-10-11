# frozen_string_literal: true

require 'spec_helper'

card_classes = [
  '.DataCard.MonitoringConfirmedCasesNumberCard',
  '.DataCard.ConsultationAboutFeverNumberCard',
  '.DataCard.UntrackedRateCard',
  '.DataCard.PositiveRateCard',
  '.DataCard.TokyoRulesApplicationNumberCard',
  '.DataCard.HospitalizedNumberCard',
  '.DataCard.SevereCaseCard',
]

describe 'page [/]', type: :feature do
  context 'ja' do
    describe 'CardsMonitoring' do
      before do
        visit '/monitoring'
        render_lazy_contents
      end

      shared_examples 'DataViewExpansionPanel' do
        example 'Open Panel -> Close Panel' do
          # Before Open Panel
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='false']")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true']")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true'] > span.custom-expansion-panel-icon.with-content-open")

          # Open Panel
          find("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='false']").click

          # After Open Panel
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true']")
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true'] > span.custom-expansion-panel-icon.with-content-open")

          # Close Panel
          find("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true']").click

          # After Close Panel
          expect(page).to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='false']")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true']")
          expect(page).not_to have_selector("#{card_class} .DataView-ExpantionPanel button.custom-expansion-panel-button[aria-expanded='true'] > span.custom-expansion-panel-icon.with-content-open")
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

