<template>
  <v-row>
    <v-col xs12 sm6 md4>
      <number-display :title="'本日の感染者'" :number="patients" :unit="'人'" />
    </v-col>
    <v-col xs12 sm6 md4>
      <time-bar-chart
        :title="'test'"
        :chart-data="contacts"
        :chart-option="{}"
      />
    </v-col>
  </v-row>
</template>

<script>
import NumberDisplay from '@/components/NumberDisplay.vue'
import { SHEET_URL } from '@/constants.js'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    NumberDisplay, TimeBarChart
  },
  async asyncData ({ $axios }) {
    const res = await $axios.$get(SHEET_URL)
    const today = new Date()
    let cumSum = 0
    const contacts = []
    res.contacts.filter(function (d) {
      return new Date(d['日付']) < today
    }).forEach(function (d) {
      const dt = new Date(d['日付'])
      const v = parseInt(d['小計'])
      if (!isNaN(v)) {
        cumSum += v
        contacts.push({
          label: `${dt.getMonth() + 1}/${dt.getDate()}`,
          transition: v,
          cummulative: cumSum
        })
      }
    })
    const data = {
      patients: (res.patients ? res.patients.length : 0),
      contacts
    }
    return data
  }
}
</script>
