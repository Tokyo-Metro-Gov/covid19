<template>
  <v-col cols="12" md="6" class="DataCard TokyoRulesApplicationNumberCard">
    <client-only>
      <mixed-bar-and-line-chart
        :title="$t('モニタリング項目(5)')"
        title-id="number-of-tokyo-rules-applied"
        :info-titles="[$t('救急医療の東京ルールの適用件数')]"
        chart-id="mixed-bar-and-line-chart-tokyo-rules"
        :chart-data="chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="labels"
        :data-labels="dataLabels"
        :unit="$t('件.reports')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000091'"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）'
                )
              }}
            </li>
          </ul>
        </template>
      </mixed-bar-and-line-chart>
    </client-only>
  </v-col>
</template>

<script>
import MixedBarAndLineChart from '@/components/MixedBarAndLineChart.vue'
import TokyoRule from '@/data/tokyo_rule.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MixedBarAndLineChart,
  },
  data() {
    const data = TokyoRule.data
    const applicationReportsCount = data.map((d) => d.count)
    const sevendayMoveAverages = data.map((d) => d.weekly_average_count)
    const labels = data.map((d) => d.date)
    const chartData = [applicationReportsCount, sevendayMoveAverages]
    const dataLabels = [this.$t('適用件数'), this.$t('７日間移動平均')]
    const date = TokyoRule.date
    const getFormatter = (columnIndex) => {
      // ７日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      labels,
      dataLabels,
      getFormatter,
    }
  },
}
</script>
