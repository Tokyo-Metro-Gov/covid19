<template>
  <div>
    <card-row class="DataBlock">
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 区市町村別患者数 -->
      <confirmed-cases-by-municipalities-card />
      <!-- 確定日別による陽性者数の推移 -->
      <positive-number-by-diagnosed-date-card />
      <!-- 検査実施件数 -->
      <tested-number-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
    </card-row>
    <card-row class="DataBlock">
      <!-- 都営地下鉄の利用者数の推移 -->
      <metro-card />
      <!-- 都庁来庁者数の推移 -->
      <agency-card />
      <!-- 検査実施状況 -->
      <tested-cases-details-card />
      <!-- 検査実施人数（健康安全研究センターによる実施分） -->
      <inspection-persons-number-card />
      <!-- 新型コロナ受診相談窓口相談件数 -->
      <consultation-desk-reports-number-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CardRow from '@/components/cards/CardRow.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
import MetroCard from '@/components/cards/MetroCard.vue'
import AgencyCard from '@/components/cards/AgencyCard.vue'
import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    TestedCasesDetailsCard,
    InspectionPersonsNumberCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard,
    PositiveNumberByDiagnosedDateCard
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
</style>
