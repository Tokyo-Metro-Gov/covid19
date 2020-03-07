<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <data-selector v-model="dataKind" display-type="property" />
    </template>
    <template v-if="dataKind === 'table'">
      <v-data-table
        :headers="propertyData.headers"
        :items="propertyData.datasets"
        :items-per-page="-1"
        :hide-default-footer="true"
        :height="240"
        :fixed-header="true"
        :mobile-breakpoint="0"
        class="cardTable"
      />
    </template>
    <template v-else>
      <!-- NOTE: <horizontal-bar> の方が良いかましれない -->
      <!-- <horiztontal-bar :chart-data="displayData" :options="propertyChartOption" :height="240" /> -->
      <bar
        :chart-data="displayData"
        :options="propertyChartOption"
        :height="240"
      />
    </template>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
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
import DataSelector from '@/components/DataSelector.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'

export default {
  components: { DataView, DataSelector, DataViewBasicInfoPanel },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    propertyData: {
      type: Object,
      required: true,
      default: () => {}
    },
    propertyChartOption: {
      type: Object,
      required: true,
      defualt: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
    },
    info: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      dataKind: 'table'
    }
  },
  computed: {
    displayData() {
      const labels = Object.keys(this.propertyData.ageSummary)
      const data = Object.values(this.propertyData.ageSummary)
      return {
        labels,
        datasets: [
          {
            label: '男性',
            data: Array.from(data, e => e[0]),
            backgroundColor: '#006e2c',
            borderWidth: 0
          },
          {
            label: '女性',
            data: Array.from(data, e => e[1]),
            backgroundColor: '#00B849',
            borderWidth: 0
          },
          {
            label: '不明',
            data: Array.from(data, e => e[2]),
            backgroundColor: '66d492',
            borderWidth: 0
          }
        ]
      }
    }
  }
}
</script>
