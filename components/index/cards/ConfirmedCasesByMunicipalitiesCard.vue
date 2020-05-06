<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-by-municipalities-table
      :title="$t('陽性患者数（区市町村別）')"
      :title-id="'number-of-confirmed-cases-by-municipalities'"
      :chart-data="municipalitiesTable"
      :date="date"
      :info="info"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）前日までに発生した患者数の累計値') }}
          </li>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
        </ul>
      </template>
    </confirmed-cases-by-municipalities-table>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import Data from '@/data/patient.json'
import ConfirmedCasesByMunicipalitiesTable from '~/components/ConfirmedCasesByMunicipalitiesTable.vue'

export default {
  components: {
    ConfirmedCasesByMunicipalitiesTable
  },
  data() {
    // 区市町村ごとの陽性患者数
    const municipalitiesTable = {
      headers: [],
      datasets: []
    }

    // ヘッダーを設定
    municipalitiesTable.headers = [
      { text: this.$t('地域'), value: 'area' },
      { text: this.$t('ふりがな'), value: 'ruby' },
      { text: this.$t('区市町村'), value: 'label' },
      { text: this.$t('陽性患者数'), value: 'count', align: 'end' }
    ]

    // データをソート
    const areaOrder = ['特別区', '多摩地域', '島しょ地域', null]
    Data.datasets.data
      .sort((a, b) => {
        // 全体をふりがなでソート
        return a.ruby === b.ruby ? 0 : a.ruby > b.ruby ? 1 : -1
      })
      .sort((a, b) => {
        // '特別区' -> '多摩地域' -> '島しょ地域' -> その他 の順にソート
        return areaOrder.indexOf(a.area) - areaOrder.indexOf(b.area)
      })

    // データを追加
    for (const d of Data.datasets.data) {
      // 「小計」は表示しない
      if (d.label === '小計') {
        continue
      }
      municipalitiesTable.datasets.push({
        area: this.$t(d.area),
        ruby: this.$t(d.ruby),
        label: this.$t(d.label),
        count: d.count
      })
    }

    const date = dayjs(Data.date).format('YYYY/MM/DD HH:mm')

    const info = {
      sText: this.$t('{date}の累計', {
        date: dayjs(Data.datasets.date).format('M/DD')
      })
    }

    const data = {
      Data,
      date,
      municipalitiesTable,
      info
    }
    return data
  }
}
</script>
