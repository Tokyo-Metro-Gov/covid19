<template>
  <v-col cols="12" md="6" class="DataCard">
    <tested-cases-card
      :title="$t('検査実施状況')"
      :title-id="'details-of-tested-cases'"
      :date="Data.inspection_status_summary.date"
    >
      <tested-cases-table
        :aria-label="$t('検査実施状況')"
        v-bind="testedCases"
      />
    </tested-cases-card>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatTestedCases from '@/utils/formatTestedCases'
import TestedCasesCard from '@/components/TestedCasesCard.vue'
import TestedCasesTable from '@/components/TestedCasesTable.vue'

export default {
  components: {
    TestedCasesCard,
    TestedCasesTable
  },
  data() {
    // 検査陽性者の状況
    const testedCases = formatTestedCases(Data.inspection_status_summary)

    const data = {
      Data,
      testedCases
    }
    return data
  }
}
</script>
