<template>
  <div class="Parent">
    <h2 class="Parent-Heading">
      {{ $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い') }}
    </h2>
    <StaticCard>
      <h3>1. {{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}<br />
          <a
            href="https://tokyodouga.jp/lViN9C_BS-0.html"
            target="_blank"
            rel="noopener"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}</a
          >
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>2. {{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各保健所にご相談ください') }}</li>
        <li>
          {{ $t('「新型コロナウイルス感染症にかかる相談窓口について」') }}<br />
          <a
            href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            target="_blank"
            rel="noopener"
            >https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html</a
          >
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>3. {{ $t('その他') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
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
  body: string
}

export default Vue.extend({
  components: {
    StaticCard
  },
  head: (): MetaInfo => ({
    title: 'お子様をお持ちの皆様へ'
  })
})
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
