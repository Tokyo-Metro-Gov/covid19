<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <h3>要請・お知らせ</h3>
    <div v-for="(item, i) in request_notice_items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
    </div>
    <h3>相談窓口</h3>
    <div v-for="(item, i) in consultation_desk_items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
    </div>
    <h3>金融支援</h3>
    <div v-for="(item, i) in financial_support_items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
    </div>
    <h3>テレワーク</h3>
    <div v-for="(item, i) in telework_items" :key="i">
      <TextCard :title="item.title" :link="item.link" :body="item.body" />
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
      request_notice_items: [
        {
          title:
            '職場における新型コロナウイルス感染症の拡大防止に向けた取り組みについて（厚生労働省）',
          link: 'https://www.mhlw.go.jp/stf/newpage_09671.html',
          body:
            '厚生労働省では、このたび別添の通り、一般社団法人日本経済団体連合会、日本商工会議所、全国商工会連合会、全国中小企業団体中央会といった経済団体へ、職場における新型コロナウイルス感染症の拡大防止に向けた取り組みについて要請を行います。'
        },
        {
          title: '新型コロナウイルスに関するQ&A（企業の方向け）（厚生労働省）',
          link:
            'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/dengue_fever_qa_00007.html',
          body: '新型コロナウイルスに関するQ&A（企業の方向け）'
        }
      ],
      consultation_desk_items: [
        {
          title: '新型コロナウイルスに関する中小企業者等相談窓口を設置します',
          link:
            'https://www.pref.chiba.lg.jp/keisei/singata-koronauirusu-kigyousoudan.html',
          body:
            '千葉県は、今般の新型コロナウイルスの流行により、事業活動に影響を受ける、または、その恐れがある中小企業者等を支援するため、相談窓口を設置します。'
        },
        {
          title:
            '新型コロナウイルスに関する中小企業・小規模事業者支援として相談窓口を開設します（経済産業省）',
          link:
            'https://www.meti.go.jp/press/2019/01/20200129007/20200129007.html',
          body: '金融に関する相談、経営に関する相談を受け付けます。'
        },
        {
          title:
            '新型コロナウイルス関連相談窓口 （日本貿易振興機構（ジェトロ））',
          link: 'https://www.jetro.go.jp/world/covid-19.html',
          body:
            'その他の相談に関しても、関東経済産業局、県内各商工会議所及び商工会連合会、日本政策金融公庫、千葉県信用保証協会等においても、経営相談に応じております。'
        }
      ],
      financial_support_items: [
        {
          title:
            '新型コロナウイルスの影響を受けた中小企業者に対する金融支援について（令和2年3月13日）',
          link: 'https://www.pref.chiba.lg.jp/keishi/ncov/colona4.html',
          body:
            '新型コロナウイルスの影響により、売上高が急減している中小企業・小規模企業者が利用可能な融資制度です。'
        },
        {
          title:
            '新型コロナウイルス感染症に係る中小企業者対策を講じます（セーフティネット保証4号の指定）',
          link:
            'https://www.meti.go.jp/press/2019/02/20200228001/20200228001.html',
          body: '資金使途は運転資金及び設備資金です。'
        }
      ],
      telework_items: [
        {
          title: '新しいワークスタイルや企業活動の東京モデル「スムーズビズ」',
          link: 'https://smooth-biz.metro.tokyo.lg.jp/',
          body:
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
        },
        {
          title: '時間外労働等改善助成金（テレワークコース）',
          link:
            'https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/roudoukijun/jikan/syokubaisikitelework.html',
          body:
            '「時間外労働等改善助成金」（※令和２年４月１日以降は「働き方改革推進支援助成金」に名称変更予定）に新型コロナウイルス感染症対策を目的とした取組を行う事業主を支援する特例コースを時限的に設けます。'
        },
        {
          title: 'テレワーク導入に係る相談（テレワーク総合ポータルサイト）',
          link: 'https://telework.mhlw.go.jp/',
          body: ''
        },
        {
          title:
            '新型コロナウイルス感染症に係る時間外労働等改善助成金（テレワークコース、職場意識改善コース）の特例について（厚生労働省）',
          link: 'https://www.mhlw.go.jp/stf/newpage_09869.html',
          body:
            '対象事業主は、新型コロナウイルス感染症対策としてテレワークを新規（※）で導入する中小企業事業主です。(※試行的に導入している事業主も対象となります)'
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
