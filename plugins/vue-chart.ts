import Vue, { PropType } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'
import { Doughnut, Bar, mixins } from 'vue-chartjs'
import { Plugin } from '@nuxt/types'

type ChartVCData = { chartData: ChartData }
type ChartVCMethod = {
  renderChart(chartData: ChartData, options: ChartOptions): void
}
type ChartVCComputed = unknown
type ChartVCProps = { options: Object }

const VueChartPlugin: Plugin = () => {
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
      watch: {
        options() {
          this.renderChart(this.chartData, this.options)
        }
      },
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )
}

export default VueChartPlugin
