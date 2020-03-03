<template>
  <div class="MainPage">
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
      :text="'自分や家族の症状に不安や心配があればまずは電話相談をどうぞ'"
      :btn-text="'相談の手順を見る'"
    />
    <v-row class="DataBlock">
      <v-col xs12 sm6 md4 class="DataCard">
        <time-bar-chart
          title="陽性患者数"
          :chart-data="patientsGraph"
          :chart-option="option"
          :date="Data.lastUpdate"
        />
      </v-col>
      <v-col xs12 sm6 md4 class="DataCard">
        <data-table
          :title="'陽性患者の属性'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.lastUpdate"
        />
      </v-col>

      <v-col xs12 sm6 md4 class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数"
          :chart-data="contactsGraph"
          :chart-option="option"
          :date="Data.lastUpdate"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    WhatsNew,
    StaticInfo,
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)
    // 退院者グラフ
    const dischargesGraph = formatGraph(Data.discharges_summary.data)
    // 退院者数
    const dischargesTable = formatTable(Data.discharges.data)
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)
    // 死亡者数
    const fatalitiesTable = formatTable(
      Data.patients.data.filter(patient => patient['備考'] === '死亡')
    )

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      dischargesTable,
      dischargesGraph,
      contactsGraph,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '都内の最新感染動向',
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

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -12px;
    .DataCard {
      margin-bottom: 20px;
    }
  }
}
</style>
