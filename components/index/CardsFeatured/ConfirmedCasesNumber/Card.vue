<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard ConfirmedCasesNumberCard"
  >
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="chartData"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      >
        <template #description>
          <app-link
            :to="`${
              $i18n.locale !== 'ja' ? $i18n.locale : ''
            }/cards/positive-number-by-developed-date`"
            class="Description-Link"
          >
            {{ $t('発症日別による陽性者数の推移はこちら') }}
          </app-link>
        </template>
        <template #additionalDescription>
          <div class="Description-ExternalLink">
            <app-link
              to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/info/todokedehcyouseisya.html"
            >
              {{ $t('65歳以上の新規陽性者数の推移及び届出保健所別の内訳') }}
            </app-link>
          </div>
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
            <li>
              {{
                $t(
                  '2022年2月2日以降は、感染者の濃厚接触者が有症状となった場合で、検査を実施せずに医師の判断により臨床診断された患者を含む'
                )
              }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import {
  DailyPositiveDetail as IDailyPositiveDetail,
  Datum as IDailyPositiveDetailDatum,
} from '@/libraries/auto_generated/data_converter/convertDailyPositiveDetail'
import { convertDateToISO8601Format } from '@/utils/formatDate'
import { GraphDataType } from '@/utils/formatGraph'
import { isSingleCard } from '@/utils/urls'

type Data = {}
type Methods = {}
type Computed = {
  chartData: GraphDataType[]
  date: string
  dailyPositiveDetailData: IDailyPositiveDetailDatum[]
  dailyPositiveDetail: IDailyPositiveDetail
  isSingleCard: boolean
}
type Props = {}

type patients = {
  count: number
  label: string
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    TimeBarChart,
    AppLink,
  },
  computed: {
    chartData() {
      const patients: patients[] = this.dailyPositiveDetailData.map((d) => {
        return {
          count: d.count,
          label: convertDateToISO8601Format(d.diagnosedDate),
        }
      })

      const graphData: GraphDataType[] = []
      let patSum = 0
      patients.forEach((d) => {
        const subTotal = d.count
        if (!isNaN(subTotal)) {
          patSum += subTotal
          graphData.push({
            label: d.label,
            transition: subTotal,
            cumulative: patSum,
          })
        }
      })

      return graphData
    },
    date() {
      return this.dailyPositiveDetail.date
    },
    dailyPositiveDetailData() {
      return this.dailyPositiveDetail.data
    },
    dailyPositiveDetail() {
      return this.$store.state.dailyPositiveDetail
    },
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
})
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;

  @include button-text('sm');
}

.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
