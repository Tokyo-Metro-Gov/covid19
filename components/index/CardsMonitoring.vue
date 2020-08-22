<template>
  <div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 報告日別による陽性者数の推移 -->
      <confirmed-cases-number-card />
      <!-- モニタリング項目 -->
      <monitoring-items-overview-card />
      <!-- モニタリング項目(1)新規陽性者数 -->
      <monitoring-confirmed-cases-number-card />
      <!-- モニタリング項目(2)#7119における発熱等相談件数 -->
      <consultation-about-fever-number-card />
      <!-- モニタリング項目(3)新規陽性者における接触歴等不明者数 -->
      <untracked-rate-card />
      <!-- モニタリング項目(4)検査の陽性率-->
      <positive-rate-card />
      <!-- モニタリング項目(5)救急医療の東京ルールの適用件数 -->
      <tokyo-rules-application-number-card />
      <!-- モニタリング項目(6)入院患者数 -->
      <hospitalized-number-card />
      <!-- モニタリング項目(7)重症患者数 -->
      <severe-case-card />
    </card-row>
  </div>
</template>

<script lang="ts">
/* eslint-disable simple-import-sort/sort -- ブラウザでの表示順に合わせて各 card の component を import する */
import Vue from 'vue'
import CardRow from '@/components/index/CardRow.vue'

// 検査陽性者の状況
import ConfirmedCasesDetailsCard from '@/components/index/CardsMonitoring/ConfirmedCasesDetailsCard.vue'
// 報告日別による陽性者数の推移
import ConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/ConfirmedCasesNumberCard.vue'
// モニタリング項目
import MonitoringItemsOverviewCard from '@/components/index/CardsMonitoring/MonitoringItemsOverviewCard.vue'
// モニタリング項目(1)新規陽性者数
import MonitoringConfirmedCasesNumberCard from '@/components/index/CardsMonitoring/MonitoringConfirmedCasesNumberCard.vue'
// モニタリング項目(2)#7119における発熱等相談件数
import ConsultationAboutFeverNumberCard from '@/components/index/CardsMonitoring/ConsultationAboutFeverNumberCard.vue'
// モニタリング項目(3)新規陽性者における接触歴等不明者数
import UntrackedRateCard from '@/components/index/CardsMonitoring/UntrackedRateCard.vue'
// モニタリング項目(4)検査の陽性率
import PositiveRateCard from '@/components/index/CardsMonitoring/PositiveRateCard.vue'
// モニタリング項目(5)救急医療の東京ルールの適用件数
import TokyoRulesApplicationNumberCard from '@/components/index/CardsMonitoring/TokyoRulesApplicationNumberCard.vue'
// モニタリング項目(6)入院患者数
import HospitalizedNumberCard from '@/components/index/CardsMonitoring/HospitalizedNumberCard.vue'
// モニタリング項目(7)重症患者数
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
/* eslint-enable simple-import-sort/sort */

export default Vue.extend({
  components: {
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    MonitoringItemsOverviewCard,
    MonitoringConfirmedCasesNumberCard,
    ConsultationAboutFeverNumberCard,
    UntrackedRateCard,
    PositiveRateCard,
    TokyoRulesApplicationNumberCard,
    HospitalizedNumberCard,
    SevereCaseCard,
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
.AttentionNote {
  margin: 10px 0;
  padding: 12px;
  background-color: $emergency;
  border-radius: 4px;
  color: $gray-2;
  @include font-size(12);

  p {
    margin: 0;
  }
}
</style>
