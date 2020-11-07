<template>
  <div class="DataView-DataSet-DataInfo">
    <i18n
      tag="small"
      class="DataView-DataSet-DataInfo-summary-unit"
      :path="lText"
    >
      <template v-slot:num>
        <span class="DataView-DataSet-DataInfo-summary">
          {{ num }}
        </span>
      </template>
    </i18n>
    <small class="DataView-DataSet-DataInfo-date">{{ sText }}</small>
  </div>
</template>

<script lang="ts">
import DataViewDataSetPanel from '@/components/DataViewDataSetPanel.vue'
export default DataViewDataSetPanel.extend({
  props: {
    lText: {
      type: String,
      default: '{num}',
    },
    num: {
      type: String,
      default: '',
    },
  },
})
</script>
