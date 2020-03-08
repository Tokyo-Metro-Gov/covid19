<template>
  <v-col cols="12" md="6" class="DataCard">
    <metro-bar-chart
      title="都営地下鉄の利用者数の推移"
      :title-id="'predicted-number-of-toei-subway-passengers'"
      :chart-data="metroGraph"
      :chart-option="metroGraphOption"
      :date="metroGraph.date"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import MetroData from '@/data/metro.json'
import MetroBarChart from '@/components/MetroBarChart.vue'

export default {
  components: {
    MetroBarChart
  },
  data() {
    // 都営地下鉄の利用者数の推移
    const metroGraph = MetroData

    const data = {
      Data,
      metroGraph,
      metroGraphOption: {
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              position: 'bottom',
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 10,
                maxTicksLimit: 20,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: false,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 12,
                maxTicksLimit: 10,
                fontColor: '#808080',
                callback(value) {
                  // 基準値を100としたときの相対値
                  return (value / 100).toFixed(2)
                }
              }
            }
          ]
        },
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItems, _) {
              const label = tooltipItems[0].label
              return `期間: ${label}`
            },
            label(tooltipItem, data) {
              const currentData = data.datasets[tooltipItem.datasetIndex]
              const percentage = `${currentData.data[tooltipItem.index]}%`

              return `${metroGraph.base_period}の利用者数との相対値: ${percentage}`
            }
          }
        }
      }
    }
    return data
  }
}
</script>
