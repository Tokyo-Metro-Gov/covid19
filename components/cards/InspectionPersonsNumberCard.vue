<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施人数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）医療機関が保険適用で行った検査は含まれていない') }}
          </li>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
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
