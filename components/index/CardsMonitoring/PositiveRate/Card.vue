<template>
  <v-col cols="12" md="6" class="DataCard PositiveRateCard">
    <client-only>
      <positive-rate-mixed-chart
        :title="$t('モニタリング項目(4)')"
        :title-id="'positive-rate'"
        :info-titles="[$t('検査の陽性率'), $t('検査人数')]"
        :chart-id="'positive-rate-chart'"
        :chart-data="positiveRateGraph"
        :get-formatter="getFormatter"
        :date="PositiveRate.date"
        :labels="positiveRateLabels"
        unit="%"
        :option-unit="$t('人')"
        :data-labels="positiveRateDataLabels"
        :table-labels="positiveRateTableLabels"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000088'"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '陽性率：陽性判明数（PCR・抗原）の移動平均／検査人数（＝陽性判明数（PCR・抗原）＋陰性判明数（PCR・抗原））の移動平均'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値をもとに算出し、折れ線グラフで示す（例えば、2020年5月7日の陽性率は、2020年5月1日から5月7日までの実績平均を用いて算出）'
                )
              }}
            </li>
            <li>
              {{ $t('検査結果の判明日を基準とする') }}
            </li>
            <li>
              {{
                $t(
                  '2020年5月7日以降は(1)東京都健康安全研究センター、(2)PCRセンター（地域外来・検査センター）、(3)医療機関での保険適用検査実績により算出。2020年4月10日～2020年5月6日は(3)が含まれず(1)(2)のみ、2020年4月9日以前は(2)(3)が含まれず(1)のみのデータ'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '2020年5月13日から2020年6月16日までに行われた抗原検査については、結果が陰性の場合、PCR検査での確定検査が必要であったため、検査件数の二重計上を避けるため、陽性判明数のみ計上。2020年6月17日以降に行われた抗原検査については、陽性判明数、陰性判明数の両方を計上'
                )
              }}
            </li>
            <li>
              {{ $t('陰性確認のために行った検査の実施人数は含まない') }}
            </li>
            <li>
              {{
                $t(
                  '陽性者が2020年1月24日、25日、30日、2月13日にそれぞれ1名、2月14日に2名発生しているが、有意な数値がとれる2020年2月15日から作成'
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
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
import PositiveRate from '@/data/positive_rate.json'
import {
  getCommaSeparatedNumberToFixedFunction,
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart,
  },
  data() {
    // 検査実施日別状況
    const { data } = PositiveRate
    const pcrPositiveCount = data.map((data) => data.pcr_positive_count)
    const pcrNegativeCount = data.map((data) => data.pcr_negative_count)
    const antigenPositiveCount = data.map((data) => data.antigen_positive_count)
    const antigenNegativeCount = data.map((data) => data.antigen_negative_count)
    const positiveRates = data.map((data) => data.positive_rate)
    const positiveRateLabels = data.map((data) => data.diagnosed_date)
    const weeklyAverageDiagnosedCount = data.map(
      (data) => data.weekly_average_diagnosed_count
    )
    const positiveRateGraph = [
      pcrPositiveCount,
      antigenPositiveCount,
      pcrNegativeCount,
      antigenNegativeCount,
      weeklyAverageDiagnosedCount,
      positiveRates,
    ]
    const positiveRateDataLabels = [
      this.$t('PCR検査陽性者数'),
      this.$t('抗原検査陽性者数'),
      this.$t('PCR検査陰性者数'),
      this.$t('抗原検査陰性者数'),
      this.$t('検査人数（７日間移動平均）'),
      this.$t('陽性率'),
    ]
    const positiveRateTableLabels = positiveRateDataLabels.map((d) => d)

    const getFormatter = (columnIndex) => {
      if (columnIndex === 4) {
        // 検査人数（７日間移動平均）は小数点第1位まで表示し、整数部分は３桁区切りにする。
        return getCommaSeparatedNumberToFixedFunction(1)
      } else if (columnIndex === 5) {
        // 陽性率は小数点第1位まで表示する。
        return getNumberToFixedFunction(1)
      } else {
        return getNumberToLocaleStringFunction()
      }
    }

    return {
      PositiveRate,
      positiveRateGraph,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
      getFormatter,
    }
  },
}
</script>
