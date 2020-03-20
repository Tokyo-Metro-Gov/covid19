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
    </template>
    <div class="MapCard-BodyContainer">
      <heatmap-legend :legend-data="legendData" />
      <heatmap
        ref="heatmapComponentRef"
        v-model="rawChartData"
        class="MapCard-Heatmap"
        :map-id="mapId"
        :initial-bounds="initialBounds"
        @legendUpdated="updateLegend"
        @loadCompleted="loadCompleted"
      />
      <population-line-chart
        :height="160"
        :chart-data="rawChartData"
        @focusChanged="handleFocusChanged"
      />
      <div v-show="loading" class="MapCard-BodyContainer-LoadingScreen" />
    </div>
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
import PopulationLineChart from '@/components/PopulationLineChart.vue'

export default {
  components: {
    DataView,
    SourceLink,
    Heatmap,
    HeatmapLegend,
    PopulationLineChart
  },
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
    unit: {
      type: String,
      default: ''
    },
    chartOptions: {
      type: Object,
      default: () => {
        return {}
      }
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
    const dataDate = null
    return { rawChartData, legendData, loading, dataDate }
  },
  computed: {},
  methods: {
    updateLegend(legendData) {
      this.legendData = legendData
    },
    loadCompleted() {
      this.loading = false
    },
    handleFocusChanged(e) {
      this.dataDate = e
      this.$refs.heatmapComponentRef.updatePaintProperty(e)
    }
  }
}
</script>

<style scoped lang="scss">
.MapCardMap {
  height: 240px;
}
.MapCard-BodyContainer {
  position: relative;
  &-LoadingScreen {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    top: 0;
    left: 0;
  }
}
</style>
