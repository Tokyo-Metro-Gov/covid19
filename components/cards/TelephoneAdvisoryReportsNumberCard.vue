<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      title="新型コロナコールセンター相談件数"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-data="contactsGraph"
      :date="Data.contacts.date"
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
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)

    const data = {
      Data,
      contactsGraph
    }
    return data
  }
}
</script>

<style lang="scss">
</style>
