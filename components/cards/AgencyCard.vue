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
        {{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}
      </template>
    </agency-bar-chart>
  </v-col>
</template>

<script>
import agencyData from '@/data/agency.json'
import AgencyBarChart from '@/components/AgencyBarChart.vue'

export default {
  components: {
    AgencyBarChart
  },
  data() {
    const agencies = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計')
    ]
    agencyData.datasets.map(dataset => {
      dataset.label = this.$t(dataset.label)
    })
    return {
      agencyData,
      agencies
    }
  }
}
</script>
