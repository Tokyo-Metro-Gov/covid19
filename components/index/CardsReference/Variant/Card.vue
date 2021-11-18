<template>
  <v-col cols="12" md="6" class="DataCard VariantCard">
    <client-only>
      <chart
        :title="$t('L452R変異株スクリーニングの実施状況')"
        title-id="variant"
        :info-titles="[$t('L452R陽性例構成割合'), $t('変異株PCR検査実施割合')]"
        chart-id="variant-chart"
        :chart-data="variantData.chartData"
        :table-data="variantData.tableData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="variantData.labels"
        :periods="variantLabels"
        :data-labels="chartLabels"
        :table-labels="tableLabels"
        :scale-labels="scaleLabels"
        :last-period="variantData.lastPeriod"
        unit="%"
      >
        <template #attentionNote>
          {{
            $t(
              '全国的にデルタ株に置き換わったこと等の理由により、厚生労働省から全ての自治体におけるL452R変異株PCR検査を終了する方針が示されたことに伴い、都モニタリング会議におけるL452R変異株スクリーニング検査の報告が終了したことから、2021年11月11日（木曜日）をもって本グラフの数値更新を終了しました。'
            )
          }}
        </template>
        <template #additionalButton>
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/henikabu/screening.html"
            :class="$style.button"
          >
            <span :class="$style['button-inner']">
              <covid-icon :class="$style['button-icon']" aria-hidden="true" />
              {{ $t('変異株情報') }}
            </span>
          </app-link>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t('L452R陽性例構成割合：L452R陽性例の数／変異株PCR検査実施数')
              }}
            </li>
            <li>
              {{
                $t(
                  '変異株PCR検査実施割合：変異株PCR検査実施数／新規陽性者数（報告日別）'
                )
              }}
            </li>
            <li>
              {{ $t('検体受付日を基準とする') }}
            </li>
            <li>
              <app-link
                to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/henikabu/screening.html"
              >
                {{ $t('N501Y変異株スクリーニングの実施状況のデータはこちら') }}
              </app-link>
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import * as dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import Chart from '@/components/index/CardsReference/Variant/Chart.vue'
import {
  Dataset as IVariantsDataset,
  Period as IVariantsPeriod,
  Variants as IVariants,
} from '@/libraries/auto_generated/data_converter/convertVariants'
import CovidIcon from '@/static/covid.svg'
import { getNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

dayjs.extend(duration)

type Data = {
  chartLabels: string[]
  tableLabels: string[]
  scaleLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekLabel: (begin: Date, end: Date) => string
}
type Computed = {
  date: string
  variantLabels: string[]
  variantDatasets: IVariantsDataset[]
  variantData: {
    lastPeriod: IVariantsPeriod
    labels: Date[]
    chartData: number[][]
    tableData: number[][]
  }
  variants: IVariants
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
    AppLink,
    CovidIcon,
  },
  data() {
    const chartLabels = [
      this.$t('L452R陽性例構成割合') as string,
      this.$t('L452R非陽性例構成割合') as string,
      this.$t('変異株PCR検査実施割合') as string,
    ]

    const tableLabels = [
      this.$t('変異株PCR検査実施数') as string,
      this.$t('L452R陽性例数') as string,
      this.$t('L452R陽性例構成割合') as string,
      this.$t('変異株PCR検査実施割合') as string,
    ]

    const scaleLabels = [
      this.$t('構成割合') as string,
      this.$t('実施割合') as string,
    ]

    const getFormatter = () => {
      // 陽性率は小数点第1位まで表示する。
      return getNumberToFixedFunction(1)
    }

    return {
      chartLabels,
      tableLabels,
      scaleLabels,
      getFormatter,
    }
  },
  computed: {
    date() {
      return this.variants.date
    },
    variantLabels() {
      return this.variantDatasets.map((dataset) => {
        const { period } = dataset
        const { begin, end } = period
        return this.getWeekLabel(begin, end)
      })
    },
    variantDatasets() {
      return this.variants.datasets
    },
    variantData() {
      const datasets = this.variants.datasets
      const lastPeriod = datasets.slice(-1)[0].period
      const labels = datasets.map((d: IVariantsDataset) => d.period.begin)
      const variantTestCount: number[] = datasets.map(
        (d: IVariantsDataset) => d.data.variantTestCount
      )
      const l452RPositiveCount: number[] = datasets.map(
        (d: IVariantsDataset) => d.data.l452R.positiveCount
      )
      const l452RPositiveRate: number[] = datasets.map(
        (d: IVariantsDataset) => d.data.l452R.positiveRate
      )
      const negativeRate: number[] = datasets.map(
        (d: IVariantsDataset) => d.data.negativeRate
      )
      const variantPcrRate: number[] = datasets.map(
        (d: IVariantsDataset) => d.data.variantPcrRate
      )
      const chartData: number[][] = [
        l452RPositiveRate,
        negativeRate,
        variantPcrRate,
      ]
      const tableData: number[][] = [
        variantTestCount,
        l452RPositiveCount,
        l452RPositiveRate,
        variantPcrRate,
      ]

      return {
        lastPeriod,
        labels,
        chartData,
        tableData,
      }
    },
    variants() {
      return this.$store.state.variants
    },
  },
  methods: {
    /**
     * 表の横軸に表示する、「MM/DD~MM/DD」形式のラベルを取得する
     */
    getWeekLabel(begin: Date, end: Date) {
      const from = this.$d(dayjs(begin).toDate(), 'dateWithoutYear')
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `${from}~${to}`
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
