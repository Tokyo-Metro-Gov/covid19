<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      :custom-sort="customSort"
      class="cardTable"
    />
    <div class="note">
      {{ $t('※退院には、死亡退院を含む') }}
    </div>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link :url="url" />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    box-shadow: 0 -20px 12px -12px #0003 inset;
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;

        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;

          &.text-center {
            text-align: center;
          }
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
    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
}

.note {
  padding: 8px;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
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
      default: () => {}
    },
    url: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')

    tables.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  },
  methods: {
    // '10歳未満' < '10代' となるようにソートする
    customSort(items: Object[], index: string[], isDesc: boolean[]) {
      const lt10 = this.$t('10歳未満').toString()
      items.sort((a: any, b: any) => {
        if (
          index[0] === '年代' &&
          (a[index[0]] === lt10 || b[index[0]] === lt10)
        ) {
          if (a[index[0]] === lt10) {
            // 公表日を常に降順にする
            if (b[index[0]] === lt10) {
              return a['公表日'] > b['公表日'] ? -1 : 1
            } else {
              return !isDesc[0] ? -1 : 1
            }
          } else {
            return !isDesc[0] ? 1 : -1
          }
        } else if (!isDesc[0]) {
          return a[index[0]] < b[index[0]] ? -1 : 1
        } else {
          return b[index[0]] < a[index[0]] ? -1 : 1
        }
      })
      return items
    }
  }
})
</script>
