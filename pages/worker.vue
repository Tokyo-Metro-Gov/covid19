<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.okinawa.lg.jp/site/shoko/keiei/kinyu/singatakorona.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '「中小企業セーフティネット資金」による金融支援について【沖縄県】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症を中小企業セーフティネット資金の融資対象４の災害として認定し、新型コロナウイルス感染症で影響を受けられた事業者に対する金融支援を行います。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://www.ogb.go.jp/keisan/tyusyou/202001291000_01"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '新型コロナウイルスに関する中小企業・小規模事業者支援相談窓口【沖縄総合事務局】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスの流行により、影響を受ける、又は、その恐れがある中小企業・小規模事業者を対象として相談窓口を設置しています。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://www.ogb.go.jp/soumu/corona"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '新型コロナウイルスに関するお知らせ（相談窓口・手続き関係）【沖縄総合事務局】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '観光業者、バス・タクシー事業者、貨物運送事業者等の相談窓口設置や、自動車検査証、輸出入等の手続き関係について紹介しています。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.okinawakouko.go.jp/3748"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t('沖縄県域事業者向け融資制度等のご案内【沖縄振興開発金融公庫】')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '中小企業・小規模事業者や農林漁業者等の皆さまからのご融資やご返済に関するご相談対応に努めて参ります。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.okinawakouko.go.jp/3748"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('中小企業相談窓口【沖縄県よろず支援拠点】') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '「新型コロナウイルス支援」やその他のご相談も併せて、日曜・祝祭の窓口対応、遠隔（ネット）相談対応を強化しました'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="http://goodjob-station.okinawa/blog/%e3%80%90%e8%b6%85%e9%87%8d%e8%a6%81%e3%80%91%e9%9b%87%e7%94%a8%e8%aa%bf%e6%95%b4%e5%8a%a9%e6%88%90%e9%87%91%e3%81%ae%e7%89%b9%e4%be%8b%e6%8e%aa%e7%bd%ae%e3%81%ae%e6%8b%a1%e5%a4%a7%e3%81%ae%e8%a9%b3/"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '雇用調整助成金の特例措置の拡大の詳細【グッジョブ相談ステーション】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '4月10日以前に雇用調整助成金の特例措置の拡大に伴い、まずは今、対象となりえるのか労働局やグッジョブ相談ステーションまでお問い合わせください。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.meti.go.jp/covid-19/index.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{ $t('経済産業省の支援策') }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス（COVID-19）による企業への影響を緩和し、企業を支援するための施策をご案内します。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00007.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t('新型コロナウイルスに関するQ&A（企業の方向け）【厚生労働省】')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '感染防止に向けた柔軟な働き方、雇用調整助成金の特例措置、労働者を休ませる場合の措置（休業手当、特別休暇など）等について'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/jikan/syokubaisiki.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '働き方改革推進支援助成金（職場意識改善特例コース）【厚生労働省】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '病気休暇制度や、子どもの休校・休園 に関する特別休暇制度を整備し、その取り組みに向けた環境整備に取り組む中小企業に助成されます'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/jikan/syokubaisikitelework.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t('働き方改革推進支援助成金（テレワークコース）【厚生労働省】')
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '新型コロナウィルス感染症対策として新規でテレワークを導入する中小企業事業主を支援する特例コースを時限的に設けます。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyufukin/pageL07_00002.html"
          target="_blank"
          rel="noopener noreferrer"
          >{{
            $t(
              '小学校等の臨時休業に伴う保護者の休暇取得支援のための新たな助成金【厚生労働省】'
            )
          }}</a
        >
      </h3>
      <p>
        {{
          $t(
            '小学校等が臨時休業した場合等に、保護者である労働者の休職に伴う所得の減少に対応するため、有給の休暇を取得させた企業に対する助成金を創設'
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
