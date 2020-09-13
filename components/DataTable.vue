<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <span />
    </template>
    <v-overlay
      opacity="0"
      absolute
      :value="!loaded"
      justify-center
      align-center
    >
      <scale-loader color="#00A040" />
    </v-overlay>
    <v-overlay absolute :value="error" justify-center align-center>
      <v-alert type="error" color="#AD2121">
        {{ title }} {{ $t('の読み込みに失敗しました') }} <br />
        エラーメッセージ: {{ errormsg }}
      </v-alert>
    </v-overlay>
    <v-layout :class="{ loading: !loaded || error }" column>
      <v-data-table
        :ref="'displayedTable'"
        :headers="chartData.headers"
        :items="chartData.datasets"
        :height="240"
        fixed-header
        :mobile-breakpoint="0"
        :footer-props="{
          'items-per-page-options': [15, 30, 50, 100, 200, 300, 500, 1000],
          'items-per-page-text': $t('1ページ当たり'),
        }"
        :items-per-page.sync="itemsPerPage"
        :page.sync="page"
        :disable-sort="true"
        class="cardTable"
        :server-items-length="dataLength"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.text">
              <th class="text-start" scope="row">{{ item['公表日'] }}</th>
              <td class="text-start">{{ item['居住地'] }}</td>
              <td class="text-start">{{ item['年代'] }}</td>
              <td class="text-start">{{ item['性別'] }}</td>
              <td class="text-center">{{ item['退院'] }}</td>
            </tr>
          </tbody>
        </template>
        <template slot="footer.page-text" slot-scope="props">
          {{
            $t('{itemsLength} 項目中 {pageStart} - {pageStop} ', {
              itemsLength: props.itemsLength,
              pageStart: props.pageStart,
              pageStop: props.pageStop,
            })
          }}
        </template>
      </v-data-table>
    </v-layout>
    <template v-slot:additionalDescription>
      <ul class="ListStyleNone">
        <li>
          {{ $t('※退院は、保健所から報告があり、確認ができているものを反映') }}
        </li>
        <li>
          {{ $t('※死亡退院を含む') }}
        </li>
      </ul>
    </template>
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

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default Vue.extend({
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink, ScaleLoader },
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
    url: {
      type: String,
      default: '',
    },
    loaded: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errormsg: {
      type: String,
      default: '',
    },
    dataLength: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {
      itemsPerPage: 15,
      page: 1,
    }
  },
  watch: {
    itemsPerPage() {
      this.$emit('onChangeItemsPerPage', this.itemsPerPage)
      this.page = 1
    },
    page() {
      this.$emit('onChangePage', this.page)
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

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px !important;
      height: auto !important;
      border-bottom: 1px solid $gray-4 !important;
      color: $gray-2 !important;
      @include font-size(12, true);

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;
        th {
          font-weight: normal;
        }
        td {
          padding: 8px 10px !important;
          height: auto !important;
          @include font-size(12, true);

          &.text-center {
            text-align: center;
          }
        }

        &:nth-child(odd) {
          th,
          td {
            background: rgba($gray-4, 0.3);
          }
        }
      }
    }
    .v-select {
      margin-left: 10px;
    }
    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
  .v-data-table__wrapper {
    box-shadow: 0 -20px 12px -12px #0003 inset;
  }
  .v-data-footer {
    @include font-size(12);
    &__pagination {
      margin-left: 0;
      margin-right: 5px;
    }
  }
  .v-data-footer__select .v-select__selections .v-select__selection--comma {
    font-size: 1.2rem;
  }
}
.v-menu__content {
  width: 80px;
  .v-list-item {
    padding: 0 8px;
  }
}
.v-list-item__title {
  font-size: 1.5rem;
}

.loading {
  visibility: hidden;
}
</style>
