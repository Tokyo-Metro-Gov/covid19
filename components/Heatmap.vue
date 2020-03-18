<template>
  <mapbox
    class="MapCardMap"
    :access-token="''"
    :map-options="actualMapOptions"
    @map-load="loaded"
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
        return {
          style:
            'https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json',
          zoom: 14,
          center: [139.69167, 35.689444],
          antialias: false,
          interactive: false
        }
      }
    }
  },
  data() {
    return {
      dateSequence: [],
      holidays: require('@/data/holiday.json')
    }
  },
  computed: {
    actualMapOptions() {
      return { container: this.mapId, ...this.mapOptions }
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
      const lastDate = this.dateSequence[this.dateSequence.length - 1]
      let m = 0
      features.forEach(feature => {
        if (m < feature.properties[lastDate]) {
          m = feature.properties[lastDate]
        }
      })
      const ceil = 10000 + Math.floor(m * 0.0001) * 10000
      const unit = 0.25 * ceil
      map.setPaintProperty('heatmap', 'fill-color', [
        'step',
        ['get', lastDate],
        '#1B75BC',
        unit,
        '#238B45',
        2 * unit,
        '#006D2C',
        3 * unit,
        '#00441B'
      ])
      self.$emit('legendUpdated', [
        { color: '#1B75BC', valueFrom: 0, valueTo: unit },
        { color: '#238B45', valueFrom: unit, valueTo: 2 * unit },
        { color: '#006D2C', valueFrom: 2 * unit, valueTo: 3 * unit },
        { color: '#00441B', valueFrom: 3 * unit, valueTo: null }
      ])
      self.$emit('input', self.getChartData(map))
      map.on('moveend', _e => {
        self.$emit('input', self.getChartData(map))
      })
      self.$emit('loadCompleted')
    },
    getChartData(map) {
      const features = map.queryRenderedFeatures({ layers: ['heatmap'] })
      if (this.dateSequence.length === 0) {
        if (features.length === 0) {
          return [
            { date: 0, value: 0 },
            { date: 1, value: 0 }
          ]
        }
        this.dateSequence = Object.keys(features[0]).sort()
      }
      const dateValueMap = {}
      this.dateSequence.forEach(d => {
        dateValueMap[d] = 0
      })
      features.forEach(feature => {
        Object.keys(feature.properties).forEach(k => {
          dateValueMap[k] += feature.properties[k]
        })
      })
      return Object.keys(dateValueMap).map(d => {
        return {
          date: d,
          value: dateValueMap[d]
        }
      })
    },
    loaded(map) {
      const tileUrl = `https://map-covid19-tokyo.netlify.com/mashed_tiles/{z}/{x}/{y}.pbf`
      // const tileUrl = `http://localhost:3000/mashed_tiles/{z}/{x}/{y}.pbf`
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
          'fill-outline-color': '#ffffff'
        }
      })
      this.dataDrivenInitialization(map)
    }
  }
}
</script>
