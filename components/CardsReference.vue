<template>
  <div>
    <card-row class="DataBlock">
      <!-- 陽性者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 区市町村別患者数 -->
      <confirmed-cases-by-municipalities-card />
      <!-- 発症日別による陽性者数の推移 -->
      <positive-number-by-developed-date-card />
      <!-- 確定日別による陽性者数の推移 -->
      <positive-number-by-diagnosed-date-card />
      <!-- 検査実施件数 -->
      <tested-number-card />
    </card-row>
    <card-row class="DataBlock">
      <!-- 受診相談窓口における相談件数 -->
      <monitoring-consultation-desk-reports-number-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
    </card-row>
    <card-row class="DataBlock">
      <!-- 都営地下鉄の利用者数の推移 -->
      <metro-card />
      <!-- 都庁来庁者数の推移 -->
      <agency-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
const CardRow = () => import('@/components/cards/CardRow.vue')
const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue')
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')
const MetroCard = () => import('@/components/cards/MetroCard.vue')
const AgencyCard = () => import('@/components/cards/AgencyCard.vue')
const PositiveNumberByDiagnosedDateCard = () =>
  import('@/components/cards/PositiveNumberByDiagnosedDateCard.vue')
const MonitoringConsultationDeskReportsNumberCard = () =>
  import('@/components/cards/MonitoringConsultationDeskReportsNumberCard.vue')
const PositiveNumberByDevelopedDateCard = () =>
  import('@/components/cards/PositiveNumberByDevelopedDateCard.vue')

export default Vue.extend({
  components: {
    CardRow,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedNumberCard,
    MonitoringConsultationDeskReportsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    MetroCard,
    AgencyCard,
    PositiveNumberByDiagnosedDateCard,
    PositiveNumberByDevelopedDateCard,
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
</style>
