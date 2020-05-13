<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :unit="$t('件.tested')"
      :legends="graphLegends"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 検査実施日別状況
    const inspectionsGraph = formatGraph(Data.inspections_summary.data)
    // 項目の説明と凡例
    const graphLegends = [
      {
        text: this.$t('県内発生（疑い例・接触者調査）'),
        fillStyle: '#FFFFFF',
        lineWidth: 0
      },
      { text: this.$t('月～金'), fillStyle: '#3B64B0' },
      { text: this.$t('土'), fillStyle: '#3CB371' },
      { text: this.$t('日'), fillStyle: '#FF0000' }
    ]

    const data = {
      Data,
      inspectionsGraph,
      graphLegends
    }
    return data
  }
}
</script>
