<template>
  <div>
    <whats-new
      class="mb-4"
      date="2020年2月29日"
      url="#"
      text="新型コロナウイルスに関連した患者の発生について（第37報）"
    />
    <StaticInfo
      class="mb-4"
      url="#"
      text="自分の症状に不安や心配があればまずは電話相談をどうぞ"
      btn-text="相談の手順を見る"
    />
    <v-row>
      <v-col xs12 sm6 md4>
        <number-display
          :title="'本日の感染者'"
          :number="patients"
          :unit="'人'"
        />
      </v-col>
      <v-col xs12 sm6 md4>
        <time-bar-chart
          :title="'コールセンター相談件数'"
          :chart-data="contacts"
          :chart-option="{}"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import NumberDisplay from '@/components/NumberDisplay.vue'
import { SHEET_URL } from '@/constants.js'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/dist/data/data.json'

export default {
  components: {
    NumberDisplay,
    TimeBarChart,
    WhatsNew,
    StaticInfo
  },
  async asyncData({ $axios }) {
    const res =
      process.env.NODE_ENV !== 'production'
        ? await $axios.$get(SHEET_URL)
        : Data
    const today = new Date()
    let cumSum = 0
    const contacts = []
    res.contacts
      .filter(function(d) {
        return new Date(d['日付']) < today
      })
      .forEach(function(d) {
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
      patients: res.patients ? res.patients.length : 0,
      contacts
    }
    return data
  }
}
</script>
