<template>
  <span :class="$style.parent">
    <span v-if="bold"
      ><strong>{{ value }}</strong></span
    >
    <span v-else>{{ value }}</span>
    <span v-if="translatedUnit">{{ translatedUnit }}</span>
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
  data() {
    return {
      currentLocaleCode: this.$root.$i18n.locale,
    }
  },
  computed: {
    translatedUnit() {
      const unit = this.unit
      const { text, translatable, except } = unit
      if (translatable) {
        if (except && except.includes(String(this.currentLocaleCode))) {
          return null
        }

        return this.$t(unit.text)
      }

      return text
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
