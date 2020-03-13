<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p :class="$style.ShinjukuDesc">
        7:30 ~ 8:30 の平均来訪者数について
        <br />
        習慣平均値（週毎の1日あたりの平均値）を算出
      </p>
      <data-selector v-model="dataKind" />
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="chartOption"
      :height="240"
    />
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
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataTypeSelector.vue'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.updateLocale('en', {
  weekStart: 1
})

export default {
  components: { DataView, DataSelector },
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
      default: 'metro-bar-chart'
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    chartOption: {
      type: Object,
      required: false,
      default: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      dataKind: 'absolute'
    }
  },
  computed: {
    groupByWeekData() {
      return this.chartData.reduce((res, d) => {
        // 2020年2月3日以降のデータを対象にする
        if (dayjs(d.date).isBefore('2020-02-03', 'day')) return res

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
        const avg = days.reduce((sum, d) => (sum += d.value), 0) / days.length
        // [要確認] 小数点以下の処理
        return Math.floor(avg)
      })
    },
    displayData() {
      if (this.dataKind === 'absolute') {
        return {
          labels: this.labels,
          datasets: [
            {
              data: this.weeklyAvg,
              backgroundColor: '#008b41'
            }
          ]
        }
      } else {
        const mean = this.weeklyAvg[0]
        const data = this.weeklyAvg.map(val => (val / mean) * 100 - 100)
        return {
          labels: this.labels,
          datasets: [
            {
              data,
              backgroundColor: '#008b41'
            }
          ]
        }
      }
    }
  }
}
</script>
