<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
    </div>
  </div>
</template>

<i18n src="./parent.i18n.json"></i18n>

<script>
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          title: `1. ${this.$t('感染予防・健康管理')}`,
          body: [
            this.$t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            ),
            this.$t('手洗い、咳エチケット等により、感染予防に努めてください。'),
            '<a href="https://www.pref.yamaguchi.lg.jp/cmsdata/1/4/2/142f5b06182fae366ce6e7bb2bf3d871.pdf" target="_blank" rel="noopener">' +
              this.$t('【参考】「基本は手洗い。」リーフレット (PDF : 696KB)') +
              '</a>',
            this.$t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          ].join('<br />')
        },
        {
          title: `2. ${this.$t('感染症を疑う場合の対応')}`,
          body: [
            this.$t('各保健所にご相談ください'),
            this.$t(
              '「新型コロナウイルスに関連する各種相談窓口について」（山口県広報広聴課）'
            ),
            '<a href="https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html" target="_blank" rel="noopener">https://www.pref.yamaguchi.lg.jp/cms/a11000/sodan/koronasoudan.html</a>'
          ].join('<br />')
        },
        {
          title: `3. ${this.$t('その他')}`,
          body: this.$t('詳細は、各学校からのお知らせ等をご確認ください。')
        }
      ]
    }
  },
  head() {
    return {
      title: 'お子様をお持ちの皆様へ'
    }
  }
}
</script>

<style lang="scss">
.Parent {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
