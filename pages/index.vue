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
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <v-col cols="12" md="6" class="DataCard">
        <svg-card
          :title="$t('検査陽性者の状況')"
          :title-id="'details-of-confirmed-cases'"
          :date="Data.inspections_summary.date"
        >
          <confirmed-cases-table
            :aria-label="$t('検査陽性者の状況')"
            v-bind="confirmedCases"
          />
        </svg-card>
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('陽性患者数')"
          :title-id="'number-of-confirmed-cases'"
          :chart-id="'time-bar-chart-patients'"
          :chart-data="patientsGraph"
          :date="Data.patients.date"
          :unit="$t('人')"
          :url="
            'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
          "
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <data-table
          :title="$t('陽性患者の属性')"
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
          :title="$t('検査実施数')"
          :title-id="'number-of-tested'"
          :chart-id="'time-stacked-bar-chart-inspections'"
          :chart-data="inspectionsGraph"
          :date="Data.inspections_summary.date"
          :items="inspectionsItems"
          :labels="inspectionsLabels"
          :unit="$t('件.tested')"
        />
        <!-- 件.tested = 検査数 -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('新型コロナコールセンター相談件数')"
          :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
          :chart-id="'time-bar-chart-contacts'"
          :chart-data="contactsGraph"
          :date="Data.contacts.date"
          :unit="$t('件.reports')"
          :url="''"
        />
        <!-- 件.reports = 窓口相談件数 -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <time-bar-chart
          :title="$t('新型コロナ受診相談窓口相談件数')"
          :title-id="'number-of-reports-to-covid19-consultation-desk'"
          :chart-id="'time-bar-chart-querents'"
          :chart-data="querentsGraph"
          :date="Data.querents.date"
          :unit="$t('件.reports')"
          :url="''"
        />
        <!-- 件.reports = 窓口相談件数 -->
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <metro-bar-chart
          :title="$t('都営地下鉄の利用者数の推移')"
          :title-id="'predicted-number-of-toei-subway-passengers'"
          :chart-id="'metro-bar-chart'"
          :chart-data="metroGraph"
          :chart-option="metroGraphOption"
          :date="metroGraph.date"
        />
      </v-col>
      <v-col cols="12" md="6" class="DataCard">
        <agency-bar-chart
          :title="$t('都庁来庁者数の推移')"
          :title-id="'agency'"
          :chart-id="'agency'"
          :url="''"
          :unit="'人'"
        />
      </v-col>
    </v-row>
  </div>
</template>

