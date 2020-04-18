<template>
  <v-col cols="12" md="6" class="DataCard">
    <agency-bar-chart
      :title="$t('都庁来庁者数の推移')"
      :title-id="'agency'"
      :chart-id="'agency'"
      :chart-data="agencyData"
      :date="agencyData.date"
      :unit="$t('人')"
    >
      <template v-slot:description>
        <t-i18n>{{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}</t-i18n>
      </template>
    </agency-bar-chart>
  </v-col>
</template>

<script>
import agencyData from '@/data/agency.json'
import AgencyBarChart from '@/components/AgencyBarChart.vue'
import TI18n from '@/components/TI18n.vue'

export default {
  components: {
    AgencyBarChart,
    TI18n
  },
  data() {
    return {
      agencyData
    }
  }
}
</script>
