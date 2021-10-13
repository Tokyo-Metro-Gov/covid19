<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template #description>
      <slot name="description" />
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li
        v-for="(dataLabel, i) in dataLabels"
        :key="i"
        @click="onClickLegend(i)"
      >
        <button role="checkbox" :aria-checked="`${displayLegends[i]}`">
          <span
            v-if="i === 2"
            :class="$style.area"
            :style="{
              backgroundColor: colors[i].fillColor,
              border: 0,
              height: '3px',
            }"
          />
          <span
            v-else
            :class="$style.area"
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor,
            }"
          />
          <span
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through',
            }"
            >{{ dataLabel }}</span
          >
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <scrollable-chart v-show="canvas" :display-data="displayData">
      <template #chart="{ chartWidth }">
        <bar
          :ref="'barChart'"
          :chart-id="chartId"
          :chart-data="displayData"
          :options="displayOption"
          :display-legends="displayLegends"
          :height="240"
          :width="chartWidth"
        />
      </template>
      <template #sticky-chart>
        <bar
          :ref="'stickyChart'"
          class="sticky-legend"
          :chart-id="`${chartId}-header`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
          :display-legends="displayLegends"
          :height="240"
        />
      </template>
    </scrollable-chart>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableData" />
      </client-only>
    </template>
    <template #infoPanel>
      <data-view-data-set-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :s-text-under="displayInfo.sTextUnder"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions, PluginServiceRegistrationOptions } from 'chart.js'
import dayjs from 'dayjs'
import type { PropType } from 'vue'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DataView from '~/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '~/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '~/components/index/_shared/DataViewTable.vue'
import ScrollableChart from '~/components/index/_shared/ScrollableChart.vue'
import { DisplayData, yAxesBgPlugin } from '~/plugins/vue-chart'
import calcDayBeforeRatio from '~/utils/calcDayBeforeRatio'
import { getGraphSeriesColor, SurfaceStyle } from '~/utils/colors'

type DisplayInfo = {
  lText: string
  sText: string
  sTextUnder: string
  unit: string
}

