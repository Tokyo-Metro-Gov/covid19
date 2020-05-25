<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:description>
      <slot name="description" />
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in items" :key="i" @click="onClickLegend(i)">
        <button>
          <div
            v-if="i < 2"
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor
            }"
          />
          <div
            v-else-if="i == 2"
            :style="{
              background: `repeating-linear-gradient(90deg, ${colors[1].fillColor}, ${colors[1].fillColor} 2px, #fff 2px, #fff 4px`,
              border: 0
            }"
          />
          <div
            v-else
            :style="{
              backgroundColor: colors[1].fillColor,
              borderColor: colors[1].strokeColor
            }"
          />
          <span
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through'
            }"
            >{{ item }}</span
          >
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <div :ref="'EveChart'" class="LegendStickyChart">
      <div class="scrollable" :style="{ display: canvas ? 'block' : 'none' }">
        <div :style="{ width: `${chartWidth}px` }">
          <bar
            :ref="'barChart'"
            :chart-id="chartId"
            :chart-data="displayData"
            :options="displayOption"
            :plugins="scrollPlugin"
            :display-legends="displayLegends"
            :height="240"
            :width="chartWidth"
          />
        </div>
      </div>
      <div>
        <bar
          class="sticky-legend"
          :style="{ display: canvas ? 'block' : 'none' }"
          :chart-id="`${chartId}-header-right`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
          :display-legends="displayLegends"
          :height="240"
          :width="width"
        />
      </div>
    </div>
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
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.text">
              <th scope="row">{{ item.text }}</th>
              <td class="text-end">{{ item['0'] }}</td>
              <td class="text-end">{{ item['1'] }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </template>
    <slot name="additionalNotes" />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { TranslateResult } from 'vue-i18n'
import { Chart } from 'chart.js'
import dayjs from 'dayjs'
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import {
  DisplayData,
  DataSets,
  yAxesBgPlugin,
  scrollPlugin
} from '@/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'

type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
  chartWidth: number | null
  width: number
}
type Methods = {
  sum: (array: number[]) => number
  cumulative: (array: number[]) => number[]
  pickLastNumber: (chartDataArray: number[][]) => number[]
  pickLastSecondNumber: (chartDataArray: number[][]) => number[]
  cumulativeSum: (chartDataArray: number[][]) => number[]
  eachArraySum: (chartDataArray: number[][]) => number[]
  makeLineData: (value: number) => number[]
  onClickLegend: (i: number) => void
  formatDayBeforeRatio: (dayBeforeRatio: number) => string
}

