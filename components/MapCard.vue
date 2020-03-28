<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="updateDate"
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
      <select
        ref="dateSelectorRef"
        class="select-css"
        @input="handleFocusChanged"
      >
        <option v-for="item in dateTicks" :key="item.text" :value="item.value">
          {{ item.text }}
        </option>
      </select>
      <!--<v-select
        v-model="dataDate"
        :items="dateTicks"
        :item-text="'text'"
        :item-value="'value'"
        @input="handleFocusChanged"
      />-->
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
    const dateTicks = [{ text: '02/01', value: '20200201' }]
    const legendData = []
    const loading = true
    const updateDate = ''
    return { dateTicks, legendData, loading, updateDate }
  },
  created() {
    const self = this
    fetch('https://tokyo-metropolitan-gov.github.io/data/stat.json')
      .then(response => response.json())
      .then(res => (self.updateDate = res.yahootile.lastUpdate))
      .catch(_ => (self.updateDate = ''))
  },
  methods: {
    updateLegend(legendData) {
      this.legendData = legendData
    },
    loadCompleted() {
      this.loading = false
    },
    handleFocusChanged(e) {
      this.$refs.heatmapComponentRef.updatePaintProperty(e.target.value)
    },
    dateTicksUpdated(dateTicks) {
      this.dateTicks = dateTicks.map(d => {
        return { text: `${d.substring(4, 6)}/${d.substring(6, 8)}`, value: d }
      })
      this.dateTicks.sort((a, b) =>
        a.value === b.value ? 0 : a.value < b.value ? 1 : -1
      )
      this.$refs.dateSelectorRef.value = this.dateTicks[0].value
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
.select-css {
  display: block;
  font-size: 16px;
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin: 10px 0 0 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
}
.select-css::-ms-expand {
  display: none;
}
.select-css:hover {
  border-color: #888;
}
.select-css:focus {
  border-color: #aaa;
  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
  box-shadow: 0 0 0 3px -moz-mac-focusring;
  color: #222;
  outline: none;
}
.select-css option {
  font-weight: normal;
}
</style>
<style lang="scss">
.MapCard-BodyContainer {
  .v-slider__tick-label {
    font-size: 12px;
  }
}
</style>
