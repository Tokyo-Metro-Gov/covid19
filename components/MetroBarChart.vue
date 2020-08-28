<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:description>
      <slot name="description" />
    </template>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <bar
      :ref="'barChart'"
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
    <template v-slot:dataTable>
      <client-only>
        <data-view-table :headers="tableHeaders" :items="tableData" />
      </client-only>
    </template>
    <template v-slot:footer>
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
import Vue from 'vue'
import { ChartOptions, ChartData, Chart } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import DataView from '@/components/DataView.vue'
import DataViewTable, {
  TableHeader,
  TableItem,
} from '@/components/DataViewTable.vue'
import { getGraphSeriesStyle } from '@/utils/colors'
import AppLink from '@/components/AppLink.vue'
import { DisplayData } from '@/plugins/vue-chart'

interface HTMLElementEvent<T extends HTMLElement> extends MouseEvent {
  currentTarget: T
}

type Data = {
  canvas: boolean
}
type Methods = {}
type Computed = {
  displayData: DisplayData
  tableHeaders: TableHeader[]
  tableData: TableItem[]
  displayOption: Chart.ChartOptions
}
type Props = {
  chartData: ChartData
  chartOption: ChartOptions
  chartId: string
  title: string
  titleId: string
  date: string
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
  components: { DataView, DataViewTable, AppLink },
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
    canvas: true,
  }),
  computed: {
    displayData() {
      const graphSeries = getGraphSeriesStyle(this.chartData.labels!.length)
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label: label as string,
          data: this.chartData.datasets!.map((d) => d.data![i]) as number[],
          backgroundColor: graphSeries[i].fillColor,
          borderColor: graphSeries[i].strokeColor,
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
            { text: this.chartData.datasets![i].label },
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
      const self = this
      const options: ChartOptions = {
        legend: {
          display: true,
          onHover: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget.style.cursor = 'default'
          },
          labels: {
            boxWidth: 20,
          },
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true,
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080',
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
                callback(value) {
                  return (
                    (typeof value === 'number' ? value : Number(value)).toFixed(
                      2
                    ) + self.unit
                  )
                },
              },
            },
          ],
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: self.tooltipsTitle,
            label: self.tooltipsLabel,
          },
        },
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
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
