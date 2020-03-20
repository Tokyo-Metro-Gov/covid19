<template>
  <svg :width="width" :height="height">
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <g v-xAxis :transform="`translate(0, ${graphHeight})`" />
      <g v-yAxis />
    </g>
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <path class="Area" :d="area" />
      <path class="Line " :d="line" />
    </g>
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <circle
        v-for="(d, i) in sequence"
        :key="i"
        :cx="xScale(d.date)"
        :cy="yScale(d.value)"
        r="5"
      />
    </g>
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <line
        v-if="focus !== null"
        :x1="xScale(timeParse(focus))"
        :x2="xScale(timeParse(focus))"
        y1="0"
        :y2="graphHeight"
      />
      <line v-else :x1="graphWidth" :x2="graphWidth" y1="0" :y2="graphHeight" />
    </g>
    <g :transform="`translate(${marginLeft}, ${marginTop})`">
      <rect
        v-for="(d, i) in sequence"
        :key="i"
        :x="i === 0 ? -marginLeft : xScale(sequence[i - 1].date)"
        y="0"
        :height="graphHeight"
        :width="
          i === 0
            ? marginLeft
            : xScale(sequence[i].date) - xScale(sequence[i - 1].date)
        "
        @click="handleClick"
      >
        <title>
          {{ `${d.date} ${d.value}` }}
        </title>
      </rect>
    </g>
  </svg>
</template>

<style scoped lang="scss">
svg {
  path.Area {
    fill: rgba(0, 190, 73, 0.5);
    stroke: none;
  }
  path.Line {
    stroke-width: 4;
    stroke: #00b849;
    fill: none;
  }
  circle {
    fill: #00b849;
    stroke: none;
  }
  rect {
    fill: #000;
    opacity: 0;
  }
  line {
    stroke: #000;
    stroke-width: 4;
  }
}
</style>

<script>
import * as d3 from 'd3'

export default {
  directives: {
    xAxis(el, _, vnode) {
      d3.select(el).call(d3.axisBottom().scale(vnode.context.xScale))
    },
    yAxis(el, _, vnode) {
      d3.select(el).call(d3.axisLeft().scale(vnode.context.yScale))
    }
  },
  props: ['height', 'chartData'],
  data() {
    return {
      marginLeft: 60,
      marginTop: 4,
      marginRight: 4,
      marginBottom: 20,
      width: 480,
      timeFormat: d3.timeFormat('%Y%m%d'),
      timeParse: d3.timeParse('%Y%m%d'),
      focus: null
    }
  },
  computed: {
    sequence() {
      const self = this
      if (this.chartData === undefined) {
        return []
      }
      return this.chartData.map(function(d) {
        return { date: self.timeParse(d.date), value: d.value }
      })
    },
    graphWidth() {
      return this.width - this.marginLeft - this.marginRight
    },
    graphHeight() {
      return this.height - this.marginTop - this.marginBottom
    },
    xScale() {
      return d3
        .scaleTime()
        .domain(
          d3.extent(this.sequence, d => {
            return d.date
          })
        )
        .range([0, this.graphWidth])
    },
    yScale() {
      return d3
        .scaleLinear()
        .domain([
          0,
          d3.max(this.sequence, d => {
            return d.value
          }) * 1.2
        ])
        .range([this.graphHeight, 0])
    },
    line() {
      const self = this
      return d3
        .line()
        .x(function(d) {
          return self.xScale(d.date)
        })
        .y(function(d) {
          return self.yScale(d.value)
        })(this.sequence)
    },
    area() {
      const self = this
      return d3
        .area()
        .x(function(d) {
          return self.xScale(d.date)
        })
        .y1(function(d) {
          return self.yScale(d.value)
        })
        .y0(function(_) {
          return self.yScale(0)
        })(this.sequence)
    }
  },
  mounted() {
    this.width = this.$el.parentNode.clientWidth
    if (this.chartData !== undefined && this.chartData.length > 0) {
      this.focus = this.chartData[this.chartData.length - 1].date
    }
    const self = this
    window.addEventListener('resize', function(_) {
      self.width = self.$el.parentNode.clientWidth
    })
  },
  methods: {
    handleClick(e) {
      this.focus = this.timeFormat(
        this.xScale.invert(
          e.target.x.baseVal.value + 0.5 + e.target.width.baseVal.value
        )
      )
      this.$emit('focusChanged', this.focus)
    }
  }
}
</script>
