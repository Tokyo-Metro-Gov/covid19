<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/imports -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

// 病床使用率等・患者の発生状況等（サマリ）
const InfectionMedicalCareSummaryCard = () =>
  import(
    '@/components/index/CardsFeatured/InfectionMedicalCareSummary/Card.vue'
  )
// 検査陽性者の状況
const ConfirmedCasesDetailsCard = () =>
  import('@/components/index/CardsFeatured/ConfirmedCasesDetails/Card.vue')
// モニタリング項目 ※「モニタリング項目」タブ内と複数配置
const MonitoringItemsOverviewCard = () =>
  import('@/components/index/CardsMonitoring/MonitoringItemsOverview/Card.vue')
// 感染状況・医療提供体制の分析
const MonitoringCommentCard = () =>
  import('@/components/index/CardsFeatured/MonitoringComment/Card.vue')
// ワクチン接種数（累計）
const VaccinationCard = () =>
  import('@/components/index/CardsFeatured/Vaccination/Card.vue')
// 報告日別による陽性者数の推移
const ConfirmedCasesNumberCard = () =>
  import('@/components/index/CardsFeatured/ConfirmedCasesNumber/Card.vue')
// 検査実施件数
const TestedNumberCard = () =>
  import('@/components/index/CardsFeatured/TestedNumber/Card.vue')
// 東京都発熱相談センターにおける相談件数
const TokyoFeverConsultationCenterReportsNumberCard = () =>
  import(
    '@/components/index/CardsFeatured/TokyoFeverConsultationCenterReportsNumber/Card.vue'
  )
// 新型コロナコールセンター相談件数
const TelephoneAdvisoryReportsNumberCard = () =>
  import(
    '@/components/index/CardsFeatured/TelephoneAdvisoryReportsNumber/Card.vue'
  )
/* eslint-enable simple-import-sort/imports */

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        [InfectionMedicalCareSummaryCard, ConfirmedCasesDetailsCard],
        [MonitoringItemsOverviewCard, MonitoringCommentCard],
        [VaccinationCard],
        [ConfirmedCasesNumberCard, TestedNumberCard],
        [
          TokyoFeverConsultationCenterReportsNumberCard,
          TelephoneAdvisoryReportsNumberCard,
        ],
      ],
    }
  },
})
</script>
