<template>
  <v-col cols="12" md="6" class="DataCard">
    <mixed-bar-and-line-chart
      :title="$t('モニタリング項目(2)')"
      title-id="number-of-reports-to-consultations-about-fever-in-7119"
      :info-titles="[$t('#7119における発熱等相談件数')]"
      chart-id="mixed-bar-and-line-chart-fever"
      :chart-data="chartData"
      :get-formatter="getFormatter"
      :date="date"
      :labels="labels"
      :data-labels="dataLabels"
      :unit="$t('件.reports')"
    />
  </v-col>
</template>

<script>
import MixedBarAndLineChart from '@/components/MixedBarAndLineChart.vue'
import ConsultationAboutFever from '@/data/consultation_about_fever.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MixedBarAndLineChart
  },
  data() {
    const consulationReportsCount = []
    const sevendayMoveAverages = []
    const labels = []

    ConsultationAboutFever.data.forEach(d => {
      consulationReportsCount.push(d.count)
      sevendayMoveAverages.push(d.weekly_average_count)
      labels.push(d.date)
    })

    const chartData = [consulationReportsCount, sevendayMoveAverages]
    const dataLabels = [this.$t('相談件数'), this.$t('７日間移動平均')]
    const date = ConsultationAboutFever.date
    const getFormatter = columnIndex => {
      // ７日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      labels,
      dataLabels,
      getFormatter
    }
  }
}
</script>
