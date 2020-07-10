<template>
  <v-col cols="12" md="6" class="DataCard">
    <untracked-rate-mixed-chart
      :title="$t('モニタリング項目(3)')"
      :title-id="'untracked-rate'"
      :info-titles="[$t('新規陽性者における接触歴等不明者数'), $t('増加比')]"
      :chart-id="'untracked-rate-chart'"
      :chart-data="graphData"
      :get-formatter="getFormatter"
      :date="updated"
      :labels="dateList"
      :unit="['人', '%']"
      :data-labels="dataLabels"
      :table-labels="tableLabels"
    >
      <template v-slot:additionalDescription>
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
                '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を不明者数として算出（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '濃厚接触者など、患者の発生状況の内訳の公表を開始した3月27日から作成'
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
    </untracked-rate-mixed-chart>
  </v-col>
</template>

<script>
import Data from '@/data/daily_positive_detail.json'
import UntrackedRateMixedChart from '@/components/UntrackedRateMixedChart'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    UntrackedRateMixedChart
  },
  data() {
    const reportedCount = []
    const missingCount = []
    const untrackedRate = []
    const untrackedIncreseRate = []
    const dateList = []

    Data.data
      .filter(d => new Date(d.diagnosed_date) >= new Date('2020-03-27'))
      .forEach(d => {
        reportedCount.push(d.reported_count)
        missingCount.push(d.missing_count)
        untrackedRate.push(d.weekly_average_untracked_count)
        untrackedIncreseRate.push(d.weekly_average_untracked_increse_percent)
        dateList.push(d.diagnosed_date)
      })

    const updated = Data.date
    const graphData = [
      reportedCount,
      missingCount,
      untrackedRate,
      untrackedIncreseRate
    ]

    const dataLabels = [
      this.$t('接触歴等判明者数'),
      this.$t('接触歴等不明者数'),
      this.$t('接触歴等不明者数（７日間移動平均）'),
      this.$t('増加比')
    ]
    const tableLabels = [
      this.$t('接触歴等判明者数'),
      this.$t('接触歴等不明者数'),
      this.$t('接触歴等不明者数（７日間移動平均）'),
      this.$t('増加比')
    ]

    const getFormatter = columnIndex => {
      // 7日間移動平均と増加比は小数点第1位まで表示する。
      if (columnIndex >= 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      updated,
      graphData,
      dateList,
      dataLabels,
      tableLabels,
      getFormatter
    }
  }
}
</script>
