<template>
  <v-col cols="12" md="6" class="DataCard">
    <single-time-bar-chart
      :title="$t('新型コロナ受診相談窓口相談件数あたりの検査実施件数の割合(%)')"
      :title-id="
        'inspection-persons-number-per-consultation-desk-reports-number'
      "
      :chart-id="'time-bar-chart-querents'"
      :chart-data="resultGraph"
      :date="data.date"
      :unit="$t('%')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070'"
    >
      <!-- 件.reports = 窓口相談件数 -->
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
    </single-time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import SingleTimeBarChart from '@/components/SingleTimeBarChart.vue'

export default {
  components: {
    SingleTimeBarChart
  },
  data() {
    // 帰国者・接触者 電話相談センター 相談件数
    const querentsGraph = formatGraph(Data.querents.data)

    const formatData = Data.inspection_persons.labels.map((date, i) => {
      return {
        日付: date,
        小計: Data.inspection_persons.datasets[0].data[i]
      }
    })

    // 検査実施人数グラフ
    const graphData = formatGraph(formatData)

    const dict = {}
    graphData.forEach(data => {
      dict[data.label] = data.transition
    })

    const resultData = querentsGraph.map(querent => {
      // 検査実施人数
      const inspectionPersons = dict[querent.label]
      const consultationDeskReportsNumber = querent.transition
      return {
        日付: querent.label,
        小計: (inspectionPersons / consultationDeskReportsNumber) * 100
      }
    })

    const resultGraph = formatGraph(resultData)

    return {
      data: Data.inspection_persons,
      resultGraph
    }
  }
}
</script>
