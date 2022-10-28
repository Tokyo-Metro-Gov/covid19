<template>
  <ul :class="$style.container">
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(4)救急医療の東京ルールの適用件数') }}</span>
        <value-with-translatable-unit
          :value="tokyoRule.toLocaleString()"
          :unit="{ text: '件.cases', translatable: true }"
        />
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(5)入院患者数') }}</span>
        <value-with-translatable-unit
          :value="positiveHospitalized.toLocaleString()"
          :unit="{ text: '人', translatable: true }"
        />
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(6)重症患者数') }}</span>
        <value-with-translatable-unit
          :value="positiveServe.toLocaleString()"
          :unit="{ text: '人', translatable: true }"
        />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    tokyoRule: {
      type: Number,
      required: true,
    },
    positiveHospitalized: {
      type: Number,
      required: true,
    },
    positiveServe: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon';
</style>
