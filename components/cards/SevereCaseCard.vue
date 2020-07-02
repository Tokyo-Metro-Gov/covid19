<template>
  <v-col cols="12" md="6" class="DataCard">
    <severe-case-bar-chart
      :title="$t('旧モニタリング指標(4)重症患者数')"
      title-id="positive-status-severe-case"
      chart-id="time-bar-chart-positive-status-severe-case"
      :chart-data="graphData"
      :date="Data.date"
      :unit="$t('人')"
    >
      <template v-slot:additionalDescription>
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '（注）入院患者数のうち、集中治療室（ICU）等での管理又は人工呼吸器管理が必要な患者数を計上'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）上記の考え方で重症患者数の計上を開始した4月27日から作成'
              )
            }}
          </li>
        </ul>
      </template>
    </severe-case-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/positive_status.json'
import SevereCaseBarChart from '@/components/SevereCaseBarChart.vue'

export default {
  components: {
    SevereCaseBarChart
  },
  data() {
    const graphData = []
    Data.data
      .filter(d => new Date(d.date) > new Date('2020-04-26'))
      .forEach(d => {
        const date = new Date(d.date)
        const subTotal = d.severe_case
        if (!isNaN(subTotal)) {
          graphData.push({
            label: `${date.getMonth() + 1}/${date.getDate()}`,
            transition: subTotal
          })
        }
      })
    return {
      Data,
      graphData
    }
  }
}
</script>
