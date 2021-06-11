<template>
  <v-col cols="12" md="6" class="DataCard AgencyCard">
    <client-only>
      <chart
        :title="$t('都庁来庁者数の推移')"
        :title-id="'agency'"
        :chart-id="'agency'"
        :chart-data="agency"
        :date="date"
        :labels="labels"
        :periods="periods"
        :items="agencyItems"
        :unit="$t('人')"
      >
        <template #additionalDescription>
          {{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsReference/Agency/Chart.vue'
import { Agency as IAgency } from '@/libraries/auto_generated/data_converter/convertAgency'
import { convertDateToISO8601Format } from '@/utils/formatDate'

type Data = {
  agencyItems: string[]
}
type Methods = {}
type Computed = {
  agency: IAgency
  date: string
  labels: string[]
  periods: string[]
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    Chart,
  },
  data() {
    const agencyItems = [
      this.$t('第一庁舎計') as string,
      this.$t('第二庁舎計') as string,
      this.$t('議事堂計') as string,
    ]
    return {
      agencyItems,
    }
  },
  computed: {
    agency() {
      return this.$store.state.agency
    },
    date() {
      return this.agency.date
    },
    labels() {
      return this.agency.periods.map((p) => {
        return convertDateToISO8601Format(p.begin)
      })
    },
    periods() {
      return this.agency.periods.map((p) => {
        const from = this.$d(p.begin, 'dateWithoutYear')
        const to = this.$d(p.end, 'dateWithoutYear')
        return `${from}~${to}`
      })
    },
  },
})
</script>
