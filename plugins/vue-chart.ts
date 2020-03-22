import Vue, { PropType } from 'vue'
import { ChartData, ChartOptions, Chart } from 'chart.js'
import { Doughnut, Bar, mixins, generateChart } from 'vue-chartjs'
import { Plugin } from '@nuxt/types'

type ChartVCData = { chartData: ChartData }
type ChartVCMethod = {
  renderChart(chartData: ChartData, options: ChartOptions): void
  addPlugin(plugin: any): void
}
type ChartVCComputed = unknown
type ChartVCProps = { options: Object }

Chart.defaults.barHeader = Chart.defaults.bar
Chart.controllers.barHeader = Chart.controllers.bar
const BarHeader = generateChart('bar-header', 'barHeader')

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
      mounted(): void {
        this.renderChart(this.chartData, this.options)
      }
    }
  )

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'barHeader',
    {
      extends: BarHeader,
      mixins: [reactiveProp],
      props: {
        options: {
          type: Object,
          default: () => {}
        }
      },
      mounted(): void {
        this.addPlugin({
          id: 'fill',
          beforeDraw(chartInstance: any) {
            const { ctx } = chartInstance.chart

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
              chartInstance.height - chartInstance.chartArea.bottom - 1
            )
          }
          /*
          afterRender: function(chartInstance: any) {
            console.log('afterRender')
          }
          */
        })
        this.renderChart(this.chartData, this.options)
      }
    }
  )
}

export default VueChartPlugin
