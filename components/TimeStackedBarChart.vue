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
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

function cumulative(array: any) {
  const cumulativeArray: any = []
  let patSum = 0
  array.forEach((d: any) => {
    patSum += d
    cumulativeArray.push(patSum)
  })
  return cumulativeArray
}

function sum(array: any) {
  return array.reduce((acc: any, cur: any) => {
    return acc + cur
  })
}

function pickLastNumber(chartDataArray: any) {
  return chartDataArray.map((array: any) => {
    return array[array.length - 1]
  })
}

function cumulativeSum(chartDataArray: any) {
  return chartDataArray.map((array: any) => {
    return array.reduce((acc: any, cur: any) => {
      return acc + cur
    })
  })
}

type LocalData = {
  dataKind: string
}

type PanelData = {
  lText: string
  sText: string
  unit: string
}

type ChartData = {
  labels: string
  datasets: DataSet[]
}

type DataSet = {
  label: string
  data: object
  backgroundColor: string
  borderWidth: number
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
  data(): LocalData {
    return {
      dataKind: 'transition'
    }
  },
  computed: {
    displayInfo(): InfoData {
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
    displayData(): ChartData {
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
            label(tooltipItem: any) {
              const labelText =
                parseInt(tooltipItem.value).toLocaleString() + unit
              return labelText
            },
            title(tooltipItem: any, data: any) {
              return data.labels[tooltipItem[0].index].replace(
                /(\w+)\/(\w+)/,
                '$1月$2日'
              )
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
