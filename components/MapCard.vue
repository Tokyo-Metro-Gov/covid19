<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :url="url"
    :loading="loading"
    class="MapCard"
  >
    <template v-slot:button>
      {{ caption }}
      <heatmap-legend :legend-data="legendData" />
    </template>
    <heatmap
      v-model="rawChartData"
      class="MapCard-Heatmap"
      :map-id="mapId"
      :initial-bounds="initialBounds"
      @legendUpdated="updateLegend"
      @loadCompleted="loadCompleted"
    />
    <line-chart
      class="MapCard-LineChart"
      :chart-data="chartData"
      :options="{}"
    />
    <template v-slot:footer>
      <source-link
        :url="url"
        :link-string="linkString"
        :header="sourceLinkHeader"
      />
    </template>
  </data-view>
</template>

<style></style>

<script>
import DataView from '@/components/DataView.vue'
import Heatmap from '@/components/Heatmap.vue'
import SourceLink from '@/components/SourceLink.vue'
import HeatmapLegend from '@/components/HeatmapLegend.vue'

export default {
  components: { DataView, SourceLink, Heatmap, HeatmapLegend },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    linkString: {
      type: String,
      default: ''
    },
    sourceLinkHeader: {
      type: String,
      default: ''
    },
    initialBounds: {
      type: Array,
      default: () => {
        return []
      }
    },
    chartId: {
      type: String,
      default: ''
    },
    chartOption: {
      type: Object,
      default: () => {}
    },
    mapId: {
      type: String,
      default: 'map'
    }
  },
  data: () => {
    const rawChartData = []
    const legendData = []
    const loading = true
    return { rawChartData, legendData, loading }
  },
  computed: {
    chartData() {
      return {
        labels: this.rawChartData.map(d => {
          return d.date
        }),
        datasets: [
          {
            data: this.rawChartData.map(d => {
              return d.value
            }),
            backgroundColor: 'rgba(60, 160, 220, 0.3)',
            borderColor: 'rgba(60, 160, 220, 0.8)'
          }
        ]
      }
    }
  },
  methods: {
    updateLegend(legendData) {
      this.legendData = legendData
    },
    loadCompleted() {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.MapCardMap {
  height: 400px;
}
</style>
