<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <data-selector v-model="dataKind" />
    </template>
    <bar :chart-data="displayData" :options="options" :height="240" />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="displayInfo.lText"
        :s-text="displayInfo.sText"
        :unit="displayInfo.unit"
      />
    </template>
  </data-view>
</template>

<script>
import DataView from '@/components/DataView.vue'
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataSelector, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    chartData: {
      type: Array,
      required: false,
      default: () => []
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    items: {
      type: Array,
      required: false,
      default: () => []
    },
    labels: {
      type: Array,
      required: false,
      default: () => []
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
  },
  data() {
    return {
      dataKind: 'transition'
    }
  },
  methods: {
    cumulative: function(array) {
      const cumulativeArray = [];
      let patSum = 0;
      array.forEach(d => {
        patSum += d;
        cumulativeArray.push(patSum);
      });
      return cumulativeArray;
    },
    sum: function(array) {
      return array.reduce((acc, cur) => {
        return acc + cur;
      })
    },
    pickLastNumber: function(chartDataArray) {
      return chartDataArray.map(array => {
        return array[array.length - 1];
      })
    },
    cumulativeSum: function(chartDataArray) {
      return chartDataArray.map(array => {
        return array.reduce((acc, cur) => {
          return acc + cur;
        })
      });
    },
    eachArraySum: function(chartDataArray) {
      const sumArray = [];
      for(let i = 0; i < chartDataArray[0].length; i++){
        sumArray.push(chartDataArray[0][i] + chartDataArray[1][i]);
      }
      return sumArray;
    }
  },
  computed: {
    displayInfo() {
      if (this.dataKind === 'transition') {
        return {
          lText: this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),
          sText: `${this.labels[this.labels.length - 1]} の合計`,
          unit: this.unit
        }
      }
      return {
        lText: this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),
        sText: `${this.labels[this.labels.length - 1]} の全体累計`,
        unit: this.unit
      }
    },
    displayData() {
      const colorArray = ['#00A040', '#00D154'];
      if (this.dataKind === 'transition') {
        return {
          labels: this.labels,
          datasets: this.chartData.map((item, index) => {
            return {
              label: this.items[index],
              data: item,
              backgroundColor: colorArray[index],
              borderWidth: 0
            }
          })
        }
      }
      return {
        labels: this.labels,
        datasets: this.chartData.map((item, index) => {
          return {
            label: this.items[index],
            data: this.cumulative(item),
            backgroundColor: colorArray[index],
            borderWidth: 0
          }
        })
      }
    },
    options() {
      const unit = this.unit
      const sumArray = this.eachArraySum(this.chartData)
      const data = this.chartData
      const cumulativeData = this.chartData.map(item => {return this.cumulative(item)})
      const cumulativeSumArray = this.eachArraySum(cumulativeData)
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            label: (tooltipItem) => {
              const labelText = this.dataKind === 'transition' ? `${sumArray[tooltipItem.index]}${unit}（都内: ${data[0][tooltipItem.index]}/その他: ${data[1][tooltipItem.index]}）` : `${cumulativeSumArray[tooltipItem.index]}${unit}（都内: ${cumulativeData[0][tooltipItem.index]}/その他: ${cumulativeData[1][tooltipItem.index]}）`
              return labelText
            }
          }
        },
        responsive: true,
        legend: {
          display: true
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
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
              location: 'bottom',
              stacked: true,
              gridLines: {
                display: true,
                color: '#E5E5E5'
              },
              ticks: {
                suggestedMin: 0,
                maxTicksLimit: 8,
                fontColor: '#808080'
              }
            }
          ]
        }
      }
    }
  }
}
</script>
