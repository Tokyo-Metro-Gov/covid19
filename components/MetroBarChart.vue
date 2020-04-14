<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:infoPanel>
      <small :class="$style.DataViewDesc">
        <slot name="description" />
      </small>
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
      <v-data-table
        :headers="tableHeaders"
        :items="tableData"
        :items-per-page="-1"
        :hide-default-footer="true"
        :height="240"
        :fixed-header="true"
        :disable-sort="true"
        :mobile-breakpoint="0"
        class="cardTable"
        item-key="name"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.text">
              <th>{{ item.text }}</th>
              <td class="text-end">{{ item[0] }}</td>
              <td class="text-end">{{ item[1] }}</td>
              <td class="text-end">{{ item[2] }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </template>
    <template v-slot:footer>
      <external-link
        url="https://smooth-biz.metro.tokyo.lg.jp/pdf/202004date3.pdf"
      >
        {{ $t('鉄道利用者数の推移（新宿、東京、渋谷、各駅エリア）[PDF]') }}
      </external-link>
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import { ChartOptions, ChartData, Chart } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import DataView from '@/components/DataView.vue'
import { getGraphSeriesStyle } from '@/utils/colors'
import ExternalLink from '@/components/ExternalLink.vue'
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
  tableHeaders: {
    text: TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
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
  components: { DataView, ExternalLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartData: Object,
    chartOption: Object,
    chartId: {
      type: String,
      default: 'metro-bar-chart'
    },
    date: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: false,
      default: '%'
    },
    tooltipsTitle: {
      type: Function,
      required: true
    },
    tooltipsLabel: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    canvas: true
  }),
  computed: {
    displayData() {
      const graphSeries = getGraphSeriesStyle(this.chartData.labels!.length)
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label: label as string,
          data: this.chartData.datasets!.map(d => d.data![i]) as number[],
          backgroundColor: graphSeries[i].fillColor,
          borderColor: graphSeries[i].strokeColor,
          borderWidth: 1
        }
      })
      return {
        labels: this.chartData.datasets!.map(d => d.label!),
        datasets
      }
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.chartData.labels!.map((text, value) => {
          return { text: text as string, value: String(value), align: 'end' }
        })
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data
        .map((_, i) => {
          return Object.assign(
            { text: this.chartData.datasets![i].label as string },
            ...this.chartData.labels!.map((_, j) => {
              return {
                [j]: this.displayData.datasets[j].data[i]
              }
            })
          )
        })
        .sort((a, b) => {
          const aDate = a.text.split('~')[0]
          const bDate = b.text.split('~')[0]
          return aDate > bDate ? -1 : 1
        })
    },
    displayOption() {
      const self = this
      const options: ChartOptions = {
        responsive: true,
        legend: {
          display: true,
          onHover: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget.style.cursor = 'default'
          },
          labels: {
            boxWidth: 20
          }
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  return value.toFixed(2) + self.unit
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title: self.tooltipsTitle,
            label: self.tooltipsLabel
          }
        }
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    }
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
  }
}

export default Vue.extend(options)
</script>

<style module lang="scss">
.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>
