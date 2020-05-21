<template>
  <v-col cols="12" md="6" class="DataCard">
    <dashed-rectangle-time-bar-chart
      :title="$t('モニタリング指標(5)入院患者数')"
      :title-id="'number-of-hospitalized'"
      :chart-id="'dashed-rectangle-time-bar-chart-hospitalized'"
      :chart-data="patientsGraph"
      :date="positiveStatus.date"
      :unit="$t('人')"
      :by-date="true"
      :dashed-rectangle-range="'5/11'"
      :added-value="200"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
    >
      <template v-slot:additionalDescription>
        <ul>
          <li>
            {{
              $t(
                '（注）5月11日までの入院患者数には宿泊療養者・自宅療養者等を含んでいるため、参考値である'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）当サイトにおいて入院患者数の公表を開始した3月6日から作成'
              )
            }}
          </li>
        </ul>
      </template>
    </dashed-rectangle-time-bar-chart>
  </v-col>
</template>

<script lang="ts">
import positiveStatus from '@/data/positive_status.json'
import formatGraph from '@/utils/formatGraph'
import DashedRectangleTimeBarChart from '@/components/DashedRectangleTimeBarChart.vue'

export default {
  components: {
    DashedRectangleTimeBarChart
  },
  data() {
    const formatData: { 日付: Date; 小計: number }[] = []
    positiveStatus.data.forEach(d => {
      if (new Date(d.date) >= new Date('2020-03-06')) {
        formatData.push({
          日付: new Date(d.date),
          小計: d.hospitalized
        })
      }
    })
    // 入院患者数グラフ
    const patientsGraph = formatGraph(formatData)

    const data = {
      positiveStatus,
      patientsGraph
    }
    return data
  }
}
</script>
