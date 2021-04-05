<template>
  <v-col cols="12" md="6" class="DataCard ConsultationAboutFeverNumberCard">
    <client-only>
      <mixed-bar-and-line-chart
        :title="$t('モニタリング項目(2)')"
        title-id="number-of-reports-to-consultations-about-fever-in-7119"
        :info-titles="[$t('#7119における発熱等相談件数')]"
        chart-id="mixed-bar-and-line-chart-fever"
        :chart-data="chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="labels"
        :data-labels="dataLabels"
        :unit="$t('件.reports')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000094'"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（例えば、2020年5月7日の移動平均値は、2020年5月1日から5月7日までの実績値を平均したもの）'
                )
              }}
            </li>
          </ul>
        </template>
      </mixed-bar-and-line-chart>
    </client-only>
  </v-col>
</template>

<script>
import MixedBarAndLineChart from '@/components/MixedBarAndLineChart.vue'
import ConsultationAboutFever from '@/data/consultation_about_fever.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'

export default {
  components: {
    MixedBarAndLineChart,
  },
  data() {
    const data = ConsultationAboutFever.data
    const consulationReportsCount = data.map((d) => d.count)
    const sevendayMoveAverages = data.map((d) => d.weekly_average_count)
    const labels = data.map((d) => d.date)
    const chartData = [consulationReportsCount, sevendayMoveAverages]
    const dataLabels = [this.$t('相談件数'), this.$t('７日間移動平均')]
    const date = ConsultationAboutFever.date
    const getFormatter = (columnIndex) => {
      // ７日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      labels,
      dataLabels,
      getFormatter,
    }
  },
}
</script>
