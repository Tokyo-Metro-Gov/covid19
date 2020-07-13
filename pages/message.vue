<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('福井県知事からのメッセージ') }}
    </h2>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html"
          target="_blank"
          rel="noopener"
          >{{ $t('緊急事態宣言の発令にあたって') }}</a
        >
      </h3>
      <p>
　本日、東京都など状況が深刻な７都府県を対象とした緊急事態宣言が発令されます。<br>
　今、福井県でも新型コロナウイルス感染者が連続して増加する中で、県内の感染状況をみると、これまでの接客を伴う飲食店を中心とした拡がりから、会社内や同居家族へ感染が拡大した事例が発生するなど、「緊急事態宣言直前」の状況です。<br>
　ついては、県民のみなさまには、以下のことをお願いいたします。<br>
<br>
<b>・これまでの感染防止対策の徹底</b><br>
　※週末や夜間における不要不急の外出自粛、健康状態の確認、３つの「密」の徹底回避など<br>
<b>・職場における働き方の見直し</b><br>
　※計画的在宅勤務の促進など<br>
<b>・店舗等の事業者の方における感染防止対策の徹底</b><br>
　※人が集まらないよう整理券を配布するなど<br>
<b>・同居家族内における感染防止対策の徹底</b><br>
　※体調不良の家族がいる場合、生活空間や共用物の分離、トイレ等の消毒など<br>
<b>・福井に来られる方への感染防止対策の周知と徹底</b><br>
<br>
令和２年４月７日<br>
福井県知事　杉本　達治
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'

type ItemData = {
  items: Item[]
}

type Item = {
  title: string
  link: string
  body: string
}

export default Vue.extend({
  components: {
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('福井県知事からのメッセージ') as string
    }
  }
})
</script>

<style lang="scss">
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
