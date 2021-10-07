<template>
  <v-col cols="12" md="6" class="DataCard UntrackedRateCard">
    <client-only>
      <chart
        :title="$t('モニタリング項目(3)')"
        :title-id="'untracked-rate'"
        :info-titles="[$t('新規陽性者における接触歴等不明者数'), $t('増加比')]"
        :chart-id="'untracked-rate-chart'"
        :chart-data="chartData"
        :date="date"
        :labels="labels"
        :units="units"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '保健所から発生届が提出された日別（報告日別）の新規陽性者について、接触歴等の不明者、判明者に区分したものである'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を不明者数として算出（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '濃厚接触者など、患者の発生状況の内訳の公表を開始した2020年3月27日から作成'
                )
              }}
            </li>
            <li>
              {{
                $t('増加比は、１週間前の接触歴等不明者数（移動平均値）との比較')
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsMonitoring/UntrackedRate/Chart.vue'
import {
  DailyPositiveDetail as IDailyPositiveDetail,
  Datum as IDailyPositiveDetailDatum,
} from '@/libraries/auto_generated/data_converter/convertDailyPositiveDetail'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'

type Data = {
  dataLabels: string[]
  tableLabels: string[]
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
  units: string[]
}
type Methods = {}
type Computed = {
  chartData: (number | null)[][]
  date: string
  labels: string[]
  filteredDailyPositiveDetailData: IDailyPositiveDetailDatum[]
  dailyPositiveDetail: IDailyPositiveDetail
}
type Props = {}

const firstDiagnosedDate = new Date('2020-03-27')

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const dataLabels = [
      this.$t('接触歴等判明者数') as string,
      this.$t('接触歴等不明者数') as string,
      this.$t('接触歴等不明者数（７日間移動平均）') as string,
      this.$t('増加比') as string,
    ]

    const tableLabels = [
      this.$t('接触歴等判明者数') as string,
      this.$t('接触歴等不明者数') as string,
      this.$t('接触歴等不明者数（７日間移動平均）') as string,
      this.$t('増加比') as string,
    ]

    const getFormatter = (columnIndex: number) => {
      // 7日間移動平均と増加比は小数点第1位まで表示する。
      if (columnIndex >= 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    const units = [this.$t('人') as string, '%', this.$t('ポイント') as string]

    return {
      dataLabels,
      tableLabels,
      getFormatter,
      units,
    }
  },
  computed: {
    chartData() {
      const reportedCount: (number | null)[] =
        this.filteredDailyPositiveDetailData.map((d) => d.reportedCount)

      const missingCount: (number | null)[] =
        this.filteredDailyPositiveDetailData.map((d) => d.missingCount)

      const untrackedRate: (number | null)[] =
        this.filteredDailyPositiveDetailData.map(
          (d) => d.weeklyAverageUntrackedCount
        )

      const untrackedIncreseRate: (number | null)[] =
        this.filteredDailyPositiveDetailData.map(
          (d) => d.weeklyAverageUntrackedIncresePercent
        )

      return [reportedCount, missingCount, untrackedRate, untrackedIncreseRate]
    },
    date() {
      return this.dailyPositiveDetail.date
    },
    labels() {
      return this.filteredDailyPositiveDetailData.map(
        (d) => `${d.diagnosedDate}`
      )
    },
    filteredDailyPositiveDetailData() {
      return this.dailyPositiveDetail.data.filter(
        (d) => new Date(d.diagnosedDate) >= firstDiagnosedDate
      )
    },
    dailyPositiveDetail() {
      return this.$store.state.dailyPositiveDetail
    },
  },
})
</script>
