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
        :display-values="displayValues"
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
import { getNumberToLocaleStringFunction } from '@/utils/monitoringStatusValueFormatters'
import { isSingleCard } from '@/utils/urls'

type Data = {
  getFormatter: () => (d: number) => string | undefined
}
type Methods = {}
type Computed = {
  chartData: number[][]
  tableData: number[][]
  date: string
  labels: string[]
  dateLabels: Date[]
  displayValues: number[]
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
      const tableData: number[][] = []
      this.labels.forEach((label) => {
        const dataByLabel = this.positiveByAgegroupCount.map((c) => c[label])
        tableData.push(dataByLabel)
      })
      return tableData
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
    displayValues() {
      return this.positiveByAgegroupData.map((d) => d.total)
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
