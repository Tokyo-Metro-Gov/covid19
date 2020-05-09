<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナ受診相談窓口相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Data.querents.date"
      :unit="$t('件.reports')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070'"
      :legends="dayColorLegends"
    />
    <!-- 件.reports = 窓口相談件数 -->
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
    // 帰国者・接触者 電話相談センター 相談件数
    const querentsGraph = formatGraph(Data.querents.data)
    // 曜日ごとのバーの色
    const dayColorLegends = [
      { text: this.$t('月～金'), fillStyle: '#3B64B0' },
      { text: this.$t('土'), fillStyle: '#3CB371' },
      { text: this.$t('日'), fillStyle: '#FF0000' }
    ]

    const data = {
      Data,
      querentsGraph,
      dayColorLegends
    }
    return data
  }
}
</script>
