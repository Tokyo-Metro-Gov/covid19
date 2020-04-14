<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only :placeholder="$t('読み込み中')">
      <data-table
        :title="$t('陽性患者の属性')"
        :title-id="'attributes-of-confirmed-cases'"
        :chart-data="patientsTable"
        :chart-option="{}"
        :date="Data.patients.date"
        :info="sumInfoOfPatients"
        :url="
          'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'
        "
        :source="$t('オープンデータを入手')"
        :custom-sort="customSort"
      />
    </client-only>
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
      header.text =
        header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
    }
    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.getTranslatedWording(row['居住地'])
      row['性別'] = this.getTranslatedWording(row['性別'])
      row['退院'] = this.getTranslatedWording(row['退院'])

      if (row['年代'].substr(-1, 1) === '代') {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      } else {
        row['年代'] = this.$t(row['年代'])
      }
    }

    const data = {
      Data,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  },
  methods: {
    getTranslatedWording(value) {
      if (value === '-' || value === '‐' || value === '―' || value == null) {
        // 翻訳しようとしている文字列が以下のいずれかだった場合、翻訳しない
        // - 全角のハイフン
        // - 半角のハイフン
        // - 全角のダッシュ
        // - null
        return value
      }

      return this.$t(value)
    },
    // '10歳未満' < '10代' となるようにソートする
    customSort(items, index, isDesc) {
      const lt10 = this.$t('10歳未満').toString()
      items.sort((a, b) => {
        // 両者が等しい場合は 0 を返す
        if (a[index[0]] === b[index[0]]) {
          return 0
        }

        // 「10歳未満」同士を比較する場合、そうでない場合に場合分け
        let comparison = 0
        if (
          index[0] === '年代' &&
          (a[index[0]] === lt10 || b[index[0]] === lt10)
        ) {
          comparison = a[index[0]] === lt10 ? -1 : 1
        } else {
          comparison = String(a[index[0]]) < String(b[index[0]]) ? -1 : 1
        }

        return isDesc[0] ? comparison * -1 : comparison
      })
      return items
    }
  }
}
</script>
