<template>
  <data-view :title="title">
    <template v-slot:button>
      {{ `${chartData.datasets.length} 人` }}
    </template>
    <v-data-table
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page=-1
      :hide-default-footer="true"
      :height=200
    ></v-data-table>
  </data-view>
</template>

<style></style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: String,
    chartData: Object
  }
}
</script>