type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
}
type Methods = {
  onClickLegend: (i: number) => void
}
type Computed = {
  displayInfo: DisplayInfo
  displayData: DisplayData
  displayOption: ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: TableHeader[]
  tableData: TableItem[]
}
type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: [number[], number[], (number | null)[]]
  getFormatter: (_: number) => (d: number) => string | undefined
  date: string
  labels: string[]
  dataLabels: string[]
  tableLabels: string[]
  unit: string
  yAxesBgPlugin: PluginServiceRegistrationOptions[]
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
  components: {
    DataView,
    DataViewTable,
    DataViewDataSetPanel,
    ScrollableChart,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      required: false,
      default: '',
    },
    infoTitles: {
      type: Array as PropType<string[]>,
      required: false,
      default: [],
    },
    chartId: {
      type: String,
      default: 'tokyo-fever-consultation-center-chart',
    },
    chartData: {
      type: Array,
      required: false,
      default: () => [],
    },
    getFormatter: {
      type: Function,
      default: () => (_: number) => '',
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    labels: {
      type: Array,
      default: () => [],
    },
    dataLabels: {
      type: Array,
      default: () => [],
    },
    tableLabels: {
      type: Array,
      default: () => [],
    },
    unit: {
      type: String,
      default: '',
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
  },
  data: () => ({
    displayLegends: [true, true, true],
    colors: [
      getGraphSeriesColor('A'),
      getGraphSeriesColor('C'),
      getGraphSeriesColor('E'),
    ],
    canvas: true,
  }),
  computed: {
    displayInfo() {
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: this.displayData,
        dataIndex: 2,
      })
      return {
        lText: lastDayData,
        sText: `${this.$t('{date} の数値', {
          date: this.$d(lastDay, 'date'),
        })}（${this.$t('７日間移動平均')}）`,
        sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${this.unit}）`,
        unit: this.unit,
      }
    },
    displayData() {
      const graphSeries = [
        getGraphSeriesColor('A'),
        getGraphSeriesColor('C'),
        getGraphSeriesColor('E'),
      ]
      return {
        labels: this.labels,
        datasets: [
          {
            type: 'bar',
            label: this.dataLabels[0],
            data: this.chartData[0],
            backgroundColor: graphSeries[0].fillColor,
            borderColor: graphSeries[0].strokeColor,
            borderWidth: 1,
            order: 1,
          },
          {
            type: 'bar',
            label: this.dataLabels[1],
            data: this.chartData[1],
            backgroundColor: graphSeries[1].fillColor,
            borderColor: graphSeries[1].strokeColor,
            borderWidth: 1,
            order: 2,
          },
          {
            type: 'line',
            label: this.dataLabels[2],
            data: this.chartData[2],
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderColor: graphSeries[2].strokeColor,
            borderWidth: 3,
            fill: false,
            order: 0,
            lineTension: 0,
          },
        ],
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: String(i), align: 'end' }
        }),
      ]
    },
    tableData() {
      return this.labels
        .map((label, i) => {
          return Object.assign(
            { text: label },
            ...this.chartData.map((_, j) => {
              const data = this.chartData[j]
              if (data[i] === null) {
                return {
                  [j]: '',
                }
              }
              return {
                [j]: this.getFormatter(j)(data[i]!),
              }
            })
          )
        })
        .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
        .reverse()
    },
    displayOption() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem) => {
              const formatter = this.getFormatter(tooltipItem.datasetIndex!)
              const cases = formatter(parseFloat(tooltipItem.value!))
              return `${
                this.dataLabels[tooltipItem.datasetIndex!]
              } : ${cases} ${this.unit}`
            },
            title: (tooltipItem, data) => {
              const label = data.labels![tooltipItem[0].index!] as string
              return this.$d(new Date(label), 'date')
            },
          },
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#707070',
                maxRotation: 0,
                callback: (label: string) => {
                  return dayjs(label).format('D')
                },
              },
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
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: '#707070',
                padding: 3,
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'YYYY-MM',
                },
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                drawOnChartArea: true,
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#707070',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
              },
            },
          ],
        },
      }

      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }

      return options
    },
    displayDataHeader() {
      const { datasets } = this.displayData
      const sums = Array.from(datasets[0].data.keys()).map(
        (i) => datasets[0].data[i] + datasets[1].data[i]
      )
      const max = sums.reduce((a, b) => Math.max(a, b), 0)
      const n = sums.indexOf(max)
      return {
        labels: ['2020-01-01'],
        datasets: [
          {
            data: [this.displayData.datasets[0].data[n]],
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          {
            data: [this.displayData.datasets[1].data[n]],
            backgroundColor: 'transparent',
            borderWidth: 0,
          },
          {
            type: 'line',
            data: [this.displayData.datasets[2].data[n]],
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            borderWidth: 0,
          },
        ],
      }
    },
    displayOptionHeader() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax

      const options: ChartOptions = {
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: 'transparent', // displayOption では '#707070'
                maxRotation: 0,
                callback: (label: string) => {
                  return dayjs(label).format('D')
                },
              },
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // displayOption では true
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // displayOption では '#707070'
                padding: 13, // 3 + 10(tickMarkLength)，displayOption では 3
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'month',
                displayFormats: {
                  month: 'YYYY-MM',
                },
              },
            },
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#707070',
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
              },
            },
          ],
        },
        animation: { duration: 0 },
      }

      return options
    },
    scaledTicksYAxisMax() {
      const max = Array.from(this.chartData[0].keys())
        .map((i) => this.chartData[0][i] + this.chartData[1][i])
        .reduce((a, b) => Math.max(a, b), 0)
      return this.chartData[2].reduce((a, b) => Math.max(a!, b!), max)!
    },
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
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

    const stickyChart = this.$refs.stickyChart as Vue
    const stickyElement = stickyChart.$el
    const stickyCanvas = stickyElement.querySelector('canvas')

    if (stickyCanvas) {
      stickyCanvas.setAttribute('aria-hidden', 'true')
    }
  },
}

export default Vue.extend(options)
</script>

<style module lang="scss">
.Graph {
  &Legend {
    text-align: center;
    list-style: none;
    padding: 0 !important;

    li {
      display: inline-block;
      margin: 0 3px;

      .area {
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
</style>
