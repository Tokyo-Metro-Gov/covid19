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
      :url="'/flow'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <svg-card :title="$t('検査陽性者の状況')" :date="headerItem.date">
          <confirmed-cases-table
            :aria-label="$t('検査陽性者の状況')"
            v-bind="confirmedCases"
          />
        </svg-card>
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('陽性患者数')"
          :chart-data="patientsGraph"
          :date="Data.patients.date"
          :unit="'人'"
          :url="
            'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
          "
        />
        <!-- TODO: unit need translation -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="$t('陽性患者の属性')"
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
          :title="$t('検査実施数')"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :items="inspectionsItems"
          :labels="inspectionsLabels"
          :unit="'件'"
        />
        <!-- TODO: unit need translation -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('新型コロナコールセンター相談件数')"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="'件'"
          :url="''"
        />
        <!-- TODO: unit need translation -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('新型コロナ受診相談窓口相談件数')"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="'件'"
          :url="''"
        />
        <!-- TODO: unit need translation -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <metro-bar-chart
          :title="$t('都営地下鉄の利用者数の推移')"
          :chart-data="metroGraph"
          :chart-option="metroGraphOption"
          :date="metroGraph.date"
        />
      </v-col>
    </v-row>
  </div>
</template>

<i18n>
{
  "ja": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ",
    "相談の手順を見る": "相談の手順を見る",
    "検査陽性者の状況": "検査陽性者の状況",
    "陽性患者数": "陽性患者数",
    "陽性患者の属性": "陽性患者の属性",
    "検査実施数": "検査実施数",
    "新型コロナコールセンター相談件数": "新型コロナコールセンター相談件数",
    "新型コロナ受診相談窓口相談件数": "新型コロナ受診相談窓口相談件数",
    "都営地下鉄の利用者数の推移": "都営地下鉄の利用者数の推移",
    "都内発生（疑い例・接触者調査）": "都内発生（疑い例・接触者調査）",
    "その他（チャーター便・クルーズ便）": "その他（チャーター便・クルーズ便）",
    "{date}の累計": "{date}の累計",
    "都内の最新感染動向": "都内の最新感染動向",
    "期間: {duration}": "期間: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "{duration}の利用者数との相対値: {percentage}"
  },
  "en": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "Contact the Telephone Advisory Center at the first time in case of symptoms concerned. ",
    "相談の手順を見る": "Steps to receiving help",
    "検査陽性者の状況": "Details of confirmed cases",
    "陽性患者数": "Number of confirmed cases",
    "陽性患者の属性": "Details of confirmed cases",
    "検査実施数": "Number of tested",
    "新型コロナコールセンター相談件数": "Number of reports to COVID-19 telephone advisory center",
    "新型コロナ受診相談窓口相談件数": "",
    "都営地下鉄の利用者数の推移": "The predicted number of Toei subway passengers.",
    "都内発生（疑い例・接触者調査）": "Emerged in Tokyo (Suspected cases or contactees)",
    "その他（チャーター便・クルーズ便）": "Others (Returnees or Cruise ship passengers)",
    "{date}の累計": "cumulatively, as of {date}",
    "都内の最新感染動向": "The latest update on COVID-19 in Tokyo",
    "期間: {duration}": "",
    "{duration}の利用者数との相対値: {percentage}": "Congestion index compared to {duration}: {percentage}"
  },
  "zh-cn": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "如果您或您的家人出现疑似症状，请立即拨打电话咨询",
    "相談の手順を見る": "查看咨询流程",
    "検査陽性者の状況": "确诊案例状况",
    "陽性患者数": "确诊人数",
    "陽性患者の属性": "确诊患者的信息",
    "検査実施数": "筛检人数",
    "新型コロナコールセンター相談件数": "新型冠状病毒咨询中心咨询件数",
    "新型コロナ受診相談窓口相談件数": "",
    "都営地下鉄の利用者数の推移": "都营地下铁搭乘人数趋势",
    "都内発生（疑い例・接触者調査）": "东京都案例（疑似感染、接触者调查）",
    "その他（チャーター便・クルーズ便）": "其它（包机、游轮）",
    "{date}の累計": "截至 {date}",
    "都内の最新感染動向": "东京都内最新感染情况",
    "期間: {duration}": "",
    "{duration}の利用者数との相対値: {percentage}": ""
  },
  "zh-tw": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "若您或家人出現疑似症狀，請即刻撥打電話諮詢",
    "相談の手順を見る": "點我看諮詢流程",
    "検査陽性者の状況": "確診案例狀況",
    "陽性患者数": "確診病患數",
    "陽性患者の属性": "確診案例概況",
    "検査実施数": "篩檢人數",
    "新型コロナコールセンター相談件数": "新型冠狀病毒諮詢中心諮詢件數",
    "新型コロナ受診相談窓口相談件数": "",
    "都営地下鉄の利用者数の推移": "都營地下鐵搭乘人數走勢",
    "都内発生（疑い例・接触者調査）": "東京都案例（疑似感染、接觸者調查）",
    "その他（チャーター便・クルーズ便）": "其它（包機、遊輪）",
    "{date}の累計": "累計到 {date}",
    "都内の最新感染動向": "東京都最新新型冠狀病毒感染情形",
    "期間: {duration}": "",
    "{duration}の利用者数との相対値: {percentage}": ""
  },
  "ko": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "본인 혹은 가족에게 의심증상이 있을 경우, 콜센터에 먼저 문의하세요. ",
    "相談の手順を見る": "상담 절차",
    "検査陽性者の状況": "확진자의 현황",
    "陽性患者数": "확진자 수",
    "陽性患者の属性": "확진 사례의 세부 사항",
    "検査実施数": "검사자 수",
    "新型コロナコールセンター相談件数": "코로나 19 콜센터 문의 건수",
    "新型コロナ受診相談窓口相談件数": "",
    "都営地下鉄の利用者数の推移": "도에이 지하철 의 예상 승객 수",
    "都内発生（疑い例・接触者調査）": "도쿄 지역사회 발생 경우(의심환자, 접촉자)",
    "その他（チャーター便・クルーズ便）": "기타 (귀국자 또는 크루즈 승객 경우)",
    "{date}の累計": "{date}의 누적 수",
    "都内の最新感染動向": "도쿄도청 확진자수 현황",
    "期間: {duration}": "",
    "{duration}の利用者数との相対値: {percentage}": ""
  },
  "ja-basic": {
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "からだの ぐあいが わるくて こわくなったら でんわして ください",
    "相談の手順を見る": "そうだんの しかたの せつめい",
    "検査陽性者の状況": "びょうきの ひとは いま",
    "陽性患者数": "びょうきの ひとの かず",
    "陽性患者の属性": "びょうきの ひとの じょうほう",
    "検査実施数": "けんさを うけた ひとの かず",
    "新型コロナコールセンター相談件数": "コロナウイルス そうだんで でんわが あった かず",
    "新型コロナ受診相談窓口相談件数": "",
    "都営地下鉄の利用者数の推移": "ちかてつを つかった ひとの かず",
    "都内発生（疑い例・接触者調査）": "とうきょうとで びょうき かもしれない ひと",
    "その他（チャーター便・クルーズ便）": "そのほか",
    "{date}の累計": "{date} ぜんぶで",
    "都内の最新感染動向": "とうきょうとでの コロナウイルスの あたらしいじょうほう",
    "期間: {duration}": "",
    "{duration}の利用者数との相対値: {percentage}": "ひとの かずを くらべると"
  }
}
</i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import MetroBarChart from '@/components/MetroBarChart.vue'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import DataTable from '@/components/DataTable.vue'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import News from '@/data/news.json'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    PageHeader,
    TimeBarChart,
    MetroBarChart,
    TimeStackedBarChart,
    WhatsNew,
    StaticInfo,
    DataTable,
    SvgCard,
    ConfirmedCasesTable
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
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['都内'],
      Data.inspections_summary.data['その他']
    ] // TODO: '都内'・'その他'をtranslation するかどうか
    const inspectionsItems = [
      this.$t('都内発生（疑い例・接触者調査）'),
      this.$t('その他（チャーター便・クルーズ便）')
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    // 死亡者数
    // #MEMO: 今後使う可能性あるので一時コメントアウト
    // const fatalitiesTable = formatTable(
    //   Data.patients.data.filter(patient => patient['備考'] === '死亡')
    // )
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
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
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      confirmedCases,
      sumInfoOfPatients,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('都内の最新感染動向'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems,
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
              return this.$t('期間: {duration}', {
                duration: label
              })
            },
            label(tooltipItem, data) {
              const currentData = data.datasets[tooltipItem.datasetIndex]
              const percentage = `${currentData.data[tooltipItem.index]}%`

              return this.$t('{duration}の利用者数との相対値: {percentage}', {
                duration: metroGraph.base_period,
                percentage
              })
            }
          }
        }
      }
    }
    return data
  },
  head() {
    return {
      title: this.$t('都内の最新感染動向')
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
