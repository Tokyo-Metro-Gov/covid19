<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
  </data-view>
</template>

<i18n src="./AgencyBarChart.i18n.json"></i18n>

<script>
import agencyData from '@/data/agency.json'
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'agency-bar-chart'
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      chartData: agencyData,
      date: agencyData.date
    }
  },
  computed: {
    displayData() {
      const colors = ['#008b41', '#63c765', '#a6e29f']
      return {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets.map((d, i) => {
          return {
            label: d.label,
            data: d.data,
            backgroundColor: colors[i]
          }
        })
      }
    },
    displayOption() {
      const self = this
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItem) {
              const dateString = tooltipItem[0].label
              return self.$t('期間: {duration}', {
                duration: dateString
              })
            },
            label(tooltipItem, data) {
              const index = tooltipItem.datasetIndex
              const title = self.$t(data.datasets[index].label)
              const num = tooltipItem.value
              const unit = self.$t(self.unit)
              return `${title}: ${num}${unit}`
            }
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080',
                maxTicksLimit: 10,
                callback(label) {
                  return `${label}${self.unit}`
                }
              }
            }
          ]
        }
      }
    }
  }
}
</script>
