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

<style lang="scss"></style>

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
      return {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets.map(d => {
          return {
            label: d.label,
            data: d.data
          }
        })
      }
    },
    displayOption() {
      return {}
    }
  },
  mounted() {
    console.log(this.chartData)
  }
}
</script>
