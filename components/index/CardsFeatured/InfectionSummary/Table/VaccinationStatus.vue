<template>
  <div>
    <ul :class="$style.container">
      <li v-if="items['ワクチン接種状況']['3回接種']" :class="[$style.box]">
        <div :class="$style.content">
          <span>{{ $t('3回接種') }}</span>
          <value-with-translatable-unit
            :value="items['ワクチン接種状況']['3回接種'].toLocaleString()"
            :unit="{ text: '人', translatable: true }"
            :bold="true"
          />
        </div>
      </li>
      <li :class="[$style.box]">
        <div :class="$style.content">
          <span>{{ $t('2回接種') }}</span>
          <value-with-translatable-unit
            :value="items['ワクチン接種状況']['2回接種'].toLocaleString()"
            :unit="{ text: '人', translatable: true }"
            :bold="true"
          />
        </div>
      </li>
      <li :class="[$style.box]">
        <div :class="$style.content">
          <span>{{ $t('1回接種') }}</span>
          <value-with-translatable-unit
            :value="items['ワクチン接種状況']['1回接種'].toLocaleString()"
            :unit="{ text: '人', translatable: true }"
            :bold="true"
          />
        </div>
      </li>
      <li :class="[$style.box]">
        <div :class="$style.content">
          <span>{{ $t('接種なし') }}</span>
          <value-with-translatable-unit
            :value="items['ワクチン接種状況']['接種なし'].toLocaleString()"
            :unit="{ text: '人', translatable: true }"
            :bold="true"
          />
        </div>
      </li>
      <li :class="[$style.box]">
        <div :class="$style.content">
          <span>{{ $t('不明') }}</span>
          <value-with-translatable-unit
            :value="items['ワクチン接種状況']['不明'].toLocaleString()"
            :unit="{ text: '人', translatable: true }"
            :bold="true"
          />
        </div>
      </li>
    </ul>
  </div>
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
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';

.reference {
  color: $gray-3;
  margin: 16px 0;

  @include font-size(14);
}

.description {
  margin: 10px 0;
  color: $gray-3;

  @include font-size(12);

  ul {
    list-style: disc inside;
    padding-left: 1em;

    li {
      margin-left: 1.5em;
      text-indent: -1.5em;
    }
  }
}
</style>
