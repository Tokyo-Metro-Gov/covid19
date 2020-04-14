<template>
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      url="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudancenter.html#meyasu"
      :text="'自分や家族の症状に不安や心配があればまずは電話相談をどうぞ'"
      :btn-text="'相談の手順を見る'"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <confirmed-cases-details-card />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <!--
        <time-bar-chart
          title="陽性患者数"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients.date"
          :unit="'人'"
          :url="
            'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
          "
        />
        -->
        <time-stacked-bar-chart
          title="陽性反応者数の推移"
          :title-id="'number-of-tested'"
          :chart-id="'time-stacked-bar-chart-inspections'"
          :chart-data="patientsAndNoSymptomsGraph"
          :date="Data.patients_and_no_symptoms_summary.date"
          :items="patientsAndNoSymptomsItems"
          :labels="patientsAndNoSymptomsLabels"
          :unit="'件'"
        >
          <template #supplement>
            <p class="Graph-Desc">
              無症状病原体保有者：症状は無いがＰＣＲ検査が陽性だった者で、
              他者へ感染させる可能性は低いとみられている。（出典：厚生労働省Ｑ＆Ａ一部改
              変）
            </p>
          </template>
        </time-stacked-bar-chart>
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="'陽性患者の属性'"
          :title-id="'attributes-of-confirmed-cases'"
          :chart-data="patientsTable"
          :chart-option="{}"
          :date="Data.patients.date"
          :info="sumInfoOfPatients"
          :url="
            'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-stacked-bar-chart
          title="検査実施数"
          :title-id="'number-of-tested'"
          :chart-id="'time-stacked-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :items="inspectionsItems"
          :labels="inspectionsLabels"
          :unit="'件'"
        />
      </v-col>
      <!-- <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="新型コロナコールセンター相談件数"
          :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
          :chart-id="'time-bar-chart-contacts'"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="'件'"
          :url="''"
        />
      </v-col> -->
      <!-- <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          title="帰国者接触者センター相談件数"
          :title-id="'number-of-reports-to-covid19-consultation-desk'"
          :chart-id="'time-bar-chart-querents'"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="'件'"
          :url="''"
        />
      </v-col> -->
    </v-row>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue'
// import TimeBarChart from '@/components/TimeBarChart.vue'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'

export default {
  components: {
    PageHeader,
    // TimeBarChart,
    TimeStackedBarChart,
    WhatsNew,
    StaticInfo,
    DataTable,
    ConfirmedCasesDetailsCard
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
    // // 相談件数
    // const contactsGraph = formatGraph(Data.contacts.data)
    // // 帰国者・接触者電話相談センター相談件数
    // const querentsGraph = formatGraph(Data.querents.data)
    // 都営地下鉄の利用者数の推移
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['県内'],
      Data.inspections_summary.data['その他']
    ]
    const inspectionsItems = [
      '市中感染・輸入例（疑い例・接触者調査）',
      'その他（チャーター便・クルーズ便等）'
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    // 千葉県用データ
    const patientsAndNoSymptomsGraph = [
      Data.patients_and_no_symptoms_summary.data['患者'],
      Data.patients_and_no_symptoms_summary.data['無症状病原体保有者']
    ]
    const patientsAndNoSymptomsItems = ['陽性患者', '無症状病原体保有者']
    const patientsAndNoSymptomsLabels =
      Data.patients_and_no_symptoms_summary.labels
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const sumInfoOfPatients = {
      lText: patientsAndNoSymptomsGraph[0].reduce((a, c) => a + c),
      sText:
        patientsAndNoSymptomsLabels[patientsAndNoSymptomsLabels.length - 1] +
        'の累計',
      unit: '人'
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
      dischargesTable,
      dischargesGraph,
      // contactsGraph,
      // querentsGraph,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      patientsAndNoSymptomsGraph,
      patientsAndNoSymptomsItems,
      patientsAndNoSymptomsLabels,
      confirmedCases,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: '県内の最新感染動向',
        date: Data.lastUpdate
      },
      newsItems: News.newsItems.slice(0, 5),
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
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  return value.toFixed(2) + '%'
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
            }
          }
        }
      }
    }
    return data
  },
  head() {
    return {
      title: '県内の最新感染動向'
    }
  }
}
</script>

<style lang="scss" scoped>
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
