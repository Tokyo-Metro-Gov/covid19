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

<script>
import dayjs from 'dayjs'
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
    chartData: {
      type: Object,
      required: false,
      default: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
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
            label(tooltipItem) {
              return `${tooltipItem.value}${self.unit}`
            },
            title(tooltipItem) {
              const dateString = tooltipItem[0].label
              return self.dayRange(dateString)
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
                fontColor: '#808080',
                callback(label) {
                  return self.dayRange(label)
                }
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
                callback(label) {
                  return `${label}${self.unit}`
                }
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    dayRange(dateString) {
      // 開始日は月曜日、終了日は日曜日とする
      // ref: https://github.com/tokyo-metropolitan-gov/covid19/issues/987#issuecomment-597021403
      const day = dayjs(dateString)
      const start = day.format('M/D')
      const end = day.day(7).format('D')
      return `${start}-${end}`
    }
  }
}
</script>
