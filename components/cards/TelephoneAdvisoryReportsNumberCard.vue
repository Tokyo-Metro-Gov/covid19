<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('（帰国者・接触者相談センター）受付 相談件数')"
      :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
      :chart-id="'time-bar-chart-contacts'"
      :chart-data="contactsGraph"
      :date="Data.contacts.date"
      :unit="$t('件.reports')"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '（注）2/8(土)から3/12(木)までに1097件の相談受付がありました。'
              )
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
    <!-- 件.reports = 窓口相談件数 -->
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data)

    const data = {
      Data,
      contactsGraph
    }
    return data
  }
}
</script>
