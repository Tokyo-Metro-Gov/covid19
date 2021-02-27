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
          to="https://jitan.metro.tokyo.lg.jp/dec/index.html"
          :icon-size="24"
          >{{ $t('営業時間短縮に係る感染拡大防止協力金（12/18～1/7実施分）') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染拡大防止のため、特別区及び多摩地域の各市町村の飲食店等に営業時間の短縮要請が行われることに伴い、要請に全面的にご協力いただいた中小の事業者の皆様に対し、協力金を支給します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://jitan.metro.tokyo.lg.jp/jan/index.html"
          :icon-size="24"
          >{{ $t('営業時間短縮に係る感染拡大防止協力金（1/8～2/7実施分）') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染拡大防止のため、緊急事態宣言が発令され、営業時間短縮が強化されることに伴い、要請に全面的にご協力いただける飲食事業者等に対し、新たに協力金を支給いたします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link
          to="https://www.sangyo-rodo.metro.tokyo.lg.jp/attention/2021/0205_14245.html"
          :icon-size="24"
          >{{ $t('営業時間短縮に係る感染拡大防止協力金（2/8～3/7実施分）') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染拡大防止のため、緊急事態宣言が延長され、引き続き、営業時間の短縮が要請されることに伴い、要請に全面的にご協力いただける飲食事業者等に対し、新たに協力金を支給いたします。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link to="https://tokyoyachin.metro.tokyo.lg.jp" :icon-size="24"
          >{{ $t('東京都家賃等支援給付金') }}
        </app-link>
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
