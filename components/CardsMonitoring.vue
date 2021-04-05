<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
// 報告日別による陽性者数の推移
const ConfirmedCasesNumberCard = () =>
  import('@/components/cards/ConfirmedCasesNumberCard.vue')
// モニタリング項目
const MonitoringItemsOverviewCard = () =>
  import('@/components/cards/MonitoringItemsOverviewCard.vue')
// モニタリング項目(1)新規陽性者数
const MonitoringConfirmedCasesNumberCard = () =>
  import('@/components/cards/MonitoringConfirmedCasesNumberCard.vue')
// モニタリング項目(2)#7119における発熱等相談件数
const ConsultationAboutFeverNumberCard = () =>
  import('@/components/cards/ConsultationAboutFeverNumberCard.vue')
// モニタリング項目(3)新規陽性者における接触歴等不明者数
const UntrackedRateCard = () =>
  import('@/components/cards/UntrackedRateCard.vue')
// モニタリング項目(4)検査の陽性率
const PositiveRateCard = () => import('@/components/cards/PositiveRateCard.vue')
// モニタリング項目(5)救急医療の東京ルールの適用件数
const TokyoRulesApplicationNumberCard = () =>
  import('@/components/cards/TokyoRulesApplicationNumberCard.vue')
// モニタリング項目(6)入院患者数
const HospitalizedNumberCard = () =>
  import('@/components/cards/HospitalizedNumberCard.vue')
// モニタリング項目(7)重症患者数
const SevereCaseCard = () => import('@/components/cards/SevereCaseCard.vue')
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, ConfirmedCasesNumberCard],
        [MonitoringItemsOverviewCard, MonitoringConfirmedCasesNumberCard],
        [ConsultationAboutFeverNumberCard, UntrackedRateCard],
        [PositiveRateCard, TokyoRulesApplicationNumberCard],
        [HospitalizedNumberCard, SevereCaseCard],
      ],
    }
  },
})
</script>
