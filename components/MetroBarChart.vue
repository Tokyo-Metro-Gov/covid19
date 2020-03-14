<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="MetroGraph-Desc">
        {{
          $t('{range}の利用者数*の平均値を基準としたときの相対値', {
            range: $t(chartData.base_period)
          })
        }}
        <br />
        *{{ $t('都営地下鉄4路線の自動改札出場数') }}
      </p>
    </template>
    <bar
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="chartOption"
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

<i18n src="./MetroBarChart.i18n.json"></i18n>

<style lang="scss">
.MetroGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { ChartOptions, ChartData } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import * as FileSaver from 'file-saver'
import aoaToCsv from '@/utils/aoaToCsv'
import DataView from '@/components/DataView.vue'

type Data = {
  canvas: boolean
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
      borderWidth: number
    }[]
  }
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
  chartData: ChartData
  chartOption: ChartOptions
  chartId: string
  title: string
  titleId: string
  date: string
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
    }
  },
  data: () => ({
    canvas: true
  }),
  computed: {
    displayData() {
      const colors: string[] = ['#a6e29f', '#63c765', '#008b41']
      const datasets = this.chartData.labels!.map((label, i) => {
        return {
          label: label as string,
          data: this.chartData.datasets!.map(d => d.data![i]) as number[],
          backgroundColor: colors[i],
          borderWidth: 0
        }
      })
      return {
        labels: this.chartData.datasets!.map(d => d.label!),
        datasets
      }
    },
    tableHeaders() {
      return [
        { text: '', value: 'text' },
        ...this.chartData.labels!.map((text, value) => {
          return { text: text as string, value: String(value) }
        })
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data.map((_, i) => {
        return Object.assign(
          { text: this.chartData.datasets![i].label as string },
          ...this.chartData.datasets!.map((_, j) => {
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
