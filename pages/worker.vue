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
          title: '新型コロナウイルス感染症対応緊急融資',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html" target="_blank" rel="noopener">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html</a><br />新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急融資制度です。'
        },
        {
          title: '新型コロナウイルスによる経営課題に関する専門家派遣',
          body:
            '<a href="https://www.tokyo-kosha.or.jp/topics/2003/0001.html" target="_blank" rel="noopener">https://www.tokyo-kosha.or.jp/topics/2003/0001.html</a><br />新型コロナウイルス感染症により経営面の影響を受けている中小企業を対象に、中小企業診断士等の専門家を無料で派遣し、経営改善等に向けたアドバイスを実施します。'
        },
        {
          title: '事業継続緊急対策（テレワーク）助成金',
          body:
            '<a href="https://www.shigotozaidan.or.jp/koyo-kankyo/" target="_blank" rel="noopener">https://www.shigotozaidan.or.jp/koyo-kankyo/</a><br />都内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します。'
        },
        {
          title: '新型コロナウイルス感染症対応緊急融資',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html" target="_blank" rel="noopener">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html</a><br />新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急融資制度です。'
        },
        {
          title: '新型コロナウイルスによる経営課題に関する専門家派遣',
          body:
            '<a href="https://www.tokyo-kosha.or.jp/topics/2003/0001.html" target="_blank" rel="noopener">https://www.tokyo-kosha.or.jp/topics/2003/0001.html</a><br />新型コロナウイルス感染症により経営面の影響を受けている中小企業を対象に、中小企業診断士等の専門家を無料で派遣し、経営改善等に向けたアドバイスを実施します。'
        },
        {
          title: '事業継続緊急対策（テレワーク）助成金',
          body:
            '<a href="https://www.shigotozaidan.or.jp/koyo-kankyo/" target="_blank" rel="noopener">https://www.shigotozaidan.or.jp/koyo-kankyo/</a><br />都内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します。'
        },
        {
          title: '中小企業者等特別相談窓口',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html" target="_blank" rel="noopener">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html</a> <br />資金繰りに関する相談、経営に関する相談（東京都産業労働局　報道発表）'
        },
        {
          title: '緊急労働相談ダイヤル',
          body:
            '<a href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html" target="_blank" rel="noopener">https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html</a><br />新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメントなどについての相談（東京都産業労働局　報道発表）'
        },
        {
          title: '新しいワークスタイルや企業活動の東京モデル「スムーズビズ」',
          body:
            '<a href="https://smooth-biz.metro.tokyo.lg.jp/" target="_blank" rel="noopener">https://smooth-biz.metro.tokyo.lg.jp/</a><br />テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
        }
      ]
    }
  },
  head() {
    return {
      title: '企業の皆様・はたらく皆様へ'
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
a {
  @include text-link();
}
</style>
