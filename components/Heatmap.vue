<template>
  <mapbox
    :access-token="''"
    :map-options="actualMapOptions"
    :nav-control="{ show: false }"
    :attribution-control="{ show: true, position: 'top-right' }"
    @map-load="loaded"
    @map-init="mapInitialized"
  />
</template>

<script>
import Mapbox from 'mapbox-gl-vue'

export default {
  components: { Mapbox },
  props: {
    mapId: {
      type: String,
      default: ''
    },
    initialBounds: {
      type: Array,
      default: () => {
        return []
      }
    },
    mapOptions: {
      type: Object,
      required: false,
      default: () => {
        return {}
      }
    },
    legend: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      dateSequence: [],
      mapObject: null,
      colors: [
        'rgba(80, 91, 0, 0.25)',
        'rgba(27, 117, 188, 0.5)',
        'rgba(0, 100, 0, 0.6)',
        'rgba(0, 68, 27, 0.7)'
      ],
      borderColors: ['#505B00', '#1B75BC', '#006400', '#00441B'],
      dataDrivenLegend: null
    }
  },
  computed: {
    actualLegend() {
      return this.legend.length === 0 ? this.dataDrivenLegend : this.legend
    },
    actualMapOptions() {
      return {
        style:
          'https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json',
        zoom: 14,
        center: [139.69167, 35.689444],
        antialias: false,
        interactive: false,
        ...this.mapOptions,
        container: this.mapId
      }
    }
  },
  methods: {
    dataDrivenInitialization(map) {
      if (this.dateSequence.length !== 0) {
        return
      }
      const self = this
      const features = map.queryRenderedFeatures({ layers: ['heatmap'] })
      if (features.length === 0) {
        setTimeout(self.dataDrivenInitialization, 1000, map)
        return
      }
      this.dateSequence = Object.keys(features[0].properties).sort()
      this.$emit('dateTicksUpdated', this.dateSequence)
      const lastDate = this.dateSequence[this.dateSequence.length - 1]
      let m = 0
      features.forEach(feature => {
        if (m < feature.properties[lastDate]) {
          m = feature.properties[lastDate]
        }
      })
      const ceil = 10000 + Math.floor(m * 0.0001) * 10000
      const unit = 0.25 * ceil
      this.dataDrivenLegend = [unit, 2 * unit, 3 * unit]
      map.setPaintProperty('heatmap', 'fill-color', [
        'step',
        ['get', lastDate],
        this.colors[0],
        this.actualLegend[0],
        this.colors[1],
        this.actualLegend[1],
        this.colors[2],
        this.actualLegend[2],
        this.colors[3]
      ])
      self.$emit('legendUpdated', [
        {
          borderColor: this.borderColors[0],
          color: this.colors[0],
          valueFrom: 0,
          valueTo: this.actualLegend[0]
        },
        {
          borderColor: this.borderColors[1],
          color: this.colors[1],
          valueFrom: this.actualLegend[0],
          valueTo: this.actualLegend[1]
        },
        {
          borderColor: this.borderColors[2],
          color: this.colors[2],
          valueFrom: this.actualLegend[1],
          valueTo: this.actualLegend[2]
        },
        {
          borderColor: this.borderColors[3],
          color: this.colors[3],
          valueFrom: this.actualLegend[2],
          valueTo: null
        }
      ])
      self.$emit('loadCompleted')
    },
    loaded(map) {
      const tileUrl =
        'https://tokyo-metropolitan-gov.github.io/data/tiles/{z}/{x}/{y}.pbf'
      if (
        this.initialBounds.length > 1 &&
        this.initialBounds[0].length > 1 &&
        this.initialBounds[1].length > 1
      ) {
        map.fitBounds(this.initialBounds, { linear: true })
      }
      map.addLayer({
        id: 'heatmap',
        type: 'fill',
        source: {
          type: 'vector',
          tiles: [tileUrl],
          minzoom: 11,
          maxzoom: 11
        },
        'source-layer': 'dfi-place-heatmap-population',
        paint: {
          'fill-color': '#fff',
          'fill-opacity': 0.5,
          'fill-outline-color': 'rgba(0, 0, 0, 0)'
        }
      })
      this.dataDrivenInitialization(map)
    },
    mapInitialized(map) {
      this.mapObject = map
    },
    updatePaintProperty(targetDate) {
      if (this.mapObject !== null && this.legend !== null) {
        const p = [
          'step',
          ['get', targetDate],
          this.colors[0],
          this.actualLegend[0],
          this.colors[1],
          this.actualLegend[1],
          this.colors[2],
          this.actualLegend[2],
          this.colors[3]
        ]
        this.mapObject.setPaintProperty('heatmap', 'fill-color', p)
      }
    }
  }
}
</script>
