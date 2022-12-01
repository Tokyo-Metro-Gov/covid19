<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesDetailsCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="date"
      >
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '「重症」は、人工呼吸器管理（ECMOを含む）が必要な患者数を計上。'
                )
              }}
              <app-link
                to="https://www.bousai.metro.tokyo.lg.jp/_res/projects/default_project/_page_/001/011/435/7kai/202008207.pdf"
              >
                {{ $t('重症基準の考え方はこちら') }}
              </app-link>
            </li>
            <li>
              {{ $t('「重症即応病床」は東京都基準の重症患者用即応病床数') }}
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
        <confirmed-cases-details-table :items="statuses" />
        <div>
          <app-link
            :class="$style.button"
            :to="`${
              $i18n.locale !== 'ja' ? $i18n.locale : ''
            }/cards/deaths-by-death-date`"
          >
            {{ $t('死亡日別による死亡者数の推移はこちら') }}
          </app-link>
        </div>
        <template #footer>
          <open-data-link
            url="https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000089"
          />
        </template>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import DataView from '@/components/index/_shared/DataView.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'
// table タグとの衝突を避けるため ConfirmedCasesDetailsTable とする
import ConfirmedCasesDetailsTable from '@/components/index/CardsFeatured/ConfirmedCasesDetails/Table.vue'
import {
  Data as IPositiveStatusSummaryData,
  PositiveStatusSummary as IPositiveStatusSummary,
} from '@/libraries/auto_generated/data_converter/convertPositiveStatusSummary'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IPositiveStatusSummaryData
  date: string
  positiveStatusSummary: IPositiveStatusSummary
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
    DataView,
    OpenDataLink,
    ConfirmedCasesDetailsTable,
  },
  computed: {
    statuses() {
      return this.positiveStatusSummary.data
    },
    date() {
      return this.positiveStatusSummary.date as string
    },
    positiveStatusSummary() {
      return this.$store.state.positiveStatusSummary
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(new Date(date), 'date') as string
    },
  },
})
</script>

<style lang="scss" module>
.button {
  margin: 20px 0 0;
  color: $green-1 !important;
  text-decoration: none;

  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