<i18n>
{
  "ja": {
    "都内の最新感染動向": "都内の最新感染動向",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ",
    "相談の手順を見る": "相談の手順を見る",
    "検査陽性者の状況": "検査陽性者の状況",
    "陽性患者数": "陽性患者数",
    "陽性患者の属性": "陽性患者の属性",
    "検査実施数": "検査実施数",
    "新型コロナコールセンター相談件数": "新型コロナコールセンター相談件数",
    "新型コロナ受診相談窓口相談件数": "新型コロナ受診相談窓口相談件数",
    "都営地下鉄の利用者数の推移": "都営地下鉄の利用者数の推移",
    "都庁来庁者数の推移": "都庁来庁者数の推移",
    "都内発生（疑い例・接触者調査）": "都内発生（疑い例・接触者調査）",
    "その他（チャーター便・クルーズ船）": "その他（チャーター便・クルーズ船）",
    "{date}の累計": "{date}の累計",
    "期間: {duration}": "期間: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "{duration}の利用者数との相対値: {percentage}",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日",
    "人": "人",
    "件": {
      "tested": "件",
      "reports": "件"
    },
    "日付": "日付",
    "居住地": "居住地",
    "年代": "年代",
    "性別": "性別",
    "都内": "都内",
    "埼玉県": "埼玉県",
    "湖南省長沙市": "湖南省長沙市",
    "湖北省武漢市": "湖北省武漢市",
    "{age}代": "{age}代",
    "10歳未満": "10歳未満",
    "男性": "男性",
    "女性": "女性",
    "退院※": "退院※"
  },
  "en": {
    "都内の最新感染動向": "Latest updates on COVID-19 in Tokyo",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "Contact the Telephone Advisory Center if you have any concerns.",
    "相談の手順を見る": "Steps for receiving help",
    "検査陽性者の状況": "Details of confirmed cases",
    "陽性患者数": "Number of confirmed cases",
    "陽性患者の属性": "Confirmed patient attributes",
    "検査実施数": "Number of tests conducted",
    "新型コロナコールセンター相談件数": "Number of inquiries to COVID-19 telephone advisory center",
    "新型コロナ受診相談窓口相談件数": "Number of inquiries to combined telephone advisory center",
    "都営地下鉄の利用者数の推移": "The predicted number of Toei subway passengers",
    "都庁来庁者数の推移": "Trend in the number of TMG visitors",
    "都内発生（疑い例・接触者調査）": "Emerged in Tokyo (Suspected cases or contactees)",
    "その他（チャーター便・クルーズ船）": "Others (Returnees or Cruise ship passengers)",
    "{date}の累計": "Cumulative total as of {date}",
    "期間: {duration}": "Period: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "Relative value based on the number of users {duration}: {percentage}",
    "1月20日~1月24日": "from January 20 to 24",
    "2月10日~14日": "from Feb. 10 to 14",
    "2月17日~21日": "from Feb. 17 to 21",
    "2月25日~28日": "from Feb. 25 to 28",
    "人": "persons",
    "件": {
      "tested": "cases",
      "reports": "reports"
    },
    "日付": "Date",
    "居住地": "Residence",
    "年代": "Age",
    "性別": "Gender",
    "都内": "Tokyo",
    "埼玉県": "Saitama",
    "湖南省長沙市": "Changsha, Hunan Province",
    "湖北省武漢市": "Wuhan City, Hubei Province ",
    "{age}代": "{age}s",
    "10歳未満": "Under 10",
    "男性": "Male",
    "女性": "Female",
    "退院※": "Discharge*"
  },
  "zh-cn": {
    "都内の最新感染動向": "东京都最新新型冠状病毒感染情况",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "如果您或您的家人出现疑似症状，请立即拨打电话咨询",
    "相談の手順を見る": "查看咨询流程",
    "検査陽性者の状況": "确诊案例状况",
    "陽性患者数": "确诊人数",
    "陽性患者の属性": "确诊患者的信息",
    "検査実施数": "送检件数",
    "新型コロナコールセンター相談件数": "新型冠状病毒咨询中心咨询件数",
    "新型コロナ受診相談窓口相談件数": "新冠肺炎就诊咨询窗口的咨询数",
    "都営地下鉄の利用者数の推移": "都营地下铁搭乘人数趋势",
    "都庁来庁者数の推移": "东京都厅来访人数推移",
    "都内発生（疑い例・接触者調査）": "东京都案例（疑似感染、接触者调查）",
    "その他（チャーター便・クルーズ船）": "其它（包机、游轮）",
    "{date}の累計": "截至 {date}",
    "期間: {duration}": "期间: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "基于{duration}间乘客数的相对值: {percentage}",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日",
    "人": "人",
    "件": {
      "tested": "件",
      "reports": "件"
    },
    "日付": "日期",
    "居住地": "居住地",
    "年代": "年龄",
    "性別": "性别",
    "都内": "东京都",
    "埼玉県": "埼玉县",
    "湖南省長沙市": "湖南省长沙市",
    "湖北省武漢市": "湖北省武汉市",
    "{age}代": "{age}多岁",
    "10歳未満": "不到10岁",
    "男性": "男性",
    "女性": "女性",
    "退院※": "出院※"
  },
  "zh-tw": {
    "都内の最新感染動向": "東京都最新新型冠狀病毒感染情形",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "若您或家人出現疑似症狀，請即刻撥打電話諮詢",
    "相談の手順を見る": "查看諮詢流程",
    "検査陽性者の状況": "確診案例狀況",
    "陽性患者数": "確診人數",
    "陽性患者の属性": "確診案例概況",
    "検査実施数": "送檢件數",
    "新型コロナコールセンター相談件数": "新型冠狀病毒諮詢中心諮詢件數",
    "新型コロナ受診相談窓口相談件数": "就診窗口諮詢數",
    "都営地下鉄の利用者数の推移": "都營地下鐵搭乘人數走勢",
    "都庁来庁者数の推移": "東京都廳來訪人數走勢",
    "都内発生（疑い例・接触者調査）": "東京都案例（疑似感染、接觸者調查）",
    "その他（チャーター便・クルーズ船）": "其它（包機、遊輪）",
    "{date}の累計": "累計至 {date}",
    "期間: {duration}": "期間: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "基於{duration}的搭乘人數之相對數值: {percentage}",
    "1月20日~1月24日": "1月20日~1月24日",
    "2月10日~14日": "2月10日~14日",
    "2月17日~21日": "2月17日~21日",
    "2月25日~28日": "2月25日~28日",
    "人": "人",
    "件": {
      "tested": "件",
      "reports": "件"
    },
    "日付": "日期",
    "居住地": "居住地",
    "年代": "年齡",
    "性別": "性別",
    "都内": "東京都",
    "埼玉県": "埼玉縣",
    "湖南省長沙市": "湖南省長沙市",
    "湖北省武漢市": "湖北省武漢市",
    "{age}代": "{age}多歲",
    "10歳未満": "10歲以下",
    "男性": "男性",
    "女性": "女性",
    "退院※": "出院※"
  },
  "ko": {
    "都内の最新感染動向": "도쿄도 코로나19 실시간 현황",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "본인 혹은 가족에게 의심증상이 있을 경우, 콜센터에 먼저 문의하세요.",
    "相談の手順を見る": "상담 절차",
    "検査陽性者の状況": "확진자의 현황",
    "陽性患者数": "확진자 수",
    "陽性患者の属性": "확진 사례의 세부 사항",
    "検査実施数": "검사실시수",
    "新型コロナコールセンター相談件数": "코로나 19 콜센터 문의 건수",
    "新型コロナ受診相談窓口相談件数": "코로나19 진찰 상담 창구 상담 건수",
    "都営地下鉄の利用者数の推移": "도에이 지하철 의 예상 승객 수",
    "都庁来庁者数の推移": "도쿄도 청사 방문자 수",
    "都内発生（疑い例・接触者調査）": "도쿄 지역사회 발생 경우（의심환자, 접촉자）",
    "その他（チャーター便・クルーズ船）": "기타（귀국자 또는 크루즈 승객 경우）",
    "{date}の累計": "{date}의 누적 수",
    "期間: {duration}": "기간: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "{duration}의 이용자수와의 상대치: {percentage}",
    "1月20日~1月24日": "1월 20일~1월24일",
    "2月10日~14日": "2월 10일~14일",
    "2月17日~21日": "2월 17일~21일",
    "2月25日~28日": "2월 25일~28일",
    "人": "인",
    "件": {
      "tested": "건",
      "reports": "건"
    },
    "日付": "날짜",
    "居住地": "거주지",
    "年代": "나이",
    "性別": "성별",
    "都内": "도쿄도내",
    "埼玉県": "사이타마현",
    "湖南省長沙市": "후난성 창사시",
    "湖北省武漢市": "",
    "{age}代": "{age}대",
    "10歳未満": "10살 미만",
    "男性": "남성",
    "女性": "여성",
    "退院※": "후베이성 우한시"
  },
  "ja-basic": {
    "都内の最新感染動向": "とうきょうとでの コロナウイルスの あたらしいじょうほう",
    "自分や家族の症状に不安や心配があればまずは電話相談をどうぞ": "からだの ぐあいが わるくて こわくなったら でんわして ください",
    "相談の手順を見る": "そうだんの しかたの せつめい",
    "検査陽性者の状況": "びょうきの ひとは いま",
    "陽性患者数": "びょうきの ひとの かず",
    "陽性患者の属性": "びょうきの ひとの じょうほう",
    "検査実施数": "けんさした かず",
    "新型コロナコールセンター相談件数": "コロナウイルス そうだんで でんわが あった かず",
    "新型コロナ受診相談窓口相談件数": "コロナのことで とうきょうと に そうだんした ひとの かず",
    "都営地下鉄の利用者数の推移": "とえいちかてつを つかった ひとの かず",
    "都庁来庁者数の推移": "議事堂（ぎじどう）に 来（き）た 人（ひと）の 合計（ごうけい）",
    "都内発生（疑い例・接触者調査）": "とうきょうとで びょうき かもしれない ひと",
    "その他（チャーター便・クルーズ船）": "そのほか",
    "{date}の累計": "{date} ぜんぶで",
    "期間: {duration}": "きかん: {duration}",
    "{duration}の利用者数との相対値: {percentage}": "ひとの かずを くらべると: {percentage}",
    "1月20日~1月24日": "1がつ20にち から 1がつ24にち",
    "2月10日~14日": "2がつ10にち から 2がつ14にち",
    "2月17日~21日": "2がつ17にち から 2がつ21にち",
    "2月25日~28日": "2がつ25にち から 2がつ28にち",
    "人": "にん",
    "件": {
      "tested": "けん",
      "reports": "けん"
    },
    "日付": "ひづけ",
    "居住地": "すんでいるところ",
    "年代": "とし",
    "性別": "おとこ・おんな・そのほか",
    "都内": "とうきょうと の なか",
    "埼玉県": "さいたまけん",
    "湖南省長沙市": "ちゅうごく こなん しょう ちょうさ し",
    "湖北省武漢市": "ちゅうごく こほく しょう ぶかん し",
    "{age}代": "{age}さい",
    "10歳未満": "10さい より ちいさい ひと",
    "男性": "おとこ の ひと",
    "女性": "おんな の ひと",
    "退院※": "たいいん※"
  }
}
</i18n>

