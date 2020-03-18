<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p :class="$style.ShinjukuDesc">
        2月3日～2月7日の来訪者数 (※1) の平均値 (※2) を 基準としたときの相対値
        <br />
        ※1) ヤフーに蓄積された位置情報データなどを元に算出した参考値
        <br />
        ※2) 土・日・祝日を除く7:30~8:30の1週間平均値
      </p>
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOptions"
      :height="240"
    />
    <p :class="$style.ShinjukuDesc">
      ※本データは2020年3月31日までの掲載となります
    </p>
    <p :class="$style.ShinjukuDesc">
      (C)Yahoo Japan
      <br />
      出典：
      <a href="https://ds.yahoo.co.jp/" target="_blank" rel="noopenner"
        >ヤフー・データソリューション</a
      >
    </p>
  </data-view>
</template>

<style module lang="scss">
.Shinjuku {
  &Desc {
    width: 100%;
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
import dayjs from 'dayjs'
import 'dayjs/locale/en'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import updateLocale from 'dayjs/plugin/updateLocale'
import minMax from 'dayjs/plugin/minMax'
import ShinjukuData from '@/data/shinjuku.json'
import DataView from '@/components/DataView.vue'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.extend(minMax)

dayjs.updateLocale('en', {
  weekStart: 1 // 月曜始まり
})

export default {
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
  data() {
    return {
      chartData: ShinjukuData.data,
      date: ShinjukuData.date
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
        }, {})
    },
    labels() {
      return Object.keys(this.targetData).map(weekNum => {
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
      const sum = standardDays.reduce((sum, d) => (sum += d.value), 0)
      return sum / standardDays.length
    },
    targetData() {
      return Object.keys(this.groupByWeekData).reduce((res, weekNum) => {
        if (dayjs(this.startDate).week() <= weekNum) {
          res[weekNum] = this.groupByWeekData[weekNum]
        }
        return res
      }, {})
    },
    targetValues() {
      return Object.values(this.targetData).map(days => {
        return days.reduce((sum, d) => (sum += d.value), 0) / days.length
      })
    },
    displayData() {
      const percentages = this.targetValues.map(
        val => ((val - this.standardValue) / this.standardValue) * 100
      )
      return {
        labels: this.labels,
        datasets: [
          {
            data: percentages,
            backgroundColor: '#008b41'
          }
        ]
      }
    },
    displayOptions() {
      return {
        legend: {
          display: false
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItem) {
              const period = tooltipItem[0].label
              return `期間: ${period}`
            },
            label(tooltipItem) {
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
                callback(value) {
                  return `${value.toFixed(2)}%`
                }
              }
            }
          ]
        }
      }
    }
  }
}
</script>
