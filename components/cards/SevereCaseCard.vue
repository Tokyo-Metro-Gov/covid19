<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('（４）重症患者数')"
      :title-id="'positive-status-severe-case'"
      :chart-id="'time-bar-chart-positive-status-severe-case'"
      :chart-data="graphData"
      :date="Data.date"
      :unit="$t('人')"
    >
      <template v-slot:additionalDescription>
        <ul>
          <li>
            {{
              $t(
                '（注）入院患者数のうち、集中治療室（ICU）等での管理又は人工呼吸器管理が必要な患者数を計上上記の考え方で重症患者数の計上を開始した4月27日から作成'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/positive_status.json'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const graphDataTemp = []
    let patSum = 0
    let prevDateSubTotal = 0
    Data.data
      .filter(d => new Date(d.date) > new Date('2020-04-25'))
      .forEach(d => {
        const date = new Date(d.date)
        const subTotal = d.severe_case - prevDateSubTotal
        prevDateSubTotal = d.severe_case
        if (!isNaN(subTotal)) {
          patSum += subTotal
          graphDataTemp.push({
            label: `${date.getMonth() + 1}/${date.getDate()}`,
            transition: subTotal,
            cumulative: patSum
          })
        }
      })
    const graphData = graphDataTemp.slice(1)
    const data = {
      Data,
      graphData
    }
    return data
  }
}
</script>
