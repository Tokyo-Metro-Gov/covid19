<template>
  <ul :class="$style.container">
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('(1)新規陽性者数') }}</span>
        <value-with-translatable-unit
          :value="dailyPositiveValueFormatter"
          :unit="{ text: '人', translatable: true }"
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
          :value="consultation.toLocaleString()"
          :unit="{ text: '件.calls', translatable: true }"
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
              :value="positiveRatePercent.toLocaleString()"
              :unit="{ text: '%', translatable: false }"
            />
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('検査人数') }}</span>
            <value-with-translatable-unit
              :value="positiveRatePeople.toLocaleString()"
              :unit="{ text: '人', translatable: true }"
            />
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/monitoringStatusValueFormatters'

type Data = {}

type Methods = {}

type Computed = {
  dailyPositiveValueFormatter: String
}

type Props = {
  dailyPositive: number
  consultation: number
  positiveRatePercent: number
  positiveRatePeople: number
}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    dailyPositive: {
      type: Number,
      required: true,
    },
    consultation: {
      type: Number,
      required: true,
    },
    positiveRatePercent: {
      type: Number,
      required: true,
    },
    positiveRatePeople: {
      type: Number,
      required: true,
    },
  },
  computed: {
    dailyPositiveValueFormatter() {
      return getCommaSeparatedNumberToFixedFunction(1)(this.dailyPositive)
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon';
</style>
