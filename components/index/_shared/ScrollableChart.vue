<template>
  <div ref="chartContainer" class="LegendStickyChart">
    <div ref="scrollable" class="scrollable" tabindex="0">
      <div :style="{ width: `${chartWidth}px` }">
        <slot name="chart" :chart-width="chartWidth" />
      </div>
    </div>
    <slot name="sticky-chart" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import { DisplayData } from '@/plugins/vue-chart'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus'

type Data = {
  chartWidth: number
  timerIdForResize: number
  timerIdForScroll: number
  firstScroll: boolean
}
type Methods = {
  adjustChartWidth: () => void
  calcChartWidth: (containerWidth: number, labelCount: number) => number
  scrollRightSide: () => void
  handleResize: () => void
  onScroll: () => void
}
type Computed = {
  labelCount: number
}
type Props = {
  displayData: DisplayData
  isWeekly: boolean
  isCumulative: boolean
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
    isWeekly: {
      type: Boolean,
      required: false,
      default: false,
    },
    isCumulative: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      chartWidth: 300,
      timerIdForResize: 0,
      timerIdForScroll: 0,
      firstScroll: true,
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
      if (!container || container.clientWidth === 0) return
      const containerWidth = container.clientWidth
      this.chartWidth = this.calcChartWidth(containerWidth, this.labelCount)
    },
    calcChartWidth(containerWidth, labelCount) {
      const dates = 60
      const weeks = 24
      const yaxisWidth = 38
      const chartWidth = containerWidth - yaxisWidth
      const barWidth = chartWidth / (this.isWeekly ? weeks : dates)
      const calcWidth = barWidth * labelCount + yaxisWidth
      return Math.max(calcWidth, containerWidth)
    },
    scrollRightSide() {
      const scrollable = this.$refs.scrollable as HTMLElement
      if (!scrollable) return
      scrollable.scrollLeft = this.chartWidth
    },
    handleResize() {
      clearTimeout(this.timerIdForResize)
      this.timerIdForResize = window.setTimeout(this.adjustChartWidth, 500)
    },
    onScroll() {
      if (this.firstScroll) {
        this.firstScroll = false
        return
      }
      clearTimeout(this.timerIdForScroll)
      const scrollable = this.$refs.scrollable as HTMLElement
      if (!scrollable) return
      const scrollWidth = scrollable.scrollWidth - scrollable.clientWidth
      const dates = 60
      const weeks = 24
      const barCount = this.isWeekly ? weeks : dates
      const start = Math.floor(
        (scrollable.scrollLeft / scrollWidth) * (this.labelCount - barCount)
      )
      const end = start + barCount
      this.timerIdForScroll = window.setTimeout(() => {
        if (!this.isCumulative) {
          this.$emit('update-scroll', start, end)
        }
      }, 500)
    },
  },
  mounted() {
    this.adjustChartWidth()
    this.$on('update-width', this.scrollRightSide)
    window.addEventListener('resize', this.handleResize)
    const scrollable = this.$refs.scrollable as HTMLElement
    if (!scrollable) return
    scrollable.addEventListener('scroll', this.onScroll)
    // タブ切り替え時にグラフ幅を再計算
    EventBus.$on(TOGGLE_EVENT, () => setTimeout(() => this.adjustChartWidth()))
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    const scrollable = this.$refs.scrollable as HTMLElement
    if (!scrollable) return
    scrollable.removeEventListener('scroll', this.onScroll)
    EventBus.$off(TOGGLE_EVENT)
  },
}

export default options
</script>

<style lang="scss" scoped>
.LegendStickyChart {
  margin: 16px 0;
  position: relative;

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
