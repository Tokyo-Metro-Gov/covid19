<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard PositiveNumberByAgeCard"
  >
    <client-only>
      <chart
        :title="$t('年代別新規陽性者数')"
        :title-id="'positive-number-by-age'"
        :chart-id="'positive-number-by-age'"
        :chart-data="chartData"
        :table-data="tableData"
        :get-formatter="getFormatter"
        :date="date"
        :labels="labels"
        :unit="$t('人')"
        :table-labels="labels"
        :date-labels="dateLabels"
        :display-value="displayValue"
        :url="''"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{ $t('総数のみの集計である') }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsFeatured/PositiveNumberByAge/Chart.vue'
import {
  Datum as IDatum,
  PositiveByAgegroup as IPositiveByAgegroup,
} from '@/libraries/auto_generated/data_converter/convertPositiveByAgegroup'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  getFormatter: (columnIndex: number) => (d: number) => string | undefined
}
type Methods = {}
type Computed = {
  chartData: number[][]
  tableData: number[][]
  date: string
  labels: string[]
  dateLabels: Date[]
  displayValue: {
    value: number
    date: string
  }
  positiveByAgegroupCount: { [key: string]: number }[]
  positiveByAgegroupData: IDatum[]
  positiveByAgegroup: IPositiveByAgegroup
  isSingleCard: boolean
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const getFormatter = () => {
      return getNumberToLocaleStringFunction()
    }

    return {
      getFormatter,
    }
  },
  computed: {
    chartData() {
      return this.positiveByAgegroupData.map((c) => Object.values(c.counts))
    },
    tableData() {
      const countAge0 = this.positiveByAgegroupCount.map((c) => c['0歳'])
      const countAge1to4 = this.positiveByAgegroupCount.map((c) => c['1-4歳'])
      const countAge5to9 = this.positiveByAgegroupCount.map((c) => c['5-9歳'])
      const countAge10to19 = this.positiveByAgegroupCount.map(
        (c) => c['10-19歳']
      )
      const countAge20to29 = this.positiveByAgegroupCount.map(
        (c) => c['20-29歳']
      )
      const countAge30to39 = this.positiveByAgegroupCount.map(
        (c) => c['30-39歳']
      )
      const countAge40to49 = this.positiveByAgegroupCount.map(
        (c) => c['40-49歳']
      )
      const countAge50to59 = this.positiveByAgegroupCount.map(
        (c) => c['50-59歳']
      )
      const countAge60to64 = this.positiveByAgegroupCount.map(
        (c) => c['60-64歳']
      )
      const countAge65to69 = this.positiveByAgegroupCount.map(
        (c) => c['65-69歳']
      )
      const countAge70to79 = this.positiveByAgegroupCount.map(
        (c) => c['70-79歳']
      )
      const countAge80to89 = this.positiveByAgegroupCount.map(
        (c) => c['80-89歳']
      )
      const countAge90over = this.positiveByAgegroupCount.map(
        (c) => c['90歳以上']
      )
      const countAgeUnknown = this.positiveByAgegroupCount.map((c) => c['不明'])

      return [
        countAge0,
        countAge1to4,
        countAge5to9,
        countAge10to19,
        countAge20to29,
        countAge30to39,
        countAge40to49,
        countAge50to59,
        countAge60to64,
        countAge65to69,
        countAge70to79,
        countAge80to89,
        countAge90over,
        countAgeUnknown,
      ]
    },
    date() {
      return this.positiveByAgegroup.date
    },
    labels() {
      return Object.keys(this.positiveByAgegroupData[0].counts)
    },
    dateLabels() {
      return this.positiveByAgegroupData.map((d) => d.date)
    },
    displayValue() {
      const lastData =
        this.positiveByAgegroupData[this.positiveByAgegroupData.length - 1]
      return {
        value: lastData.total,
        date: convertDateToISO8601Format(lastData.date),
      }
    },
    positiveByAgegroupCount() {
      return this.positiveByAgegroupData.map((d) => d.counts)
    },
    positiveByAgegroupData() {
      return this.positiveByAgegroup.data
    },
    positiveByAgegroup() {
      return this.$store.state.positiveByAgegroup
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>
