<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="headTitle"
  >
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
    <scrollable-chart
      v-show="canvas"
      :display-data="displayData"
      :is-weekly="true"
    >
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
          :chart-id="`${chartId}-header-right`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
          :display-legends="displayLegends"
          :height="240"
        />
      </template>
    </scrollable-chart>
    <slot name="additionalButton" />
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableDataItems" />
      </client-only>
    </template>
    <template #dataSetPanel>
      <data-view-data-set-panel
        v-for="(di, i) in displayInfo"
        :key="i"
        :title="infoTitles[i]"
        :l-text="di.lText"
        :s-text="di.sText"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions, PluginServiceRegistrationOptions } from 'chart.js'
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { TranslateResult } from 'vue-i18n'

import DataView from '~/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '~/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '~/components/index/_shared/DataViewTable.vue'
import OpenDataLink from '~/components/index/_shared/OpenDataLink.vue'
import ScrollableChart from '~/components/index/_shared/ScrollableChart.vue'
import {
  DisplayData,
  yAxesBgPlugin,
  yAxesBgRightPlugin,
} from '~/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '~/utils/colors'
import { getNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

type Data = {
  canvas: boolean
  displayLegends: boolean[]
  colors: SurfaceStyle[]
}
type Methods = {
  onClickLegend: (i: number) => void
}
type DisplayInfo = {
  lText: string
  sText: string
}
type Computed = {
  displayInfo: DisplayInfo[]
  displayData: DisplayData
  displayOption: ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: ChartOptions
  headTitle: string
  tableHeaders: TableHeader[]
  tableDataItems: TableItem[]
  scaledTicksYAxisMax: number
}
type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: number[][]
  getFormatter: Function
  date: string
  labels: string[]
  dataLabels: string[] | TranslateResult[]
  url: string
  yAxesBgPlugin: PluginServiceRegistrationOptions[]
  yAxesBgRightPlugin: PluginServiceRegistrationOptions[]
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
    OpenDataLink,
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
      type: Array,
      required: false,
      default: () => [],
    },
    chartId: {
      type: String,
      default: 'VariantChart',
    },
    chartData: {
      type: Array,
      required: false,
      default: () => [],
    },
    getFormatter: {
      type: Function,
      required: false,
      default: (_: number) => getNumberToFixedFunction(),
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
    url: {
      type: String,
      default: '',
    },
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
    yAxesBgRightPlugin: {
      type: Array,
      default: () => yAxesBgRightPlugin,
    },
  },
  data: () => ({
    displayLegends: [true, true],
    colors: [getGraphSeriesColor('G'), getGraphSeriesColor('B')],
    canvas: true,
  }),
  computed: {
    displayInfo() {
      const lastData = (dataset: number[]) => {
        return dataset.slice(-1)[0]
      }
      const lastDay = this.labels.slice(-1)[0]
      return this.chartData.map((data) => {
        return {
          lText: this.getFormatter(0)(lastData(data)),
          sText: `${this.$d(lastDay, 'date')} ${this.$t('累計値')}`,
        }
      })
    },
    displayData() {
      const datasets = this.dataLabels.map((_, i) => {
        return {
          label: this.dataLabels[i],
          data: this.chartData[i],
          backgroundColor: this.colors[i].fillColor,
          borderColor: this.colors[i].strokeColor,
          borderWidth: 1,
        }
      })
      return {
        labels: this.labels,
        datasets,
      }
    },
    headTitle() {
      return this.title + this.infoTitles.join(',')
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.dataLabels as string[]).map((text, i) => {
          return { text, value: String(i) }
        }),
      ]
    },
    tableDataItems() {
      return this.displayData.datasets[0].data
        .map((_, i) => {
          return Object.assign(
            { text: this.labels[i] },
            ...this.chartData.map((_, j) => {
              return {
                [j]: this.getFormatter(j)(this.chartData[j][i]),
              }
            })
          )
        })
        .reverse()
    },
    displayOption() {
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            title: (tooltipItem, data) => {
              const label = data.labels![tooltipItem[0].index!] as string
              return this.$d(new Date(label), 'date')
            },
            label: (tooltipItem, data) => {
              const index = tooltipItem.datasetIndex!
              const title = this.$t(data.datasets![index].label!)
              const num = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              return `${title}: ${num}`
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
            },
            {
              id: 'month',
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
              gridLines: {
                display: true,
                drawOnChartArea: true,
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
                fontColor: '#707070',
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
      const datasets = this.dataLabels.map((_, i) => {
        return {
          label: this.dataLabels[i],
          data: this.chartData[i],
          backgroundColor: 'transparent',
          borderWidth: 0,
        }
      })
      return {
        labels: this.labels,
        datasets,
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
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                suggestedMin: 0,
                suggestedMax: scaledTicksYAxisMax,
                fontColor: '#707070',
              },
            },
          ],
        },
        animation: { duration: 0 },
      }

      return options
    },
    scaledTicksYAxisMax() {
      const chartLeftMax = this.chartData[0].reduce((a, b) => Math.max(a, b), 0)
      const chartRightMax = this.chartData[1].reduce(
        (a, b) => Math.max(a, b),
        0
      )
      return Math.max(chartLeftMax, chartRightMax)
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
