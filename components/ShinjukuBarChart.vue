<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p :class="$style.ShinjukuDesc">
        7:30 ~ 8:30 の平均来訪者数について
        <br />
        習慣平均値（週毎の1日あたりの平均値）を算出
      </p>
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
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script>
import dayjs from 'dayjs'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import updateLocale from 'dayjs/plugin/updateLocale'
import DataView from '@/components/DataView.vue'
import 'dayjs/locale/en'

dayjs.extend(updateLocale)
dayjs.extend(weekOfYear)
dayjs.updateLocale('en', {
  weekStart: 1
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
  computed: {
    groupByWeekData() {
      return this.chartData.reduce((res, d) => {
        const weekNum = dayjs(d.date).week()
        if (!res[weekNum]) res[weekNum] = []
        return res[weekNum].push(d) && res
      }, {})
    },
    displayData() {
      const labels = Object.keys(this.groupByWeekData).map(weekNum => {
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
      const data = Object.values(this.groupByWeekData).map(days => {
        const avg = days.reduce((sum, d) => (sum += d.value), 0) / days.length
        // [要確認] 小数点以下の処理
        return Math.floor(avg)
      })
      return {
        labels,
        datasets: [
          {
            label: 'test',
            data,
            backgroundColor: '#008b41'
          }
        ]
      }
    }
  }
}
</script>
