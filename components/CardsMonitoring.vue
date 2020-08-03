<template>
  <div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 新規患者に関する報告件数の推移 -->
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
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
import MonitoringItemsOverviewCard from '@/components/cards/MonitoringItemsOverviewCard.vue'
import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    MonitoringConfirmedCasesNumberCard,
    UntrackedRateCard,
    SevereCaseCard,
    PositiveRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    HospitalizedNumberCard,
    ConsultationAboutFeverNumberCard,
    TokyoRulesApplicationNumberCard,
    MonitoringItemsOverviewCard,
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
