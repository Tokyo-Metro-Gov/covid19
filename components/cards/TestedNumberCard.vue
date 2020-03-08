<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      title="検査実施数"
      :title-id="'number-of-tested'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="'件'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'

export default {
  components: {
    TimeStackedBarChart
  },
  data() {
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['都内'],
      Data.inspections_summary.data['その他']
    ]
    const inspectionsItems = [
      '都内発生（疑い例・接触者調査）',
      'その他（チャーター便・クルーズ便）'
    ]
    const inspectionsLabels = Data.inspections_summary.labels

    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels
    }
    return data
  }
}
</script>

<style lang="scss">
</style>
