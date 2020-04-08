<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査実施状況')"
      :title-id="'details-of-tested-cases'"
      :date="Data.inspection_status_summary.date"
    >
      <template v-slot:button>
        <ul :class="$style.notes">
          <li>
            {{ $t('（注）医療機関が保険適用で行った検査は含まれていない') }}
          </li>
          <li>
            {{
              $t(
                '（注）検査実施人数には、チャーター機帰国者、クルーズ船乗客等は含まれていない'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
      <tested-cases-details-table
        :aria-label="$t('検査実施状況')"
        v-bind="testedCases"
      />
    </data-view>
  </v-col>
</template>

<style lang="scss" module>
ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  font-size: 12px;
  color: $gray-3;

  > li {
    list-style-type: none;
  }
}
</style>

<script>
import formatTestedCases from '@/utils/formatTestedCases'
import DataView from '@/components/DataView.vue'
import TestedCasesDetailsTable from '@/components/TestedCasesDetailsTable.vue'
import { Registry } from '~/libraries/Registry'

export default {
  components: {
    DataView,
    TestedCasesDetailsTable
  },
  data() {
    const Data = Registry.DataRepository.data
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
