<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <external-link
          url="https://covid19.supportnavi.metro.tokyo.lg.jp/"
          :icon-size="24"
          >{{ $t('東京都 新型コロナウイルス感染症 支援情報ナビ') }}
        </external-link>
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
        <external-link
          url="https://tokyoyachin.metro.tokyo.lg.jp"
          :icon-size="24"
          >{{ $t('東京都家賃等支援給付金') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '事業者における家賃等の負担を軽減し、事業の継続を下支えするため、国の家賃支援給付金に独自の上乗せ給付（３ヶ月分）を実施します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://smooth-biz.metro.tokyo.lg.jp/"
          :icon-size="24"
          >{{
            $t('新しいワークスタイルや企業活動の東京モデル「スムーズビズ」')
          }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
          )
        }}
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

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
