<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in items" :key="i" @click="onClickLegend(i)">
        <button role="checkbox" :aria-checked="`${displayLegends[i]}`">
          <span
            :class="$style.area"
            :style="{
              backgroundColor: colors[i].fillColor,
              border: 0,
              height: '3px',
            }"
          />
          <span
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through',
            }"
          >
            {{ item }}
          </span>
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
          :height="280"
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
          :display-legends="displayLegends"
          :plugins="yAxesBgPlugin"
          :height="280"
        />
      </template>
    </scrollable-chart>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableData" />
      </client-only>
    </template>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #footer>
      <ul>
        <li>
          <app-link
            to="https://smooth-biz.metro.tokyo.lg.jp/pdf/202004date3.pdf"
          >
            {{ $t('鉄道利用者数の推移（新宿、東京、渋谷、各駅エリア）[PDF]') }}
          </app-link>
        </li>
        <li>
          <app-link to="https://corona.go.jp/">
            {{
              $t(
                '主要駅の改札通過人数の推移（東京、新宿、渋谷、池袋ほか）[内閣官房HP]（ページ下部）'
              )
            }}
          </app-link>
        </li>
      </ul>
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions, ChartTooltipCallback } from 'chart.js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import ScrollableChart from '@/components/index/_shared/ScrollableChart.vue'
import { Dataset as IMetroDataset } from '@/libraries/auto_generated/data_converter/convertMetro'
import { DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'

// TODO: components/index/CardsReference/Metro/Card.vue との重複を解消
interface IMetroDatasetWithLabel extends IMetroDataset {
  label: Date
}

// TODO: components/index/CardsReference/Metro/Card.vue との重複を解消
interface IMetroGraph {
  labels: string[]
  datasets: IMetroDatasetWithLabel[]
}

type Data = {
  colors: SurfaceStyle[]
  canvas: boolean
  displayLegends: boolean[]
}
type Methods = {
  onClickLegend: (i: number) => void
}
type Computed = {
  displayData: DisplayData
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  displayOption: ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: ChartOptions
}
type Props = {
  chartData: IMetroGraph
  chartOption: ChartOptions
  chartId: string
  title: string
  titleId: string
  date: string
  items: string[]
  periods: string[]
  unit: string
  tooltipsTitle: ChartTooltipCallback['title']
  tooltipsLabel: ChartTooltipCallback['label']
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
  components: { DataView, DataViewTable, AppLink, ScrollableChart },
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
    chartData: Object,
    chartOption: Object,
    chartId: {
      type: String,
      default: 'metro-line-chart',
    },
    date: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      default: () => [],
    },
    periods: {
      type: Array,
      default: () => [],
    },
    unit: {
      type: String,
      required: false,
      default: '%',
    },
    tooltipsTitle: {
      type: Function,
      required: true,
    },
    tooltipsLabel: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    colors: [
      getGraphSeriesColor('A'),
      getGraphSeriesColor('B'),
      getGraphSeriesColor('H'),
    ],
    canvas: true,
    yAxesBgPlugin,
    displayLegends: [true, true, true],
  }),
  computed: {
    displayData() {
      const labels = this.chartData.datasets.map((d) => this.$d(d.label))
      const datasets = [
        {
          type: 'line',
          label: this.chartData.labels[0],
          data: this.chartData.datasets.map((d) => d.data[0]),
          pointStyle: 'circle',
          pointRadius: 4,
          pointBackgroundColor: this.colors[0].fillColor,
          pointBorderColor: this.colors[0].fillColor,
          borderColor: this.colors[0].fillColor,
          borderWidth: 2,
          fill: false,
          order: 0,
          lineTension: 0,
        },
        {
          type: 'line',
          label: this.chartData.labels[1],
          data: this.chartData.datasets.map((d) => d.data[1]),
          pointStyle: 'triangle',
          pointRadius: 4,
          pointBackgroundColor: this.colors[1].fillColor,
          pointBorderColor: this.colors[1].fillColor,
          borderColor: this.colors[1].fillColor,
          borderWidth: 2,
          fill: false,
          order: 1,
          lineTension: 0,
        },
        {
          type: 'line',
          label: this.chartData.labels[2],
          data: this.chartData.datasets.map((d) => d.data[2]),
          pointStyle: 'rect',
          pointRadius: 4,
          pointBackgroundColor: this.colors[2].fillColor,
          pointBorderColor: this.colors[2].fillColor,
          borderColor: this.colors[2].fillColor,
          borderWidth: 2,
          fill: false,
          order: 2,
          lineTension: 0,
        },
      ]

      return {
        labels,
        datasets,
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.chartData.labels!.map((text, value) => {
          return { text: text as string, value: String(value) }
        }),
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data
        .map((_, i) => {
          return Object.assign(
            { text: this.periods[i] },
            ...this.chartData.labels!.map((_, j) => {
              return {
                [j]: this.displayData.datasets[j].data[i],
              }
            })
          )
        })
        .reverse()
    },
    displayOption() {
      const options: ChartOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'period',
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#707070',
                callback: (_, i) => {
                  return this.periods[i]
                },
              },
            },
            {
              id: 'year',
              stacked: false,
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
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#707070',
                callback: (value) => {
                  const valueCasted =
                    typeof value === 'number' ? value : Number(value)
                  return `${valueCasted.toFixed(2)}${this.unit}`
                },
              },
            },
          ],
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: this.tooltipsTitle,
            label: this.tooltipsLabel,
          },
        },
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    displayDataHeader() {
      const labels = this.chartData.datasets.map((d) => this.$d(d.label))
      const datasets = this.chartData.labels.map((label, i) => {
        return {
          label,
          data: this.chartData.datasets.map((d) => d.data[i]),
          backgroundColor: 'transparent',
          borderWidth: 0,
        }
      })

      return {
        labels,
        datasets,
      }
    },
    displayOptionHeader() {
      const options: ChartOptions = {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: { enabled: false },
        scales: {
          xAxes: [
            {
              id: 'period',
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: 'transparent', // displayOption では #707070
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
                drawTicks: false, // displayOption では false
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // displayOption では #707070
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
                drawOnChartArea: false,
                color: '#E5E5E5',
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#707070',
                callback: (value) => {
                  const valueCasted =
                    typeof value === 'number' ? value : Number(value)
                  return `${valueCasted.toFixed(2)}${this.unit}`
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
