<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <ul :class="$style.notes">
        <li>
          {{ $t('（注）医療機関が保険適用で行った検査は含まれていない') }}
        </li>
        <li>
          {{
            $t(
              '（注）検査実施人数には、チャーター機帰国者、クルーズ船乗客等は含まれていない'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
            )
          }}
        </li>
      </ul>
    </template>
    <slot />
  </data-view>
</template>

<style lang="scss" module>
ul.notes {
  margin-top: 10px;
  margin-bottom: 0;
  padding-left: 0 !important;
  font-size: 12px;
  color: $gray-3;

  > li {
    list-style-type: none;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'

export default Vue.extend({
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    date: {
      type: String,
      default: ''
    }
  }
})
</script>
