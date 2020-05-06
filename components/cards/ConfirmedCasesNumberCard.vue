<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="PatientsSummary.patients_summary.date"
      :unit="$t('人')"
      :url="'https://shimane-opendata.jp/db/organization/main'"
    />
  </v-col>
</template>

<script>
import PatientsSummary from '@/data/patients_summary.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(PatientsSummary.patients_summary.data)

    const data = {
      PatientsSummary,
      patientsGraph
    }
    return data
  }
}
</script>
