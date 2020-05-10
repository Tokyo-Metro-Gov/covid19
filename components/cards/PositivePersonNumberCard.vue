<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('判明日別陽性患者数')"
      :title-id="'number-of-positive-persons'"
      :chart-id="'number-of-positive-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
    >
      <!-- <template v-slot:description>
        <ul>
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
      </template> -->
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
