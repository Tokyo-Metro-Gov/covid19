<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :url="url"
    :loading="loading"
    class="MapCard"
  >
    <template v-slot:description>
      <ol>
        <li>
          {{ $t('※ ヤフーに蓄積された位置情報データなどを元に算出した参考値') }}
        </li>
        <li>{{ $t('※ 土・日・祝日を除く7:30~8:30の平均値') }}</li>
      </ol>
    </template>
    <div class="MapCard-BodyContainer">
      <heatmap-legend :legend-data="legendData" />
      <heatmap
        ref="heatmapComponentRef"
        v-model="rawChartData"
        class="MapCard-Heatmap"
        :style="{ height: mapHeight + 'px' }"
        :map-id="mapId"
        :initial-bounds="initialBounds"
        :map-options="mapOptions"
        :legend="heatmapLegend"
        @legendUpdated="updateLegend"
        @loadCompleted="loadCompleted"
      />
      <population-line-chart
        :height="160"
        :chart-data="rawChartData"
        @focusChanged="handleFocusChanged"
      />
      <div v-show="detailPageUrl !== ''" class="DetailPageLink">
        <nuxt-link :to="detailPageUrl">
          {{ detailPageString }}
        </nuxt-link>
      </div>
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
    detailPageUrl: {
      type: String,
      default: ''
    },
    detailPageString: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    mapHeight: {
      type: Number,
      default: 240
    },
    linkString: {
      type: String,
      default: ''
    },
    sourceLinkHeader: {
      type: String,
      default: ''
    },
    heatmapLegend: {
      type: Array,
      default: () => []
    },
    mapOptions: {
      type: Object,
      default: () => {
        return {}
      },
      required: false
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
