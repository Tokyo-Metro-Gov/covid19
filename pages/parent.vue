<template>
  <div class="Parent">
    <page-header class="mb-3">
      <t-i18n>{{
        $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い')
      }}</t-i18n>
    </page-header>
    <StaticCard>
      <h3>
        1. <t-i18n>{{ $t('感染予防・健康管理') }}</t-i18n>
      </h3>
      <ul>
        <li>
          <t-i18n>{{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}</t-i18n>
        </li>
        <li>
          <t-i18n>{{
            $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}</t-i18n
          ><br />
          <a
            href="https://tokyodouga.jp/lViN9C_BS-0.html"
            target="_blank"
            rel="noopener noreferrer"
            ><t-i18n>{{
              $t('【参考】感染症予防のための正しい手洗い方法（動画）')
            }}</t-i18n></a
          >
        </li>
        <li>
          <t-i18n>{{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}</t-i18n>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>
        2. <t-i18n>{{ $t('感染症を疑う場合の対応') }}</t-i18n>
      </h3>
      <ul>
        <li>
          <t-i18n>{{ $t('各保健所にご相談ください') }}</t-i18n>
        </li>
        <li>
          <t-i18n>{{ $t('各保健所の電話番号について') }}</t-i18n>
          <br />
          <a
            href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            target="_blank"
            rel="noopener noreferrer"
            ><t-i18n>{{
              $t('「新型コロナウイルス感染症にかかる相談窓口について」')
            }}</t-i18n></a
          >
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>
        3. <t-i18n>{{ $t('その他.parent') }}</t-i18n>
      </h3>
      <p>
        <t-i18n>{{
          $t('詳細は、各学校からのお知らせ等をご確認ください。')
        }}</t-i18n>
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import TI18n from '@/components/TI18n.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    TI18n
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>
