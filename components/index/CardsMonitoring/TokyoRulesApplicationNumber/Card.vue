<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard TokyoRulesApplicationNumberCard"
  >
    <client-only>
      <mixed-bar-and-line-chart
        :title="$t('モニタリング項目(5)')"
        title-id="number-of-tokyo-rules-applied"
        :info-titles="[$t('救急医療の東京ルールの適用件数')]"
        chart-id="mixed-bar-and-line-chart-tokyo-rules"
        :chart-data="chartData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="labels"
        :data-labels="dataLabels"
        :unit="$t('件.cases')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000091'"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '救急医療の東京ルールの適用件数：救急隊による5医療機関への受入要請又は選定開始から20分以上経過しても搬送先が決定しない事案の件数'
                )
              }}
            </li>
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
  Datum as ITokyoRuleDatum,
  TokyoRule as ITokyoRule,
} from '@/libraries/auto_generated/data_converter/convertTokyoRule'
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
  tokyoRuleData: ITokyoRuleDatum[]
  tokyoRule: ITokyoRule
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    MixedBarAndLineChart,
  },
  data() {
    const dataLabels = [
      this.$t('適用件数') as string,
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
      const applicationReportsCount = this.tokyoRuleData.map((d) => d.count)
      const sevendayMoveAverages = this.tokyoRuleData.map(
        (d) => d.weeklyAverageCount
      )

      return [applicationReportsCount, sevendayMoveAverages]
    },
    date() {
      return this.tokyoRule.date
    },
    labels() {
      return this.tokyoRuleData.map((data) => this.$d(data.date) as string)
    },
    tokyoRuleData() {
      return this.tokyoRule.data
    },
    tokyoRule() {
      return this.$store.state.tokyoRule
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
