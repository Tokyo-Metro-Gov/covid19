<template>
  <v-col cols="12" md="6" class="DataCard">
    <shinjuku-bar-chart
      :title="'新宿区の来訪者数の推移 (参考値)'"
      :title-id="'shinjuku-visitors'"
      :chart-id="'shinjuku-visitors'"
      :standard-date="'2020-02-03'"
    />
  </v-col>
</template>

<script>
import ShinjukuBarChart from '@/components/ShinjukuBarChart.vue'

export default {
  components: {
    ShinjukuBarChart
  }
}
</script>
