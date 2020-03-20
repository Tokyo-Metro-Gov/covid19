<template>
  <v-col cols="12" md="6" class="DataCard">
    <shinjuku-bar-chart
      :title="$t('新宿区エリアの来訪者推移（参考値）')"
      :title-id="'shinjuku-visitors'"
      :chart-id="'shinjuku-visitors'"
      :chart-data="chartData.data"
      :date="chartData.date"
      :tooltip-title="tooltipTitle"
      :standard-date="'2020-02-03'"
      :start-date="'2020-02-10'"
    />
  </v-col>
</template>

<script>
import ShinjukuData from '@/data/13104_daily_visitors.json'
import ShinjukuBarChart from '@/components/ShinjukuBarChart.vue'

export default {
  components: {
    ShinjukuBarChart
  },
  data() {
    // ツールチップ label 文字列
    // this.$t を使うため shinjuku-bar-chart の外側へ
    const tooltipTitle = tooltipItems => {
      const label = tooltipItems[0].label
      return this.$t('期間: {duration}', {
        duration: this.$t(label)
      })
    }
    return {
      chartData: ShinjukuData,
      tooltipTitle
    }
  }
}
</script>
