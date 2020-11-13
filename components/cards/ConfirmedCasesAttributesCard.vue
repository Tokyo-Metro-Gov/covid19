<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-table
        :title="$t('陽性者の属性')"
        :title-id="'attributes-of-confirmed-cases'"
        :table-data="patientsTable"
        :date="date"
        :info="sumInfoOfPatients"
        :url="'https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000068'"
        :source="$t('オープンデータを入手')"
        :loaded="dataMargin >= 0"
        :error="$fetchState.error"
        :data-length="dataLength"
        @onChangeItemsPerPage="onChangeItemsPerPage"
        @onChangePage="onChangePage"
      >
        <template v-slot:tableBody="{ items, headers }">
          <tbody>
            <tr v-for="(item, i) in items" :key="i">
              <template v-for="(header, j) in headers">
                <th v-if="j === 0" :key="j" scope="row">
                  {{ translateDate(item[header.value]) }}
                </th>
                <td v-else-if="header.type === 'date'" :key="j">
                  {{ translateDate(item[header.value]) }}
                </td>
                <td v-else-if="header.type === 'age'" :key="j">
                  {{ translateAge(item[header.value]) }}
                </td>
                <td v-else :key="j" :class="`text-${header.align || 'start'}`">
                  {{ translateWord(item[header.value]) }}
                </td>
              </template>
            </tr>
          </tbody>
        </template>
      </data-table>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import dayjs from 'dayjs'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import DataTable from '@/components/DataTable.vue'
import Data from '@/data/data.json'
import { getDayjsObject } from '@/utils/formatDate'
import formatGraph from '@/utils/formatGraph'
import { DataType, formatTable, TableDateType } from '@/utils/formatTable'

interface MetaData {
  endCursor: string
  updated: string
}
type Data = {
  dataLength: number
  sumInfoOfPatients: {
    lText: string
    sText: VueI18n.TranslateResult
    unit: VueI18n.TranslateResult
  }
  date: string
  page: number
  itemsPerPage: number
  endCursor: string
  patientsData: DataType[]
}
type Methods = {
  fetchOpenAPI: () => Promise<{ patientsData: DataType; metaData: MetaData }>
  onChangeItemsPerPage: (num: number) => Promise<void>
  onChangePage: (num: number) => Promise<void>
  translateWord: (word: string) => string | VueI18n.TranslateResult
  translateDate: (date: string) => VueI18n.TranslateResult
  translateAge: (age: string) => VueI18n.TranslateResult
}
type Computed = {
  limit: number
  patientsTable: TableDateType
  dataMargin: number
}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataTable },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const lastData = patientsGraph[patientsGraph.length - 1]
    const lastDay = this.$d(
      getDayjsObject(lastData.label).toDate(),
      'dateWithoutYear'
    )
    const dataLength = lastData.cumulative
    const sumInfoOfPatients = {
      lText: dataLength.toLocaleString(),
      sText: this.$t('{date}の累計', { date: lastDay }),
      unit: this.$t('人'),
    }

    return {
      dataLength,
      sumInfoOfPatients,
      date: '',
      page: 1,
      itemsPerPage: 15,
      endCursor: '',
      patientsData: [],
    }
  },
  computed: {
    limit() {
      const times = this.itemsPerPage <= 500 ? 2 : 1
      return this.itemsPerPage * times
    },
    patientsTable() {
      const end = this.page * this.itemsPerPage
      const start = end - this.itemsPerPage
      const currentPageData = this.patientsData.slice(start, end)
      return formatTable(currentPageData)
    },
    dataMargin() {
      return this.patientsData.length - this.page * this.itemsPerPage
    },
  },
  async fetch() {
    const { patientsData, metaData } = await this.fetchOpenAPI()
    this.patientsData = this.patientsData.concat(patientsData)
    this.endCursor = metaData.endCursor
    this.date = metaData.updated
  },
  methods: {
    async fetchOpenAPI() {
      const endpoint = 'https://api.data.metro.tokyo.lg.jp'
      const url =
        `${endpoint}/v1/Covid19Patient?limit=${this.limit}` +
        (this.endCursor ? `&cursor=${encodeURIComponent(this.endCursor)}` : '')

      return await fetch(url)
        .then((response) => response.json())
        .then((data) => ({ patientsData: data[0], metaData: data[1] }))
        .catch((error) => {
          throw new Error(error.toString())
        })
    },
    async onChangeItemsPerPage(num) {
      this.itemsPerPage = num
      this.endCursor = ''
      this.patientsData = []
      await this.$fetch()
    },
    async onChangePage(page) {
      this.page = page
      // メモリ上に次ページのデータがなければ先読みしてページネーション時の待ち時間を減らす
      if (this.dataMargin < this.itemsPerPage) await this.$fetch()
    },
    translateDate(date) {
      const day = dayjs(date)
      if (day.isValid()) {
        return this.$d(day.toDate(), 'dateWithoutYear')
      }
      return this.$t('不明')
    },
    translateAge(_age) {
      const [age, dai] = _age.split(/(代)$/, 2)
      return dai ? this.$t('{age}代', { age }) : this.$t(_age)
    },
    translateWord(word) {
      // 文字列が `null` or 以下の記号だった場合は翻訳しない
      // 全角のハイフン, 半角のハイフン, 全角のダッシュ, 全角ハイフンマイナス
      const notTranslateWords = ['-', '‐', '―', '－', null]
      return notTranslateWords.includes(word) ? word : this.$t(word)
    },
  },
}
export default options
</script>
