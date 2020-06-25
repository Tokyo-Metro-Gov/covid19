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
      required: true
    }
  },
  data() {
    return {
      chartWidth: 300,
      timerId: 0
    }
  },
  watch: {
    displayData() {
      this.scrollRightSide()
    }
  },
  computed: {
    labelCount() {
      return this.displayData.labels?.length || 0
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
      height: 10px;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb:active {
      background-color: rgba(0, 0, 0, 0.5);
    }

    &::-webkit-scrollbar-button:single-button {
      background-color: rgba(0, 0, 0, 0.05);
      border-style: solid;
      display: block;
      height: 10px;
      width: 10px;
    }

    /* :hover */
    &::-webkit-scrollbar-button:single-button:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }

    /* Up */
    &::-webkit-scrollbar-button:single-button:vertical:decrement {
      border-width: 0 5px 5px 5px;
      border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
    }

    /* Down */
    &::-webkit-scrollbar-button:single-button:vertical:increment {
      border-width: 5px 5px 0 5px;
      border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
    }

    /* Left */
    &::-webkit-scrollbar-button:single-button:horizontal:decrement {
      border-width: 5px 5px 5px 0;
      border-color: transparent rgba(0, 0, 0, 0.7) transparent transparent;
    }

    /* Right */
    &::-webkit-scrollbar-button:single-button:horizontal:increment {
      border-width: 5px 0 5px 5px;
      border-color: transparent transparent transparent rgba(0, 0, 0, 0.7);
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
