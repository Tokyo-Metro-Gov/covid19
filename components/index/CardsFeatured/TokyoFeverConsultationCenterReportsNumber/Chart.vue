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
    <div v-show="canvas">
      <bar
        :ref="'barChart'"
        :chart-id="chartId"
        :chart-data="displayData"
        :options="displayOption"
        :display-legends="displayLegends"
        :height="240"
        :width="300"
        :min="startDate"
        :max="endDate"
        :y-axis-max="scaledTicksYAxisMax"
      />
      <date-range-slider
        :id="titleId"
        :min-date="minDate"
        :max-date="maxDate"
        :default-day-period="dayPeriod"
        @start-date="startDate = $event"
        @end-date="endDate = $event"
      />
    </div>
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
        :is-single-card="isSingleCard"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions } from 'chart.js'
import dayjs, { extend } from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import type { PropType } from 'vue'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DateRangeSlider from '@/components/index/_shared/DateRangeSlider.vue'
import DataView from '~/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '~/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '~/components/index/_shared/DataViewTable.vue'
import { DisplayData } from '~/plugins/vue-chart'
import calcDayBeforeRatio from '~/utils/calcDayBeforeRatio'
import { getGraphSeriesColor, SurfaceStyle } from '~/utils/colors'

extend(isBetween)

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
  startDate: string
  endDate: string
}
type Methods = {
  onClickLegend: (i: number) => void
}
type Computed = {
  minDate: string
  maxDate: string
  displayInfo: DisplayInfo
  displayData: DisplayData
  displayOption: ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  startDateIndex: number
  endDateIndex: number
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
  dayPeriod: number
  isSingleCard: boolean
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
    DateRangeSlider,
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
    dayPeriod: {
      type: Number,
      default: 60,
    },
    isSingleCard: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      displayLegends: [true, true, true],
      colors: [
        getGraphSeriesColor('A'),
        getGraphSeriesColor('C'),
        getGraphSeriesColor('E'),
      ],
      canvas: true,
      startDate: '2020-01-01',
      endDate: dayjs().format('YYYY-MM-DD'),
    }
  },
  computed: {
    minDate() {
      return dayjs(this.labels[0]).format('YYYY-MM-DD')
    },
    maxDate() {
      return dayjs(this.labels[this.labels?.length - 1]).format('YYYY-MM-DD')
    },
    displayInfo() {
      const data = {
        labels: this.labels,
        datasets: [
          { data: this.chartData[0] },
          { data: this.chartData[1] },
          { data: this.chartData[2] },
        ],
      }
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: data,
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

      const rangeDate = this.labels.filter((item) => {
        const date = dayjs(item)
        return date.isBetween(this.startDate, this.endDate, null, '[]')
      })

      return {
        labels: rangeDate,
        datasets: [
          {
            type: 'bar',
            label: this.dataLabels[0],
            data: this.chartData[0].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            backgroundColor: graphSeries[0].fillColor,
            borderColor: graphSeries[0].strokeColor,
            borderWidth: 1,
            order: 1,
          },
          {
            type: 'bar',
            label: this.dataLabels[1],
            data: this.chartData[1].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
            backgroundColor: graphSeries[1].fillColor,
            borderColor: graphSeries[1].strokeColor,
            borderWidth: 1,
            order: 2,
          },
          {
            type: 'line',
            label: this.dataLabels[2],
            data: this.chartData[2].slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ),
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
    scaledTicksYAxisMax() {
      const max = Array.from(this.chartData[0].keys())
        .map((i) => this.chartData[0][i] + this.chartData[1][i])
        .reduce((a, b) => Math.max(a, b), 0)
      const maxTotal = this.chartData[2].reduce(
        (a, b) => Math.max(a!, b!),
        max
      )!
      const digits = String(maxTotal).length
      const base = 10 ** (digits - 1)
      return Math.ceil(max / base) * base
    },
    startDateIndex() {
      const searchIndex = this.labels?.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.startDate
      })
      return searchIndex === -1 ? 0 : searchIndex
    },
    endDateIndex() {
      const searchIndex = this.labels?.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.endDate
      })
      return searchIndex === -1 ? this.labels?.length - 1 : searchIndex
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

    this.$nextTick().then(() => {
      this.startDate = dayjs(this.maxDate)
        .subtract(this.dayPeriod, 'day')
        .format('YYYY-MM-DD')
    })
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
