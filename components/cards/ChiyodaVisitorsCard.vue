<template>
  <v-col cols="12" md="6" class="DataCard">
    <visitors-bar-chart
      :title="$t('千代田区エリアの来訪者推移（参考値）')"
      :title-id="'chiyoda-visitors'"
      :chart-id="'chiyoda-visitors'"
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
import ChiyodaData from '@/data/13101_daily_visitors.json'
import VisitorsBarChart from '@/components/VisitorsBarChart.vue'

export default {
  components: {
    VisitorsBarChart
  },
  data() {
    return {
      chartData: ChiyodaData
    }
  }
}
</script>
