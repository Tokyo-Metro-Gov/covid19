<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template #attentionNote>
      <slot name="attentionNote" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
    <template #button>
      <data-selector
        v-model="dataKind"
        :target-id="chartId"
        :style="{ display: canvas ? 'inline-block' : 'none' }"
      />
    </template>
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
          :height="240"
          :width="chartWidth"
        />
      </template>
      <template #sticky-chart>
        <bar
          class="sticky-legend"
          :chart-id="`${chartId}-header`"
          :chart-data="displayDataHeader"
          :options="displayOptionHeader"
          :plugins="yAxesBgPlugin"
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
        :unit="displayInfo.unit"
      />
      <slot v-if="dataKind === 'cumulative'" name="additionalInfoPanel" />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { ChartOptions, PluginServiceRegistrationOptions } from 'chart.js'
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DataSelector from '@/components/DataSelector.vue'
import DataView from '@/components/DataView.vue'
import DataViewDataSetPanel from '@/components/DataViewDataSetPanel.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/DataViewTable.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import ScrollableChart from '@/components/ScrollableChart.vue'
import { DisplayData, yAxesBgPlugin } from '@/plugins/vue-chart'
import calcDayBeforeRatio from '@/utils/calcDayBeforeRatio'
import { getGraphSeriesStyle } from '@/utils/colors'
import { GraphDataType } from '@/utils/formatGraph'

type Data = {
  dataKind: 'transition' | 'cumulative'
  canvas: boolean
}
type Methods = {}

type Computed = {
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
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
  chartId: string
  chartData: GraphDataType[]
  date: string
  unit: string
  url: string
  yAxesBgPlugin: PluginServiceRegistrationOptions[]
  byDate: boolean
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
    this.dataKind =
      this.$route.query.embed && this.$route.query.dataKind === 'cumulative'
        ? 'cumulative'
        : 'transition'
  },
  components: {
    DataView,
    DataSelector,
    DataViewDataSetPanel,
    DataViewTable,
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
      default: '',
    },
    chartId: {
      type: String,
      default: 'time-bar-chart',
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
    yAxesBgPlugin: {
      type: Array,
      default: () => yAxesBgPlugin,
    },
    byDate: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dataKind: 'transition',
    canvas: true,
  }),
  computed: {
    displayInfo() {
      const { lastDay, lastDayData, dayBeforeRatio } = calcDayBeforeRatio({
        displayData: this.displayData,
        dataIndex: 1,
      })
      const formattedLastDay = this.$d(lastDay, 'date')
      if (this.dataKind === 'transition' && this.byDate) {
        return {
          lText: lastDayData,
          sText: `${formattedLastDay} ${this.$t('日別値')}（${this.$t(
            '前日比'
          )}: ${dayBeforeRatio} ${this.unit}）`,
          unit: this.unit,
        }
      } else if (this.dataKind === 'transition') {
        return {
          lText: lastDayData,
          sText: `${formattedLastDay} ${this.$t('実績値')}（${this.$t(
            '前日比'
          )}: ${dayBeforeRatio} ${this.unit}）`,
          unit: this.unit,
        }
      }
      return {
        lText: lastDayData,
        sText: `${formattedLastDay} ${this.$t('累計値')}（${this.$t(
          '前日比'
        )}: ${dayBeforeRatio} ${this.unit}）`,
        unit: this.unit,
      }
    },
    displayData() {
      const style = getGraphSeriesStyle(1)[0]
      const zeroMouseOverHeight = 5
      const transparentWhite = 'rgba(255,255,255,0)'

      if (this.dataKind === 'transition') {
        return {
          labels: this.chartData.map((d) => {
            return d.label
          }),
          datasets: [
            {
              label: this.dataKind,
              data: this.chartData.map((_d) => {
                return 0
              }),
              backgroundColor: transparentWhite,
              borderColor: transparentWhite,
              borderWidth: 0,
              minBarLength: this.chartData.map((d) => {
                if (d.transition <= 0) {
                  return zeroMouseOverHeight
                }
                return 0
              }),
            },
            {
              label: this.dataKind,
              data: this.chartData.map((d) => {
                return d.transition
              }),
              backgroundColor: style.fillColor,
              borderColor: style.strokeColor,
              borderWidth: 1,
            },
          ],
        }
      }
      return {
        labels: this.chartData.map((d) => d.label),
        datasets: [
          {
            label: this.dataKind,
            data: this.chartData.map((_d) => {
              return 0
            }),
            backgroundColor: transparentWhite,
            borderColor: transparentWhite,
            borderWidth: 0,
            minBarLength: this.chartData.map((d) => {
              if (d.cumulative <= 0) {
                return zeroMouseOverHeight
              }
              return 0
            }),
          },
          {
            label: this.dataKind,
            data: this.chartData.map((d) => {
              return d.cumulative
            }),
            backgroundColor: style.fillColor,
            borderColor: style.strokeColor,
            borderWidth: 1,
          },
        ],
      }
    },
    displayOption() {
      const unit = this.unit
      const scaledTicksYAxisMax = this.scaledTicksYAxisMax

      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem) => {
              const labelText = `${parseInt(
                tooltipItem.value!
              ).toLocaleString()} ${unit}`
              return labelText
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
                fontColor: '#808080',
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
                fontColor: '#808080',
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
                fontColor: '#808080',
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
      if (this.dataKind === 'transition') {
        return {
          labels: ['2020-01-01'],
          datasets: [
            {
              data: [Math.max(...this.chartData.map((d) => d.transition))],
              backgroundColor: 'transparent',
              borderWidth: 0,
            },
          ],
        }
      }
      return {
        labels: ['2020-01-01'],
        datasets: [
          {
            data: [Math.max(...this.chartData.map((d) => d.cumulative))],
            backgroundColor: 'transparent',
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
                fontColor: 'transparent', // displayOption では '#808080'
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
                fontColor: 'transparent', // displayOption では '#808080'
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
              position: 'left',
              gridLines: {
                display: true,
                drawOnChartArea: false, // displayOption では true
                color: '#E5E5E5',
              },
              ticks: {
                maxTicksLimit: 8,
                fontColor: '#808080',
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
      const dataKind =
        this.dataKind === 'transition' ? 'transition' : 'cumulative'
      const values = this.chartData.map((d) => d[dataKind])
      return Math.max(...values)
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        {
          text: `${this.title} (${this.$t('日別')})`,
          value: 'transition',
          align: 'end',
        },
        {
          text: `${this.title} (${this.$t('累計')})`,
          value: 'cumulative',
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
            cumulative: d.cumulative.toLocaleString(),
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
  },
}

export default Vue.extend(options)
</script>
