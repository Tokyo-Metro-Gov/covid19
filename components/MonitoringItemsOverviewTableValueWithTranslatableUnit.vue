<template>
  <span :class="$style.parent">
    <strong>{{ value }}</strong>
    <span v-if="unit.translatable">{{ $t(unit.text) }}</span>
    <span v-else>{{ unit.text }}</span>
  </span>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import { Unit } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  props: {
    value: {
      type: String,
      required: true,
    },
    unit: {
      type: Object as PropType<Unit>,
      required: true,
    },
    bold: {
      type: Boolean,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
.parent {
  margin-left: 10px;
  text-align: right;
  white-space: nowrap;
  flex-shrink: 1;
}
</style>
