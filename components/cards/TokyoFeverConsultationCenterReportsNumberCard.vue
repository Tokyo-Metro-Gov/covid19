<template>
  <v-col
    cols="12"
    md="6"
    class="DataCard TokyoFeverConsultationCenterReportsNumberCard"
  >
    <client-only>
      <fever-mixed-chart
        :title="$t('東京都発熱相談センターにおける相談件数')"
        :title-id="'number-of-reports-to-tokyo-fever-consultation-center'"
        :info-titles="[$t('新規陽性者における接触歴等不明者数'), $t('増加比')]"
        :chart-id="'tokyo-fever-consultation-center-chart'"
        :chart-data="graphData"
        :date="updated"
        :labels="dateList"
        :unit="$t('件.reports')"
        :data-labels="labels"
        :table-labels="labels"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '曜日などによる数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（例えば、2020年11月7日の移動平均値は、2020年11月1日から11月7日までの実績値を平均したもの）'
                )
              }}
            </li>
            <li>
              {{
                $t('東京都発熱相談センターを開設した2020年10月30日17時から作成')
              }}
            </li>
          </ul>
        </template>
      </fever-mixed-chart>
    </client-only>
  </v-col>
</template>

<script>
import FeverMixedChart from '@/components/FeverMixedChart'
import Data from '@/data/fever_consultation_center.json'

export default {
  components: {
    FeverMixedChart,
  },
  data() {
    const data = Data.data
    const feverConsultationCenter = data.map(
      (d) => d.count.fever_consultation_center
    )
    const cocoaDial = data.map((d) => d.count.cocoa_dial)
    const weeklyAverageTotal = data.map((d) => d.count.weekly_average_total)
    const dateList = data.map((d) => d.date)
    const updated = Data.date
    const graphData = [feverConsultationCenter, cocoaDial, weeklyAverageTotal]

    const labels = [
      this.$t('発熱相談センター'),
      this.$t('COCOA専用ダイヤル'),
      this.$t('７日間移動平均'),
    ]

    return {
      updated,
      graphData,
      dateList,
      labels,
    }
  },
}
</script>
