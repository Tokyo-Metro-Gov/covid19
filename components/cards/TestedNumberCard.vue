<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="Data.inspections_summary.date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
      :data-labels="inspectionsDataLabels"
    >
      <!-- 件.tested = 検査数 -->
      <template v-if="$i18n.locale !== 'ja-basic'" v-slot:additionalNotes>
        <ul :class="$style.GraphDesc">
          <li>
            <t-i18n>
              {{ $t('（注）同一の対象者について複数の検体を検査する場合あり') }}
            </t-i18n>
          </li>
          <li>
            <t-i18n>
              {{
                $t(
                  '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
                )
              }}
            </t-i18n>
          </li>
        </ul>
        <ol :class="$style.GraphDesc">
          <li>
            <t-i18n>{{ $t('※1: 疑い例・接触者調査') }}</t-i18n>
          </li>
          <li>
            <t-i18n>{{ $t('※2: チャーター便・クルーズ船') }}</t-i18n>
          </li>
        </ol>
      </template>
    </time-stacked-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'
import TI18n from '@/components/TI18n.vue'

export default {
  components: {
    TimeStackedBarChart,
    TI18n
  },
  data() {
    // 検査実施日別状況
    const inspectionsGraph = [
      Data.inspections_summary.data['都内'],
      Data.inspections_summary.data['その他']
    ]
    const inspectionsItems = [
      this.$t('都内発生（※1）'),
      this.$t('その他（※2）')
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    const inspectionsDataLabels = [this.$t('都内発生'), this.$t('その他.graph')]

    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      inspectionsDataLabels
    }
    return data
  }
}
</script>

<style module lang="scss">
.Graph {
  &Desc {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
}
</style>
