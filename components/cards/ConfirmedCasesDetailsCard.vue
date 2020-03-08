<template>
  <v-col cols="12" md="6" class="DataCard">
    <svg-card
      title="検査陽性者の状況"
      :title-id="'details-of-confirmed-cases'"
      :date="headerItem.date"
    >
      <confirmed-cases-table
        aria-label="検査陽性者の状況"
        v-bind="confirmedCases"
      />
    </svg-card>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    SvgCard,
    ConfirmedCasesTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const data = {
      Data,
      confirmedCases,
      headerItem: {
        date: Data.lastUpdate
      }
    }
    return data
  }
}
</script>

<style lang="scss">
</style>
