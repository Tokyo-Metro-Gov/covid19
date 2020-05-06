<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施人数')"
      :title-id="'number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
      :url="
        'https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/new_coronavirus_portal.html'
      "
      :source="$t('データ取得場所')"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合があります'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import InspectionPersons from '@/data/inspection_persons.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const formatData = InspectionPersons.inspection_persons.labels.map(
      (date, i) => {
        return {
          日付: date,
          小計: InspectionPersons.inspection_persons.datasets[0].data[i]
        }
      }
    )

    // 検査実施人数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: InspectionPersons.inspection_persons,
      graphData
    }
  }
}
</script>
