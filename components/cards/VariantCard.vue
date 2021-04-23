<template>
  <v-col cols="12" md="6" class="DataCard VariantCard">
    <client-only>
      <variant-chart
        :title="$t('N501Y変異株スクリーニングの実施状況')"
        title-id="variant"
        :info-titles="[$t('N501Y陽性例構成比'), $t('変異株PCR検査実施率')]"
        chart-id="variant-chart"
        :chart-data="variantDatasets"
        :get-formatter="getFormatter"
        :date="date"
        :labels="variantLabels"
        unit="%"
        option-unit="%"
        :data-labels="variantDataLabels"
        :table-labels="variantDataLabels"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t('N501Y陽性例構成割合：N501Y陽性例数／変異株PCR検査実施数')
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
          </ul>
        </template>
      </variant-chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Vue from 'vue'

import VariantChart from '@/components/VariantChart.vue'
import {
  Dataset as IVariantDataset,
  Variant as IVariant,
} from '@/libraries/auto_generated/data_converter/convertVariant'
import { getNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

dayjs.extend(duration)

type Data = {
  variantDataLabels: string[]
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {
  getWeekLabel: (begin: Date, end: Date) => string
}
type Computed = {
  date: string
  variantLabels: string[]
  variantDatasets: IVariantDataset[]
  variant: IVariant
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    VariantChart,
  },
  data() {
    const variantDataLabels = [
      this.$t('N501Y陽性例構成割合') as string,
      this.$t('N501Y非陽性例構成割合') as string,
      this.$t('変異株PCR検査実施割合') as string,
    ]

    const getFormatter = () => {
      // 陽性率は小数点第1位まで表示する。
      return getNumberToFixedFunction(1)
    }

    return {
      variantDataLabels,
      getFormatter,
    }
  },
  computed: {
    date() {
      return this.variant.date
    },
    variantLabels() {
      return this.variantDatasets.map((dataset) => {
        const { period } = dataset
        const { begin, end } = period
        return this.getWeekLabel(begin, end)
      })
    },
    variantDatasets() {
      return this.variant.datasets
    },
    variant() {
      return this.$store.state.variant
    },
  },
  methods: {
    // 表の横軸に表示する、「YYYY-MM/DD~MM/DD」形式のラベルを取得する
    getWeekLabel(begin: Date, end: Date) {
      const from = this.$d(dayjs(begin).toDate(), 'date')
      const to = this.$d(dayjs(end).toDate(), 'dateWithoutYear')
      return `${from}~${to}`
    },
  },
})
</script>
