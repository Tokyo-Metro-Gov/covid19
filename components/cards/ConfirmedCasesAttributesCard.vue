<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-table
        :title="$t('陽性者の属性')"
        :title-id="'attributes-of-confirmed-cases'"
        :chart-data="patientsTable"
        :chart-option="{}"
        :date="date"
        :info="sumInfoOfPatients"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
        :source="$t('オープンデータを入手')"
        :loaded="loaded"
        :error="error"
        :errormsg="errormsg"
        :data-length="dataLength"
        @onChangeItemsPerPage="onChangeItemsPerPage"
        @onChangePage="onChangePage"
      />
    </client-only>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import { getDayjsObject } from '@/utils/formatDate'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable,
  },
  data() {
    const patientSummary = Data.patients_summary
    const patients = Data.patients
    const { date } = patients

    // 感染者数グラフ
    const patientsGraph = formatGraph(patientSummary.data)
    // 日付
    const lastDay = patientsGraph[patientsGraph.length - 1].label
    const dateAsOf = this.$d(
      getDayjsObject(lastDay).toDate(),
      'dateWithoutYear'
    )
    const dataLength = patientsGraph[patientsGraph.length - 1].cumulative

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', { date: dateAsOf }),
      unit: this.$t('人'),
    }

    return {
      patientsTable: {},
      dataLength,
      sumInfoOfPatients,
      date,
      loaded: false,
      error: false,
      errormsg: '',
      itemsPerPage: 15,
      page: 1,
      maxPage: 1,
      endCursor: '',
      patientsRawDataArray: [],
    }
  },
  created() {
    this.getPatientsTableFromAPI(this.itemsPerPage)
  },
  methods: {
    onChangeItemsPerPage(num) {
      this.itemsPerPage = num
      this.maxPage = 1
      this.getPatientsTableFromAPI(true)
    },
    onChangePage(num) {
      if (this.page < num) {
        this.page = num
        if (this.maxPage < num) {
          this.getPatientsTableFromAPI()
          this.maxPage = num
        } else {
          this.getpatientsTableByPageNumber()
        }
      } else {
        this.page = num
        this.getpatientsTableByPageNumber()
      }
    },
    async getPatientsTableFromAPI(changeLimit) {
      if (changeLimit) {
        this.endCursor = ''
        this.patientsRawDataArray = []
      }
      const limit =
        this.itemsPerPage <= 500
          ? this.patientsRawDataArray.length === 0
            ? this.itemsPerPage * 2
            : this.itemsPerPage
          : this.itemsPerPage
      if (this.patientsRawDataArray.length < this.page * this.itemsPerPage) {
        this.loaded = false
      }
      const endCursorParam = this.endCursor
        ? `&cursor=${encodeURIComponent(this.endCursor)}`
        : ''
      await fetch(
        `https://api.data.metro.tokyo.lg.jp/v1/Covid19Patient?limit=${limit}${endCursorParam}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          this.patientsRawDataArray = this.patientsRawDataArray.concat(
            responseJson[0]
          )
          this.endCursor = responseJson[1].endCursor
          this.getpatientsTableByPageNumber()
          this.loaded = true
        })
        .catch((error) => {
          this.error = true
          this.errormsg = error
        })
    },
    getpatientsTableByPageNumber() {
      this.patientsTable = formatTable(
        this.patientsRawDataArray.slice(
          this.page * this.itemsPerPage - this.itemsPerPage,
          this.page * this.itemsPerPage
        )
      )
      // 陽性者の属性 ヘッダー翻訳
      for (const header of this.patientsTable.headers) {
        header.text =
          header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
      }
      // 陽性者の属性 中身の翻訳
      for (const row of this.patientsTable.datasets) {
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
    },
    getTranslatedWording(value) {
      if (
        value === '-' ||
        value === '‐' ||
        value === '―' ||
        value === '－' ||
        value === null
      ) {
        // 翻訳しようとしている文字列が以下のいずれかだった場合、翻訳しない
        // - 全角のハイフン
        // - 半角のハイフン
        // - 全角のダッシュ
        // - 全角ハイフンマイナス
        // - null
        return value
      }

      return this.$t(value)
    },
  },
}
</script>
