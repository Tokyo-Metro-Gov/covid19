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
  console.log(map)
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
  console.log(map)
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
      'fill-color': [
        'step',
        ['get', 'max'],
        '#1B75BC',
        70000,
        '#238B45',
        140000,
        '#006D2C',
        210000,
        '#00441B'
      ],
      'fill-opacity': 0.5,
      'fill-outline-color': '#ffffff'
    }
  })
}

const dataDate = [
  '20200201',
  '20200202',
  '20200203',
  '20200204',
  '20200205',
  '20200206',
  '20200207',
  '20200208',
  '20200209',
  '20200210',
  '20200211',
  '20200212',
  '20200213',
  '20200214',
  '20200215',
  '20200216',
  '20200217',
  '20200218',
  '20200219',
  '20200220',
  '20200221',
  '20200222',
  '20200223',
  '20200224',
  '20200225',
  '20200226',
  '20200227',
  '20200228',
  '20200229',
  '20200301',
  '20200302',
  '20200303',
  '20200304',
  '20200305',
  '20200306',
  '20200307',
  '20200308',
  '20200309',
  '20200310'
]
/*
const dataLayers = dataDate.forEach(date => {
  return `heatmap-data-${date}`
})
*/
export default {
  components: { Mapbox },
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
          zoom: 16,
          center: [139.69167, 35.689444],
          antialias: false
        }
      }
    }
  },
  computed: {
    actualMapOptions() {
      return { container: this.mapId, ...this.mapOptions }
    }
  },
  methods: {
    loaded(map) {
      addHeatmapLayer(map, '20200305')
      dataDate.forEach(v => addDataHeatmapLayer(map, v))
      if (
        this.initialBounds.length > 1 &&
        this.initialBounds[0].length > 1 &&
        this.initialBounds[1].length > 1
      ) {
        map.fitBounds(this.initialBounds)
      }
      map.on('moveend', e => {
        console.log(e)
        // getFeatureAndCreateGraph(map)
      })
      map.once('idle', _e => {
        // getFeatureAndCreateGraph(map)
      })
    }
  }
}
</script>
