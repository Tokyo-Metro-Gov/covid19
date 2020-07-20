import Vue, { PropType } from 'vue'
import { ChartData, ChartOptions } from 'chart.js'
import { Doughnut, Bar, Line, mixins } from 'vue-chartjs'
import { Plugin } from '@nuxt/types'
import { useDayjsAdapter } from './chartjs-adapter-dayjs'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus.ts'

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

const rgba0 = 'rgba(255,255,255,0)'
const rgba1 = 'rgba(255,255,255,1)'

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

  const generalChart = Vue.component<
    ChartVCData,
    ChartVCMethod,
    ChartVCComputed,
    ChartVCProps
  >('general-chart', {
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
      displayLegends: watchDisplayLegends,
      width() {
        setTimeout(() => this.$data._chart.resize())
      }
    },
    mounted() {
      setTimeout(() => this.renderChart(this.chartData, this.options))

      // タブ変更時にグラフの`height`を再計算する
      EventBus.$on(TOGGLE_EVENT, () => {
        setTimeout(() => this.renderChart(this.chartData, this.options))
      })
    },
    beforeDestroy() {
      EventBus.$off(TOGGLE_EVENT)
    }
  })

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'line-chart',
    {
      mixins: [reactiveProp, Line, generalChart]
    }
  )

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'bar',
    {
      mixins: [reactiveProp, Bar, generalChart]
    }
  )

  Vue.component<ChartVCData, ChartVCMethod, ChartVCComputed, ChartVCProps>(
    'doughnut-chart',
    {
      mixins: [reactiveProp, Doughnut, generalChart]
    }
  )
}

export default VueChartPlugin

export const yAxesBgPlugin: Chart.PluginServiceRegistrationOptions[] = [
  {
    beforeDraw(chartInstance) {
      const ctx = chartInstance.ctx as CanvasRenderingContext2D

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
      gradient.addColorStop(0, rgba1)
      gradient.addColorStop(1, rgba0)
      ctx.fillStyle = gradient
      ctx.fillRect(
        0,
        chartInstance.chartArea.bottom + 1,
        chartInstance.chartArea.left,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
    }
  }
]

export const yAxesBgRightPlugin: Chart.PluginServiceRegistrationOptions[] = [
  {
    beforeDraw(chartInstance) {
      const ctx = chartInstance.ctx as CanvasRenderingContext2D

      // プロットエリアマスク用
      ctx.fillStyle = '#fff'
      ctx.fillRect(
        chartInstance.chartArea.right,
        0,
        chartInstance.width as number,
        chartInstance.chartArea.bottom + 1
      )
      ctx.fillRect(
        0,
        0,
        chartInstance.chartArea.left,
        chartInstance.chartArea.bottom + 1
      )
      // 横軸マスク用
      const gradientr = ctx.createLinearGradient(
        chartInstance.chartArea.right,
        0,
        chartInstance.width as number,
        0
      )
      const gradient = ctx.createLinearGradient(
        0,
        0,
        chartInstance.chartArea.left,
        0
      )
      gradient.addColorStop(0, rgba1)
      gradient.addColorStop(1, rgba0)
      gradientr.addColorStop(0, rgba0)
      gradientr.addColorStop(1, rgba1)
      ctx.fillStyle = gradientr
      ctx.fillRect(
        chartInstance.chartArea.right,
        chartInstance.chartArea.bottom + 1,
        chartInstance.width as number,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
      ctx.fillStyle = gradient
      ctx.fillRect(
        0,
        chartInstance.chartArea.bottom + 1,
        chartInstance.chartArea.left,
        (chartInstance.height as number) - chartInstance.chartArea.bottom - 1
      )
    }
  }
]

export interface DataSets<T = number> extends ChartData {
  data: T[]
}

export interface DataSetsPoint<T = { x: string; y: number }> extends ChartData {
  data: T[]
}

export interface DisplayData<T = number, U = string> {
  labels?: U[]
  datasets: DataSets<T>[]
}
