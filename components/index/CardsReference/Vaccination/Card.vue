<template>
  <v-col cols="12" :md="isSingleCard || 6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種数（累計）')"
        title-id="vaccination"
        :info-titles="[
          $t('全年齢接種数（１回目）'),
          $t('うち高齢者接種数'),
          $t('全年齢接種数（２回目）'),
          $t('うち高齢者接種数'),
        ]"
        :info-data="vaccinationData.infoData"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :data-labels="chartLabels"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  'ワクチン接種記録システム（VRS）への報告を居住地の都道府県別に国が集計し、公表したものに基づき作成（本データは過日の数値が修正されることがある）'
                )
              }}
            </li>
            <li>
              {{ $t('データには、医療従事者等の接種記録は含まれていない') }}
            </li>
            <li>
              {{ $t('高齢者の対象者数は約311万人') }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/Vaccination/Chart.vue'
import {
  Dataset as IVaccinationDataset,
  VaccinationAll as IVaccination,
} from '@/libraries/auto_generated/data_converter/convertVaccinationAll'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  chartLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekEndLabel: (end: Date) => string
}
type Computed = {
  date: string
  vaccinationDatasets: IVaccinationDataset[]
  vaccinationData: {
    labels: Date[]
    chartData: number[][]
    infoData: number[][]
  }
  vaccination: IVaccination
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const chartLabels = [
      this.$t('高齢者（１回目・累計）') as string,
      this.$t('その他（１回目・累計）') as string,
      this.$t('高齢者（２回目・累計）') as string,
      this.$t('その他（２回目・累計）') as string,
    ]

    const getFormatter = () => {
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
    vaccinationDatasets() {
      return this.vaccination.datasets
    },
    vaccinationData() {
      const datasets = this.vaccinationDatasets
      const labels = datasets.map((d: IVaccinationDataset) => d.date)
      const allCumulative1StDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.all.cumulative1StDose
      )
      const olderPeopleCumulative1StDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.olderPeople.cumulative1StDose
      )
      const otherCumulative1StDose: number[] = datasets.map(
        (d: IVaccinationDataset) =>
          d.data.all.cumulative1StDose - d.data.olderPeople.cumulative1StDose
      )
      const allCumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.all.cumulative2NdDose
      )
      const olderPeopleCumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationDataset) => d.data.olderPeople.cumulative2NdDose
      )
      const otherCumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationDataset) =>
          d.data.all.cumulative2NdDose - d.data.olderPeople.cumulative2NdDose
      )

      const chartData: number[][] = [
        olderPeopleCumulative1StDose,
        otherCumulative1StDose,
        olderPeopleCumulative2NdDose,
        otherCumulative2NdDose,
      ]

      const infoData: number[][] = [
        allCumulative1StDose,
        olderPeopleCumulative1StDose,
        allCumulative2NdDose,
        olderPeopleCumulative2NdDose,
      ]

      return {
        labels,
        chartData,
        infoData,
      }
    },
    vaccination() {
      return this.$store.state.vaccination
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
