<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新規患者に関する報告件数の推移')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.patients_summary.date"
      :unit="$t('人')"
      :url="'https://www.pref.fukui.lg.jp/doc/toukei-jouhou/covid-19.html'"
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
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)

    return {
      Data,
      patientsGraph
    }
  }
}
</script>
