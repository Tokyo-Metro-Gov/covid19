<template>
  <data-view class="SvgCard" :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <p class="Graph-Desc">
        {{ $t('（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載') }}<br />
        （{{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない。') }}）
      </p>
    </template>
    <slot />
  </data-view>
</template>

<i18n>
{
  "ja": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": "チャーター機帰国者、クルーズ船乗客等は含まれていない。"
  },
  "en": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "(Note) This shows the examinations for the patients with possible infection or for those who had close contact with them",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": "excluding the returnees on charter flights or the cruise ship passengers"
  },
  "zh-cn": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": ""
  },
  "zh-tw": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "(註)列出與東京都疑似病例或是曾與患者密切接觸",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": "包機返國者、郵輪乘客等除外"
  },
  "ko": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": ""
  },
  "ja-basic": {
    "（注）都内において疑い例または患者の濃厚接触者として検査を行ったものについて掲載": "（ちゅうい）とないにおいてうたがいれいまたはかんじゃののうこうせっしょくしゃとしてけんさをおこなったものについてけいさい",
    "チャーター機帰国者、クルーズ船乗客等は含まれていない。": "チャーターききこくしゃ、クルーズせんじょうきゃくとうはふくまれていない。"
  }
}
</i18n>

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
