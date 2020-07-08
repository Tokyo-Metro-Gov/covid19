<template>
  <v-col cols="12" md="6" class="DataCard">
    <mixed-bar-and-line-chart
      :title="$t('モニタリング項目(5)')"
      title-id="number-of-tokyo-rules-applied"
      :info-titles="[$t('救急医療の東京ルールの適用件数')]"
      chart-id="mixed-bar-and-line-chart-tokyo-rules"
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
import TokyoRule from '@/data/tokyo_rule.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MixedBarAndLineChart
  },
  data() {
    const applicationReportsCount = []
    const sevendayMoveAverages = []
    const labels = []

    TokyoRule.data.forEach(d => {
      applicationReportsCount.push(d.count)
      sevendayMoveAverages.push(d.weekly_average_count)
      labels.push(d.date)
    })

    const chartData = [applicationReportsCount, sevendayMoveAverages]
    const dataLabels = [this.$t('適用件数'), this.$t('７日間移動平均')]
    const date = TokyoRule.date
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
