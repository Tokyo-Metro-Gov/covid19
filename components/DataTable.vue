<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="200"
      :fixed-header="true"
      :mobile-breakpoint="0"
      class="cardTable"
    />
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :lText=info.lText
        :sText=info.sText
        :unit=info.unit
      />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;
    }
    tbody {
      tr {
        color: $gray-1;
        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;
        }
        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }
        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>
