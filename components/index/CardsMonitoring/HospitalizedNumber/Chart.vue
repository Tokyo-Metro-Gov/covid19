<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="title + infoTitles.join(',')"
  >
    <template #description>
      <slot name="description" />
    </template>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <div v-show="canvas">
      <bar
        :ref="'barChart'"
        :chart-id="chartId"
        :chart-data="displayData"
        :options="displayOption"
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
        :l-text="displayInfo[0].lText"
        :s-text="displayInfo[0].sText"
        :unit="displayInfo[0].unit"
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
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import type { TranslateResult } from 'vue-i18n'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/index/_shared/DataViewTable.vue'
import DateRangeSlider from '@/components/index/_shared/DateRangeSlider.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
import { DataSets, DataSetsPoint, DisplayData } from '@/plugins/vue-chart'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import { getGraphSeriesStyle } from '@/utils/colors'
import { GraphDataType } from '@/utils/formatGraph'

extend(isBetween)

type Data = {
  dataKind: 'transition'
  canvas: boolean
  startDate: string
  endDate: string
}
type Methods = {}

type Computed = {
  minDate: string
  maxDate: string
  makeDashedRectangleData: {
    x: string
    y: number
  }[]
  displayInfo: [
    {
      lText: string
      sText: string
      unit: string
    }
  ]
  displayData: {
    labels: string[]
    datasets: (DataSets | DataSetsPoint)[]
  }
  displayOption: ChartOptions
  scaledTicksYAxisMax: number
  tableHeaders: TableHeader[]
  tableData: TableItem[]
}

type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: GraphDataType[]
  date: string
  unit: string
  url: string
  dashedRectangleRange: string
  addedValue: number
  tableLabels: string[] | TranslateResult[]
  dayPeriod: number
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
    OpenDataLink,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    infoTitles: {
      type: Array,
      default: () => [],
    },
    chartId: {
      type: String,
      default: 'dashed-rectangle-time-bar-chart',
    },
    chartData: {
      type: Array,
      default: () => [],
    },
    date: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    dashedRectangleRange: {
      type: String,
      required: true,
    },
    addedValue: {
      type: Number,
      default: 0,
    },
    tableLabels: {
      type: Array,
      default: () => [],
    },
    dayPeriod: {
      type: Number,
      default: 60,
    },
  },
  data: () => ({
    dataKind: 'transition',
    canvas: true,
    startDate: '2020-01-01',
    endDate: dayjs().format('YYYY-MM-DD'),
  }),
  computed: {
    minDate() {
      return this.chartData[0].label
    },
    maxDate() {
      return this.chartData[this.chartData.length - 1].label
    },
    makeDashedRectangleData() {
      const max = Math.max(...this.chartData.map((d) => d.transition))
      const firstDay = this.chartData[0].label
      return [
        { x: firstDay, y: 0 },
        { x: firstDay, y: max + this.addedValue },
        { x: this.dashedRectangleRange, y: max + this.addedValue },
        { x: this.dashedRectangleRange, y: 0 },
        { x: firstDay, y: 0 },
      ]
    },
    displayInfo() {
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: this.displayData as DisplayData,
      })
      return [
        {
          lText: lastDayData,
          sText: `${this.$t('{date} の数値', {
            date: this.$d(lastDay, 'date'),
          })}（${this.$t('前日比')}: ${dayBeforeRatio} ${this.unit}）`,
          unit: this.unit,
        },
      ]
    },
    displayData() {
      const style = getGraphSeriesStyle(1)[0]
      return {
        labels: this.chartData.map((d) => d.label),
        datasets: [
          {
            type: 'bar',
            label: this.dataKind,
            data: this.chartData.map((d) => {
              return d.transition
            }),
            backgroundColor: style.fillColor,
            borderColor: style.strokeColor,
            borderWidth: 1,
            order: 1,
          },
          {
            type: 'line',
            label: 'dashed-rectangle',
            data: this.makeDashedRectangleData,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderColor: '#1b4d30',
            borderWidth: 2,
            borderDash: [4, 4],
            fill: false,
            order: 0,
            lineTension: 0,
          },
        ],
      }
    },
    displayOption() {
      const unit = this.unit

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          filter(tooltipItem) {
            return tooltipItem.datasetIndex !== 1
          },
          callbacks: {
            label: (tooltipItem) => {
              return `${parseInt(tooltipItem.value!).toLocaleString()} ${unit}`
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
    scaledTicksYAxisMax() {
      const values = this.chartData
        .filter((item) => {
          const date = dayjs(item.label)
          return date.isBetween(this.startDate, this.endDate, null, '[]')
        })
        .map((d) => d.transition)
      const max = Math.max(...values) + this.addedValue
      const digits = String(max).length
      const base = 10 ** (digits - 1)
      return Math.ceil(max / base) * base
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        {
          text: `${this.tableLabels[0]} (${this.$t('日別')})`,
          value: 'transition',
          align: 'end',
        },
      ]
    },
    tableData() {
      return this.chartData
        .map((d, _) => {
          return {
            text: d.label,
            transition: d.transition.toLocaleString(),
          }
        })
        .sort((a, b) => dayjs(a.text).unix() - dayjs(b.text).unix())
        .reverse()
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
