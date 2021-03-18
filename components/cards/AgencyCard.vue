<template>
  <v-col cols="12" md="6" class="DataCard AgencyCard">
    <client-only>
      <agency-bar-chart
        :title="$t('都庁来庁者数の推移')"
        :title-id="'agency'"
        :chart-id="'agency'"
        :chart-data="agencyData"
        :date="agencyData.date"
        :items="agencyItems"
        :periods="agencyData.periods"
        :unit="$t('人')"
      >
        <template #additionalDescription>
          {{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}
        </template>
      </agency-bar-chart>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import AgencyBarChart from '@/components/AgencyBarChart.vue'
import AgencyData from '@/data/agency.json'

export default {
  components: {
    AgencyBarChart,
  },
  data() {
    const labels = AgencyData.periods.map((p) => p.begin)
    const periods = AgencyData.periods.map((p) => {
      const from = this.$d(dayjs(p.begin).toDate(), 'dateWithoutYear')
      const to = this.$d(dayjs(p.end).toDate(), 'dateWithoutYear')
      return `${from}~${to}`
    })
    const agencyData = {
      ...AgencyData,
      labels,
      periods,
    }
    const agencyItems = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計'),
    ]
    return {
      agencyData,
      agencyItems,
    }
  },
}
</script>
