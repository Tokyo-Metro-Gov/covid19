<template>
  <v-col cols="12" md="6" class="DataCard TestedNumberCard">
    <client-only>
      <chart
        :title="$t('検査実施件数')"
        :title-id="'number-of-tested'"
        :chart-id="'time-stacked-bar-chart-inspections'"
        :chart-data="inspectionsGraph"
        :date="date"
        :items="inspectionsItems"
        :labels="inspectionsLabels"
        :unit="$t('件.tested')"
        :data-labels="inspectionsDataLabels"
        :table-labels="inspectionsTableLabels"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000086'"
      >
        <!-- 件.tested = 検査数 -->
        <template #additionalButton>
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/kensa/index.html"
            :class="$style.button"
          >
            <span :class="$style['button-inner']">
              <v-icon size="1.1em" :class="$style['button-v-icon']">
                {{ mdiClipboardText }}
              </v-icon>
              {{ $t('検査情報サイト') }}
            </span>
          </app-link>
        </template>
        <template #additionalDescription>
          <span>{{ $t('（注）') }}</span>
          <ul>
            <li>
              {{
                $t(
                  '検体採取日を基準とする。ただし、一部検査結果判明日に基づくものを含む'
                )
              }}
            </li>
            <li>
              {{ $t('同一の対象者について複数の検体を検査する場合がある') }}
            </li>
            <li>
              {{
                $t('2020年5月13日以降は、PCR検査に加え、抗原検査の件数を含む')
              }}
            </li>
            <li>
              {{
                $t(
                  '速報値として公開するものであり、後日確定データとして修正される場合がある'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
    </client-only>
  </v-col>
</template>

<script>
import { mdiClipboardText } from '@mdi/js'
import * as dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import AppLink from '@/components/_shared/AppLink.vue'
import Chart from '@/components/index/CardsFeatured/TestedNumber/Chart.vue'
import Data from '@/data/data.json'
dayjs.extend(duration)

export default {
  components: {
    AppLink,
    Chart,
  },
  data() {
    const inspectionsSummary = Data.inspections_summary
    const { date, data } = inspectionsSummary

    // 検査実施日別状況
    const domestic = Array.from(data['都内'].keys()).map(
      (i) => data['都内'][i] + data['その他'][i]
    )
    const insurance = Array.from(data['都内'].keys()).map(
      (i) => data['保険適用分'][i]
    )
    const inspectionsGraph = [domestic, insurance]
    const inspectionsItems = [
      this.$t('健康安全研究センターが行った検査件数'),
      this.$t('医療機関等が行った検査件数'),
    ]
    const inspectionsLabels = inspectionsSummary.labels
    const inspectionsDataLabels = [
      this.$t('健康安全研究センターが行った検査件数'),
      this.$t('医療機関等が行った検査件数'),
    ]
    const inspectionsTableLabels = [
      this.$t('健康安全研究センター実施分'),
      this.$t('医療機関等実施分'),
    ]

    return {
      date,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      inspectionsDataLabels,
      inspectionsTableLabels,
      mdiClipboardText,
    }
  },
}
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

  &-v-icon {
    color: currentColor !important;
    margin-right: 4px;
    transition: none !important;
  }
}
</style>
