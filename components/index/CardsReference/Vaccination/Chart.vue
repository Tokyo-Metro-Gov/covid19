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
        <button>
          <div
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
    <template #description>
      <slot name="description" />
    </template>
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
        :unit="di.unit"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions, PluginServiceRegistrationOptions } from 'chart.js'
import Vue, { PropType } from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { TranslateResult } from 'vue-i18n'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import ScrollableChart from '@/components/index/_shared/ScrollableChart.vue'
import {
  DisplayData,
  yAxesBgPlugin,
  yAxesBgRightPlugin,
} from '@/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'
import { getNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

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
  unit: string
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
}
type Period = {
  begin: Date
  end: Date
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
  periods: string[]
  lastPeriod: Period
  unit: string
  url: string
  optionUnit: string
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
    periods: {
      type: Array,
      default: () => [],
    },
    lastPeriod: {
      type: Object as PropType<Period>,
      default: () => ({ begin: new Date(), end: new Date() }),
    },
    unit: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    optionUnit: {
      type: String,
      required: false,
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
    colors: [getGraphSeriesColor('C'), getGraphSeriesColor('A')],
    canvas: true,
  }),
  computed: {
    displayInfo() {
      const lastData = (dataset: number[]) => {
        return dataset.slice(-1)[0]
      }
      const periodText = `${this.$t('{dateEnd}累計値', {
        dateEnd: this.$d(this.lastPeriod.end, 'date'),
      })}`
      return [
        {
          lText: this.getFormatter(0)(lastData(this.chartData[0])),
          sText: periodText,
          unit: this.unit,
        },
        {
          lText: this.getFormatter(1)(lastData(this.chartData[1])),
          sText: periodText,
          unit: this.unit,
        },
      ]
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
            { text: this.periods[i] },
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
      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            title: (tooltipItem) => {
              return this.periods[tooltipItem[0].index!]
            },
            label: (tooltipItem, data) => {
              const index = tooltipItem.datasetIndex!
              const title = this.$t(data.datasets![index].label!)
              const num = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              const unit = this.$t(this.unit)
              return `${title}: ${num} ${unit}`
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
              id: 'period',
              stacked: false,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080',
                callback: (_, i) => {
                  return this.periods[i]
                },
              },
            },
            {
              id: 'year',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'year',
                displayFormats: {
                  year: 'YYYY',
                },
              },
            },
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true,
                drawOnChartArea: true,
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                suggestedMin: 0,
                fontColor: '#808080',
                callback: (value) => {
                  return `${value}${this.unit}`
                },
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
      const options: ChartOptions = {
        tooltips: { enabled: false },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'period',
              stacked: false,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: 'transparent',
                callback: (_, i) => {
                  return this.periods[i]
                },
              },
            },
            {
              id: 'year',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: false, // displayOption では true
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // displayOption では #808080
                padding: 13, // 3 + 10(tickMarkLength)，displayOption では 3
                fontStyle: 'bold',
              },
              type: 'time',
              time: {
                unit: 'year',
              },
            },
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                suggestedMin: 0,
                fontColor: '#808080',
                callback: (value) => {
                  return `${value}${this.unit}`
                },
              },
            },
          ],
        },
        animation: { duration: 0 },
      }

      return options
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
</style>
