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
        {{
          $t(
            '（注）医療機関が保険適用で行った検査については、４月８日分までを計上'
          )
        }}<br />
        {{
          $t(
            '（毎週金曜日に、前週木曜日から当該週水曜日までの日々の件数を反映）'
          )
        }}
        <br />
        {{ $t('※1: 疑い例・接触者調査') }}
        <br />
        {{ $t('※2: チャーター便・クルーズ船') }}
      </template>
    </time-stacked-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'

export default {
  components: {
    TimeStackedBarChart
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
