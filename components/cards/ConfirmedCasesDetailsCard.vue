<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-card
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="MainSummary.main_summary.date"
    >
      <confirmed-cases-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </confirmed-cases-card>
  </v-col>
</template>

<script>
import MainSummary from '@/data/main_summary.json'
import InspectionPersons from '@/data/inspection_persons.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import ConfirmedCasesCard from '@/components/ConfirmedCasesCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    ConfirmedCasesCard,
    ConfirmedCasesTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(MainSummary.main_summary)
    const inspectionArray =
      InspectionPersons.inspection_persons.datasets[0].data
    confirmedCases['検査実施人数'] = inspectionArray.reduce(function(a, x) {
      return a + ((x || 0) - 0)
    }, 0)
    const data = {
      MainSummary,
      confirmedCases
    }
    return data
  }
}
</script>
