<template>
  <div class="News">
    <page-header class="mb-3" :icon="headerItem.icon">
      {{ $t('知事からのメッセージ') }}
    </page-header>
    <StaticCard>
      <ul>
      <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/kenmin.data/comment0417.pdf">
            {{ $t('新型コロナウイルス感染症に関する緊急事態宣言対象地域拡大への対応について(4/17)') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/kenmin.data/tijimesseji.pdf">
            {{ $t('県民の皆様へ（緊急事態宣言の対象地域拡大を受けて）(4/16)') }}
          </a>
        </li>
         <li>
          <a href="https://www3.pref.shimane.jp/houdou/articles/151867">
            {{ $t('令和2年4月16日新型コロナウイルス感染症政府の緊急事態宣言対象地域の拡大ついて（知事コメント）（外部サイト）(4/16)') }}
          </a>
        </li>
        <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/kenmin.data/message0414.pdf">
            {{ $t('松江市内の県立学校を休業とし、私立学校に休業を要請しました(4/14)') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/governor_message.data/20200413.pdf">
            {{ $t('接客を伴う飲食店の利用自粛・県の体制強化について（4/13）') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/governor_message.data/message0411.pdf">
            {{ $t('県民の皆様へ（4/11）') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/governor_message.data/comment200410.pdf">
            {{ $t('新型コロナウイルス感染症患者の発生について（4/10）') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/governor_message.data/r20410message.pdf">
            {{ $t('新型コロナウイルス感染症　新型コロナウイルス感染者の県内初確認について（4/10）') }}
          </a>
        </li>
         <li>
          <a href="https://www3.pref.shimane.jp/houdou/articles/151824">
            {{ $t('新型コロナウイルス感染症＿政府の緊急事態宣言について（外部サイト)（4/6）') }}
          </a>
        </li>
         <li>
          <a href="https://www3.pref.shimane.jp/houdou/articles/151822">
            {{ $t('新型コロナウイルス感染症への対応について（外部サイト）（4/7）') }}
          </a>
        </li>
         <li>
          <a href="https://www.pref.shimane.lg.jp/bousai_info/bousai/kikikanri/shingata_taisaku/governor_message.data/message0327.pdf">
            {{ $t('新型コロナウイルス感染症防止拡大に向けた取組への協力について～県民の皆様へのお願い～（3/27）') }}
          </a>
        </li>
      </ul>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },

  data() {
    const data = {
      headerItem: {
        icon: 'mdi-account-multiple'
      }
    }
    return data
  },

  head(): MetaInfo {
    return {
      title: this.$t('県内各所のお知らせ') as string
    }
  }
})
</script>