<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('新型コロナウイルス感染症対応についてのお願い') }}
    </page-header>
    <static-card>
      <h3>
        <app-link to="https://www.tgs.metro.tokyo.lg.jp/" :icon-size="24"
          >{{ $t('TokyoGlobalStudio') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '英語を使う楽しさを体感できる動画コンテンツを、小学生・中学生・高校生向けに順次配信しています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://tokyodouga.jp/playlist/ohayoschool.html"
          :icon-size="24"
          >{{ $t('TOKYOおはようスクール') }}
        </app-link>
      </h3>
      <p>
        {{ $t('学校休校中の子供たちの生活や学習を応援するテレビ番組です。') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.kyoiku.metro.tokyo.lg.jp/school/content/learning_support.html"
          :icon-size="24"
          >{{ $t('学びの支援サイト') }}
        </app-link>
      </h3>
      <ul>
        <li>
          {{
            $t('子供たちの学びを支援する様々なウェブサイトを紹介しています。')
          }}
        </li>
        <li>
          {{
            $t(
              '学習の基本的な内容を身に付けられる「東京・ベーシック・ドリル」や動画教材等があります。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('感染予防・健康管理') }}</h3>
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
          <app-link to="https://tokyodouga.jp/lViN9C_BS-0.html" :icon-size="16"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}
          </app-link>
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>{{ $t('各保健所にご相談ください') }}</li>
        <li>
          {{ $t('各保健所の電話番号について') }}
          <br />
          <app-link
            to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            :icon-size="16"
            >{{ $t('「新型コロナウイルス感染症にかかる相談窓口について」') }}
          </app-link>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('その他') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string,
    }
  },
})
</script>
