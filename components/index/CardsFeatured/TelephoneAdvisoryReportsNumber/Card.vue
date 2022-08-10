<template>
  <v-col
    cols="12"
    :md="isSingleCard || 6"
    class="DataCard TelephoneAdvisoryReportsNumberCard"
  >
    <client-only>
      <time-bar-chart
        :title="$t('新型コロナコールセンター相談件数')"
        :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
        :chart-id="'time-bar-chart-contacts'"
        :chart-data="contactsGraph"
        :date="date"
        :unit="$t('件.calls')"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000071'"
        :day-period="isSingleCard ? 120 : 60"
        :is-single-card="isSingleCard"
      />
      <!-- 件.calls = 窓口相談件数 -->
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import { isSingleCard } from '@/utils/urls'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const { contacts } = Data
    const { date } = contacts
    // 相談件数
    const contactsGraph = formatGraph(contacts.data)

    return {
      contactsGraph,
      date,
    }
  },
  computed: {
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
}
</script>
