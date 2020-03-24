<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      臨時休校中の新型コロナウイルス感染症対応についてのお願い
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
          title: '1 感染予防・健康管理',
          body:
            '〇　まずは手洗いが大切です。外出先からの帰宅時や調理の前後、食事前などにこまめに石けんやアルコール消毒液などで手を洗いましょう。<br />　<a href="https://www.youtube.com/watch?v=6285_6IyO1M&feature=youtu.be" target="_blank" rel="noopener">【参考】感染症予防のための正しい手洗い方法（動画）</a> <br />〇　規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。<br />〇　小児については、現時点で重症化しやすいとの報告はなく、新型コロナウイルス感染症については目安どおりの対応をお願いします。'
        },
        {
          title: '2 感染症を疑う場合の対応',
          body:
            '〇　風邪の症状や、37.5度以上の発熱が４日以上続いている、強いだるさ（倦怠感）、息苦しさ（呼吸困難）がある場合は、各保健所にご相談ください。<br />〇  「電話相談窓口について｜新型コロナウイルス感染症」<br /><a href="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html" target="_blank" rel="noopener">https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html</a>'
        },
        {
          title: '3 その他',
          body:
            '〇  詳細は、各学校からのお知らせ等をご確認ください。<br />〇  「教育に関する情報｜新型コロナウイルス感染症」<br /><a href="https://www.pref.chiba.lg.jp/kouhou/homepage/2019/kyo-index.html" target="_blank" rel="noopener">https://www.pref.chiba.lg.jp/kouhou/homepage/2019/kyo-index.html</a>'
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
<style lang="scss" scoped>
.Parent {
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
