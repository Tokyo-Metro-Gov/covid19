<template>
  <data-view :title="title">
    <template v-slot:button>
      {{ `${chartData.datasets.length} 人` }}
    </template>
    <v-data-table
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="200"
    />
  </data-view>
</template>

<style>
  
  
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
