<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="MetroGraph-Desc">
        {{
          $t('{range}の利用者数*の平均値を基準としたときの相対値', {
            range: $t(chartData.base_period)
          })
        }}
        <br />
        *{{ $t('都営地下鉄4路線の自動改札出場数') }}
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

<style lang="scss">
.MetroGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { ChartOptions, ChartData } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import DataView from '@/components/DataView.vue'

type Data = {}
type Methods = {}
type Computed = {
  displayData: {
    labels: (string | undefined)[]
    datasets: object
  }
}
type Props = {
  chartData: ChartData
  chartOption: ChartOptions
  chartId: string
  title: string
  titleId: string
  date: string
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
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartData: Object,
    chartOption: Object,
    chartId: {
      type: String,
      default: 'metro-bar-chart'
    },
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
}

export default Vue.extend(options)
</script>
