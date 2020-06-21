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
      :initial-cumulative="inspectionsInitialCumulative"
    />
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
      Data.inspections_summary.data['地方衛生研究所'],
      Data.inspections_summary.data['医療機関等']
    ]
    const inspectionsItems = [
      this.$t('地方衛生研究所が行った検査件数'),
      this.$t('医療機関等が行った検査件数')
    ]
    const inspectionsLabels = Data.inspections_summary.labels
    const inspectionsDataLabels = [
      this.$t('地方衛生研究所'),
      this.$t('医療機関等')
    ]
    const inspectionsInitialCumulative =
      Data.inspections_summary.initial_cumulative.count
    const data = {
      Data,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels,
      inspectionsDataLabels,
      inspectionsInitialCumulative
    }
    return data
  }
}
</script>
