<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('入院数') }}</span>
        <value-with-translatable-unit
          :value="items['入院数'].toLocaleString()"
          :unit="{ text: '人', translatable: true }"
          :bold="true"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('うち重症者数') }}</span>
            <value-with-translatable-unit
              :value="items['うち重症者数'].toLocaleString()"
              :unit="{ text: '人', translatable: true }"
              :bold="true"
            />
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('確保病床数') }}</span>
        <value-with-translatable-unit
          :value="items['確保病床数'].toLocaleString()"
          :unit="{ text: '床', translatable: true, except: ['en'] }"
          :bold="true"
        />
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('うち重症病床数') }}</span>
            <value-with-translatable-unit
              :value="items['うち重症病床数'].toLocaleString()"
              :unit="{ text: '床', translatable: true, except: ['en'] }"
              :bold="true"
            />
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus } from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<IInfectionMedicalCareProvisionStatus>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import "~/assets/monitoringItemsTableCommon.scss";
</style>
