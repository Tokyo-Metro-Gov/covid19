<template>
  <div>
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new
      class="mb-4"
      date="2020年2月29日"
      url="#"
      text="新型コロナウイルスに関連した患者の発生について（第37報）"
    />
    <StaticInfo
      class="mb-4"
      :url="'/flow'"
      :text="'自分の症状に不安や心配があればまずは電話相談をどうぞ'"
      :btn-text="'相談の手順を見る'"
    />
    <v-row>
      <v-col xs12 sm6 md4>
        <time-bar-chart
          title="感染者数"
          :chart-data="patientsDataset"
          :chart-option="option"
          :date="Data.patients.date"
        />
      </v-col>
      <v-col xs12 sm6 md4>
        <data-table
          :title="'感染者データ'"
          :chart-data="patients"
          :chart-option="{}"
          :date="Data.patients.date"
        />
      </v-col>
      <v-col xs12 sm6 md4>
        <time-bar-chart
          title="コールセンター相談件数"
          :chart-data="contacts"
          :chart-option="option"
          :date="Data.contacts.date"
        />
      </v-col>
      <v-col xs12 sm6 md4>
        <data-table
          :title="'死亡者データ'"
          :chart-data="fatalities"
          :chart-option="{}"
          :date="Data.patients.date"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment'
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    WhatsNew,
    StaticInfo,
    DataTable
  },
  data() {
    const today = new Date()
    let cumSum = 0
    // 相談件数
    const contacts = []
    Data.contacts.data
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
    // 感染者数グラフ
    const patientsDataset = []
    let patSum = 0
    Data.patients_summary.data
      .filter(function(d) {
        return new Date(d['日付']) < today
      })
      .forEach(function(d) {
        const dt = new Date(d['日付'])
        const v = parseInt(d['小計'])
        if (!isNaN(v)) {
          patSum += v
          patientsDataset.push({
            label: `${dt.getMonth() + 1}/${dt.getDate()}`,
            transition: v,
            cummulative: patSum
          })
        }
      })

    // 感染者数
    const patients = {
      headers: [
        { text: '日付', value: '日付' },
        { text: '居住地', value: '居住地' },
        { text: '年代', value: '年代' },
        { text: '性別', value: '性別' }
      ],
      datasets: []
    }
    Data.patients.data.forEach(function(d) {
      patients.datasets.push({
        日付: moment(d['リリース日']).format('MM/DD'),
        居住地: d['居住地'],
        年代: d['年代'],
        性別: d['性別']
      })
    })
    patients.datasets.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1
    })
    // 死亡者数
    const fatalities = {
      headers: [
        { text: '日付', value: '日付' },
        { text: '居住地', value: '居住地' },
        { text: '年代', value: '年代' },
        { text: '性別', value: '性別' }
      ],
      datasets: []
    }
    Data.patients.data
      .filter(patient => patient['備考'] === '死亡')
      .forEach(d =>
        fatalities.datasets.push({
          日付: moment(d['リリース日']).format('MM/DD'),
          居住地: d['居住地'],
          年代: d['年代'],
          性別: d['性別']
        })
      )
    fatalities.datasets.sort(function(a, b) {
      return a === b ? 0 : a < b ? 1 : -1
    })

    const data = {
      Data,
      patients,
      patientsDataset,
      contacts,
      fatalities,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '最新感染動向',
        date: Data.lastUpdate
      },
      option: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              location: 'bottom',
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080'
              }
            }
          ]
        }
      }
    }
    return data
  }
}
</script>
