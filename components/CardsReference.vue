<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 陽性者の属性
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
// 陽性者数（区市町村別）
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue')
// 発症日別による陽性者数の推移
const PositiveNumberByDevelopedDateCard = () =>
  import('@/components/cards/PositiveNumberByDevelopedDateCard.vue')
// 確定日別による陽性者数の推移
const PositiveNumberByDiagnosedDateCard = () =>
  import('@/components/cards/PositiveNumberByDiagnosedDateCard.vue')
// 死亡日別による死亡者数の推移
const DeathsByDeathDateCard = () =>
  import('@/components/cards/DeathsByDeathDateCard.vue')
// 検査実施件数
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
// N501Y変異株スクリーニングの実施状況
const VariantCard = () => import('@/components/cards/VariantCard.vue')
// 新型コロナコールセンター相談件数
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')
// 受診相談窓口における相談件数
const MonitoringConsultationDeskReportsNumberCard = () =>
  import('@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue')
// 東京都発熱相談センターにおける相談件数
const TokyoFeverConsultationCenterReportsNumberCard = () =>
  import('@/components/cards/TokyoFeverConsultationCenterReportsNumberCard.vue')
// 都営地下鉄の利用者数の推移
const MetroCard = () => import('@/components/cards/MetroCard.vue')
// 都庁来庁者数の推移
const AgencyCard = () => import('@/components/cards/AgencyCard.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesAttributesCard, ConfirmedCasesByMunicipalitiesCard],
        [PositiveNumberByDevelopedDateCard, PositiveNumberByDiagnosedDateCard],
        [DeathsByDeathDateCard, TestedNumberCard],
        [VariantCard, TelephoneAdvisoryReportsNumberCard],
        [
          MonitoringConsultationDeskReportsNumberCard,
          TokyoFeverConsultationCenterReportsNumberCard,
        ],
        [MetroCard, AgencyCard],
      ],
    }
  },
})
</script>
