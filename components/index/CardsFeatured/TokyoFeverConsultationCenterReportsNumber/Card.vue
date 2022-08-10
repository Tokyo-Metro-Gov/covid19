<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard TokyoFeverConsultationCenterReportsNumberCard"
  >
    <client-only>
      <chart
        :title="$t('東京都発熱相談センターにおける相談件数')"
        :title-id="'number-of-reports-to-tokyo-fever-consultation-center'"
        :info-titles="[$t('新規陽性者における接触歴等不明者数'), $t('増加比')]"
        :chart-id="'tokyo-fever-consultation-center-chart'"
        :chart-data="chartData"
        :date="date"
        :labels="labels"
        :unit="$t('件.consultations')"
        :data-labels="labelItems"
        :table-labels="labelItems"
        :get-formatter="getFormatter"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
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
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import { isSingleCard } from '@/utils/urls'
import Chart from '~/components/index/CardsFeatured/TokyoFeverConsultationCenterReportsNumber/Chart.vue'
import {
  Datum as IFeverConsultationCenterDatum,
  FeverConsultationCenter as IFeverConsultationCenter,
} from '~/libraries/auto_generated/data_converter/convertFeverConsultationCenter'
import { getNumberToLocaleStringFunction } from '~/utils/monitoringStatusValueFormatters'

type Data = {
  labelItems: string[]
  getFormatter: (_: number) => (d: number) => string | undefined
}
type Methods = {}
type Computed = {
  chartData: [number[], number[], (number | null)[]]
  date: string
  labels: string[]
  feverConsultationCenterData: IFeverConsultationCenterDatum[]
  feverConsultationCenter: IFeverConsultationCenter
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const labelItems: string[] = [
      this.$t('発熱相談センター') as string,
      this.$t('COCOA専用ダイヤル') as string,
      this.$t('７日間移動平均') as string,
    ]
    const getFormatter = (_: number) => getNumberToLocaleStringFunction()

    return {
      labelItems,
      getFormatter,
    }
  },
  computed: {
    chartData(): [number[], number[], (number | null)[]] {
      const feverConsultationCenter: number[] =
        this.feverConsultationCenterData.map(
          (d) => d.count.feverConsultationCenter
        )

      const cocoaDial: number[] = this.feverConsultationCenterData.map(
        (d) => d.count.cocoaDial
      )

      const weeklyAverageTotal: (number | null)[] =
        this.feverConsultationCenterData.map((d) => d.count.weeklyAverageTotal)

      return [feverConsultationCenter, cocoaDial, weeklyAverageTotal]
    },
    date(): string {
      return this.feverConsultationCenter.date
    },
    labels(): string[] {
      return this.feverConsultationCenterData.map((data) => this.$d(data.date))
    },
    feverConsultationCenterData(): IFeverConsultationCenterDatum[] {
      return this.feverConsultationCenter.data
    },
    feverConsultationCenter(): IFeverConsultationCenter {
      return this.$store.state.feverConsultationCenter
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
