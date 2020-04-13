<template>
  <v-col cols="12" md="6" class="DataCard">
    <circle-chart
      :title="$t('陽性者年代別割合')"
      :title-id="'patients-age-ratio'"
      :chart-id="'patients-age-ratio'"
      :chart-data="patientsAgeRatioGraph"
      :date="PatientsAgeRatio.date"
      :labels="PatientsAgeRatio.labels"
      :unit="$t('人')"
      :info="$t('陽性者合計')"
    />
  </v-col>
</template>

<script>
import CircleChart from '@/components/CircleChart.vue'
import PatientsAgeRatio from '@/data/patients_age_ratio.json'
import formatVariableGraph from '@/utils/formatVariableGraph.ts'

export default {
  components: {
    CircleChart
  },
  data() {
    const patientsAgeRatioGraph = formatVariableGraph(PatientsAgeRatio.data)
    const data = {
      PatientsAgeRatio,
      patientsAgeRatioGraph
    }

    return data
  }
}
</script>
