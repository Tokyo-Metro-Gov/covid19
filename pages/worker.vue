<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="http://www.sangyo-rodo.metro.tokyo.jp/chushou/kinyu/yuushi/yuushi/new"
          target="_blank"
          rel="noopener"
          >{{ $t('新型コロナウイルス感染症に対応した制度融資') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '感染症により事業活動に影響を受けている中小企業等を対象とした制度融資（「緊急融資」、「緊急借換」、「危機対応融資」）です。いずれも融資限度額は2億8千万円で、信用保証料を都が補助します。'
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
          href="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          target="_blank"
          rel="noopener"
          >{{ $t('中小企業従業員融資') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '感染症等の影響による休業での収入減等に備え、中小企業の従業員向けに実質無利子の融資を行います（融資限度額100万円）。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          target="_blank"
          rel="noopener"
          >{{
            $t('新型コロナウイルス感染症に係る休業等支援事業（専門家派遣）')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '感染症の拡大を理由とする従業員の休業等にあたり、国の雇用調整助成金の特例措置等を利用する中小企業等を対象に、社会保険労務士派遣による相談助言を行います（1社5回まで。無料）。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          target="_blank"
          rel="noopener"
          >{{ $t('新型コロナウイルス感染症対策雇用環境整備促進事業') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '感染症の拡大を理由として、国の雇用調整助成金等を活用し、非常時における勤務体制づくりなど職場環境整備に取り組む県内中小企業に奨励金を支給します（1事業所10万円）。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          target="_blank"
          rel="noopener"
          >{{ $t('テレワーク導入モデル体験事業') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            'テレワーク導入を検討している中堅・中小企業等を対象に、テレワークを体験できる端末やツールを無償貸与することにより、テレワークのメリット・効果を体感できる機会を提供します。'
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
            '県内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します（限度額250万円、助成率10/10）。ぜひご活用ください。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a href="https://tokyo-telework.jp/" target="_blank" rel="noopener">{{
          $t('テレワークオンラインセミナー開催')
        }}</a>
      </h3>
      <p>
        {{
          $t(
            '経済団体と連携したテレワーク導入のきっかけづくりのためのオンラインセミナーを開催します。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://www.sangyo-rodo.metro.tokyo.jp/attention/2020/0305_13201.html"
          target="_blank"
          rel="noopener"
          >{{ $t('中小企業者等特別相談窓口') }}</a
        >
      </h3>
      <p>
        {{ $t('資金繰りに関する相談、経営に関する相談') }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://www.sangyo-rodo.metro.tokyo.jp/attention/2020/0305_13201.html"
          target="_blank"
          rel="noopener"
          >{{ $t('フリーランスを含む個人事業主特別相談窓口') }}</a
        >
      </h3>
      <p>
        {{
          $t('資金繰りに関する相談、経営に関する相談（契約におけるトラブル等）')
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.hataraku.metro.tokyo.lg.jp/sodan/sodan/index.html"
          target="_blank"
          rel="noopener"
          >{{ $t('緊急労働相談ダイヤル') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメント、内定取り消しなどについての相談'
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
            $t('新しいワークスタイルや企業活動の青森モデル「スムーズビズ」')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、青森2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
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
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
