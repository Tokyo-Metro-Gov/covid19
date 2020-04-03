<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard
        :title="$t(item.title)"
        :link="item.link"
        :body="$t(item.body)"
      />
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
          title: '経済産業省の支援策',
          link: 'https://www.meti.go.jp/covid-19/',
          body: '新型コロナウイルス感染症関連'
        },
        {
          title: '新潟県の「中小企業金融相談窓口」',
          link:
            'https://www.pref.niigata.lg.jp/site/sogyo/madoguchi-kinyuu.html',
          body:
            '新型コロナウイルスの感染拡大により経営への影響を受けた中小企業者等の資金相談を受け付けています'
        },
        {
          title: '新型コロナウイルスによる経営課題に関する緊急支援',
          link: 'https://www.pref.niigata.lg.jp/site/sogyo/yuushi-corona.html',
          body:
            '新型コロナウイルス感染症により影響を受けている中小企業者に対し緊急金融支援を実施します'
        },
        {
          title: '新型コロナウイルス感染症への対応について（事業者の皆様へ）',
          link:
            'https://www.city.niigata.lg.jp/business/shoko/jigyousha_covid19/oshirase.html',
          body: '新潟市より引用'
        },
        {
          title: '新潟県信用保証協会',
          link: 'http://www.niigata-cgc.or.jp/cat/topics',
          body: '新潟県信用保証協会のトピックス一覧'
        },
        {
          title: '新型コロナウイルス感染症に関連する人権への配慮について',
          link:
            'https://www.pref.niigata.lg.jp/sec/fukushihoken/9837569812.html',
          body: '新型コロナウイルス感染症に関連する人権への配慮'
        },
        {
          title: '新型コロナウイルス感染症　啓発コマーシャル',
          link:
            'https://www.pref.niigata.lg.jp/sec/kouhou/shingata-corona-cm.html',
          body:
            '疑わしい情報の注意喚起及び及び相談窓口・コールセンターのご案内(15秒)'
        },
        {
          title:
            'テレワークに関する助成、補助（一般社団法人　日本テレワーク協会）',
          link: 'https://japan-telework.or.jp/tw_about-2/subsidy/',
          body:
            '助成や補助の実施期間や申請締め切りについては各事業ページでご確認ください。'
        },
        {
          title: 'テレワークに関する助成、補助（厚生労働省）',
          link:
            'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/jikan/syokubaisiki.html',
          body: '時間外労働等改善助成金（職場意識改善特例コース）'
        }
        /*        {
          title: '中小企業者等特別相談窓口',
          link:
            'https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/01/30/15.html',
          body:
            '資金繰りに関する相談、経営に関する相談（東京都産業労働局 報道発表）'
        },
        {
          title: '緊急労働相談ダイヤル',
          link:
            'https://www.metro.tokyo.lg.jp/tosei/hodohappyo/press/2020/02/26/22.html',
          body:
            '新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメントなどについての相談（東京都産業労働局 報道発表）'
        },
        {
          title: '新しいワークスタイルや企業活動の東京モデル「スムーズビズ」',
          link: 'https://smooth-biz.metro.tokyo.lg.jp/',
          body:
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
        } */
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
</style>
