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

const addDataHeatmapLayer = (map, date) => {
  // const tileUrl = `https://map-covid19-tokyo.netlify.com/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
  const tileUrl = `http://localhost:3000/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
  map.addLayer({
    id: `heatmap-data-${date}`,
    type: 'fill',
    source: {
      type: 'vector',
      tiles: [tileUrl],
      minzoom: 11,
      maxzoom: 11
    },
    'source-layer': 'dfi-place-heatmap-population',
    paint: {
      'fill-opacity': 0
    }
  })
}

const addHeatmapLayer = (map, date) => {
  // const tileUrl = `https://map-covid19-tokyo.netlify.com/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
  const tileUrl = `http://localhost:3000/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
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
}

/*
const dataLayers = dataDate.forEach(date => {
  return `heatmap-data-${date}`
})
*/
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
    dateSequence: {
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
          antialias: false
        }
      }
    }
  },
  computed: {
    actualMapOptions() {
      return { container: this.mapId, ...this.mapOptions }
    },
    dataLayers() {
      return this.dateSequence.map(d => {
        return `heatmap-data-${d}`
      })
    }
  },
  methods: {
    getMax(map) {
      const features = map.queryRenderedFeatures({ layers: ['heatmap'] })
      let m = 0
      features.forEach(feature => {
        if (m < feature.properties.max) {
          m = feature.properties.max
        }
      })
      return m
    },
    getChartData(map) {
      const features = map.queryRenderedFeatures({ layers: this.dataLayers })
      const dateValueMap = {}
      const knownDataHash = {}
      this.dateSequence.forEach(d => {
        dateValueMap[d] = 0
      })
      features.forEach(feature => {
        const date = feature.layer.id.split('-')[2]
        const value = feature.properties.max
        if (knownDataHash[`${date}#${feature.id}`] !== undefined) {
          console.log(feature)
          return
        }
        knownDataHash[`${date}#${feature.id}`] = 1
        dateValueMap[date] += value
      })
      return Object.keys(dateValueMap).map(d => {
        return {
          date: d,
          value: dateValueMap[d]
        }
      })
    },
    loaded(map) {
      const self = this
      addHeatmapLayer(map, this.dateSequence[this.dateSequence.length - 1])
      this.dateSequence.forEach(v => addDataHeatmapLayer(map, v))
      if (
        this.initialBounds.length > 1 &&
        this.initialBounds[0].length > 1 &&
        this.initialBounds[1].length > 1
      ) {
        map.fitBounds(this.initialBounds, { linear: true })
      }
      map.once('idle', _e => {
        self.$emit('input', self.getChartData(map))
        map.on('moveend', _e => {
          self.$emit('input', self.getChartData(map))
        })
        const m = this.getMax(map)
        const ceil = 10000 + Math.floor(m * 0.0001) * 10000
        const unit = 0.25 * ceil
        map.setPaintProperty('heatmap', 'fill-color', [
          'step',
          ['get', 'max'],
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
      })
    }
  }
}
</script>
