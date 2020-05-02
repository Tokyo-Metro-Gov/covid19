<template>
  <div class="Parent">
    <page-header class="mb-3">
      <t-i18n>{{
        $t('臨時休校中の新型コロナウイルス感染症対応についてのお願い')
      }}</t-i18n>
    </page-header>
    <static-card>
      <h3>
        <external-link
          url="https://www.kyoiku.metro.tokyo.lg.jp/school/content/learning_support.html"
          :icon-size="24"
          ><t-i18n>{{ $t('学びの支援サイト') }}</t-i18n>
        </external-link>
      </h3>
      <ul>
        <li>
          <t-i18n>
            {{
              $t(
                '臨時休業期間における子供たちの学びを支援する様々なウェブサイトを紹介しています。'
              )
            }}
          </t-i18n>
        </li>
        <li>
          <t-i18n>
            {{
              $t(
                '学習の基本的な内容を身に付けられる「東京・ベーシック・ドリル」や動画教材等があります。'
              )
            }}
          </t-i18n>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>
        <t-i18n>{{ $t('感染予防・健康管理') }}</t-i18n>
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
          <external-link
            url="https://tokyodouga.jp/lViN9C_BS-0.html"
            :icon-size="16"
            ><t-i18n>{{
              $t('【参考】感染症予防のための正しい手洗い方法（動画）')
            }}</t-i18n>
          </external-link>
        </li>
        <li>
          <t-i18n>{{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}</t-i18n>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>
        <t-i18n>{{ $t('感染症を疑う場合の対応') }}</t-i18n>
      </h3>
      <ul>
        <li>
          <t-i18n>{{ $t('各保健所にご相談ください') }}</t-i18n>
        </li>
        <li>
          <t-i18n>{{ $t('各保健所の電話番号について') }}</t-i18n>
          <br />
          <external-link
            url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            :icon-size="16"
            ><t-i18n>{{
              $t('「新型コロナウイルス感染症にかかる相談窓口について」')
            }}</t-i18n>
          </external-link>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>
        <t-i18n>{{ $t('その他.parent') }}</t-i18n>
      </h3>
      <p>
        <t-i18n>{{
          $t('詳細は、各学校からのお知らせ等をご確認ください。')
        }}</t-i18n>
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import TI18n from '@/components/TI18n.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink,
    TI18n
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>
