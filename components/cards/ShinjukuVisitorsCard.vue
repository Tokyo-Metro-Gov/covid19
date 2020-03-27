<template>
  <v-col cols="12" md="6" class="DataCard">
    <visitors-bar-chart
      :title="$t('新宿区エリアの来訪者推移（参考値）')"
      :title-id="'shinjuku-visitors'"
      :chart-id="'shinjuku-visitors'"
      :chart-data="chartData.data"
      :date="chartData.date"
      :standard-date="'2020-02-03'"
      :start-date="'2020-02-10'"
      :source-link-header="$t('※本データは2020年3月31日までの掲載となります')"
      :url="'https://ds.yahoo.co.jp/datapolicy/'"
      :link-string="$t('ヤフー・データソリューション')"
    />
  </v-col>
</template>

<script>
import ShinjukuData from '@/data/13104_daily_visitors.json'
import VisitorsBarChart from '@/components/VisitorsBarChart.vue'

export default {
  components: {
    VisitorsBarChart
  },
  data() {
    return {
      chartData: ShinjukuData
    }
  }
}
</script>
