<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="date"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
    />
    <!-- 件.tested = 検査数 -->
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
    let inspec_tochigi = [] // 栃木県内 (宇都宮市を除く)
    Data.inspections_summary.data.forEach(d => inspec_tochigi.push(d[1]))

    let inspec_utm = [] // 宇都宮市
    Data.inspections_summary.data.forEach(d => inspec_utm.push(d[2]))

    const inspectionsGraph = [
      inspec_tochigi,
      inspec_utm
    ]

    const inspectionsItems = [
      this.$t('栃木県内 (宇都宮市を除く)'),
      this.$t('宇都宮市')
    ]

    let inspectionsLabels = []
    Data.inspections_summary.data.forEach(d => {
      const date = new Date(d[0])
      inspectionsLabels.push(`${date.getMonth() + 1}/${date.getDate()}`)
    })

    const date = Data.inspections_summary.date

    const data = {
      date,
      inspectionsGraph,
      inspectionsItems,
      inspectionsLabels
    }
    return data
  }
}
</script>
