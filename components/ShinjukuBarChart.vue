<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p v-if="dataKind === 'absolute'" :class="$style.ShinjukuDesc">
        7:30 ~ 8:30 の平均来訪者数について
        <br />
        週間平均値（週毎の1日あたりの平均値）を算出
      </p>
      <p v-if="dataKind === 'relative'" :class="$style.ShinjukuDesc">
        7:30 ~ 8:30 の平均来訪者数の週間平均値を、
        <br />
        2/2の週を基準とした相対値として算出
      </p>
      <data-selector v-model="dataKind" />
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="chartOptions"
      :height="240"
    />
    <p :class="$style.ShinjukuDesc">
      &copy; Yahoo Japan
      <br />
      出典：ヤフー・データソリューション（<a
        href="https://ds.yahoo.co.jp/"
        target="_blank"
        rel="noopenner"
        >https://ds.yahoo.co.jp/</a
      >)
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
import ShinjukuData from '@/data/shinjuku.json'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataTypeSelector.vue'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.updateLocale('en', {
  weekStart: 1 // 月曜始まり
})

export default {
  components: { DataView, DataSelector },
  props: {
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
    }
  },
  data() {
    return {
      dataKind: 'absolute',
      chartData: ShinjukuData.data,
      date: ShinjukuData.date
    }
  },
  computed: {
    title() {
      let title = ''
      if (this.dataKind === 'absolute') {
        title = '新宿区の来訪者数の推移 (実数値)'
      } else if (this.dataKind === 'relative') {
        title = '新宿区の来訪者数の推移 (相対値)'
      }
      return title
    },
    groupByWeekData() {
      return this.chartData.reduce((res, d) => {
        if (dayjs(d.date).isBefore(this.standardDate, 'day')) return res

        const weekNum = dayjs(d.date).week()
        if (!res[weekNum]) res[weekNum] = []
        return res[weekNum].push(d) && res
      }, {})
    },
    labels() {
      return Object.keys(this.groupByWeekData).map(weekNum => {
        const start = dayjs('2020-01-01')
          .week(weekNum)
          .startOf('week')
          .format('M/D')
        const end = dayjs('2020-01-01')
          .week(weekNum)
          .endOf('week')
          .format('M/D')
        return `${start}~${end}`
      })
    },
    weeklyAvg() {
      return Object.values(this.groupByWeekData).map(days => {
        const sum = days.reduce((sum, d) => (sum += d.value), 0)
        const average = sum / days.length
        const base = 1000
        return Math.round(average / base) * base
      })
    },
    displayData() {
      const graphColor = '#008b41'
      if (this.dataKind === 'absolute') {
        return {
          labels: this.labels,
          datasets: [
            {
              data: this.weeklyAvg,
              backgroundColor: graphColor
            }
          ]
        }
      } else {
        const standardValue = this.weeklyAvg[0]
        const data = this.weeklyAvg.map(
          val => (val / standardValue) * 100 - 100
        )
        return {
          labels: this.labels,
          datasets: [
            {
              data,
              backgroundColor: graphColor
            }
          ]
        }
      }
    },
    chartOptions() {
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
              if (tooltipItem.yLabel > 100) {
                return `${val.toLocaleString()}人`
              } else {
                return `${val.toFixed(2)}%`
              }
            }
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                callback(value) {
                  if (value > 100) {
                    return `${value.toLocaleString()}`
                  } else {
                    return `${value.toFixed(2)}%`
                  }
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
