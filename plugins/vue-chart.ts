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
type ChartVCProps = { options: Object }

const VueChartPlugin: Plugin = ({ app }) => {
  useDayjsAdapter(app.i18n)
  createCustomChart()
}

const createCustomChart = () => {
  const { reactiveProp } = mixins

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'doughnut-chart',
    {
      extends: Doughnut,
      mixins: [reactiveProp],
      props: {
        options: {
          type: Object as PropType<ChartOptions>,
          default: () => {}
        }
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
        options: {
          type: Object,
          default: () => {}
        }
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
        options: {
          type: Object,
          default: () => {}
        }
      },
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )
}

export default VueChartPlugin
