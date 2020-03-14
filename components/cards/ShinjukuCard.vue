<template>
  <v-col cols="12" md="6" class="DataCard">
    <shinjuku-bar-chart
      :title-id="'shinjuku-visitors'"
      :chart-id="'shinjuku-visitors'"
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
