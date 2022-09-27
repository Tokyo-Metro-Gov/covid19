<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('新規陽性者数') }}</span>
        <value-with-translatable-unit
          :value="items['新規陽性者'].toLocaleString()"
          :unit="{ text: '人', translatable: true }"
          :bold="true"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('うち65歳以上') }}</span>
            <value-with-translatable-unit
              :value="items['うち65歳以上の高齢者数'].toLocaleString()"
              :unit="{ text: '人', translatable: true }"
              :bold="true"
            />
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('死亡者数') }}</span>
        <value-with-translatable-unit
          :value="items['死亡者数'].toLocaleString()"
          :unit="{ text: '人', translatable: true }"
          :bold="true"
        />
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { Data as IInfectionMedicalCareSummaryData } from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareSummary'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<IInfectionMedicalCareSummaryData>,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
