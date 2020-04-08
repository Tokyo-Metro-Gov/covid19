<template>
  <data-view class="SvgCard" :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        （注）県内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載<br />
        （チャーター機帰国者、クルーズ船乗客等は含まれていない。）<br />
        ・香取郡内障害福祉施設関係において陽性反応がでた患者の中で施設内での隔離・治療を行っている場合については入院中人数として計算<br />
        ・入院の有無が判明していない患者については退院人数として計算
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

<script>
import DataView from '@/components/DataView.vue'

export default {
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
}
</script>
