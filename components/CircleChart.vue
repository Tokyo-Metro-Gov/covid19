<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <pie-chart
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
    <template v-slot:description>
      <ul>
        <li>
          {{
            $t(
              '（注）速報値として公開するものであり、後日確定データとして修正される場合があります'
            )
          }}
        </li>
      </ul>
    </template>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { GraphDataType } from '@/utils/formatGraph'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
// import { single as color } from '@/utils/colors'
type Data = {
  dataKind: 'transition' | 'cumulative'
  canvas: boolean
}
type Methods = {
  formatDayBeforeRatio: (dayBeforeRatio: number) => string
}
type Computed = {
  displayCumulativeRatio: string
  displayTransitionRatio: string
  displayInfo: {
    lText: string
    sText: string
    unit: string
  }
  displayData: {
    labels: TranslateResult[]
    datasets: {
      label: string[]
      data: number[]
      backgroundColor: (string | string[])[]
      borderWidth: number
    }[]
  }
  displayOption: {
    tooltips: {
      displayColors: boolean
      callbacks: {
        label(tooltipItem: any): string
        title(tooltipItem: any[], data: any): string | undefined
      }
    }
    responsive: boolean
    maintainAspectRatio: boolean
    legend: {
      display: boolean
    }
  }
  scaledTicksYAxisMax: number
  tableHeaders: {
    text: string
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
}
type Props = {
  title: string
  titleId: string
  chartId: string
  chartData: GraphDataType[]
  date: string
  unit: string
  info: string
  labels: string[]
  url: string
  description: string
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
  components: { DataView, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    chartId: {
      type: String,
      default: 'time-bar-chart'
    },
    chartData: {
      type: Array,
      default: () => []
    },
    date: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      default: ''
    },
    info: {
      type: String,
      default: ''
    },
    labels: {
      type: Array,
      default: () => []
    },
    url: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    dataKind: 'transition',
    canvas: true
  }),
  computed: {
    displayCumulativeRatio() {
      const lastDay = this.chartData.slice(-1)[0].cumulative
      const lastDayBefore = this.chartData.slice(-2)[0].cumulative
      return this.formatDayBeforeRatio(lastDay - lastDayBefore)
    },
    displayTransitionRatio() {
      const lastDay = this.chartData.slice(-1)[0].transition
      const lastDayBefore = this.chartData.slice(-2)[0].transition
      return this.formatDayBeforeRatio(lastDay - lastDayBefore)
    },
    displayInfo() {
      const rateOfUsed = this.chartData[8].cumulative
      return {
        lText: rateOfUsed.toLocaleString(),
        sText: this.info,
        unit: this.unit
      }
    },
    displayData() {
      // const colorArray = ['#006400', '#ccc']
      const colorArray = [
        '#f5f5f5',
        '#defcf9',
        '#e0f9b5',
        '#ffde7d',
        '#f08a5d',
        '#b83b5e',
        '#6a2c70',
        '#364f6b',
        '#393e46'
      ]
      return {
        labels: this.chartData.map((_d: any, index) => {
          return this.$t(this.labels[index])
        }),
        datasets: [
          {
            label: this.chartData.map((_d: any, index) => {
              return this.labels[index]
            }),
            data: this.chartData.map((d: any) => {
              return d.transition
            }),
            backgroundColor: this.chartData.map((_, index) => {
              return colorArray[index]
            }),
            borderWidth: 0
          }
        ]
      }
    },
    displayOption() {
      // const unit = this.unit
      const chartData = this.chartData
      console.log(chartData)
      const options = {
        tooltips: {
          displayColors: true,
          callbacks: {
            label(tooltipItem: any) {
              return `${chartData[tooltipItem.index].transition} 人`
            },
            title(tooltipItem: any, data: any) {
              return data.labels[tooltipItem[0].index]
            }
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true
        }
      }
      return options
    },
    scaledTicksYAxisMax() {
      const yAxisMax = 1.2
      const dataKind =
        this.dataKind === 'transition' ? 'transition' : 'cumulative'
      const values = this.chartData.map(d => d[dataKind])
      return Math.max(...values) * yAxisMax
    },
    tableHeaders() {
      return [
        { text: '', value: 'text' },
        { text: this.title, value: '0' }
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data.map((_, i) => {
        return Object.assign(
          { text: this.displayData.labels[i] },
          { '0': this.displayData.datasets[0].data[i] }
        )
      })
    }
  },
  methods: {
    formatDayBeforeRatio(dayBeforeRatio: number): string {
      const dayBeforeRatioLocaleString = dayBeforeRatio.toLocaleString()
      switch (Math.sign(dayBeforeRatio)) {
        case 1:
          return `+${dayBeforeRatioLocaleString}`
        case -1:
          return `${dayBeforeRatioLocaleString}`
        default:
          return `${dayBeforeRatioLocaleString}`
      }
    }
  }
}

export default Vue.extend(options)
</script>
