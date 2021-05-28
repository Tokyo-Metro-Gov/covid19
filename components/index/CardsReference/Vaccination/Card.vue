<template>
  <v-col cols="12" md="6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種回数（高齢者・累計）')"
        title-id="vaccination"
        :info-titles="[
          $t('接種回数（１回目・累計）'),
          $t('接種回数（２回目・累計）'),
        ]"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :periods="vaccinationLabels"
        :data-labels="chartLabels"
        :last-period="vaccinationData.lastPeriod"
        :unit="$t('人')"
      >
        <template #description>
          <span>{{ $t('対象者 約311万人') }}</span>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  'ワクチン接種記録システム（VRS）への報告を居住地の都道府県別に国が集計し、公表したものに基づき作成'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/Vaccination/Chart.vue'
import {
  Dataset as IVaccinationDataset,
  Period as IVaccinationPeriod,
  Vaccination as IVaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccination'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'

dayjs.extend(duration)

type Data = {
  chartLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekEndLabel: (end: Date) => string
}
type Computed = {
  date: string
  vaccinationLabels: string[]
  vaccinationDatasets: IVaccinationDataset[]
  vaccinationData: {
    lastPeriod: IVaccinationPeriod
    labels: Date[]
    chartData: number[][]
  }
  vaccination: IVaccination
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const chartLabels = [
      this.$t('接種回数（１回目・累計）') as string,
      this.$t('接種回数（２回目・累計）') as string,
    ]

    const getFormatter = () => {
      // 陽性率は小数点第1位まで表示する。
      return getNumberToLocaleStringFunction()
    }

    return {
      chartLabels,
      getFormatter,
    }
  },
  computed: {
    date() {
      return this.vaccination.date
    },
    vaccinationLabels() {
      return this.vaccinationDatasets.map((dataset) => {
        const { period } = dataset
        const { end } = period
        return this.getWeekEndLabel(end)
      })
    },
    vaccinationDatasets() {
      return this.vaccination.datasets
    },
    vaccinationData() {
      const datasets = this.vaccination.datasets
      const lastPeriod = datasets.slice(-1)[0].period
      const labels = datasets.map((d: IVaccinationDataset) => d.period.end)
      const cumulative1StDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.cumulative1StDose
      )
      const cumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.cumulative2NdDose
      )
      const chartData: number[][] = [cumulative1StDose, cumulative2NdDose]

      return {
        lastPeriod,
        labels,
        chartData,
      }
    },
    vaccination() {
      return this.$store.state.vaccination
    },
  },
  methods: {
    /**
     * 表の横軸に表示する、「~MM/DD」形式のラベルを取得する
     */
    getWeekEndLabel(end: Date) {
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `~${to}`
    },
  },
})
</script>
