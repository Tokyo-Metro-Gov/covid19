<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施人数（健康安全研究センターによる実施分）')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
    >
      <template v-slot:attentionNote>
        <p>
          {{
            $t(
              '本グラフは、5月13日より「検査実施人数（陰性確認を除く）と陽性率の推移」（現在の「モニタリング指標(6)PCR検査の陽性率」）のグラフで検査実施人数を掲載していることから、データが重複するため、6月15日をもって削除いたします。'
            )
          }}
        </p>
      </template>
      <template v-slot:description>
        <ul class="ListStyleNone">
          <li>
            {{ $t('（注）検査結果の判明日を基準とする') }}
          </li>
          <li>
            {{
              $t(
                '（注）医療機関等での検査人数、チャーター機帰国者、クルーズ船乗客等は含まれていない'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
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
    const formatData = Data.inspection_persons.labels.map((date, i) => {
      return {
        日付: date,
        小計: Data.inspection_persons.datasets[0].data[i]
      }
    })

    // 検査実施人数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: Data.inspection_persons,
      graphData
    }
  }
}
</script>
