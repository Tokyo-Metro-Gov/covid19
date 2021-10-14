<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <v-overlay
      opacity="0"
      absolute
      :value="!loaded"
      justify-center
      align-center
    >
      <scale-loader color="#00A040" />
    </v-overlay>
    <v-overlay v-if="error" absolute>
      <v-alert color="#AD2121">
        <v-icon>
          {{ mdiAlert }}
        </v-icon>
        {{ title }} {{ $t('の読み込みに失敗しました') }} <br />
        エラーメッセージ: {{ error.message }}
      </v-alert>
    </v-overlay>
    <v-layout :class="{ loading: !loaded || error }" column>
      <v-data-table
        :ref="'displayedTable'"
        :headers="tableData.headers"
        :items="tableData.datasets"
        :height="240"
        fixed-header
        :hide-default-header="true"
        :hide-default-footer="true"
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
        <template #header="{ props: { headers } }">
          <thead>
            <tr>
              <th
                v-for="(header, i) in headers"
                :key="i"
                :class="`text-${header.align || 'start'} DataTable-header`"
              >
                {{ $t(header.text) }}
              </th>
            </tr>
          </thead>
        </template>
        <template #body="{ items, headers }">
          <slot name="tableBody" :items="items" :headers="headers" />
        </template>
        <template #footer="{ props }">
          <div class="cardTableFooter">
            <div class="cardTableFooterItem">
              <label for="perPageSelector" class="cardTableFooterLabel">
                {{ props.itemsPerPageText }}
              </label>
              <select
                id="perPageSelector"
                v-model="itemsPerPage"
                class="perPageSelectBox"
              >
                <option
                  v-for="(item, i) in props.itemsPerPageOptions"
                  :key="i"
                  :value="item"
                >
                  {{ item }}
                </option>
              </select>
            </div>
            <div class="cardTableFooterItem">
              <span class="cardTableFooterLabel">
                {{
                  $t('{itemsLength} 項目中 {pageStart} - {pageStop} ', {
                    itemsLength: props.pagination.itemsLength,
                    pageStart: props.pagination.pageStart + 1,
                    pageStop: props.pagination.pageStop,
                  })
                }}
              </span>
              <div>
                <v-icon
                  v-model="page"
                  :aria-label="
                    $t('前の{perPage}件', {
                      perPage: itemsPerPage,
                    })
                  "
                  :disabled="page <= 1"
                  @click="page--"
                >
                  {{ mdiChevronLeft }}
                </v-icon>
                <v-icon
                  v-model="page"
                  :aria-label="
                    $t('次の{perPage}件', {
                      perPage: itemsPerPage,
                    })
                  "
                  :disabled="
                    props.pagination.itemsLength <= props.pagination.pageStop
                  "
                  @click="page++"
                >
                  {{ mdiChevronRight }}
                </v-icon>
              </div>
            </div>
          </div>
        </template>
      </v-data-table>
    </v-layout>
    <template #additionalDescription>
      <slot name="additionalDescription" />
    </template>
    <template #infoPanel>
      <data-view-data-set-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
      />
    </template>
    <template #footer>
      <open-data-link :url="url" />
      <p class="FooterNote">
        {{ $t('下記更新日時はオープンデータAPIの反映日時に準じています') }}
      </p>
    </template>
  </data-view>
</template>

<script lang="ts">
import { mdiAlert, mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import Vue from 'vue'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

import DataView from '@/components/index/_shared/DataView.vue'
import DataViewDataSetPanel from '@/components/index/_shared/DataViewDataSetPanel.vue'
import OpenDataLink from '@/components/index/_shared/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, DataViewDataSetPanel, OpenDataLink, ScaleLoader },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    tableData: {
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
      type: Object,
      default: null,
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
      mdiAlert,
      mdiChevronLeft,
      mdiChevronRight,
    }
  },
  watch: {
    itemsPerPage() {
      this.$emit('on-change-items-per-page', this.itemsPerPage)
      this.page = 1
    },
    page() {
      this.$emit('on-change-page', this.page)
    },
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('.v-data-table__wrapper')
    // NodeListをIE11でforEachするためのワークアラウンド
    const nodes = Array.prototype.slice.call(tables, 0)
    nodes.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })

    const inputs = vTableElement.querySelectorAll('input[aria-readonly]')
    Array.prototype.slice.call(inputs, 0).forEach((input: Element) => {
      input.removeAttribute('aria-readonly')
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

.FooterNote {
  margin: 0 !important;
}

.DataTable-header {
  white-space: nowrap;
}

.cardTableFooter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 12px 0;

  @include font-size(14);
}

.cardTableFooterItem {
  display: flex;
  align-items: center;
  margin-left: 12px;
}

.cardTableFooterLabel {
  padding-right: 8px;
}

.perPageSelectBox {
  appearance: auto;
  border: 1px solid $gray-4;

  &:focus {
    border: 2px solid $focus;
    outline: none;
  }
}
</style>
