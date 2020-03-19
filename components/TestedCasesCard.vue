<template>
  <data-view class="SvgCard" :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        {{ $t('（注）医療機関が保険適用で行った検査は含まれていない') }}<br />
        {{
          $t(
            '（注）検査実施人数には、チャーター機帰国者、クルーズ船乗客等は含まれていない'
          )
        }}
        <br />
        {{
          $t(
            '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
          )
        }}
      </p>
    </template>
    <slot />
  </data-view>
</template>

<style lang="scss" scoped>
.SvgCard {
  ::v-deep svg {
    width: 100%;
  }
  .Graph-Desc {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 12px;
    color: $gray-3;
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
