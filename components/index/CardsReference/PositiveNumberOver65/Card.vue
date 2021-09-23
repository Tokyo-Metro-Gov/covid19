<template>
  <v-col cols="12" md="6" class="DataCard PositiveNumberOver65Card">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数（65歳以上）の推移')"
        :title-id="'positive-number-over65'"
        :chart-id="'positive-number-over65'"
        :chart-data="positiveOver65Data"
        :date="date"
        :by-date="true"
        :unit="$t('人')"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('保健所から発生届が提出された日を基準とする') }}
            </li>
            <li>
              {{ $t('医療機関等が行った検査も含む') }}
            </li>
            <li>
              {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import {
  Datum as IDatum,
  PositiveOver65 as IPositiveOver65,
} from '@/libraries/auto_generated/data_converter/convertPositiveOver65'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import formatGraph, { GraphDataType } from '@/utils/formatGraph'

type Data = {}
type Methods = {}
type Computed = {
  date: string
  positiveOver65Data: GraphDataType[]
  positiveOver65: IPositiveOver65
}
type Props = {}
type DataType = {
  日付: string
  小計: number
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    TimeBarChart,
  },
  computed: {
    date() {
      return this.positiveOver65.date
    },
    positiveOver65Data() {
      const data: DataType[] = this.positiveOver65.data.map((d: IDatum) => {
        return {
          日付: convertDateToISO8601Format(d.date),
          小計: d.count,
        }
      })
      return formatGraph(data)
    },
    positiveOver65() {
      return this.$store.state.positiveOver65
    },
  },
})
</script>
