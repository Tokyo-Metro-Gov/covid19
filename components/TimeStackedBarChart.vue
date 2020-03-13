<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        {{ $t('（注）同一の対象者について複数の検体を調査する場合あり') }}
        <br />
        {{
          $t(
            '検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります'
          )
        }}
      </p>
      <data-selector v-model="dataKind" />
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="options"
      :height="240"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<i18n>
 {
   "ja": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "（注）同一の対象者について複数の検体を調査する場合あり",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります",
     "{date}の全体累計": "%{date}の全体累計",
     "{date}の合計": "%{date}の合計",
     "都内": "都内",
     "その他": "その他",
     "合計": "合計"
   },
   "en": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "(Note) More than one sample from the same subject may be tested.",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "The number of tests conducted is published as preliminary figures and may be revised as confirmed data at a later date",
     "{date}の全体累計": "Cumulative total as of %{date}",
     "都内": "Tokyo",
     "その他": "Others",
     "合計": "Total"
   },
   "zh-cn": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "(註) 同一個案可能被多次檢查",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "The number of tests conducted is published as preliminary figures and may be revised as confirmed data at a later date",
     "{date}の全体累計": "截至 %{date}",
     "都内": "东京都",
     "その他": "其它",
     "合計": "总计"
   },
   "zh-tw": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "（註）同一個案可能被多次檢查",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "The number of tests conducted is published as preliminary figures and may be revised as confirmed data at a later date",
     "{date}の全体累計": "累計至 %{date}",
     "都内": "東京都",
     "その他": "其它",
     "合計": "合計"
   },
   "ko": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "(주의) 동일 대상자에 대하여 여러번의 검체를 조사하는 경우가 있음",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "The number of tests conducted is published as preliminary figures and may be revised as confirmed data at a later date",
     "{date}の全体累計": "%{date}의 누적 수",
     "都内": "도쿄도내",
     "その他": "기타",
     "合計": "합계"
   },
   "ja-basic": {
     "（注）同一の対象者について複数の検体を調査する場合あり": "(ちゅうい) おなじ ひとに なんどか けんさ を する とき が あります",
     "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります": "検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります",
     "{date}の全体累計": "%{date} ぜんぶで",
     "都内": "とうきょうと の なか",
     "その他": "そのほか",
     "合計": "ごうけい"
   }
 }
 </i18n>

<script>
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataSelector, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'time-stacked-bar-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    labels: {
      type: Array,
      required: false,
      default: () => []
    },
    unit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      dataKind: 'transition'
    }
  },
  computed: {
    displayInfo() {
      if (this.dataKind === 'transition') {
        return {
          lText: this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),
          sText: `${this.$t('{date}の合計', {
            date: this.labels[this.labels.length - 1]
          })}`,
          unit: this.unit
        }
      }
      return {
        lText: this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),
        sText: `${this.$t('{date}の全体累計', {
          date: this.labels[this.labels.length - 1]
        })}`,
        unit: this.unit
      }
    },
    displayData() {
      const colorArray = ['#00A040', '#00D154']
      if (this.dataKind === 'transition') {
        return {
          labels: this.labels,
          datasets: this.chartData.map((item, index) => {
            return {
              label: this.items[index],
              data: item,
              backgroundColor: colorArray[index],
              borderWidth: 0
            }
          })
        }
      }
      return {
        labels: this.labels,
        datasets: this.chartData.map((item, index) => {
          return {
            label: this.items[index],
            data: this.cumulative(item),
            backgroundColor: colorArray[index],
            borderWidth: 0
          }
        })
      }
    },
    options() {
      const unit = this.unit
      const sumArray = this.eachArraySum(this.chartData)
      const data = this.chartData
      const cumulativeData = this.chartData.map(item => {
        return this.cumulative(item)
      })
      const cumulativeSumArray = this.eachArraySum(cumulativeData)
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: tooltipItem => {
              const labelTokyo = this.$t('都内')
              const labelOthers = this.$t('その他')
              const labelArray = [labelTokyo, labelOthers]
              let casesTotal, cases
              if (this.dataKind === 'transition') {
                casesTotal = sumArray[tooltipItem.index].toLocaleString()
                cases = data[tooltipItem.datasetIndex][
                  tooltipItem.index
                ].toLocaleString()
              } else {
                casesTotal = cumulativeSumArray[
                  tooltipItem.index
                ].toLocaleString()
                cases = cumulativeData[tooltipItem.datasetIndex][
                  tooltipItem.index
                ].toLocaleString()
              }

              return `${
                labelArray[tooltipItem.datasetIndex]
              }: ${cases} ${unit} (${this.$t('合計')}: ${casesTotal} ${unit})`
            },
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          onHover: e => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: e => {
            e.currentTarget.style.cursor = 'default'
          }
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                minRotation: 0,
                callback: label => {
                  return label.split('/')[1]
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
                callback: label => {
                  const monthStringArry = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]
                  const month = monthStringArry.indexOf(label.split(' ')[0]) + 1
                  return month + '月'
                }
              },
              type: 'time',
              time: {
                unit: 'month'
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
  },
  methods: {
    cumulative(array) {
      const cumulativeArray = []
      let patSum = 0
      array.forEach(d => {
        patSum += d
        cumulativeArray.push(patSum)
      })
      return cumulativeArray
    },
    sum(array) {
      return array.reduce((acc, cur) => {
        return acc + cur
      })
    },
    pickLastNumber(chartDataArray) {
      return chartDataArray.map(array => {
        return array[array.length - 1]
      })
    },
    cumulativeSum(chartDataArray) {
      return chartDataArray.map(array => {
        return array.reduce((acc, cur) => {
          return acc + cur
        })
      })
    },
    eachArraySum(chartDataArray) {
      const sumArray = []
      for (let i = 0; i < chartDataArray[0].length; i++) {
        sumArray.push(chartDataArray[0][i] + chartDataArray[1][i])
      }
      return sumArray
    }
  }
}
</script>

<style lang="scss" scoped>
.Graph-Desc {
  width: 100%;
  margin: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