<script>
import PageHeader from '@/components/PageHeader.vue'
import TimeBarChart from '@/components/TimeBarChart.vue'
import MetroBarChart from '@/components/MetroBarChart.vue'
import AgencyBarChart from '@/components/AgencyBarChart.vue'
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
    AgencyBarChart,
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
    // 陽性患者の属性
    const patientsTable = formatTable(Data.patients.data)
    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text =
        header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.$t(row['居住地'])
      row['性別'] = this.$t(row['性別'])

      if (row['年代'] === '10歳未満') {
        row['年代'] = this.$t('10歳未満')
      } else {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      }
    }
    // 退院者グラフ
    const dischargesGraph = formatGraph(Data.discharges_summary.data)

    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)
    // 帰国者・接触者電話相談センター相談件数
    const querentsGraph = formatGraph(Data.querents.data)
    // 都営地下鉄の利用者数の推移
    const metroGraph = MetroData
    // metroGraph ツールチップ title文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipTitle = (tooltipItems, _) => {
      const label = tooltipItems[0].label
      return this.$t('期間: {duration}', {
        // duration = label = '2月10日~14日' | '2月17日~21日' | '2月25日~28日'
        duration: this.$t(label)
      })
    }
    // metroGraph ツールチップ label文字列
    // this.$t を使うため metroGraphOption の外側へ
    const metroGraphTooltipLabel = (tooltipItem, data) => {
      const currentData = data.datasets[tooltipItem.datasetIndex]
      const percentage = `${currentData.data[tooltipItem.index]}%`

      return this.$t('{duration}の利用者数との相対値: {percentage}', {
        // duration = metroGraph.base_period = '1月20日~1月24日'
        duration: this.$t(metroGraph.base_period),
        percentage
      })
    }
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['都内'],
      Data.inspections_summary.data['その他']
    ]
    const inspectionsItems = [
      this.$t('都内発生（疑い例・接触者調査）'),
      this.$t('その他（チャーター便・クルーズ船）')
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
      unit: this.$t('人')
    }

    const data = {
      Data,
      patientsTable,
      patientsGraph,
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
                  return value.toFixed(2) + '%'
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: metroGraphTooltipTitle,
            label: metroGraphTooltipLabel
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
