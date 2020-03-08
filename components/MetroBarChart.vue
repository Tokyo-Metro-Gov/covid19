<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="MetroGraph-Desc">
        {{ chartData.base_period }}の利用者数*の平均値を基準としたときの相対値
        <br />
        *都営地下鉄4路線の自動改札出場数
      </p>
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="chartOption"
      :height="240"
    />
  </data-view>
</template>

<style lang="scss">
.MetroGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

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
      default: 'metro-bar-chart'
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
