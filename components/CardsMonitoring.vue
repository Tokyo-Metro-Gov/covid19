<template>
  <div>
    <div class="AttentionNote">
      <p>
        {{ $t('新たなモニタリング項目は現在試行中です。') }}
        <i18n path="その状況は{linkToMonitoring}をご覧ください。">
          <template v-slot:linkToMonitoring>
            <external-link
              url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/monitoring.html"
            >
              {{ $t('こちらのリンク') }}
            </external-link>
          </template>
        </i18n>
      </p>
    </div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 新規患者に関する報告件数の推移 -->
      <confirmed-cases-number-card />
      <!-- モニタリング指標 -->
      <monitoring-status-overview-card />
      <!-- モニタリング(1)新規陽性者数 -->
      <monitoring-confirmed-cases-number-card />
      <!-- モニタリング指標(2)新規陽性者における接触歴等不明率 -->
      <untracked-rate-card />
      <!-- モニタリング指標(3)週単位の陽性者増加比 -->
      <confirmed-cases-increase-ratio-by-week-card />
      <!-- モニタリング指標(4)重症患者数 -->
      <severe-case-card />
      <!-- モニタリング指標(5)入院患者数 -->
      <hospitalized-number-card />
      <!-- モニタリング指標(6)PCR検査の陽性率-->
      <positive-rate-card />
      <!-- モニタリング指標(7)受診相談窓口における相談件数 -->
      <monitoring-consultation-desk-reports-number-card />
      <!-- モニタリング項目(2)#7119における発熱等相談件数 -->
      <consultation-about-fever-number-card />
      <!-- モニタリング項目(5)救急医療の東京ルールの適用件数 -->
      <tokyo-rules-application-number-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import MonitoringConfirmedCasesNumberCard from '@/components/cards/MonitoringConfirmedCasesNumberCard.vue'
import PositiveRateCard from '~/components/cards/PositiveRateCard.vue'
import SevereCaseCard from '@/components/cards/SevereCaseCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/cards/ConfirmedCasesIncreaseRatioByWeekCard.vue'
import HospitalizedNumberCard from '@/components/cards/HospitalizedNumberCard.vue'
import MonitoringStatusOverviewCard from '@/components/cards/MonitoringStatusOverviewCard.vue'
import MonitoringConsultationDeskReportsNumberCard from '@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue'
import ConsultationAboutFeverNumberCard from '@/components/cards/ConsultationAboutFeverNumberCard.vue'
import TokyoRulesApplicationNumberCard from '@/components/cards/TokyoRulesApplicationNumberCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    ExternalLink,
    MonitoringConfirmedCasesNumberCard,
    UntrackedRateCard,
    SevereCaseCard,
    MonitoringConsultationDeskReportsNumberCard,
    PositiveRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesIncreaseRatioByWeekCard,
    HospitalizedNumberCard,
    MonitoringStatusOverviewCard,
    ConsultationAboutFeverNumberCard,
    TokyoRulesApplicationNumberCard
  }
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
