<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-increase-ratio-by-week-chart
      :title="$t('モニタリング指標(3)週単位の陽性者増加比')"
      :title-id="'increase-ratio-of-confirmed-cases-by-daily'"
      :chart-id="'time-line-chart-patients-increase-ratio'"
      :chart-data="graphData"
      :formatter="formatter"
      :date="dailyPositiveDetail.date"
      :items="items"
      :unit="''"
      :table-labels="tableLabels"
    >
      <template v-slot:additionalDescription>
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '（注）直近１週間の保健所からの新規陽性者の報告数とその前の１週間の報告数の比率。１を上回ると増加し、１を下回ると減少する'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）１週間前の新規陽性者の報告数と比較した際の増加比について、有意な数値がとれる2月22日から作成'
              )
            }}
          </li>
        </ul>
      </template>
    </confirmed-cases-increase-ratio-by-week-chart>
  </v-col>
</template>

<script>
import dailyPositiveDetail from '@/data/daily_positive_detail.json'
import formatGraph from '@/utils/formatGraph'
import ConfirmedCasesIncreaseRatioByWeekChart from '@/components/ConfirmedCasesIncreaseRatioByWeekChart.vue'
import { getNumberToFixedFunction } from '~/utils/monitoringStatusValueFormatters'

export default {
  components: {
    ConfirmedCasesIncreaseRatioByWeekChart
  },
  data() {
    const formatData = []
    dailyPositiveDetail.data.forEach(d => {
      if (d.weekly_gain_ratio) {
        formatData.push({
          日付: new Date(d.diagnosed_date),
          小計: d.weekly_gain_ratio
        })
      }
    })

    // 週単位の陽性者増加比グラフ
    const graphData = formatGraph(formatData)
    const tableLabels = [this.$t('週単位の陽性者増加比')]

    const items = [
      this.$t('週単位の陽性者増加比')
    ]

    // モニタリング指標(3)週単位の陽性者増加比は小数点第2位まで表示する。
    const formatter = getNumberToFixedFunction(2)

    return {
      dailyPositiveDetail,
      graphData,
      tableLabels,
      items,
      formatter
    }
  }
}
</script>
