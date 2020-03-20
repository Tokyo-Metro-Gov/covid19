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
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOptions"
      :height="240"
    />
    <template v-slot:footer-description>
      <p>
        {{ $t('※本データは2020年3月31日までの掲載となります') }}
      </p>
      <p>
        {{ $t('出典') }}：
        <a
          href="https://ds.yahoo.co.jp/datapolicy/"
          target="_blank"
          rel="noopenner"
          >{{ $t('ヤフー・データソリューション') }}</a
        >
      </p>
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
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import updateLocale from 'dayjs/plugin/updateLocale'
import minMax from 'dayjs/plugin/minMax'
import shinjukuData from '@/data/13104_daily_visitors.json'
import DataView from '@/components/DataView.vue'
import { single as color } from '@/utils/colors'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.extend(minMax)

dayjs.updateLocale('en', {
  weekStart: 1 // 月曜始まり
})

type Data = {}
type Methods = {
  tooltipTitle: (tooltipItems: any, data: any) => string
}
type Computed = {
  groupByWeekData: {
    [weekNum: number]: typeof shinjukuData.data
  }
  labels: string[]
  standardValue: number
  targetData: {
    [weekNum: number]: typeof shinjukuData.data
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
  chartData: typeof shinjukuData.data
  date: string
  standardDate: string
  startDate: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataView },
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
    chartData: [],
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
      return Object.keys(this.targetData).map((weekNum: any) => {
        const start = dayjs(this.startDate)
          .week(weekNum)
          .startOf('week')
          .format('M/D')
        const end = dayjs(this.startDate)
          .week(weekNum)
          .endOf('week')
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
