<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <agency-bar-chart
        :title="$t('都庁来庁者数の推移')"
        :title-id="'agency'"
        :chart-id="'agency'"
        :chart-data="agencyData"
        :date="agencyData.date"
        :unit="$t('人')"
      >
        <template v-slot:additionalDescription>
          {{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}
        </template>
      </agency-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import AgencyBarChart from '@/components/AgencyBarChart.vue'
import AgencyData from '@/data/agency.json'
import { getComplementedDate } from '@/utils/formatDate'

export default {
  components: {
    AgencyBarChart,
  },
  data() {
    const labels = AgencyData.labels.map((l) => {
      const dates = l.split('~')
      if (dates.length === 2) {
        const from = this.$d(getComplementedDate(dates[0]), 'dateWithoutYear')
        const to = this.$d(getComplementedDate(dates[1]), 'dateWithoutYear')
        return `${from}~${to}`
      } else {
        return ''
      }
    })
    const agencyData = {
      ...AgencyData,
      labels,
    }
    return {
      agencyData,
    }
  },
}
</script>
