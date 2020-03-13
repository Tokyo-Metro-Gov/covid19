<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :url="url"
    class="MapCard"
  >
    <template v-slot:button>
      {{ caption }}
    </template>
    <heatmap :map-id="mapId" :initial-bounds="initialBounds" />
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

export default {
  components: { DataView, SourceLink, Heatmap },
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
    chartDate: {
      type: Object,
      default: () => {}
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
  methods: {}
}
</script>

<style scoped>
.MapCardMap {
  height: 400px;
}
</style>
