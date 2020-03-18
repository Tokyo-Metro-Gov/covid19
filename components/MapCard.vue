<template>
  <data-view
    :title="title"
    :title-id="titleId"
    :date="date"
    :url="url"
    :loading="loading"
    class="MapCard"
  >
    <template v-slot:button>
      {{ caption }}
    </template>
    <div class="MapCard-BodyContainer">
      <heatmap-legend :legend-data="legendData" />
      <heatmap
        v-model="rawChartData"
        class="MapCard-Heatmap"
        :map-id="mapId"
        :initial-bounds="initialBounds"
        @legendUpdated="updateLegend"
        @loadCompleted="loadCompleted"
      />
      <line-chart
        class="MapCard-LineChart"
        :chart-data="displayChartData"
        :options="displayChartOptions"
        :height="160"
        @onClick.native="chartClicked"
      />
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

<style></style>

<script>
import DataView from '@/components/DataView.vue'
import Heatmap from '@/components/Heatmap.vue'
import SourceLink from '@/components/SourceLink.vue'
import HeatmapLegend from '@/components/HeatmapLegend.vue'

export default {
  components: { DataView, SourceLink, Heatmap, HeatmapLegend },
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
    return { rawChartData, legendData, loading }
  },
  computed: {
    displayChartData() {
      return {
        labels: this.rawChartData.map(d => {
          return d.date
        }),
        datasets: [
          {
            data: this.rawChartData.map(d => {
              return d.value
            }),
            backgroundColor: 'rgba(0, 190, 73, 0.5)',
            borderColor: '#00B849'
          }
        ]
      }
    },
    displayChartOptions() {
      return {
        ...this.chartOptions,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              id: 'day',
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                maxTicksLimit: 20,
                fontColor: '#808080',
                maxRotation: 0,
                minRotation: 0,
                callback: label => {
                  return label.slice(6, 8)
                }
              }
            },
            {
              id: 'month',
              stacked: true,
              gridLines: {
                drawOnChartArea: false,
                drawTicks: true,
                drawBorder: false,
                tickMarkLength: 10
              },
              ticks: {
                fontSize: 11,
                fontColor: '#808080',
                padding: 3,
                fontStyle: 'bold',
                gridLines: {
                  display: true
                },
                callback: label => {
                  const monthStringArry = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'Jun',
                    'Jul',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                  ]
                  const month = monthStringArry.indexOf(label.split(' ')[0]) + 1
                  return month + '月'
                }
              },
              type: 'time',
              time: {
                unit: 'month'
              }
            }
          ],
          yAxes: [
            {
              location: 'bottom',
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 4,
                fontColor: '#808080'
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    updateLegend(legendData) {
      this.legendData = legendData
    },
    loadCompleted() {
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">
.MapCardMap {
  height: 240px;
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
