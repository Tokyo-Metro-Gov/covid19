<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard ConsultationAboutFeverNumberCard"
  >
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
        :unit="$t('件.calls')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000094'"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
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

<script lang="ts">
import Vue from 'vue'

import MixedBarAndLineChart from '@/components/index/_shared/MixedBarAndLineChart.vue'
import {
  ConsultationAboutFever as IConsultationAboutFever,
  Datum as IConsultationAboutFeverDatum,
} from '@/libraries/auto_generated/data_converter/convertConsultationAboutFever'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  dataLabels: string[]
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
}
type Methods = {}
type Computed = {
  chartData: [number[], (number | null)[]]
  date: string
  labels: string[]
  consultationAboutFeverData: IConsultationAboutFeverDatum[]
  consultationAboutFever: IConsultationAboutFever
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    MixedBarAndLineChart,
  },
  data() {
    const dataLabels = [
      this.$t('相談件数') as string,
      this.$t('７日間移動平均') as string,
    ]
    const getFormatter = (columnIndex: number) => {
      // ７日間移動平均は小数点第1位まで表示する。
      if (columnIndex === 1) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      dataLabels,
      getFormatter,
    }
  },
  computed: {
    chartData() {
      const consulationReportsCount = this.consultationAboutFeverData.map(
        (d) => d.count
      )
      const sevendayMoveAverages = this.consultationAboutFeverData.map(
        (d) => d.weeklyAverageCount
      )

      return [consulationReportsCount, sevendayMoveAverages]
    },
    date() {
      return this.consultationAboutFever.date
    },
    labels() {
      return this.consultationAboutFeverData.map(
        (data) => this.$d(data.date) as string
      )
    },
    consultationAboutFeverData() {
      return this.consultationAboutFever.data
    },
    consultationAboutFever() {
      return this.$store.state.consultationAboutFever
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
