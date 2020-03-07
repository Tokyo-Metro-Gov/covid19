<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <data-selector v-model="dataKind" />
    </template>
    <bar :chart-data="displayData" :options="options" :height="240" />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { ChartData, ChartTooltipItem } from 'chart.js'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

function cumulative(array: number[]): number[] {
  const cumulativeArray: number[] = []
  let patSum = 0
  array.forEach((d: number) => {
    patSum += d
    cumulativeArray.push(patSum)
  })
  return cumulativeArray
}

function sum(array: number[]): number {
  return array.reduce((acc, cur) => {
    return acc + cur
  })
}
// 数字の配列の配列
function pickLastNumber(chartDataArray: number[][]) {
  return chartDataArray.map(array => array[array.length - 1])
}

function cumulativeSum(chartDataArray: number[][]) {
  return chartDataArray.map(array => {
    return array.reduce((acc: number, cur: number) => acc + cur)
  })
}

type LocalData = {
  dataKind: 'transition' | 'cumulative'
  chartData: number[][]
}

type PanelData = {
  lText: string
  sText: string
  unit: string
}

export default Vue.extend({
  components: {
    DataView,
    DataSelector,
    DataViewBasicInfoPanel
  },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    chartData: {
      type: Object as () => ChartData[],
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
  data: (): LocalData => ({
    dataKind: 'transition',
    chartData: []
  }),
  computed: {
    displayInfo(): PanelData {
      if (this.dataKind === 'transition') {
        return {
          lText: sum(pickLastNumber(this.chartData)).toLocaleString(),
          sText: `${this.labels[this.labels.length - 1]} の合計`,
          unit: this.unit
        }
      }
      return {
        lText: sum(cumulativeSum(this.chartData)).toLocaleString(),
        sText: `${this.labels[this.labels.length - 1]} の全体累計`,
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
            data: cumulative(item),
            backgroundColor: colorArray[index],
            borderWidth: 0
          }
        })
      }
    },
    options() {
      const unit = this.unit
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label(tooltipItem: ChartTooltipItem) {
              return tooltipItem.value ? tooltipItem.value + unit : '0' + unit
            },
            title(tooltipItem: ChartTooltipItem[], data: ChartData) {
              if (
                tooltipItem &&
                tooltipItem.length > 0 &&
                data.labels &&
                data.labels.length > 0
              ) {
                const index = tooltipItem[0].index as number
                const date = data.labels[index] as string
                return date.replace(/(\w+)\/(\w+)/, '$1月$2日')
              }
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
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
  }
})
</script>
