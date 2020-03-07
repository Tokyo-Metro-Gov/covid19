<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <p class="MetroGraph-Desc">
        {{ chartData.base_period }}の利用者数*の平均値を100としたときの相対値
        <br />
        *都営地下鉄4路線の自動改札出場数
      </p>
    </template>
    <bar :chart-data="displayData" :options="chartOption" :height="240" />
  </data-view>
</template>

<style lang="scss">
.MetroGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: #808080;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { ChartOptions, ChartData } from 'chart.js'
import DataView from '@/components/DataView.vue'

export type DataType = {
  value: string
}

export default Vue.extend<
  {},
  {},
  {},
  {
    chartData: ChartData
    chartOption: ChartOptions
    title: string
    date: string
  }
>({
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    chartData: Object,
    chartOption: Object,
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    displayData() {
      const colors: string[] = ['#a6e29f', '#63c765', '#008b41']
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label,
          data: this.chartData.datasets!.map(d => d.data![i]),
          backgroundColor: colors[i],
          borderWidth: 0
        }
      })
      return {
        labels: this.chartData.datasets!.map(d => d.label),
        datasets
      }
    }
  }
})
</script>
