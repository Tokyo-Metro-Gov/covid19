<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
      :source="$t('オープンデータを入手')"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    // 感染者数
    const patientsTable = formatTable(Data.patients.data)

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
      unit: this.$t('人')
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text = this.$t(header.value)
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.$t(row['居住地'])
      row['性別'] = this.$t(row['性別'])
      // row['退院'] = this.$t(row['退院'])

      switch (row['年代']) {
        case '10歳未満': {
          row['年代'] = this.$t('10歳未満')
          break
        }
        case '90歳以上': {
          row['年代'] = this.$t('90歳以上')
          break
        }
        case '非公表': {
          row['年代'] = this.$t('非公表')
          break
        }
        case '調査中': {
          row['年代'] = this.$t('調査中')
          break
        }
        case '不明': {
          row['年代'] = this.$t('不明')
          break
        }
        default: {
          const age = row['年代'].substring(0, 2)
          row['年代'] = this.$t('{age}代', { age })
          break
        }
      }
    }

    const data = {
      Data,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  }
}
</script>
