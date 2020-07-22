<template>
  <v-col cols="12" md="6" class="DataCard"
    ><client-only>
      <time-bar-chart
        :title="$t('新規患者に関する報告件数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :date="Data.patients_summary.date"
        :unit="$t('人')"
        :by-date="true"
        :url="
          'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
        "
      >
        <template v-slot:description>
          <ul class="ListStyleNone">
            <li>
              {{ $t('（注）保健所から発生届が提出された日を基準とする') }}
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
    </client-only></v-col
  >
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

    return {
      Data,
      patientsGraph
    }
  }
}
</script>
