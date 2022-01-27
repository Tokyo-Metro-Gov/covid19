<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="title + infoTitles.join(',')"
  >
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in dataLabels" :key="i" @click="onClickLegend(i)">
        <button role="checkbox" :aria-checked="`${displayLegends[i]}`">
          <span
            v-if="i === 1"
            :class="$style.area"
            :style="{
              background: colors[i].fillColor,
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
            >{{ item }}</span
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
    <template #dataSetPanel>
      <data-view-data-set-panel
        :title="infoTitles[0]"
        :l-text="displayInfos[0].lText"
        :s-text="displayInfos[0].sText"
        :s-text-under="displayInfos[0].sTextUnder"
        :unit="displayInfos[0].unit"
      />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions } from 'chart.js'
import dayjs, { extend } from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import type { PropType } from 'vue'
import Vue from 'vue'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import DateRangeSlider from '@/components/index/_shared/DateRangeSlider.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import { DisplayData } from '@/plugins/vue-chart'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import { getGraphSeriesColor, SurfaceStyle } from '@/utils/colors'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'

extend(isBetween)

type PatientsCount = number
type WeeklyAverageCount = number | null
type ChartData = (number | null)[][]

interface DisplayInfo {
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
  makeLineData: (value: number) => number[]
  onClickLegend: (i: number) => void
}

type Computed = {
  minDate: string
  maxDate: string
  displayInfos: DisplayInfo[]
  displayData: DisplayData<PatientsCount | WeeklyAverageCount>
  displayOption: ChartOptions
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  scaledTicksYAxisMax: number
  startDateIndex: number
  endDateIndex: number
}

type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: ChartData
  date: string
  labels: string[]
  dataLabels: string[]
  tableLabels: string[]
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
  unit: string
  url: string
  dayPeriod: number
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    DataView,
    DataViewTable,
    DataViewDataSetPanel,
    DateRangeSlider,
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
      default: 'monitoring-number-of-confirmed-cases',
    },
    infoTitles: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => [],
    },
    chartId: {
      type: String,
      default: 'monitoring-confirmed-cases-number-chart',
    },
    chartData: {
      type: Array as PropType<ChartData>,
      required: false,
      default: () => [[], []] as ChartData,
    },
    date: {
      type: String,
      required: true,
      default: '',
    },
    labels: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    dataLabels: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    tableLabels: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    getFormatter: {
      type: Function as PropType<
        (columnIndex: number) => (d: number) => string | undefined
      >,
      required: false,
      default: (_: number) => getNumberToLocaleStringFunction(),
    },
    unit: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    dayPeriod: {
      type: Number,
      default: 60,
    },
  },
  data() {
    const colors: SurfaceStyle[] = [
      getGraphSeriesColor('C'),
      getGraphSeriesColor('E'),
    ]

    return {
      canvas: true,
      displayLegends: [true, true],
      colors,
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
    displayInfos() {
      const data = {
        labels: this.labels,
        datasets: [{ data: this.chartData[0] }, { data: this.chartData[1] }],
      }
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        // 本来は DisplayData<WeeklyAverageCount> だが，
        // 直近のデータを扱うため，値が null のケースは考慮せず，
        // DisplayData<number> とする．
        displayData: data as DisplayData<number>,
        dataIndex: 1,
        digit: 1,
      })
      return [
        {
          lText: lastDayData,
          sText: `${this.$t('{date} の数値', {
            date: this.$d(lastDay, 'date'),
          })}（${this.$t('７日間移動平均')}）`,
          sTextUnder: `（${this.$t('前日比')}: ${dayBeforeRatio} ${
            this.unit
          }）`,
          unit: this.unit,
        },
      ]
    },
    displayData() {
      const barDataSets = {
        type: 'bar',
        label: this.dataLabels[0],
        data: this.chartData[0].slice(
          this.startDateIndex,
          this.endDateIndex + 1
        ),
        backgroundColor: this.colors[0].fillColor,
        borderColor: this.colors[0].strokeColor,
        borderWidth: 1,
        order: 3,
      }

      const lineDataSets = {
        type: 'line',
        label: this.dataLabels[1],
        data: this.chartData[1].slice(
          this.startDateIndex,
          this.endDateIndex + 1
        ),
        pointBackgroundColor: 'rgba(0,0,0,0)',
        pointBorderColor: 'rgba(0,0,0,0)',
        borderColor: this.colors[1].fillColor,
        borderWidth: 3,
        fill: false,
        order: 2,
        lineTension: 0,
      }

      const rangeDate = this.labels.filter((item) => {
        const date = dayjs(item)
        return date.isBetween(this.startDate, this.endDate, null, '[]')
      })

      return {
        labels: rangeDate,
        datasets: [barDataSets, lineDataSets],
      }
    },
    displayOption() {
      const unit = this.unit

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem) => {
              const cases = this.getFormatter(tooltipItem.datasetIndex!)(
                parseFloat(tooltipItem.value!)
              )
              return `${
                this.dataLabels[tooltipItem.datasetIndex!]
              } : ${cases} ${unit}`
            },
            title: (tooltipItems, data) => {
              if (tooltipItems[0].datasetIndex! < 2) {
                const label = data.labels![tooltipItems[0].index!] as string
                return this.$d(new Date(label), 'date')
              }
              return ''
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
              position: 'left',
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
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: `${i}`, align: 'end' }
        }),
      ]
    },
    tableData() {
      return this.labels
        .map((label, i) => {
          return Object.assign(
            { text: label },
            ...(this.tableLabels as string[]).map((_, j) => {
              return {
                [j]: this.getFormatter(j)(this.chartData[j][i]!),
              }
            })
          )
        })
        .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
        .reverse()
    },
    scaledTicksYAxisMax() {
      const max = this.chartData.reduce(
        (max, data) =>
          Math.max(
            max,
            ...(data.slice(
              this.startDateIndex,
              this.endDateIndex + 1
            ) as number[])
          ),
        0
      )
      const digits = String(max).length
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

    this.$nextTick().then(() => {
      this.startDate = dayjs(this.maxDate)
        .subtract(this.dayPeriod, 'day')
        .format('YYYY-MM-DD')
    })
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
    },
    makeLineData(value: number): number[] {
      return this.chartData[0].map((_) => value)
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
