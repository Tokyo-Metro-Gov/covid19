<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="data.date"
      :unit="$t('件.tested')"
      :url="'https://opendata.pref.shizuoka.jp/'"
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
    const formatData = Data.inspections_summary.labels.map((date, i) => {
      return {
        日付: date,
        小計: Data.inspections_summary.datasets[0].data[i]
      }
    })

    // 検査実施件数グラフ
    const inspectionsGraph = formatGraph(formatData)

    return {
      data: Data.inspections_summary,
      inspectionsGraph
    }
  }
}
</script>
