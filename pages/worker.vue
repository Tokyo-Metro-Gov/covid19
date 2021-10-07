<template>
  <div class="Worker">
    <page-header :title="$t('企業の皆様・はたらく皆様へ')" />
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
            '新型コロナウイルス感染症の感染拡大防止を図るため、テレワーク、時差出勤等の一層の推進にご協力をお願いいたします。'
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
import type { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

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
