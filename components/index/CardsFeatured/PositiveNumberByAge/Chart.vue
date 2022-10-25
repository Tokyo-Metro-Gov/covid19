<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :head-title="title"
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
      />
    </div>
    <v-row class="mt-2">
      <v-col cols="12" md="6">
        <v-menu
          ref="menu"
          v-model="datepicker"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          :min-width="290"
        >
          <template #activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              :label="$t('表示日')"
              :append-icon="mdiCalendar"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker
            v-model="pickerDate"
            no-title
            scrollable
            :locale="$i18n.locale"
            :allowed-dates="allowedDates"
          >
            <v-spacer />
            <v-btn text color="primary" @click="datepicker = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.menu.save(pickerDate)">
              OK
            </v-btn>
          </v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableDataItems" />
      </client-only>
    </template>
    <template #infoPanel>
      <data-view-data-set-panel
        :l-text="displayInfo[0].lText"
        :s-text="displayInfo[0].sText"
        :unit="displayInfo[0].unit"
        :is-single-card="isSingleCard"
      />
    </template>
    <template #footer>
      <open-data-link v-show="url" :url="url" />
    </template>
  </data-view>
</template>

<script lang="ts">
import { mdiCalendar } from '@mdi/js'
import { ChartOptions } from 'chart.js'
import dayjs from 'dayjs'
import Vue, { PropType } from 'vue'
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
import { DataSets, DataSetsPoint } from '@/plugins/vue-chart'
import { getGraphSeriesStyle } from '@/utils/colors'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'

type Data = {
  canvas: boolean
  datepicker: boolean
  pickerDate: string
}

type Methods = {
  allowedDates: (val: any) => any
}

type Computed = {
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
  tableHeaders: TableHeader[]
  tableDataItems: TableItem[]
}

type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: number[][]
  tableData: number[][]
  date: string
  labels: string[]
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
  unit: string
  url: string
  tableLabels: string[] | TranslateResult[]
  dateLabels: Date[]
  displayValue: {
    value: number
    date: string
  }
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
    tableData: {
      type: Array,
      default: () => [],
    },
    date: {
      type: String,
      required: true,
    },
    labels: {
      type: Array,
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
    tableLabels: {
      type: Array,
      default: () => [],
    },
    dateLabels: {
      type: Array,
      default: () => [],
    },
    displayValue: {
      type: Object,
      default: () => {},
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
      canvas: true,
      datepicker: false,
      pickerDate: convertDatetimeToISO8601Format(this.displayValue.date),
      mdiCalendar,
    }
  },
  computed: {
    dateFormatted() {
      return this.$d(new Date(this.pickerDate), 'date')
    },
    displayInfo() {
      return [
        {
          lText: this.displayValue.value.toLocaleString(),
          sText: `${this.$t('{date} の合計', {
            date: this.$d(new Date(this.displayValue.date), 'date'),
          })}`,
          unit: this.unit,
        },
      ]
    },
    displayData() {
      const style = getGraphSeriesStyle(1)[0]
      const dateIndex = this.dateLabels.findIndex((v) =>
        dayjs(v).isSame(this.pickerDate, 'day')
      )
      return {
        labels: this.labels,
        datasets: [
          {
            type: 'bar',
            data: this.chartData[dateIndex],
            backgroundColor: style.fillColor,
            borderColor: style.strokeColor,
            borderWidth: 1,
            order: 1,
          },
        ],
      }
    },
    displayOption() {
      const unit = this.unit

      const options: ChartOptions = {
        tooltips: {
          intersect: false,
          mode: 'index',
          displayColors: false,
          filter(tooltipItem) {
            return tooltipItem.datasetIndex !== 1
          },
          callbacks: {
            label: (tooltipItem) => {
              return `${parseInt(tooltipItem.value!).toLocaleString()} ${unit}`
            },
            title: (tooltipItem) => {
              const label = this.labels![tooltipItem[0].index!] as string
              return this.$t(label)
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
              gridLines: {
                display: false,
              },
              ticks: {
                fontSize: 11,
                fontColor: '#707070',
                maxRotation: 45,
                minRotation: 45,
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
          return { text, value: String(i), align: 'end' }
        }),
      ]
    },
    tableDataItems() {
      const tableData = this.tableData
      return this.dateLabels
        .map((label, i) => {
          return Object.assign(
            { text: label },
            ...(this.labels as string[]).map((_, j) => {
              if (tableData[j][i] === null) {
                return {
                  [j]: '',
                }
              }
              return {
                [j]: this.getFormatter(j)(tableData[j][i]),
              }
            })
          )
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
  methods: {
    allowedDates(val) {
      const formatedDateLabels = this.dateLabels.map((v) =>
        dayjs(v).format('YYYY-MM-DD')
      )
      return formatedDateLabels.some((v) => dayjs(v).isSame(val))
    },
  },
}

export default Vue.extend(options)
</script>
