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
  </data-view>
</template>

<script lang="ts">
import { ChartData, ChartOptions, ChartTooltipItem } from 'chart.js'
import type { PropType } from 'vue'
import Vue from 'vue'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import ScrollableChart from '@/components/index/_shared/ScrollableChart.vue'
import { Agency as IAgency } from '@/libraries/auto_generated/data_converter/convertAgency'
import { DataSets, DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import { getGraphSeriesStyle, SurfaceStyle } from '@/utils/colors'

interface AgencyDataSets extends DataSets {
  label: string
}
interface AgencyDisplayData extends DisplayData {
  labels: string[]
  datasets: AgencyDataSets[]
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
  displayData: AgencyDisplayData
  displayOption: ChartOptions
  displayDataHeader: AgencyDisplayData
  displayOptionHeader: ChartOptions
  tableHeaders: TableHeader[]
  tableData: TableItem[]
}
type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: IAgency
  date: string
  labels: string[]
  periods: string[]
  items: string[]
  unit: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: { DataView, DataViewTable, ScrollableChart },
  props: {
    title: {
      type: String,
      required: false,
      default: '',
    },
    titleId: {
      type: String,
      required: false,
      default: '',
    },
    chartId: {
      type: String,
      required: false,
      default: 'agency-bar-chart',
    },
    chartData: {
      type: Object as PropType<IAgency>,
      default: () => ({
        date: '',
        periods: [],
        datasets: [],
      }),
    },
    date: {
      type: String,
      default: '',
    },
    labels: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    periods: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    items: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    unit: {
      type: String,
      required: false,
      default: '',
    },
  },
  data: () => ({
    colors: getGraphSeriesStyle(3),
    canvas: true,
    yAxesBgPlugin,
    displayLegends: [true, true, true],
  }),
  computed: {
    displayData(): AgencyDisplayData {
      return {
        labels: this.labels,
        datasets: this.chartData.datasets.map((dataset, index) => {
          const label = this.items[index]
          const { data } = dataset
          const color = this.colors[index]

          return {
            label,
            data,
            backgroundColor: color.fillColor,
            borderColor: color.strokeColor,
            borderWidth: 1,
          }
        }),
      }
    },
    displayOption(): ChartOptions {
      const options: ChartOptions = {
        maintainAspectRatio: false,
        tooltips: {
          displayColors: false,
          callbacks: {
            title: (tooltipItems: ChartTooltipItem[]) => {
              const dateString = this.periods[tooltipItems[0].index!]
              return this.$t('期間: {duration}', {
                duration: dateString!,
              }) as string
            },
            label: (tooltipItem: ChartTooltipItem, data: ChartData) => {
              const index = tooltipItem.datasetIndex!
              const title = this.$t(data.datasets![index].label!)
              const num = parseInt(tooltipItem.value!).toLocaleString()
              const unit = this.$t(this.unit)
              return `${title}: ${num} ${unit}`
            },
          },
        },
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              id: 'period',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: '#707070',
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
              stacked: true,
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 9,
                fontColor: '#707070',
                maxTicksLimit: 10,
                callback: (label) => {
                  return `${label}${this.unit}`
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
    displayDataHeader(): AgencyDisplayData {
      return {
        labels: this.labels,
        datasets: this.chartData.datasets.map((item, index) => {
          return {
            label: this.items[index] as string,
            data: item.data,
            backgroundColor: 'transparent',
            borderWidth: 0,
          }
        }),
      }
    },
    displayOptionHeader(): ChartOptions {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        tooltips: { enabled: false },
        scales: {
          xAxes: [
            {
              id: 'period',
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 9,
                fontColor: 'transparent', // displayOption では '#707070'
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
                fontColor: 'transparent', // displayOption では '#707070'
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
              stacked: true,
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では定義なし
                color: '#E5E5E5', // displayOption では定義なし
              },
              ticks: {
                suggestedMin: 0, // displayOption では定義なし
                fontColor: '#707070',
                maxTicksLimit: 10,
                callback: (label) => {
                  return `${label}${this.unit}`
                },
              },
            },
          ],
        },
        animation: { duration: 0 },
      }
    },
    tableHeaders(): TableHeader[] {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.displayData.datasets.map((text, value) => {
          return { text: text.label, value: String(value), align: 'end' }
        }),
      ]
    },
    tableData(): TableItem[] {
      return this.displayData.datasets[0].data
        .map((_, i) => {
          return Object.assign(
            { text: this.periods[i] },
            ...this.displayData.datasets!.map((_, j) => {
              return {
                [j]: this.displayData.datasets[j].data[i].toLocaleString(),
              }
            })
          )
        })
        .reverse()
    },
  },
  created() {
    this.canvas = process.browser
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
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
  },
})
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
