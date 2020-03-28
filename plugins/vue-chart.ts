import Vue, { PropType } from 'vue'
import { Chart, ChartData, ChartOptions } from 'chart.js'
import { Doughnut, Bar, Line, mixins } from 'vue-chartjs'
import { Plugin } from '@nuxt/types'
import { useDayjsAdapter } from './chartjs-adapter-dayjs'

type ChartVCData = { chartData: ChartData }
type ChartVCMethod = {
  renderChart(chartData: ChartData, options: ChartOptions): void
}
type ChartVCComputed = unknown
type ChartVCProps = { options: Object; displayLegends: boolean[] | null }

const VueChartPlugin: Plugin = ({ app }) => {
  useDayjsAdapter(app.i18n)
  createCustomChart()
}

const createCustomChart = () => {
  const { reactiveProp } = mixins

  const watchDisplayLegends = function(this: Vue, v?: boolean[] | null) {
    if (v == null) {
      return
    }
    if (v.length === 0) {
      return
    }
    const chart: Chart = this.$data._chart
    v.forEach((display, i) => {
      chart.getDatasetMeta(i).hidden = !display
    })
    chart.update()
  }

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'doughnut-chart',
    {
      extends: Doughnut,
      mixins: [reactiveProp],
      props: {
        displayLegends: {
          type: Array,
          default: () => null
        },
        options: {
          type: Object as PropType<ChartOptions>,
          default: () => {}
        }
      },
      watch: {
        displayLegends: watchDisplayLegends
      },
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'bar',
    {
      extends: Bar,
      mixins: [reactiveProp],
      props: {
        displayLegends: {
          type: Array,
          default: () => []
        },
        options: {
          type: Object,
          default: () => {}
        }
      },
      watch: {
        displayLegends: watchDisplayLegends
      },
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'line-chart',
    {
      extends: Line,
      mixins: [reactiveProp],
      props: {
        displayLegends: {
          type: Array,
          default: () => []
        },
        options: {
          type: Object,
          default: () => {}
        }
      },
      watch: {
        displayLegends: watchDisplayLegends
      },
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )
}

export default VueChartPlugin

export interface DataSets<T = number> extends ChartData {
  data: T[]
}
export interface DisplayData<T = number, U = string> {
  labels?: U[]
  datasets: DataSets<T>[]
}
