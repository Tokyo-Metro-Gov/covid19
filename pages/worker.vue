<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
    </div>
  </div>
</template>
<script lang="ts">
import TextCard from '@/components/TextCard.vue'
export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: '中小企業者等特別相談窓口',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html" target="_blank">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html</a> <br />資金繰りに関する相談、経営に関する相談（東京都産業労働局 報道発表）'
        },
        {
          title: '緊急労働相談ダイヤル',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html" target="_blank">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html</a><br />新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメントなどについての相談（東京都産業労働局　報道発表）'
        },
        {
          title: '新しいワークスタイルや企業活動の東京モデル「スムーズビズ」',
          body:
            '<a href="https://smooth-biz.metro.tokyo.lg.jp/" target="_blank">https://smooth-biz.metro.tokyo.lg.jp/</a><br />テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
        }
      ]
    }
  }
}
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
