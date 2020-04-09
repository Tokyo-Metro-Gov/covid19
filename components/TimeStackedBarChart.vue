<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <ul :class="$style.GraphDesc">
        <li>
          {{ $t('（注）医療機関が保険適用で行った検査は含まれていない') }}
        </li>
        <li>
          {{ $t('（注）同一の対象者について複数の検体を検査する場合あり') }}
        </li>
        <li>
          {{
            $t(
              '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
            )
          }}
        </li>
      </ul>
      <data-selector
        v-model="dataKind"
        :target-id="chartId"
        :style="{ display: canvas ? 'inline-block' : 'none' }"
      />
    </template>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <bar
      :ref="'barChart'"
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="options"
      :height="240"
    />
    <template v-slot:dataTable>
      <v-data-table
        :headers="tableHeaders"
        :items="tableData"
        :items-per-page="-1"
        :hide-default-footer="true"
        :height="240"
        :fixed-header="true"
        :disable-sort="true"
        :mobile-breakpoint="0"
        class="cardTable"
        item-key="name"
      />
    </template>
    <p :class="$style.DataViewDesc">
      <slot name="additionalNotes" />
    </p>
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
import { TranslateResult } from 'vue-i18n'
import dayjs from 'dayjs'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import { getGraphSeriesStyle } from '@/utils/colors'

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  currentTarget: T
}
type Data = {
  dataKind: 'transition' | 'cumulative'
  canvas: boolean
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
      borderColor: string
      borderWidth: number
    }[]
  }
  tableHeaders: {
    text: TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
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
  dataLabels: string[] | TranslateResult[]
  unit: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    this.canvas = process.browser
  },
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
    dataLabels: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dataKind: 'transition',
    canvas: true
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
      const graphSeries = getGraphSeriesStyle(this.chartData.length)
      if (this.dataKind === 'transition') {
        return {
          labels: this.labels,
          datasets: this.chartData.map((item, index) => {
            return {
              label: this.items[index],
              data: item,
              backgroundColor: graphSeries[index].fillColor,
              borderColor: graphSeries[index].strokeColor,
              borderWidth: 1
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
            backgroundColor: graphSeries[index].fillColor,
            borderColor: graphSeries[index].strokeColor,
            borderWidth: 1
          }
        })
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.dataLabels as string[])
          .reduce((arr: string[], text: string) => {
            arr.push(
              ...[this.$t('日別'), this.$t('累計')].map(
                label => `${text} (${label})`
              )
            )
            return arr
          }, [])
          .map((text: string, i: number) => {
            return { text, value: String(i), align: 'end' }
          })
      ]
    },
    tableData() {
      return this.labels
        .map((label: string, i) => {
          return Object.assign(
            { text: label },
            ...this.tableHeaders.map((_, j) => {
              const index = j < 2 ? 0 : 1
              const transition = this.chartData[index]
              const cumulative = this.cumulative(transition)
              return {
                [j]:
                  j % 2 === 0
                    ? transition[i].toString()
                    : cumulative[i].toString()
              }
            })
          )
        })
        .sort((a, b) => (dayjs(a.text).isBefore(dayjs(b.text)) ? 1 : -1))
    },
    options() {
      const unit = this.unit
      const sumArray = this.eachArraySum(this.chartData)
      const data = this.chartData
      const cumulativeData = this.chartData.map(item => {
        return this.cumulative(item)
      })
      const cumulativeSumArray = this.eachArraySum(cumulativeData)
      const options = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem: any) => {
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
                this.dataLabels[tooltipItem.datasetIndex]
              }: ${cases} ${unit} (${this.$t('合計')}: ${casesTotal} ${unit})`
            },
            title(tooltipItem: any, data: any) {
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
                callback: (label: string) => {
                  return label.split('/')[1]
                }
              }
              // #2384: If you set "type" to "time", make sure that the bars at both ends are not hidden.
              // #2384: typeをtimeに設定する時はグラフの両端が見切れないか確認してください
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
                fontStyle: 'bold'
              },
              type: 'time',
              time: {
                unit: 'month',
                parser: 'M/D',
                displayFormats: {
                  month: 'MMM'
                }
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
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
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
  },
  mounted() {
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    const labelledbyId = `${this.titleId}-graph`

    if (canvas) {
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-labelledby', labelledbyId)
    }
  }
}

export default Vue.extend(options)
</script>

<style module lang="scss">
.Graph {
  &Desc {
    width: 100%;
    margin: 0;
    margin-bottom: 0 !important;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
}

.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    line-height: 15px;
    color: $gray-3;
  }
}
</style>
