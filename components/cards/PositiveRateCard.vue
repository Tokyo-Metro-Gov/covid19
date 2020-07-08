<template>
  <v-col cols="12" md="6" class="DataCard">
    <positive-rate-mixed-chart
      :title="$t('旧モニタリング指標(6)')"
      :title-id="'positive-rate'"
      :info-titles="[$t('PCR検査の陽性率')]"
      :chart-id="'positive-rate-chart'"
      :chart-data="positiveRateGraph"
      :get-formatter="getFormatter"
      :date="PositiveRate.date"
      :labels="positiveRateLabels"
      unit="%"
      :data-labels="positiveRateDataLabels"
      :table-labels="positiveRateTableLabels"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '「検査実施人数」の推移は本グラフ及びテーブルにて掲載（検査実施人数＝陽性者数＋陰性者数）'
              )
            }}
          </li>
          <li>
            {{ $t('陰性確認のために行った検査の実施人数は含まない') }}
          </li>
        </ul>
      </template>
      <template v-slot:additionalDescription>
        <span>{{ $t('（注）') }}</span>
        <ul>
          <li>
            {{
              $t(
                '陽性率：陽性判明数の移動平均／（陽性判明数＋陰性判明数）の移動平均'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '集団感染発生や曜日による件数のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を陽性率として算出（例えば、5月7日の陽性率は、5月1日から5月7日までの実績平均を用いて算出）'
              )
            }}
          </li>
          <li>
            {{ $t('検査結果の判明日を基準とする') }}
          </li>
          <li>
            {{
              $t(
                '5月7日以降は(1)東京都健康安全研究センター、(2)PCRセンター（地域外来・検査センター）、(3)医療機関での保険適用検査実績により算出。4月10日～5月6日は(3)が含まれず(1)(2)のみ、4月9日以前は(2)(3)が含まれず(1)のみのデータ'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '陽性者が1月24日、25日、30日、2月13日にそれぞれ1名、2月14日に2名発生しているが、有意な数値がとれる2月15日から作成'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '速報値として公表するものであり、後日確定データとして修正される場合がある'
              )
            }}
          </li>
        </ul>
      </template>
    </positive-rate-mixed-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import PositiveRate from '@/data/positive_rate.json'
import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction
} from '@/utils/monitoringItemsValueFormatters'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart
  },
  data() {
    // 検査実施日別状況
    const l = PositiveRate.data.length
    const positiveCount = []
    const negativeCount = []
    const positiveRates = []
    const positiveRateLabels = []
    for (let i = 0; i < l; i++) {
      positiveCount.push(PositiveRate.data[i].positive_count)
      positiveRates.push(PositiveRate.data[i].positive_rate)
      negativeCount.push(PositiveRate.data[i].negative_count)
      positiveRateLabels.push(PositiveRate.data[i].diagnosed_date)
    }

    const positiveRateGraph = [positiveCount, negativeCount, positiveRates]
    const positiveRateDataLabels = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('陽性率')
    ]
    const positiveRateTableLabels = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('検査実施人数 (日別)'),
      this.$t('検査実施人数（2月14日以前分を含む累計）'),
      this.$t('陽性率')
    ]

    const getFormatter = columnIndex => {
      // モニタリング指標(6)PCR検査の陽性率は小数点第1位まで表示する。
      if (columnIndex === 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      PositiveRate,
      positiveRateGraph,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
      getFormatter
    }
  }
}
</script>
