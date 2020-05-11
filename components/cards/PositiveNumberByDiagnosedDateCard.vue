<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('判明日別陽性患者数')"
      :title-id="'number-of-positive-persons'"
      :chart-id="'number-of-positive-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/positive_by_diagnosed.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const formatData = Data.data.map(data => {
      return {
        日付: data.diagnosed_date,
        小計: data.count
      }
    })

    // 陽性患者数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: Data,
      graphData
    }
  }
}
</script>
