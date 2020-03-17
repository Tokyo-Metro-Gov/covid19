<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </h2>
    <StaticCard>
      <h3>
        <a
          href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/03/05/26.html"
          target="_blank"
          rel="noopener"
          >{{ $t('新型コロナウイルス感染症対応緊急融資') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急融資制度です。融資限度額は2億8千万円で、信用保証料を都が全額補助します。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.tokyo-kosha.or.jp/topics/2003/0001.html"
          target="_blank"
          rel="noopener"
          >{{ $t('新型コロナウイルスによる経営課題に関する専門家派遣') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症により経営面の影響を受けている中小企業を対象に、中小企業診断士等の専門家を無料で派遣し、経営改善等に向けたアドバイスを実施します（1社あたり4回まで・無料）。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.shigotozaidan.or.jp/koyo-kankyo/joseikin/kinkyutaisaku.html"
          target="_blank"
          rel="noopener"
          >{{ $t('事業継続緊急対策（テレワーク）助成金') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '都内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します（限度額250万円、助成率10/10）。ぜひご活用ください。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html"
          target="_blank"
          rel="noopener"
          >{{ $t('中小企業者等特別相談窓口') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '資金繰りに関する相談、経営に関する相談（東京都産業労働局 報道発表）'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html"
          target="_blank"
          rel="noopener"
          >{{ $t('緊急労働相談ダイヤル') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメントなどについての相談（東京都産業労働局 報道発表）'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://smooth-biz.metro.tokyo.lg.jp/"
          target="_blank"
          rel="noopener"
          >{{
            $t('新しいワークスタイルや企業活動の東京モデル「スムーズビズ」')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
          )
        }}
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
  head: (): MetaInfo => ({
    title: '企業の皆様・はたらく皆様へ'
  })
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
