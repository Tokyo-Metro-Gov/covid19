<template>
  <v-col cols="12" md="6" class="DataCard">
    <shinjuku-bar-chart
      :title="$t('新宿区エリアの来訪者推移（参考値）')"
      :title-id="'shinjuku-visitors'"
      :chart-id="'shinjuku-visitors'"
      :standard-date="'2020-02-03'"
      :start-date="'2020-02-10'"
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
