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
            v-if="i === 1 || i === 3"
            :class="$style.area"
            :style="{
              background: `repeating-linear-gradient(90deg, ${colors[i].fillColor}, ${colors[i].fillColor} 2px, #fff 2px, #fff 4px)`,
              border: 0,
              height: '3px',
            }"
          />
          <span
            v-else
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
        v-for="(di, i) in displayInfoForTitle"
        :key="`title-${i}`"
        :title="infoTitles[di.index]"
        :l-text="di.lText"
        :s-text="di.sText"
        :is-single-card="isSingleCard"
      />
    </template>
    <template #description>
      <ul>
        <li
          v-for="(di, i) in displayInfoForDescription"
          :key="`description-${i}`"
        >
          {{ `${infoTitles[di.index]} ${di.lText}（${di.sText}）` }}
        </li>
      </ul>
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

import DateRangeSlider from '@/components/index/_shared/DateRangeSlider.vue'
import DataView from '~/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '~/components/index/_shared/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '~/components/index/_shared/DataViewTable.vue'
import OpenDataLink from '~/components/index/_shared/OpenDataLink.vue'
import { DisplayData } from '~/plugins/vue-chart'
import { getGraphSeriesColor, SurfaceStyle } from '~/utils/colors'
import { getNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

extend(isBetween)

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
type DisplayInfo = {
  index: number
  lText: string
  sText: string
}
type Computed = {
  minDate: string
  maxDate: string
  displayInfo: DisplayInfo[]
  displayInfoForTitle: DisplayInfo[]
  displayInfoForDescription: DisplayInfo[]
  displayData: DisplayData
  displayOption: ChartOptions
  headTitle: string
  tableHeaders: TableHeader[]
  tableDataItems: TableItem[]
  startDateIndex: number
  endDateIndex: number
}
type Props = {
  title: string
  titleId: string
  infoTitles: string[]
  chartId: string
  chartData: number[][]
  tableData: number[][]
  getFormatter: Function
  date: string
  labels: string[]
  dataLabels: string[] | TranslateResult[]
  tableLabels: string[] | TranslateResult[]
  url: string
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
    tableData: {
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
    tableLabels: {
      type: Array,
      default: () => [],
    },
    url: {
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
      displayLegends: [true, true, true, true],
      colors: [
        getGraphSeriesColor('A'),
        getGraphSeriesColor('B'),
        getGraphSeriesColor('H'),
        getGraphSeriesColor('H'),
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
      return dayjs(this.labels[this.labels.length - 1]).format('YYYY-MM-DD')
    },
    displayInfo() {
      const lastData = (dataset: number[]) => {
        return dataset.slice(-1)[0]
      }
      const lastDay = this.labels.slice(-1)[0]

      return this.chartData.map((data, i) => {
        return {
          index: i,
          lText: `${this.getFormatter(i * 2)(
            lastData(this.tableData[i * 2])
          )} (${this.getFormatter(i * 2 + 1)(lastData(data))}%)`,
          sText: `${this.$d(new Date(lastDay), 'date')} ${this.$t('累計値')}`,
        }
      })
    },
    displayInfoForTitle() {
      return this.displayInfo.filter((_, i) => {
        return i === 3
      })
    },
    displayInfoForDescription() {
      return this.displayInfo.filter((_, i) => {
        return i !== 3
      })
    },
    displayData() {
      const datasets = this.dataLabels.map((_, i) => {
        return {
          type: 'line',
          label: this.dataLabels[i],
          data: this.chartData[i].slice(
            this.startDateIndex,
            this.endDateIndex + 1
          ),
          pointBackgroundColor: 'rgba(0,0,0,0)',
          pointBorderColor: 'rgba(0,0,0,0)',
          pointRadius: 0,
          pointBorderWidth: 0,
          pointHoverBorderColor: 'rgba(0,0,0,0)',
          pointHoverBorderWidth: 0,
          pointHoverRadius: 0,
          borderColor: this.colors[i].fillColor,
          borderWidth: 3,
          fill: false,
          order: i,
          lineTension: 0,
          borderDash: i === 1 || i === 3 ? [4] : null,
        }
      })

      const rangeDate = this.labels.filter((item) => {
        const date = dayjs(item)
        return date.isBetween(this.startDate, this.endDate, 'day', '[]')
      })

      return {
        labels: rangeDate,
        datasets,
      }
    },
    headTitle() {
      return this.title + this.infoTitles.join(',')
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...(this.tableLabels as string[]).map((text, i) => {
          return { text, value: String(i) }
        }),
      ]
    },
    tableDataItems() {
      const datasets = this.tableLabels.map((_, i) => {
        return this.tableData[i]
      })
      return datasets[0]
        .map((_, i) => {
          return Object.assign(
            { text: this.labels[i] },
            ...this.tableData.map((_, j) => {
              return {
                [j]: this.getFormatter(j)(this.tableData[j][i]),
              }
            })
          )
        })
        .reverse()
    },
    displayOption() {
      const options: ChartOptions = {
        tooltips: {
          intersect: false,
          mode: 'index',
          displayColors: false,
          callbacks: {
            title: (tooltipItem, data) => {
              const label = data.labels![tooltipItem[0].index!] as string
              return this.$d(new Date(label), 'date')
            },
            label: (tooltipItem, data) => {
              const index = tooltipItem.datasetIndex!
              const title = this.$t(data.datasets![index].label!)
              const num = this.getFormatter(tooltipItem.datasetIndex! * 2 + 1)(
                parseFloat(tooltipItem.value!)
              )
              return `${title}: ${num}%`
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
                suggestedMax: 100,
                fontColor: '#707070',
                callback: (value: number) => {
                  return `${value.toFixed(1)}%`
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
    startDateIndex() {
      const searchIndex = this.labels.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.startDate
      })
      return searchIndex === -1 ? 0 : searchIndex
    },
    endDateIndex() {
      const searchIndex = this.labels.findIndex((item) => {
        const date = dayjs(item).format('YYYY-MM-DD')
        return date === this.endDate
      })
      return searchIndex === -1 ? this.labels.length - 1 : searchIndex
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
