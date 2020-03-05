<template>
  <data-view :title="title" :date="date">
    <bar :chart-data="displayData" :options="chartOption" :height="240" />
  </data-view>
</template>

<style></style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    chartData: {
      type: Object,
      required: false,
      default: () => {}
    },
    chartOption: {
      type: Object,
      required: false,
      default: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    displayData() {
      const colors = ['#a6e29f', '#63c765', '#008b41']
      return {
        labels: this.chartData.datasets.map(d => d.label),
        datasets: this.chartData.labels.map((label, i) => {
          return {
            label,
            data: this.chartData.datasets.map(d => d.data[i]),
            backgroundColor: colors[i],
            borderWidth: 0
          }
        })
      }
    }
  }
}
</script>
