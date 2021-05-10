<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <app-link
          to="https://covid19.supportnavi.metro.tokyo.lg.jp/"
          :icon-size="24"
          >{{ $t('東京都 新型コロナウイルス感染症 支援情報ナビ') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '東京都及び国の新型コロナウイルス感染症に関する支援策の情報をまとめています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.sangyo-rodo.metro.tokyo.lg.jp/topics/jitan/index.html"
          :icon-size="24"
          >{{ $t('東京都 感染拡大防止協力金') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染拡大防止のため、都の要請に全面的にご協力いただける事業者の皆様に対し、協力金を支給します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://smooth-biz.metro.tokyo.lg.jp/" :icon-size="24"
          >{{
            $t('新しいワークスタイルや企業活動の東京モデル「スムーズビズ」')
          }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://tokyo-telework.jp/lp/2002app/index.html"
          :icon-size="24"
          >{{ $t('TOKYOテレワークアプリ') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            'テレワークの導入・実践に必要な情報を入手できるほか、セミナー等のお申込みやサテライトオフィス等の検索など、テレワークの推進を支援する東京都公式アプリです。'
          )
        }}
      </p>
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
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
