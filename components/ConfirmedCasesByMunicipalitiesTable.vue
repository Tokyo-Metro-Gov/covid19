<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      :disable-sort="true"
      class="cardTable"
    />
    <template v-slot:additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template v-slot:infoPanel>
      <data-view-data-set-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
      />
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'

import DataView from '@/components/DataView.vue'
import DataViewDataSetPanel from '@/components/DataViewDataSetPanel.vue'

export default Vue.extend({
  components: { DataView, DataViewDataSetPanel },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    chartData: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: '',
    },
    info: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')
    // NodeListをIE11でforEachするためのワークアラウンド
    const nodes = Array.prototype.slice.call(tables, 0)
    nodes.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  },
})
</script>
