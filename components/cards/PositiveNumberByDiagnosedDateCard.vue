<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('PCR検査陽性者の発生動向（確定日別による陽性者数の推移）')"
      :title-id="'positive-number-by-diagnosed-date'"
      :chart-id="'positive-number-by-diagnosed-date'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
      :by-date="true"
    >
      <template v-slot:additionalDescription>
        <p>
          {{
            $t(
              '（注）患者発生の動向をより正確に分析するため、各保健所から報告があった患者の発生情報を、PCR検査により陽性であることを医師が確認した日別（確定日別）に整理したものである。'
            )
          }}
        </p>
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
