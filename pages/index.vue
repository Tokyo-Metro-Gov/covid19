<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new
      class="mb-4"
      date="2020年3月3日"
      url="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/03/28.html"
      text="新型コロナウイルスに関連した患者の発生について（第65報）"
    />
    <StaticInfo
      class="mb-4"
      :url="'/flow'"
      :text="'自分や家族の症状に不安や心配があればまずは電話相談をどうぞ'"
      :btn-text="'相談の手順を見る'"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="陽性患者数"
          :chart-data="patientsGraph"
          :chart-option="option"
          :date="Data.patients.date"
          :unit="'人'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="'陽性患者の属性'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
        />
      </v-col>

      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数"
          :chart-data="contactsGraph"
          :chart-option="option"
          :date="Data.contacts.date"
          :unit="'件'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="帰国者・接触者電話相談センター相談件数"
          :chart-data="querentsGraph"
          :chart-option="option"
          :date="Data.querents.date"
          :unit="'件'"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <vertical-bar-chart
          title="都営地下鉄の利用者数の推移"
          :chart-data="metroGraph"
          :chart-option="metroGraphOption"
          :date="metroGraph.date"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import VerticalBarChart from '@/components/VerticalBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    VerticalBarChart,
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
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)
    // 都営地下鉄の利用者数の推移
    const metroGraph = MetroData
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cummulative.toLocaleString(),
      sText: patientsGraph[patientsGraph.length - 1].label + 'の累計',
      unit: '人'
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      dischargesTable,
      dischargesGraph,
      contactsGraph,
      querentsGraph,
      metroGraph,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '都内の最新感染動向',
        date: Data.lastUpdate
      },
      option: {
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem) {
              const labelText = tooltipItem.value + '人'
              return labelText
            }
          }
        },
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
      },
      metroGraphOption: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true
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
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  // 基準値を100としたときの相対値
                  return (value / 100).toFixed(2)
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItems, _) {
              const label = tooltipItems[0].label
              return `期間: ${label}`
            },
            label(tooltipItem, data) {
              const index = tooltipItem.index
              const currentData = data.datasets[tooltipItem.datasetIndex]
              const percentage = `${currentData.data[index]}%`

              if (index > 0) {
                const prevPeriod = data.labels[index - 1]
                return `${prevPeriod}の利用者数との相対値: ${percentage}`
              } else {
                return `${percentage}`
              }
            }
          }
        }
      }
    }
    return data
  },
  head() {
    return {
      title: '都内の最新感染動向'
    }
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
