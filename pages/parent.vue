<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      臨時休校中の新型コロナウイルス感染症対応についてのお願い
    </h2>
    <StaticCard>
      <h3>感染予防・健康管理</h3>
      <ul>
        <li>
          まずは手洗いが大切です。外出先からの帰宅時や調理の前後、食事前などにこまめに石けんやアルコール消毒液などで手を洗いましょう。<br />
          <a
            href="https://www.youtube.com/watch?v=6285_6IyO1M&feature=youtu.be"
            target="_blank"
            rel="noopener"
            >【参考】感染症予防のための正しい手洗い方法（動画）<v-icon
              aria-label="別タブで開く"
              role="img"
              :aria-hidden="false"
            >
              mdi-open-in-new
            </v-icon></a
          >
        </li>
        <li>
          規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。
        </li>
        <li>
          小児については、現時点で重症化しやすいとの報告はなく、新型コロナウイルス感染症については目安どおりの対応をお願いします。
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>感染症を疑う場合の対応</h3>
      <ul>
        <li>
          風邪の症状や、37.5度以上の発熱が４日以上続いている、強いだるさ（倦怠感）、息苦しさ（呼吸困難）がある場合は、各保健所にご相談ください。<br />
          <a
            href="https://www.pref.chiba.lg.jp/kenfuku/kansenshou/corona-soudan.html"
            target="_blank"
            rel="noopener"
            >「電話相談窓口について｜新型コロナウイルス感染症」<v-icon
              aria-label="別タブで開く"
              role="img"
              :aria-hidden="false"
            >
              mdi-open-in-new
            </v-icon></a
          >
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>その他</h3>
      <p>
        詳細は、各学校からのお知らせ等をご確認ください。 <br /><a
          href="https://www.pref.chiba.lg.jp/kouhou/homepage/2019/kyo-index.html"
          target="_blank"
          rel="noopener"
          >「教育に関する情報｜新型コロナウイルス感染症」<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </p>
    </StaticCard>
  </div>
</template>
<script lang="ts">
import StaticCard from '@/components/StaticCard.vue'
export default {
  components: {
    StaticCard
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
</style>
