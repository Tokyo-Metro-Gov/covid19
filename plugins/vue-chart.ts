/* eslint-disable simple-import-sort/imports */
import { Plugin } from '@nuxt/types'
import { defineComponent, ref, ssrRef } from '@nuxtjs/composition-api'
import {
  ArcElement,
  BarController,
  BarElement,
  CategoryScale,
  ChartComponentLike /* eslint-disable-line import/named */,
  ChartData /* eslint-disable-line import/named */,
  ChartOptions /* eslint-disable-line import/named */,
  Filler,
  Legend,
  LinearScale,
  LineController,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import Chart from 'chart.js/auto/auto.esm'
import Vue from 'vue'
import { BarChart, DoughnutChart, LineChart } from 'vue-chart-3'

import { useDayjsAdapter } from '@/plugins/chartjs-adapter-dayjs'
import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'
/* eslint-enable simple-import-sort/imports */

Chart.register(
  LineController,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Filler,
  Legend,
  BarController
)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ChartVCData = { displayData: ChartData }
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ChartVCMethod = {
  renderChart(displayData: ChartData, displayOption: ChartOptions): void
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ChartVCComputed = {}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type ChartVCProps = {
  chartId: string
  chartData: ChartData
  chartOptions: Object
  displayLegends: boolean[] | null
}

const VueChartPlugin: Plugin = ({ app }) => {
  useDayjsAdapter(app.i18n)
  createCustomChart(app)
}

const createCustomChart = (app: any): any => {
  const watchDisplayLegends = function (this: Vue, v?: boolean[] | null) {
    if (v == null || v.length === 0) {
      return
    }
    const chart: Chart = app.$data._chart
    v.forEach((display, i) => {
      chart.getDatasetMeta(i).hidden = !display
    })
    chart.update()
  }

  const options = {
    Ctor: this,
    functional: true,
    responsive: true,
    scaleOverride: true,

    components: {
      BarChart,
      DoughnutChart,
      LineChart,
    },
    props: {
      displayLegends: {
        type: Array,
        default: () => [],
      },
      chartOptions: {
        type: Object as ThisParameterType<ChartOptions>,
        default: () => {},
      },
      chartData: {
        type: Object as ThisParameterType<ChartData>,
        default: () => {},
      },
      chartId: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        setup() {
          const bar: ChartComponentLike = {
            defaults: ssrRef<typeof BarChart>(BarChart) as string | any,
            id: 'bar',
          }
          const doughnut: ChartComponentLike = {
            defaults: ssrRef<typeof DoughnutChart>(DoughnutChart) as
              | string
              | any,
            id: 'doughnut',
          }
          const lineChart: ChartComponentLike = {
            defaults: ssrRef<typeof LineChart>(LineChart) as string | any,
            id: 'line-chart',
          }
          const chartOptions = ref<ChartOptions>(options)
          const chartData = ref<ChartData>(app.$data._chart.chartData)

          return {
            bar,
            BarElement,
            doughnut,
            ArcElement,
            lineChart,
            LineElement,
            chartData,
            chartOptions,
          }
        },
      }
    },
    async mounted() {
      await app.renderChart(app.displayData, app.displayOption)
    },
    watch: {
      displayLegends: watchDisplayLegends,
      width() {
        EventBus.$emit('update-width')
        EventBus.$on(TOGGLE_EVENT, () =>
          setTimeout(() => {
            for (const index in Chart.instances) {
              Chart.instances[index].resize()
            }
          })
        )
      },
    },
    render(this: Vue) {
      const h: any = function h(this: Vue): any {
        return this.$createElement
      }
      return { h }
    },
  }

  Vue.component('Bar', BarChart)
  Vue.component('Doughnut', DoughnutChart)
  Vue.component('LineChart', LineChart)

  return defineComponent({ options })
}

export default VueChartPlugin

const rgba0 = 'rgba(255,255,255,0)'
const rgba1 = 'rgba(255,255,255,1)'

const yAxesBgPlugin = [
  {
    beforeDraw(chartInstance: Chart) {
      const ctx = chartInstance.canvas.getContext('2d')

      // プロットエリアマスク用
      ctx!.save()
      ctx!.fillStyle = '#fff'
      ctx!.fillRect(
        0,
        0,
        chartInstance.chartArea.left,
        chartInstance.chartArea.bottom + 1
      )

      // 横軸マスク用
      const gradient = ctx!.createLinearGradient(
        0,
        0,
        chartInstance.chartArea.left,
        0
      )
      gradient.addColorStop(0, rgba1)
      gradient.addColorStop(1, rgba0)
      ctx!.fillStyle = gradient
      ctx!.fillRect(
        0,
        chartInstance.chartArea.bottom + 1,
        chartInstance.chartArea.left,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
      ctx!.restore()
    },
  },
]

const yAxesBgRightPlugin = [
  {
    beforeDraw(chartInstance: Chart) {
      const ctx = chartInstance.canvas.getContext('2d')

      // プロットエリアマスク用
      ctx!.save()
      ctx!.fillStyle = '#fff'
      ctx!.fillRect(
        chartInstance.chartArea.right,
        0,
        chartInstance.width as number,
        chartInstance.chartArea.bottom + 1
      )
      ctx!.fillRect(
        0,
        0,
        chartInstance.chartArea.left,
        chartInstance.chartArea.bottom + 1
      )
      // 横軸マスク用
      const gradientr = ctx!.createLinearGradient(
        chartInstance.chartArea.right,
        0,
        chartInstance.width as number,
        0
      )
      const gradient = ctx!.createLinearGradient(
        0,
        0,
        chartInstance.chartArea.left,
        0
      )
      gradient.addColorStop(0, rgba1)
      gradient.addColorStop(1, rgba0)
      gradientr.addColorStop(0, rgba0)
      gradientr.addColorStop(1, rgba1)
      ctx!.fillStyle = gradientr
      ctx!.fillRect(
        chartInstance.chartArea.right,
        chartInstance.chartArea.bottom + 1,
        chartInstance.width as number,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
      ctx!.fillStyle = gradient
      ctx!.fillRect(
        0,
        chartInstance.chartArea.bottom + 1,
        chartInstance.chartArea.left,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
      ctx!.restore()
    },
  },
]

export { yAxesBgPlugin, yAxesBgRightPlugin }

export interface DataSets<T = any> extends ChartData {
  data(): Array<T>
}

export interface DataSetsPoint<T = any> extends ChartData {
  data(): Array<T>
}

export interface DisplayData<T = any, U = string> {
  labels?: Array<U>
  datasets: Array<DataSets<T>>
}

export interface DisplayOptions<T = any> extends ChartOptions {
  options: {
    tooltip?: any
    legend: any
    scales: {
      x?: Array<T>
      y?: Array<T>
      xAxis?: Array<T>
      yAxis?: Array<T>
      xAxes?: Array<T>
      yAxes?: Array<T>
      r?: Array<T>
    }
    animation?: any
  }
}
