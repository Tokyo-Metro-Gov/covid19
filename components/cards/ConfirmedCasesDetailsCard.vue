<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Data.inspections_summary.date"
    >
      <template v-slot:infoPanel>
        <p :class="$style.GraphDesc">
          {{
            $t(
              '（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載'
            )
          }}<br />
          {{ $t('（チャーター機帰国者、クルーズ船乗客等は含まれていない）') }}
          <br />
          {{
            $t(
              '検査実施人数は、速報値として公開するものであり、後日確定データとして修正される場合があります'
            )
          }}
        </p>
      </template>
      <confirmed-cases-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesTable from '@/components/ConfirmedCasesTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesTable
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

<style lang="scss" module>
.GraphDesc {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>
