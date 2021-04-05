<template>
  <div class="DataView-DataSet-info">
    <i18n tag="small" class="DataView-DataSet-summary-unit" :path="lText">
      <template #num>
        <span class="DataView-DataSet-summary">
          {{ num }}
        </span>
      </template>
    </i18n>
    <small class="DataView-DataSet-date">{{ sText }}</small>
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
