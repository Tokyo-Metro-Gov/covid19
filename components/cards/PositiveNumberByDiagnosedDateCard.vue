<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数（検査結果判明日別）')"
      :title-id="'positive-number-by-diagnosed-date'"
      :chart-id="'positive-number-by-diagnosed-date'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
      :by-date="true"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）検査結果の判明日を基準とする') }}
          </li>
          <li>
            {{ $t('（注）医療機関等が行った検査も含む') }}
          </li>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/positive_by_diagnosed.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const formatData = Data.data.map(data => {
      return {
        日付: data.diagnosed_date,
        小計: data.count
      }
    })

    // 陽性患者数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: Data,
      graphData
    }
  }
}
</script>
