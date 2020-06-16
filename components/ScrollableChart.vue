<template>
  <div ref="chartContainer" class="LegendStickyChart">
    <div
      ref="scrollable"
      class="scrollable"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <div :style="{ width: `${chartWidth}px` }">
        <slot name="chart" :chart-width="chartWidth" />
      </div>
    </div>
    <slot name="sticky-chart" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  chartWidth: number
  timerId: number
}
type Methods = {
  adjustChartWidth: () => void
  calcChartWidth: (containerWidth: number, labelCount: number) => number
  scrollRightSide: () => void
  handleResize: () => void
}
type Computed = {}
type Props = {
  labelCount: number
  canvas: boolean
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    labelCount: {
      type: Number,
      required: true
    },
    canvas: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chartWidth: 300,
      timerId: 0
    }
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
    }
  },
  mounted() {
    this.adjustChartWidth()
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  }
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

    &::-webkit-scrollbar {
      height: 4px;
      background-color: rgba(0, 0, 0, 0.01);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.07);
    }
  }

  .sticky-legend {
    position: absolute;
    top: 0;
    pointer-events: none;
    width: 100%;
  }
}
</style>
