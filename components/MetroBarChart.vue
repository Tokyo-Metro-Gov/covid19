<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in items" :key="i" @click="onClickLegend(i)">
        <button>
          <div
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor,
              width: '20px',
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
import { Chart, ChartData, ChartOptions } from 'chart.js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import AppLink from '@/components/AppLink.vue'
import DataView from '@/components/DataView.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/DataViewTable.vue'
import ScrollableChart from '@/components/ScrollableChart.vue'
import { DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import { getGraphSeriesStyle, SurfaceStyle } from '@/utils/colors'

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
  displayOption: Chart.ChartOptions
  displayDataHeader: DisplayData
  displayOptionHeader: Chart.ChartOptions
}
type Props = {
  chartData: ChartData
  chartOption: ChartOptions
  chartId: string
  title: string
  titleId: string
  date: string
  items: string[]
  periods: string[]
  unit: string
  tooltipsTitle: Chart.ChartTooltipCallback['title']
  tooltipsLabel: Chart.ChartTooltipCallback['label']
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
      default: 'metro-bar-chart',
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
    colors: getGraphSeriesStyle(3),
    canvas: true,
    yAxesBgPlugin,
    displayLegends: [true, true, true],
  }),
  computed: {
    displayData() {
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label: label as string,
          data: this.chartData.datasets!.map((d) => d.data![i]) as number[],
          backgroundColor: this.colors[i].fillColor,
          borderColor: this.colors[i].strokeColor,
          borderWidth: 1,
        }
      })
      return {
        labels: this.chartData.datasets!.map((d) => d.label!),
        datasets,
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.chartData.labels!.map((text, value) => {
          return { text: text as string, value: String(value), align: 'end' }
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
                fontColor: '#808080',
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
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
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
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label: label as string,
          data: this.chartData.datasets!.map((d) => d.data![i]) as number[],
          backgroundColor: 'transparent',
          borderWidth: 0,
        }
      })
      return {
        labels: this.chartData.datasets!.map((d) => d.label!),
        datasets,
      }
    },
    displayOptionHeader() {
      const options: Chart.ChartOptions = {
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
                drawTicks: false, // true -> false
                drawBorder: false,
                tickMarkLength: 10,
              },
              ticks: {
                fontSize: 11,
                fontColor: 'transparent', // #808080
                padding: 13, // 3 + 10(tickMarkLength)
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
                fontColor: '#808080',
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
