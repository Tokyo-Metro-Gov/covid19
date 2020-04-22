<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.patients.date"
      :unit="$t('人')"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）医療機関が保険適用で行った検査も含む') }}
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
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)

    const data = {
      Data,
      patientsGraph
    }
    return data
  }
}
</script>
