<template>
  <div ref="chartContainer" class="LegendStickyChart">
    <div ref="scrollable" class="scrollable">
      <div :style="{ width: `${chartWidth}px` }">
        <slot name="chart" :chart-width="chartWidth" />
      </div>
    </div>
    <slot name="sticky-chart" />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import { DisplayData } from '@/plugins/vue-chart'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus.ts'

type Data = {
  chartWidth: number
  timerId: number
  windowWidth: number
}
type Methods = {
  adjustChartWidth: () => void
  calcChartWidth: (containerWidth: number, labelCount: number) => number
  scrollRightSide: () => void
  handleResize: () => void
}
type Computed = {
  labelCount: number
}
type Props = {
  displayData: DisplayData
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    displayData: {
      type: Object as PropType<DisplayData>,
      required: true,
    },
  },
  data() {
    return {
      chartWidth: 300,
      timerId: 0,
      windowWidth: 0,
    }
  },
  watch: {
    displayData() {
      this.scrollRightSide()
    },
  },
  computed: {
    labelCount() {
      return this.displayData.labels?.length || 0
    },
  },
  methods: {
    adjustChartWidth() {
      const container = this.$refs.chartContainer as HTMLElement
      if (!container) return
      const containerWidth = container.clientWidth
      this.chartWidth = this.calcChartWidth(containerWidth, this.labelCount)
      this.scrollRightSide()
    },
    calcChartWidth(containerWidth, labelCount) {
      const dates = 60
      const yaxisWidth = 38
      const chartWidth = containerWidth - yaxisWidth
      const barWidth = chartWidth / dates
      const calcWidth = barWidth * labelCount + yaxisWidth
      return Math.max(calcWidth, containerWidth)
    },
    scrollRightSide() {
      const scrollable = this.$refs.scrollable as HTMLElement
      if (!scrollable) return
      setTimeout(() => {
        scrollable.scrollLeft = this.chartWidth
      })
    },
    handleResize() {
      clearTimeout(this.timerId)
      this.timerId = window.setTimeout(this.adjustChartWidth, 500)
    },
  },
  mounted() {
    this.adjustChartWidth()
    window.addEventListener('resize', () => {
      if (window.innerWidth !== this.windowWidth) {
        this.handleResize()
      }
      this.windowWidth = window.innerWidth
    })

    // タブ変更時にグラフ`width`を再計算する
    EventBus.$on(TOGGLE_EVENT, () => {
      setTimeout(() => this.adjustChartWidth())
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
}

export default options
</script>

<style lang="scss" scoped>
.LegendStickyChart {
  margin: 16px 0;
  position: relative;
  overflow: hidden;

  .scrollable {
    overflow-x: scroll;
  }

  .sticky-legend {
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 100%;
  }
}
</style>
