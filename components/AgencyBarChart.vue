<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <small :class="$style.DataViewDesc">
        ※土・日・祝日を除く庁舎開庁日の1週間累計数
      </small>
    </template>
    <bar
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
    <v-data-table
      :style="{ display: canvas ? 'none' : 'block' }"
      :headers="tableHeaders"
      :items="tableData"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      class="cardTable"
      item-key="name"
    />
    <a @click="download()">csv</a>
  </data-view>
</template>

<i18n src="./AgencyBarChart.i18n.json"></i18n>

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

<script lang="ts">
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ChartOptions } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import * as FileSaver from 'file-saver'
import agencyData from '@/data/agency.json'
import DataView from '@/components/DataView.vue'
import aoaToCsv from '@/utils/aoaToCsv'

type Data = {
  canvas: boolean
  chartData: typeof agencyData
  date: string
  agencies: VueI18n.TranslateResult[]
}
type Methods = {
  download: () => void
}
type Computed = {
  displayData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
    }[]
  }
  displayOption: ChartOptions
  tableHeaders: {
    text: string
    value: string
  }[]
  tableData: {
    text: string
    [key: number]: number
  }[]
}
type Props = {
  title: string
  titleId: string
  chartId: string
  unit: string
  url: string
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
  components: { DataView },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'agency-bar-chart'
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    const agencies = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計')
    ]
    agencyData.datasets.map(dataset => {
      dataset.label = this.$t(dataset.label) as string
    })
    return {
      canvas: true,
      chartData: agencyData,
      date: agencyData.date,
      agencies
    }
  },
  computed: {
    displayData() {
      const colors = ['#008b41', '#63c765', '#a6e29f']
      return {
        labels: this.chartData.labels as string[],
        datasets: this.chartData.datasets.map((item, index) => {
          return {
            label: this.agencies[index] as string,
            data: item.data,
            backgroundColor: colors[index] as string
          }
        })
      }
    },
    displayOption() {
      const self = this
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItem) {
              const dateString = tooltipItem[0].label
              return self.$t('期間: {duration}', {
                duration: dateString!
              }) as string
            },
            label(tooltipItem, data) {
              const index = tooltipItem.datasetIndex!
              const title = self.$t(data.datasets![index].label!)
              const num = tooltipItem.value
              const unit = self.$t(self.unit)
              return `${title}: ${num}${unit}`
            }
          }
        },
        legend: {
          display: true,
          onHover: e => {
            ;(e!.currentTarget as HTMLElement).style!.cursor = 'pointer'
          },
          onLeave: e => {
            ;(e!.currentTarget as HTMLElement).style!.cursor = 'default'
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080',
                maxTicksLimit: 10,
                callback(label) {
                  return `${label}${self.unit}`
                }
              }
            }
          ]
        }
      }
    },
    tableHeaders() {
      return [
        { text: '', value: 'text' },
        ...this.displayData.datasets.map((text, value) => {
          return { text: text.label, value: String(value) }
        })
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data.map((_, i) => {
        return Object.assign(
          { text: this.displayData.labels[i] as string },
          ...this.displayData.datasets!.map((_, j) => {
            return {
              [j]: this.displayData.datasets[0].data[i]
            }
          })
        )
      })
    }
  },
  methods: {
    download() {
      if (process.browser !== true) {
        return
      }
      const aoa = [
        this.tableHeaders.map(header => header.text),
        ...this.tableData.map(data => {
          return [
            data.text,
            ...this.tableHeaders
              .filter((_, i) => i !== 0)
              .map((_, i) => {
                return data[i]
              })
          ]
        })
      ]
      FileSaver.saveAs(
        new Blob([new Uint8Array([239, 187, 191]), aoaToCsv(aoa)], {
          type: 'application/octet-stream'
        }),
        `${this.title}.csv`
      )
    }
  }
}

export default Vue.extend(options)
</script>
