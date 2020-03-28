import Vue, { PropType } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'
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

export const yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[] = [
  {
    beforeDraw(chartInstance) {
      const ctx = chartInstance.ctx!

      // プロットエリアマスク用
      ctx.fillStyle = '#fff'
      ctx.fillRect(
        0,
        0,
        chartInstance.chartArea.left,
        chartInstance.chartArea.bottom + 1
      )

      // 横軸マスク用
      const gradient = ctx.createLinearGradient(
        0,
        0,
        chartInstance.chartArea.left,
        0
      )
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(
        0,
        chartInstance.chartArea.bottom + 1,
        chartInstance.chartArea.left,
        chartInstance.height! - chartInstance.chartArea.bottom - 1
      )
    }
  }
]
export const scrollPlugin: Chart.PluginServiceRegistrationOptions[] = [
  {
    beforeInit(chartInstance) {
      chartInstance.canvas!.parentElement!.scrollLeft! = chartInstance.width!
    }
  }
]

export interface DataSets<T = number> extends ChartData {
  data: T[]
}
export interface DisplayData<T = number, U = string> {
  labels?: U[]
  datasets: DataSets<T>[]
}