type Computed = {
  displayTransitionRatio: string
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
  displayData: {
    labels: string[]
    datasets: DataSets[]
  }
  displayOption: Chart.ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: Chart.ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: {
    text: TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
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
  tableLabels: string[] | TranslateResult[]
  unit: string
  url: string
  additionalLines: number[]
  scrollPlugin: Chart.PluginServiceRegistrationOptions[]
  yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[]
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
  components: { DataView, DataSelector, DataViewBasicInfoPanel, OpenDataLink },
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
      default: 'SimpleMixedChart'
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
    url: {
      type: String,
      default: ''
    },
    labels: {
      type: Array,
      default: () => []
    },
    dataLabels: {
      type: Array,
      default: () => []
    },
    tableLabels: {
      type: Array,
      default: () => []
    },
    unit: {
      type: String,
      default: ''
    },
    additionalLines: {
      type: Array,
      default: () => []
    },
    scrollPlugin: {
      type: Array,
      default: () => scrollPlugin
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin
    }
  },
  data: () => ({
    displayLegends: [true, true, true, true],
    chartWidth: null,
    colors: [getGraphSeriesColor('B'), getGraphSeriesColor('A')],
    canvas: true,
    width: 300
  }),
  computed: {
    displayTransitionRatio() {
      const lastDay = this.pickLastNumber(this.chartData)[1]
      const lastDayBefore = this.pickLastSecondNumber(this.chartData)[1]
      return this.formatDayBeforeRatio(lastDay - lastDayBefore)
    },
    displayInfo() {
      return {
        lText: this.pickLastNumber(this.chartData)[1].toLocaleString(),
        sText: `${this.$t('{date} の数値', {
          date: dayjs(this.labels[this.labels.length - 1]).format('M/D')
        })}（${this.$t('前日比')}: ${this.displayTransitionRatio} ${
          this.unit
        }）`,
        unit: this.unit
      }
    },
    displayData() {
      const style: SurfaceStyle[] = [
        getGraphSeriesColor('B'),
        getGraphSeriesColor('A')
      ]
      const datasets = [
        {
          type: 'bar',
          label: this.items[0],
          data: this.chartData[0],
          backgroundColor: style[0].fillColor,
          borderColor: style[0].strokeColor,
          borderWidth: 1,
          order: 3
        },
        {
          type: 'line',
          label: this.items[1],
          data: this.chartData[1],
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          borderColor: style[1].fillColor,
          borderWidth: 3,
          fill: false,
          order: 2,
          lineTension: 0
        }
      ]
      if (this.additionalLines) {
        return {
          labels: this.labels,
          datasets: [
            ...datasets,
            {
              type: 'line',
              label: this.items[2],
              data: this.makeLineData(this.additionalLines[0]),
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: style[1].fillColor,
              borderWidth: 2,
              borderDash: [4, 4],
              fill: false,
              order: 1,
              lineTension: 0
            },
            {
              type: 'line',
              label: this.items[3],
              data: this.makeLineData(this.additionalLines[1]),
              pointBackgroundColor: 'rgba(0,0,0,0)',
              pointBorderColor: 'rgba(0,0,0,0)',
              borderColor: style[1].fillColor,
              borderWidth: 2,
              fill: false,
              order: 0,
              lineTension: 0
            }
          ]
        }
      }
      return {
        labels: this.labels,
        datasets
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: String(i), align: 'end' }
        })
      ]
    },
    tableData() {
      return this.labels
        .map((label, i) => {
          return Object.assign(
            { text: dayjs(label).format('M/D') },
            ...this.tableHeaders.map((_, j) => {
              if (j < 2) {
                const data = this.chartData[j]
                if (data[i] === null) {
                  return {
                    [j]: ''
                  }
                }
                return {
                  [j]: data[i].toLocaleString()
                }
              }
            })
          )
        })
        .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
        .reverse()
    },
    displayOption() {
      const unit = this.unit
      const options: Chart.ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: tooltipItem => {
              const cases = tooltipItem.value!.toLocaleString()
              return `${
                this.dataLabels[tooltipItem.datasetIndex!]
              } : ${cases} ${unit}`
            },
            title(tooltipItem, data) {
              if (tooltipItem[0].datasetIndex! < 2) {
                const date = dayjs(
                  data.labels![tooltipItem[0].index!].toString()
                ).format('M/D')
                return String(date)
              }
              return ''
            }
          }
        },
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
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
                  return dayjs(label).format('D')
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
                displayFormats: {
                  month: 'MMM'
                }
              }
            }
          ],
          yAxes: [
            {
              position: 'left',
              gridLines: {
                display: true,
                drawOnChartArea: true,
                color: '#E5E5E5' // #E5E5E5
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080', // #808080
                suggestedMax: this.scaledTicksYAxisMax
              }
            }
          ]
        }
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    displayDataHeader() {
      let n = 0
      let m = 0
      let max = 0
      for (const i in this.displayData.datasets[0].data) {
        const current = this.displayData.datasets[0].data[i]
        if (current > max) {
          max = current
          n = Number(i)
        }
      }
      for (const i in this.displayData.datasets[1].data) {
        const current = this.displayData.datasets[1].data[i]
        if (current > max) {
          max = current
          m = Number(i)
        }
      }
      const test = ['2020/1/1']
      this.labels.map((label, _) => {
        test.push(label)
      })
      return {
        labels: test,
        datasets: [
          {
            data: [this.displayData.datasets[0].data[n]],
            backgroundColor: 'transparent',
            borderWidth: 0
          },
          {
            data: [this.displayData.datasets[1].data[m]],
            backgroundColor: 'transparent',
            borderWidth: 0
          },
          {
            data: [this.additionalLines[0]],
            backgroundColor: 'transparent',
            borderWidth: 0
          },
          {
            data: [this.additionalLines[1]],
            backgroundColor: 'transparent',
            borderWidth: 0
          }
        ]
      }
    },
    displayOptionHeader() {
      const options: Chart.ChartOptions = {
        responsive: false,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: { enabled: false },
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
                fontColor: 'transparent',
                maxRotation: 0,
                minRotation: 0,
                callback: (label: string) => {
                  return dayjs(label).format('D')
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // true -> false
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // #808080
                padding: 13, // 3 + 10(tickMarkLength)
                fontStyle: 'bold'
              },
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              type: 'linear',
              position: 'left',
              gridLines: {
                display: true,
                drawOnChartArea: false,
                color: '#E5E5E5' // #E5E5E5
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080', // #808080
                suggestedMax: this.scaledTicksYAxisMax
              }
            }
          ]
        },
        animation: { duration: 0 }
      }
      return options
    },
    scaledTicksYAxisMax() {
      let max = 0
      for (const i in this.chartData[0]) {
        max = Math.max(max, this.chartData[0][i])
      }
      for (const i in this.chartData[1]) {
        max = Math.max(max, this.chartData[1][i])
      }
      return max
    }
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
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
    pickLastSecondNumber(chartDataArray: number[][]) {
      return chartDataArray.map(array => {
        return array[array.length - 2]
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
    },
    makeLineData(value: number): number[] {
      return this.chartData[0].map(_ => value)
    },
    formatDayBeforeRatio(dayBeforeRatio: number): string {
      const dayBeforeRatioLocaleString = dayBeforeRatio.toLocaleString()
      switch (Math.sign(dayBeforeRatio)) {
        case 1:
          return `+${dayBeforeRatioLocaleString}`
        case -1:
          return `${dayBeforeRatioLocaleString}`
        default:
          return `${dayBeforeRatioLocaleString}`
      }
    }
  },
  mounted() {
    if (this.$el) {
      this.chartWidth =
        ((this.$el!.clientWidth - 22 * 2 - 38) / 60) * this.labels.length + 38
      this.chartWidth = Math.max(
        this.$el!.clientWidth - 22 * 2,
        this.chartWidth
      )
    }
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    const labelledbyId = `${this.titleId}-graph`

    if (canvas) {
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-labelledby', labelledbyId)
    }
    const chartelem = this.$refs.EveChart as Element
    const { width } = getComputedStyle(chartelem)
    this.width = Number(width.replace('px', '')) + 0.5
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
    color: $gray-3;
    list-style: none;
    @include font-size(12);
  }
  &Legend {
    text-align: center;
    list-style: none;
    padding: 0 !important;
    li {
      display: inline-block;
      margin: 0 3px;
      div {
        height: 12px;
        margin: 2px 4px;
        width: 40px;
        display: inline-block;
        vertical-align: middle;
        border-width: 1px;
        border-style: solid;
      }
      button {
        color: $gray-3;
        @include font-size(12);
      }
    }
  }
}

.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    line-height: 15px;
    color: $gray-3;
    @include font-size(12);
  }
}
</style>
