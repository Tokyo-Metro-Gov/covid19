<template>
  <div ref="chartContainer" class="LegendStickyChart">
    <slot :chart-width="chartWidth" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  chartWidth: number
}
type Methods = {
  adjustChartWidth: () => void
  calcChartWidth: (containerWidth: number, labelCount: number) => number
}
type Computed = {}
type Props = {
  labels: string[]
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    labels: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      chartWidth: 300
    }
  },
  methods: {
    adjustChartWidth() {
      const container = this.$refs.chartContainer as HTMLElement
      const containerWidth = container.clientWidth
      const labelCount = this.labels.length
      this.chartWidth = this.calcChartWidth(containerWidth, labelCount)
    },
    calcChartWidth(containerWidth, labelCount) {
      const dates = 60
      const yaxisWidth = 38
      const chartWidth = containerWidth - yaxisWidth
      const barWidth = chartWidth / dates
      const calcWidth = barWidth * labelCount + yaxisWidth
      return Math.max(calcWidth, containerWidth)
    }
  },
  mounted() {
    let timerId: number
    this.adjustChartWidth()
    window.addEventListener('resize', () => {
      clearTimeout(timerId)
      timerId = window.setTimeout(this.adjustChartWidth, 500)
    })
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
