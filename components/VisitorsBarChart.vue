<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:description>
      <p :class="$style.Text">
        {{
          $t(
            '2月3日～2月7日の来訪者数 (※1) の平均値 (※2) を 基準としたときの相対値'
          )
        }}
      </p>
      <ol>
        <li>
          {{
            $t('※1) ヤフーに蓄積された位置情報データなどを元に算出した参考値')
          }}
        </li>
        <li>{{ $t('※2) 土・日・祝日を除く7:30~8:30の1週間平均値') }}</li>
      </ol>
    </template>
    <bar
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOptions"
      :height="240"
    />
    <v-data-table
      :style="{ top: '-9999px', position: canvas ? 'fixed' : 'static' }"
      :headers="tableHeaders"
      :items="tableData"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :disable-sort="true"
      :mobile-breakpoint="0"
      class="cardTable"
      item-key="name"
    />
    <template v-slot:footer>
      <source-link
        :url="url"
        :link-string="linkString"
        :header="sourceLinkHeader"
      />
    </template>
  </data-view>
</template>

<style module lang="scss">
.Text {
  margin: 0 !important;
}
</style>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import updateLocale from 'dayjs/plugin/updateLocale'
import minMax from 'dayjs/plugin/minMax'
import DataView from '@/components/DataView.vue'
import { single as color } from '@/utils/colors'
import SourceLink from '@/components/SourceLink.vue'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.extend(minMax)

dayjs.updateLocale('en', {
  weekStart: 1 // 月曜始まり
})

type VisitorData = {
  date: string
  population: number
  holiday: boolean
}
type Data = {
  canvas: boolean
}
type Methods = {
  tooltipTitle: (tooltipItems: any, data: any) => string
}
type Computed = {
  groupByWeekData: {
    [weekNum: number]: VisitorData[]
  }
  labels: string[]
  standardValue: number
  tableHeaders: {
    text: TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
  targetData: {
    [weekNum: number]: VisitorData[]
  }
  targetValues: number[]
  displayData: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor: string
    }[]
  }
  displayOptions: {
    responsive: boolean
    legend: {
      display: boolean
    }
    scales: {
      xAxes: object[]
      yAxes: object[]
    }
    tooltips: {
      displayColors: boolean
      callbacks: {
        title: (tooltipItems: any, data: any) => string
        label: (tooltipItems: any, data: any) => string
      }
    }
  }
}
type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: VisitorData[]
  date: string
  standardDate: string
  startDate: string
  url: string
  linkString: string
  sourceLinkHeader: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    this.canvas = process.browser
  },
  components: { DataView, SourceLink },
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
      default: ''
    },
    chartData: {
      type: Array,
      required: true,
      default: () => []
    },
    date: {
      type: String,
      required: false,
      default: ''
    },
    standardDate: {
      type: String,
      required: true,
      default: ''
    },
    startDate: {
      type: String,
      required: true,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    linkString: {
      type: String,
      default: ''
    },
    sourceLinkHeader: {
      type: String,
      default: ''
    }
  },
  computed: {
    groupByWeekData() {
      const sundays = this.chartData
        .map(d => dayjs(d.date))
        .filter(date => date.day() === 0)
      const latestSunday = dayjs.max(...sundays)

      return this.chartData
        .filter(d => {
          // 休日は除外する
          if (d.holiday) return false

          // 基準日より前日のデータは除外する
          if (dayjs(d.date).isBefore(this.standardDate, 'day')) return false

          // 表示期間は直近の日曜日までなので、その日以降のデータは除外する
          if (dayjs(d.date).isAfter(latestSunday, 'day')) return false

          return true
        })
        .reduce((res, d) => {
          const weekNum = dayjs(d.date).week()
          if (!res[weekNum]) res[weekNum] = []
          return res[weekNum].push(d) && res
        }, {} as any)
    },
    labels() {
      return Object.keys(this.targetData).map((weekNum: string) => {
        // 日付範囲は月曜日から金曜日（平日のみ）
        const start = dayjs(this.startDate)
          .week(parseInt(weekNum, 10))
          .day(1)
          .format('M/D')
        const end = dayjs(this.startDate)
          .week(parseInt(weekNum, 10))
          .day(5)
          .format('M/D')
        return `${start}~${end}`
      })
    },
    standardValue() {
      const standardDays = this.groupByWeekData[dayjs(this.standardDate).week()]
      const sum: number = standardDays.reduce(
        (sum: number, d: { population: number }) => (sum += d.population),
        0
      )
      return sum / standardDays.length
    },
    targetData() {
      return Object.keys(this.groupByWeekData).reduce((res, weekNum: any) => {
        if (dayjs(this.startDate).week() <= weekNum) {
          res[weekNum] = this.groupByWeekData[weekNum]
        }
        return res
      }, {} as any)
    },
    targetValues() {
      return Object.values(this.targetData).map((days: any) => {
        const sum = days.reduce((sum: number, d: { population: number }) => {
          return (sum += d.population)
        }, 0)
        return sum / days.length
      })
    },
    displayData() {
      const percentages = this.targetValues.map(
        (val: number) => ((val - this.standardValue) / this.standardValue) * 100
      )
      return {
        labels: this.labels,
        datasets: [
          {
            data: percentages,
            backgroundColor: color
          }
        ]
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'header' },
        { text: this.title, value: 'visitor' }
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data.map((_, i) => {
        return Object.assign(
          { header: this.displayData.labels[i] },
          { visitor: this.displayData.datasets[0].data[i] }
        )
      })
    },
    displayOptions() {
      const self = this
      return {
        responsive: true,
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: self.tooltipTitle,
            label(tooltipItem: any) {
              const val = tooltipItem.yLabel
              return `${val.toFixed(2)}%`
            }
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                maxTicksLimit: 8,
                suggestedMin: 0,
                callback(value: Number) {
                  return `${value.toFixed(2)}%`
                }
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    tooltipTitle(tooltipItems: any): string {
      const label = tooltipItems[0].label
      return this.$t('期間: {duration}', {
        duration: this.$t(label)
      }) as string
    }
  }
}

export default Vue.extend(options)
</script>
