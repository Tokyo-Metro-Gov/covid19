<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <small>
        ※厚生労働省発表データから見る全国状況
      </small>
    </template>
    <mapbox
      access-token="pk.eyJ1IjoibG9iZW5pY2hvdSIsImEiOiJjajdrb2czcDQwcHR5MnFycmhuZmo4eWwyIn0.nUf9dWGNVRnMApuhQ44VSw"
      :map-options="{
        container: 'map',
        style: 'mapbox://styles/lobenichou/cjto9zfpj00jq1fs7gajbuaas',
        center: [139.64889, 35.85694],
        zoom: 3
      }"
      @map-load="loaded"
    />
  </data-view>
</template>

<link
  href="https://api.mapbox.com/mapbox-gl-js/v1.8.0/mapbox-gl.css"
  rel="stylesheet"
/>

<style>
body {
  margin: 0;
  padding: 0;
}

#map {
  display: block;
  position: relative;
  top: 0;
  bottom: 0;
  width: 100%;
}

.mapboxgl-canvas-container {
  height: 50vh;
}

#key {
  background-color: rgba(0, 0, 0, 0.8);
  width: 22.22%;
  height: auto;
  overflow: auto;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.total {
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 15px;
}

.table {
  font-family: 'Montserrat', sans-serif;
  color: white;
  border-collapse: collapse;
}
</style>

<script>
import Mapbox from 'mapbox-gl-vue'
import DataView from '@/components/DataView.vue'
// import Vue from 'vue'
import japanData from '@/data/japan_covid19_data.json'
// import 'mapbox-gl/dist/mapbox-gl.css'

export default {
  components: { Mapbox, DataView },
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
    }
  },
  methods: {
    loaded(map) {
      const colors = [
        '#8dd3c7',
        '#ffffb3',
        '#bebada',
        '#fb8072',
        '#80b1d3',
        '#fdb462',
        '#b3de69',
        '#fccde5',
        '#d9d9d9',
        '#bc80bd',
        '#ccebc5',
        '#ffed6f'
      ]

      map.resize()

      map.addSource('japanData', {
        type: 'geojson',
        data: japanData,
        cluster: true,
        clusterRadius: 200,
        clusterProperties: {
          // keep separate counts for each fuel category in a cluster
          counts: ['+', ['get', 'count']]
        }
      })

      map.addLayer({
        id: 'circle_cluster',
        type: 'circle',
        source: 'japanData',
        filter: ['all', ['==', ['get', 'cluster'], true]],
        paint: {
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-radius': [
            'step',
            ['get', 'counts'],
            50,
            100,
            100,
            300,
            150,
            750,
            300
          ],
          'circle-stroke-color': colors[0],
          'circle-stroke-width': 10
        }
      })

      map.addLayer({
        id: 'circle_cluster_label',
        type: 'symbol',
        source: 'japanData',
        filter: ['all', ['==', ['get', 'cluster'], true]],
        layout: {
          'text-field': ['number-format', ['get', 'counts'], {}],
          'text-font': ['Montserrat Bold', 'Arial Unicode MS Bold'],
          'text-size': 13
        },
        paint: {
          'text-color': colors[0]
        }
      })

      map.addLayer({
        id: 'circle_each',
        type: 'circle',
        source: 'japanData',
        filter: ['all', ['!=', ['get', 'cluster'], true]],
        paint: {
          'circle-color': 'rgba(0,0,0,.6)',
          'circle-stroke-color': colors[1],
          'circle-stroke-width': 5,
          'circle-radius': [
            'step',
            ['get', 'count'],
            50,
            100,
            100,
            300,
            150,
            750,
            300
          ]
        }
      })

      map.addLayer({
        id: 'circle_each_label',
        type: 'symbol',
        source: 'japanData',
        filter: ['all', ['!=', ['get', 'cluster'], true]],
        layout: {
          'text-field': [
            'to-string',
            ['concat', ['get', 'count'], '\n', ['get', 'prefecture_name']]
          ],
          'text-font': ['Montserrat Bold', 'Arial Unicode MS Bold'],
          'text-size': 11
        },
        paint: {
          'text-color': colors[0]
        }
      })
    }
  }
}
</script>
