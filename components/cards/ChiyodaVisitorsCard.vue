<template>
  <v-col cols="12" md="6" class="DataCard">
    <visitors-bar-chart
      :title="$t('千代田区エリアの来訪者推移（参考値）')"
      :title-id="'chiyoda-visitors'"
      :chart-id="'chiyoda-visitors'"
      :chart-data="chartData.data"
      :date="chartData.date"
      :tooltip-title="tooltipTitle"
      :standard-date="'2020-02-03'"
      :start-date="'2020-02-10'"
    />
  </v-col>
</template>

<script>
import ChiyodaData from '@/data/13101_daily_visitors.json'
import VisitorsBarChart from '@/components/VisitorsBarChart.vue'

export default {
  components: {
    VisitorsBarChart
  },
  data() {
    // ツールチップ label 文字列
    // this.$t を使うため visitors-bar-chart の外側へ
    const tooltipTitle = tooltipItems => {
      const label = tooltipItems[0].label
      return this.$t('期間: {duration}', {
        duration: this.$t(label)
      })
    }
    return {
      chartData: ChiyodaData,
      tooltipTitle
    }
  }
}
</script>
