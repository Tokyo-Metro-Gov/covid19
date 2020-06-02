<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新型コロナ受診相談窓口相談件数')"
      :title-id="'number-of-reports-to-covid19-consultation-desk'"
      :chart-id="'time-bar-chart-querents'"
      :chart-data="querentsGraph"
      :date="Data.querents.date"
      :unit="$t('件.reports')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070'"
    >
      <template v-slot:attentionNote>
        <p>
          {{
            $t(
              '本グラフは、5月22日より「モニタリング指標（７）受診相談窓口における相談件数」のグラフを掲載していることから、データが重複するため、6月15日をもって削除いたします。'
            )
          }}
        </p>
      </template>
    </time-bar-chart>
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 帰国者・接触者 電話相談センター 相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    return {
      Data,
      querentsGraph
    }
  }
}
</script>
