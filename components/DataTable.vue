<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
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
  </data-view>
</template>

<i18n>
{
  "ja": {
    "※退院には、死亡退院を含む": "※退院には、死亡退院を含む"
  },
  "en": {
    "※退院には、死亡退院を含む": "* The number of discharge include discharge due to death"
  },
  "zh-cn": {
    "※退院には、死亡退院を含む": "※ 出院数包含因死亡出院"
  },
  "zh-tw": {
    "※退院には、死亡退院を含む": "※ 出院包含因死亡出院"
  },
  "ko": {
    "※退院には、死亡退院を含む": "※퇴원은 사망으로 인해 퇴원한것을 포함합니다"
  },
  "ja-basic": {
    "※退院には、死亡退院を含む": ""
  }
}
</i18n>

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
  }
}
.note {
  padding: 8px;
  font-size: 12px;
  color: #808080;
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
      required: false,
      default: () => {}
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
