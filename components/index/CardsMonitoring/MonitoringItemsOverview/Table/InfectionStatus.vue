<template>
  <ul :class="$style.container">
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(1)新規陽性者数') }}</span>
        <value-with-translatable-unit
          :value="items['(1)新規陽性者数'].value"
          :unit="items['(1)新規陽性者数'].unit"
          :bold="items['(1)新規陽性者数'].bold"
        />
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>
          {{
            $t('(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ')
          }}
        </span>
        <value-with-translatable-unit
          :value="
            items[
              '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
            ].value
          "
          :unit="
            items[
              '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
            ].unit
          "
          :bold="
            items[
              '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
            ].bold
          "
        />
      </div>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('(3)PCR・抗原検査') }}</span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('陽性率') }}</span>
            <value-with-translatable-unit
              :value="items['(4)PCR・抗原検査（陽性率）'].value"
              :unit="items['(4)PCR・抗原検査（陽性率）'].unit"
              :bold="items['(4)PCR・抗原検査（陽性率）'].bold"
            />
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('検査人数') }}</span>
            <value-with-translatable-unit
              :value="items['(4)PCR・抗原検査（検査人数）'].value"
              :unit="items['(4)PCR・抗原検査（検査人数）'].unit"
              :bold="items['(4)PCR・抗原検査（検査人数）'].bold"
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
import { MonitoringItems } from '@/utils/formatMonitoringItems'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
