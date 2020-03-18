<template>
  <data-view class="SvgCard" :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        {{
          $t(
            '（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載'
          )
        }}<br />
        {{ $t('（チャーター機帰国者、クルーズ船乗客等は含まれていない）') }}
        <br />
        {{
          $t(
            '検査実施人数は、速報値として公開するものであり、後日確定データとして修正される場合があります'
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
