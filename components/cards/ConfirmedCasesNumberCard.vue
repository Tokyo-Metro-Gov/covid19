<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.patients.date"
      :unit="$t('人')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
      :legends="dayColorLegends"
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
    // 曜日ごとのバーの色
    const dayColorLegends = [
      { text: this.$t('月～金'), fillStyle: '#3B64B0' },
      { text: this.$t('土'), fillStyle: '#3CB371' },
      { text: this.$t('日'), fillStyle: '#FF0000' }
    ]

    const data = {
      Data,
      patientsGraph,
      dayColorLegends
    }
    return data
  }
}
</script>
