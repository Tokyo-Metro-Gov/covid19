<template>
  <v-data-table
    :headers="headers"
    :items="items"
    :items-per-page="-1"
    :hide-default-footer="true"
    :height="240"
    :fixed-header="true"
    :disable-sort="true"
    :mobile-breakpoint="0"
    class="cardTable"
    item-key="name"
  >
    <template v-slot:body="{ items }">
      <tbody>
        <tr v-for="(item, i) in items" :key="i">
          <th scope="row" class="cardTable-header">
            {{ formatDate(item[headerKey]) }}
          </th>
          <td v-for="(dataKey, j) in dataKeys" :key="j" class="text-end">
            {{ item[dataKey] }}
          </td>
        </tr>
      </tbody>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

import { getDayjsObject } from '@/utils/formatDate'

export type TableHeader = {
  text: TranslateResult
  value: string
  align?: string
}
export type TableItem = {
  text: string
  transition?: string
  cumulative?: string
  [key: number]: number
}
type Data = {}
type Methods = {
  formatDate: (dateString: string) => string
}
type Computed = {
  dataKeys: string[]
}
type Props = {
  headers: TableHeader[]
  items: TableItem[]
  headerKey: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
    headerKey: {
      type: String,
      default: 'text',
    },
  },
  computed: {
    dataKeys() {
      return this.headers
        .map((h) => h.value)
        .filter((h) => h !== this.headerKey)
    },
  },
  methods: {
    formatDate(dateString: string): string {
      const date = getDayjsObject(dateString)
      if (date.isValid()) {
        return this.$d(date.toDate(), 'date')
      } else {
        return dateString
      }
    },
  },
}

export default Vue.extend(options)
</script>

<style lang="scss">
.cardTable-header {
  white-space: nowrap !important;
}
.v-data-table .text-end {
  text-align: right;
}
</style>
