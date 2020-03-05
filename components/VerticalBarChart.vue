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
      type: Array,
      required: false,
      default: () => []
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
    },
    unit: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      dataKind: 'transition'
    }
  },
  computed: {
    displayData() {
      return this.myd()
    }
  },
  mounted() {
    console.log(this.myd())
  },
  methods: {
    myd() {
      return {
        labels: this.chartData.map(d => {
          return d.label
        }),
        datasets: this.chartData.map(d => {
          return {
            label: d.label,
            data: d.data,
            backgroundColor: '#00B849',
            borderWidth: 0
          }
        })
      }
    }
  }
}
</script>
