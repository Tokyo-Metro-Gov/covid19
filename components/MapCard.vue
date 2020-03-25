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
        class="MapCard-Heatmap"
        :style="{ height: mapHeight + 'px' }"
        :map-id="mapId"
        :initial-bounds="initialBounds"
        :map-options="mapOptions"
        :legend="heatmapLegend"
        @legendUpdated="updateLegend"
        @loadCompleted="loadCompleted"
        @dateTicksUpdated="dateTicksUpdated"
      />
      <v-slider
        v-model="dateSliderValue"
        :tick-labels="dateTickValue"
        :max="dateTicks.length - 1"
        step="1"
        tick-size="4"
        @input="handleFocusChanged"
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

export default {
  components: {
    DataView,
    SourceLink,
    Heatmap,
    HeatmapLegend
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
    unit: {
      type: String,
      default: ''
    },
    mapId: {
      type: String,
      default: 'map'
    }
  },
  data: () => {
    const dateTicks = ['20200201']
    const dateSliderValue = 0
    const legendData = []
    const loading = true
    return { dateTicks, legendData, loading, dateSliderValue }
  },
  computed: {
    dataDate() {
      return this.dateTicks[this.dateSliderValue]
    },
    dateTickValue() {
      return this.dateTicks.map((d, i) => {
        return (this.dateTicks.length - i) % 6 === 1
          ? `${d.substring(4, 6)}/${d.substring(6)}`
          : ''
      })
    }
  },
  methods: {
    updateLegend(legendData) {
      this.legendData = legendData
    },
    loadCompleted() {
      this.loading = false
    },
    handleFocusChanged(_) {
      this.$refs.heatmapComponentRef.updatePaintProperty(this.dataDate)
    },
    dateTicksUpdated(dateTicks) {
      this.dateTicks = dateTicks
      this.dateSliderValue = this.dateTicks.length - 1
    }
  }
}
</script>

<style scoped lang="scss">
.v-slider__tick-label {
  transform: rorate(90deg);
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
