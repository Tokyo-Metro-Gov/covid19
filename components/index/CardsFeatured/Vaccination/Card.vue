<template>
  <v-col cols="12" :md="isSingleCard || 6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種数及び接種率（都内全人口・累計）')"
        title-id="vaccination"
        :info-titles="[
          $t('１回目接種数（接種率）'),
          $t('２回目接種数（接種率）'),
          $t('３回目接種数（接種率）'),
          $t('オミクロン株対応ワクチン接種数 (接種率）'),
        ]"
        chart-id="vaccination-chart"
        :chart-data="vaccinationData.chartData"
        :table-data="vaccinationData.tableData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="vaccinationData.labels"
        :data-labels="chartLabels"
        :table-labels="tableLabels"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #additionalButton>
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronavaccine/jisseki.html"
            :class="$style.button"
          >
            <span :class="$style['button-inner']">
              <vaccine-icon :class="$style['button-icon']" aria-hidden="true" />
              {{ $t('年代別ワクチン接種状況等の詳細はこちら') }}
            </span>
          </app-link>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  'ワクチン接種記録システム（VRS）への報告を居住地の都道府県別に国が集計したものに基づき作成（本データは過日の数値が修正されることがある）'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '1回目及び2回目のデータには、医療従事者等の接種記録は含まれていない'
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
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import Chart from '@/components/index/CardsFeatured/Vaccination/Chart.vue'
import {
  Dataset as IVaccinationCountWithOmicronDataset,
  VaccinationCountWithOmicron as IVaccinationCountWithOmicron,
} from '@/libraries/auto_generated/data_converter/convertVaccinationCountWithOmicron'
import VaccineIcon from '@/static/vaccine.svg'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  chartLabels: string[]
  tableLabels: string[]
  getFormatter: () => (columnIndex: number) => string | undefined
}
type Methods = {}
type Computed = {
  date: string
  vaccinationDatasets: IVaccinationCountWithOmicronDataset[]
  vaccinationData: {
    labels: Date[]
    chartData: number[][]
    tableData: number[][]
  }
  vaccination: IVaccinationCountWithOmicron
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
    Chart,
    VaccineIcon,
  },
  data() {
    const chartLabels = [
      this.$t('接種率（１回目）') as string,
      this.$t('接種率（２回目）') as string,
      this.$t('接種率（３回目）') as string,
      this.$t('接種率（オミクロン株対応ワクチン）') as string,
    ]

    const tableLabels = [
      this.$t('接種数（１回目）') as string,
      this.$t('接種率（１回目）') as string,
      this.$t('接種数（２回目）') as string,
      this.$t('接種率（２回目）') as string,
      this.$t('接種数（３回目）') as string,
      this.$t('接種率（３回目）') as string,
      this.$t('接種数（オミクロン株対応ワクチン）') as string,
      this.$t('接種率（オミクロン株対応ワクチン）') as string,
    ]

    const getFormatter = (columnIndex: number) => {
      if (
        columnIndex === 0 ||
        columnIndex === 2 ||
        columnIndex === 4 ||
        columnIndex === 6
      ) {
        return getNumberToLocaleStringFunction()
      } else {
        // 接種率は小数点第1位まで表示する。
        return getNumberToFixedFunction(1)
      }
    }

    return {
      chartLabels,
      tableLabels,
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
      const labels = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.date
      )
      const cumulative1StDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.cumulative1StDose
      )
      const cumulative2NdDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.cumulative2NdDose
      )
      const cumulative3RDDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.cumulative3RDDose
      )
      const coverage1StDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.coverage1StDose
      )
      const coverage2NdDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.coverage2NdDose
      )
      const coverage3RDDose: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.coverage3RDDose
      )
      const cumulativeOmicron: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.cumulativeOmicron
      )
      const coverageOmicron: number[] = datasets.map(
        (d: IVaccinationCountWithOmicronDataset) => d.data.coverageOmicron
      )

      const chartData: number[][] = [
        coverage1StDose,
        coverage2NdDose,
        coverage3RDDose,
        coverageOmicron,
      ]
      const tableData: number[][] = [
        cumulative1StDose,
        coverage1StDose,
        cumulative2NdDose,
        coverage2NdDose,
        cumulative3RDDose,
        coverage3RDDose,
        cumulativeOmicron,
        coverageOmicron,
      ]

      return {
        labels,
        chartData,
        tableData,
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

<style lang="scss" module>
.button {
  margin-top: 4px;
  color: $green-1 !important;
  text-decoration: none;

  &:hover {
    color: $white !important;
  }

  @include button-text('sm');

  &-inner {
    display: inline-flex;
    align-items: center;
  }

  &-icon {
    width: 1em;
    height: 1em;
    margin-right: 4px;
  }
}
</style>
