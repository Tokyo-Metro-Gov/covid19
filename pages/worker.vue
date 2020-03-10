<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <div v-for="(item, i) in items" :key="i">
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
      items: [
        {
          title: '新型コロナウイルス感染症対策緊急つなぎ資金',
          link: 'https://www.pref.aichi.jp/soshiki/kinyu/kinyu0304.html',
          body:
            '新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急つなぎ資金制度です。融資限度額は5千万円で、信用保証料を本県が全額補助します。'
        },
        {
          title:
            '新型コロナウイルス感染症対策として「テレワーク」の活用をご検討ください！',
          link: 'https://www.pref.aichi.jp/soshiki/rodofukushi/telework.html',
          body:
            '国内での新型コロナウイルス感染拡大を受け、県内企業の皆様におかれましては、在宅勤務を可能とする「テレワーク」や時差出勤の導入をご検討ください。'
        },
        {
          title: '特別労働相談窓口',
          link:
            'https://jsite.mhlw.go.jp/aichi-roudoukyoku/news_topics/2019_covid-19soudan.html?fbclid=IwAR01RhExhMRTZ0CZTdwvfDEWVf_qABG8U2-QCnkw-77u9L2SiqL3SPp3aGk',
          body:
            '新型コロナウイルス感染症に関連して、労働問題で困ったことがあれば、ご相談ください。'
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
