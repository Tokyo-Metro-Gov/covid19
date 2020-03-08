<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      title="新型コロナ受診相談窓口相談件数"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-data="querentsGraph"
      :date="Data.querents.date"
      :unit="'件'"
      :url="''"
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
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    const data = {
      Data,
      querentsGraph
    }
    return data
  }
}
</script>

<style lang="scss">
</style>
