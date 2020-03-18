<template>
  <v-col cols="12" md="6" class="DataCard">
    <svg-card
      :title="$t('検査実施状況')"
      :title-id="'details-of-tested-cases'"
      :date="Data.inspections_summary.date"
    >
      <tested-cases-table
        :aria-label="$t('検査実施状況')"
        v-bind="confirmedCases"
      />
    </svg-card>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import SvgCard from '@/components/SvgCard.vue'
import TestedCasesTable from '@/components/TestedCasesTable.vue'

export default {
  components: {
    SvgCard,
    TestedCasesTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const data = {
      Data,
      confirmedCases
    }
    return data
  }
}
</script>
