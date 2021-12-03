<template>
  <div>
    <ul :class="$style.container">
      <li :class="[$style.box, $style.parent]">
        <div :class="$style.content">
          <span>{{ $t('病床使用率') }}</span>
          <value-with-translatable-unit
            :value="items['病床使用率'].toLocaleString()"
            :unit="{ text: '%', translatable: false }"
            :bold="true"
          />
        </div>
        <ul :class="$style.group">
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ $t('入院者数') }}</span>
              <value-with-translatable-unit
                :value="items['入院数'].toLocaleString()"
                :unit="{ text: '人', translatable: true }"
                :bold="true"
              />
            </div>
          </li>
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ $t('確保病床数') }}</span>
              <value-with-translatable-unit
                :value="items['確保病床数'].toLocaleString()"
                :unit="{ text: '床', translatable: true, except: ['en'] }"
                :bold="true"
              />
            </div>
          </li>
        </ul>
      </li>
      <li :class="[$style.box, $style.parent]">
        <div :class="$style.content">
          <span>{{ $t('重症者病床使用率（都基準）') }}</span>
          <value-with-translatable-unit
            :value="items['都基準重症病床使用率'].toLocaleString()"
            :unit="{ text: '%', translatable: false }"
            :bold="true"
          />
        </div>
        <ul :class="$style.group">
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ $t('重症者数') }}</span>
              <value-with-translatable-unit
                :value="items['都基準重症者数'].toLocaleString()"
                :unit="{ text: '人', translatable: true }"
                :bold="true"
              />
            </div>
          </li>
          <li :class="[$style.box]">
            <div :class="$style.content">
              <span>{{ $t('重症病床数') }}</span>
              <value-with-translatable-unit
                :value="items['都基準重症病床数'].toLocaleString()"
                :unit="{ text: '床', translatable: true, except: ['en'] }"
                :bold="true"
              />
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <p :class="$style.reference">
      {{
        $t(
          '（参考）国基準 重症者病床使用率 {percentage}%（{persons}人/{bed}床）',
          {
            percentage: items['国基準重症病床使用率'].toLocaleString(),
            persons: items['国基準重症者数'].toLocaleString(),
            bed: items['国基準重症病床数'].toLocaleString(),
          }
        )
      }}
    </p>
    <div :class="$style.description">
      <span>{{ $t('（注）') }}</span>
      <ul>
        <li>
          {{
            $t(
              '病床使用率等の分母の病床数は現時点の最大確保見込数、分子の人数は確保病床を使用している人数'
            )
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import ValueWithTranslatableUnit from '@/components/index/CardsMonitoring/MonitoringItemsOverview/Table/ValueWithTranslatableUnit.vue'
import { InfectionMedicalcareSummary as IInfectionMedicalCareSummary } from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareSummary'

export default Vue.extend({
  components: {
    ValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<IInfectionMedicalCareSummary>,
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
