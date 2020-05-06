<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="updatedAt"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
          <li>
            {{
              $t('（注）「入院中」には、入院調整中・宿泊療養に移行した方を含む')
            }}
          </li>
          <li>
            {{
              $t(
                '（注）「重症」は、集中治療室（ICU）等での管理又は人工呼吸器管理が必要な患者数を計上'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）退院者数の把握には一定の期間を要しており、確認次第数値を更新している'
              )
            }}
          </li>
        </ul>
      </template>
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  data() {
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Data.main_summary)

    const updatedAt = dayjs(Data.main_summary.children[0].date).format(
      'YYYY/MM/DD HH:mm'
    )

    const data = {
      Data,
      confirmedCases,
      updatedAt
    }
    return data
  }
}
</script>
