<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :url="url"
    class="MapCard"
  >
    <mapbox
      class="MapCardMap"
      :access-token="''"
      :map-options="mapOptions"
      @map-load="loaded"
    />
  </data-view>
</template>

<style></style>

<script>
import Mapbox from 'mapbox-gl-vue'
import d3 from 'd3'
import DataView from '@/components/DataView.vue'

const addDataHeatmapLayer = (map, date) => {
  console.log(map)
  map.addLayer({
    id: `heatmap-data-${date}`,
    type: 'fill',
    source: {
      type: 'vector',
      tiles: [
        `https://map-covid19-tokyo.netlify.com/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
      ],
      minzoom: 8,
      maxzoom: 11
    },
    'source-layer': 'dfi-place-heatmap-population',
    paint: {
      'fill-opacity': 0
    }
  })
}

const getExtentValues = map => {
  const features = map.queryRenderedFeatures({ layers: dataLayers })
  const values = []
  dataDate.forEach(date => {
    values.push({ date, value: 0 })
  })
  features.forEach(feature => {
    const date = feature.layer.id.split('-')[2]
    const value = feature.properties.max
    values.forEach((item, index, array) => {
      if (date === item.date) {
        array[index] = { date, value: item.value + value }
      }
    })
  })
  return values
  //  return {date: date, value: value}
  // })
}

const addHeatmapLayer = (map, date) => {
  console.log(map)
  map.addLayer({
    id: 'heatmap',
    type: 'fill',
    source: {
      type: 'vector',
      tiles: [
        `https://map-covid19-tokyo.netlify.com/tiles/${date}/corona_heatmap/hourly/8/{z}/{x}/{y}.pbf`
      ],
      minzoom: 8,
      maxzoom: 11
    },
    'source-layer': 'dfi-place-heatmap-population',
    paint: {
      'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'max'],
        0,
        'blue',
        20000,
        'royalblue',
        50000,
        'cyan',
        100000,
        'lime',
        150000,
        'yellow',
        200000,
        'red'
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
const dataLayers = dataDate.forEach(date => {
  return `heatmap-data-${date}`
})

const getFeatureAndCreateGraph = map => {
  // const graph_values = getCenterValues()
  const graphValues = getExtentValues(map)
  console.log(graphValues)
  // d3
  // remove current svg
  d3.select('#my_dataviz')
    .selectAll('svg')
    .remove()
  // set the dimensions and margins of the graph
  const margin = { top: 10, right: 10, bottom: 30, left: 80 }
  const width = 500 - margin.left - margin.right
  const height = 400 - margin.top - margin.bottom

  const svg = d3
    .select('#my_dataviz')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  svg.selectAll('path').remove()

  // append the svg object to the body of the page

  const timeparser = d3.timeParse('%Y%m%d')
  const data = graphValues.map(d => {
    return {
      date: timeparser(d.date),
      value: d.value
    }
  })
  const x = d3
    .scaleTime()
    .domain(
      d3.extent(data, function(d) {
        return d.date
      })
    )
    .range([0, width])
  svg
    .append('g')
    .attr('transform', 'translate(0,' + (height + 5) + ')')
    .call(
      d3
        .axisBottom(x)
        .ticks(5)
        .tickSizeOuter(0)
    )

  // Add Y axis
  const y = d3
    .scaleLinear()
    .domain([
      0,
      d3.max(data, function(d) {
        return d.value
      })
    ])
    .range([height, 0])
  svg
    .append('g')
    .attr('transform', 'translate(-5,0)')
    .call(d3.axisLeft(y).tickSizeOuter(0))

  // Add the area
  svg
    .append('path')
    .datum(data)
    .attr('fill', '#69b3a2')
    .attr('fill-opacity', 0.3)
    .attr('stroke', 'none')
    .attr(
      'd',
      d3
        .area()
        .x(function(d) {
          return x(d.date)
        })
        .y0(height)
        .y1(function(d) {
          return y(d.value)
        })
    )

  // Add the line
  svg
    .append('path')
    .datum(data)
    .attr('fill', 'none')
    .attr('stroke', '#69b3a2')
    .attr('stroke-width', 4)
    .attr(
      'd',
      d3
        .line()
        .x(function(d) {
          return x(d.date)
        })
        .y(function(d) {
          return y(d.value)
        })
    )

  // Add the line
  svg
    .selectAll('myCircles')
    .data(data)
    .enter()
    .append('circle')
    .attr('fill', 'red')
    .attr('stroke', 'none')
    .attr('cx', function(d) {
      return x(d.date)
    })
    .attr('cy', function(d) {
      return y(d.value)
    })
    .attr('r', 3)
}

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
    },
    url: {
      type: String,
      required: false,
      default: ''
    },
    mapOptions: {
      type: Object,
      required: false,
      default: () => {
        return {
          container: 'map',
          style:
            'https://tokyo-metropolitan-gov.github.io/tokyo-vector-tile/style.json',
          zoom: 16,
          center: [139.69167, 35.689444],
          antialias: false
        }
      }
    }
  },
  methods: {
    loaded(map) {
      addHeatmapLayer(map, '20200305')
      dataDate.forEach(v => addDataHeatmapLayer(map, v))

      map.on('moveend', e => {
        console.log(e)
        getFeatureAndCreateGraph(map)
      })
      map.once('idle', _e => {
        getFeatureAndCreateGraph(map)
      })
    }
  }
}
</script>

<style scoped>
.MapCardMap {
  height: 400px;
}
</style>
