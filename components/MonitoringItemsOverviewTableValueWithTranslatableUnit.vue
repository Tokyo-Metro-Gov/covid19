<template>
  <span :class="$style.parent">
    {{ value }}
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
      required: true
    },
    unit: {
      type: Object as PropType<Unit>,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
.parent {
  // white-space: nowrap;
}
</style>
