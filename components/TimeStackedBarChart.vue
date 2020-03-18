<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        {{ $t('（注）同一の対象者について複数の検体を調査する場合あり') }}
        <br />
        {{
          $t(
            '検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります'
          )
        }}
      </p>
      <data-selector v-model="dataKind" :target-id="chartId" />
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="options"
      :height="240"
    />
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
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  currentTarget: T
}
type Data = {
  dataKind: 'transition' | 'cumulative'
}
type Methods = {
  sum: (array: number[]) => number
  cumulative: (array: number[]) => number[]
  pickLastNumber: (chartDataArray: number[][]) => number[]
  cumulativeSum: (chartDataArray: number[][]) => number[]
  eachArraySum: (chartDataArray: number[][]) => number[]
}

type Computed = {
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
  displayData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
      borderWidth: number
    }[]
  }
  options: {
    tooltips: {
      displayColors: boolean
      callbacks: {
        label: (tooltipItem: any) => string
        title: (tooltipItem: any, data: any) => string
      }
    }
    responsive: boolean
    maintainAspectRatio: boolean
    legend: {
      display: boolean
      onHover: (e: HTMLElementEvent<HTMLElement>) => void
      onLeave: (e: HTMLElementEvent<HTMLElement>) => void
    }
    scales: object
  }
}

type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: number[][]
  date: string
  items: string[]
  labels: string[]
  unit: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataView, DataSelector, DataViewBasicInfoPanel },
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
    chartId: {
      type: String,
      default: 'time-stacked-bar-chart'
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
      default: () => []
    },
    labels: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dataKind: 'transition'
  }),
  computed: {
    displayInfo() {
      if (this.dataKind === 'transition') {
        return {
          lText: this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),
          sText: `${this.$t('{date}の合計', {
            date: this.labels[this.labels.length - 1]
          })}`,
          unit: this.unit
        }
      }
      return {
        lText: this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),
        sText: `${this.$t('{date}の全体累計', {
          date: this.labels[this.labels.length - 1]
        })}`,
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
            data: this.cumulative(item),
            backgroundColor: colorArray[index],
            borderWidth: 0
          }
        })
      }
    },
    options() {
      const unit = this.unit
      const sumArray = this.eachArraySum(this.chartData)
      const data = this.chartData
      const cumulativeData = this.chartData.map(item => {
        return this.cumulative(item)
      })
      const cumulativeSumArray = this.eachArraySum(cumulativeData)
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem: any) => {
              const labelTokyo = this.$t('都内')
              const labelOthers = this.$t('その他')
              const labelArray = [labelTokyo, labelOthers]
              let casesTotal, cases
              if (this.dataKind === 'transition') {
                casesTotal = sumArray[tooltipItem.index].toLocaleString()
                cases = data[tooltipItem.datasetIndex][
                  tooltipItem.index
                ].toLocaleString()
              } else {
                casesTotal = cumulativeSumArray[
                  tooltipItem.index
                ].toLocaleString()
                cases = cumulativeData[tooltipItem.datasetIndex][
                  tooltipItem.index
                ].toLocaleString()
              }

              return `${
                labelArray[tooltipItem.datasetIndex]
              }: ${cases} ${unit} (${this.$t('合計')}: ${casesTotal} ${unit})`
            },
            title(tooltipItem, data) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          onHover: (e: HTMLElementEvent<HTMLElement>): void => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: (e: HTMLElementEvent<HTMLElement>): void => {
            e.currentTarget.style.cursor = 'default'
          }
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                minRotation: 0,
                callback: (label: string) => {
                  return label.split('/')[1]
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
                callback: (label: string) => {
                  const monthStringArry = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]
                  const month = monthStringArry.indexOf(label.split(' ')[0]) + 1
                  return month + '月'
                }
              },
              type: 'time',
              time: {
                unit: 'month'
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
  },
  methods: {
    cumulative(array: number[]): number[] {
      const cumulativeArray: number[] = []
      let patSum = 0
      array.forEach(d => {
        patSum += d
        cumulativeArray.push(patSum)
      })
      return cumulativeArray
    },
    sum(array: number[]): number {
      return array.reduce((acc, cur) => {
        return acc + cur
      })
    },
    pickLastNumber(chartDataArray: number[][]) {
      return chartDataArray.map(array => {
        return array[array.length - 1]
      })
    },
    cumulativeSum(chartDataArray: number[][]) {
      return chartDataArray.map(array => {
        return array.reduce((acc, cur) => {
          return acc + cur
        })
      })
    },
    eachArraySum(chartDataArray: number[][]) {
      const sumArray: number[] = []
      for (let i = 0; i < chartDataArray[0].length; i++) {
        sumArray.push(chartDataArray[0][i] + chartDataArray[1][i])
      }
      return sumArray
    }
  }
}

export default Vue.extend(options)
</script>

<style lang="scss" scoped>
.Graph-Desc {
  width: 100%;
  margin: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
