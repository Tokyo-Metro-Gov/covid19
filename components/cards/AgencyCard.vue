<template>
  <v-col cols="12" md="6" class="DataCard">
    <agency-bar-chart
      :title="$t('都庁来庁者数の推移')"
      :title-id="'agency'"
      :chart-id="'agency'"
      :url="''"
      :unit="$t('人')"
    />
  </v-col>
</template>

<script>
import AgencyBarChart from '@/components/AgencyBarChart.vue'

export default {
  components: {
    AgencyBarChart
  }
}
</script>
