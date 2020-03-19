<template>
  <div class="About">
    <h2 class="About-Heading">
      {{ $t('当サイトについて') }}
    </h2>
    <StaticCard>
    当サイトは、福井県内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために作成されました。<br>
    開発は、丹南ケーブルテレビ株式会社メディア戦略室が行っています。<br>
    複製・改変が許されたオープンソースライセンスで公開されている、東京都公式新型コロナウイルス対策サイトの仕組みを利用しています。<br>
    福井県による公式情報と客観的な数値をわかりやすく伝えることで、福井県にお住まいの方や、福井県内に拠点を持つ企業の方、福井県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。<br>
    紹介などにこちらのページをぜひご利用ください。<br>
    複製・配布は自由です。ご自由にコピーまたはプリントアウトしてご利用ください。
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('ブラウザ環境について') }}</h2>
      <p>
        {{ $t('当サイトは以下の環境でご覧いただくことを推奨いたします。') }}
      </p>
      <ul>
        <li>{{ $t('Microsoft Edge 最新版') }}</li>
        <li>{{ $t('Mozilla Firefox 最新版') }}</li>
        <li>{{ $t('Google Chrome 最新版（Windows 10以上）') }}</li>
        <li>{{ $t('Apple Safari (macOS) 最新版') }}</li>
        <li>{{ $t('Opera Software ASA Opera 最新版') }}</li>
      </ul>
      <p class="StaticCard-Note">
        <span>{{ $t('※') }}</span>
        <span>
          {{
            $t(
              '※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
            )
          }}
        </span>
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('当サイトへのリンクについて') }}</h2>
      <p>{{ $t('当サイトへのリンクは自由です。') }}</p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('JavaScriptについて') }}</h2>
      <p>
        {{ $t('当サイトではJavaScriptを使用しております。') }}<br />
        {{
          $t(
            'JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。'
          )
        }}<br />
        {{
          $t(
            '当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('クッキー (Cookie) について') }}</h2>
      <p>
        {{ $t('当サイトの一部ではクッキーを使用しています。') }}<br />
        {{
          $t(
            'クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。'
          )
        }}<br />
      </p>
      <p>
        {{
          $t(
            'ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('Google Analyticsの利用について') }}</h2>
      <p>
        {{
          $t(
            '当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。'
          )
        }}<br />
        {{
          $t(
            'Google Analyticsは、当サイトが発行するクッキー (Cookie) を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー (Cookie) の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。'
          )
        }}<br />
        {{
          $t(
            '取得したデータは Webサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。'
          )
        }}<br />
        {{
          $t(
            'Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。'
          )
        }}
      </p>
      <ul>
        <li>
          <a
            :href="
              $t(
                'https://marketingplatform.google.com/about/analytics/terms/jp/'
              )
            "
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analytics利用規約') }}
          </a>
        </li>
        <li>
          <a
            :href="$t('https://policies.google.com/privacy?hl=ja')"
            target="_blank"
            rel="noopener"
          >
            {{ $t('Googleのプライバシーポリシー') }}
          </a>
        </li>
        <li>
          <a
            :href="
              $t('https://support.google.com/analytics/answer/6004245?hl=ja')
            "
            target="_blank"
            rel="noopener"
          >
            {{ $t('Google Analyticsに関する詳細情報') }}
          </a>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('免責事項') }}</h2>
      当サイトに掲載されている情報については、福井県の「新型コロナウイルス感染症について」（<a href="https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html" target="_blank">https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html</a>）から取得したデータですが、福井県、当サイトの開発者・関係者は、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。<br>
      また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。<br>
      当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
    </StaticCard>
    <StaticCard>
      <h2>{{ $t('データについて') }}</h2>
      本サイトで公表しているデータは、福井県のホームページに掲載されているものです。<br>
      <a href="https://www.pref.fukui.lg.jp/doc/kenkou/kansensyo-yobousessyu/corona.html" target="_blank">福井県ホームページ（新型コロナウイルス感染症について）</a>
    </StaticCard>
    <StaticCard>
      <h2>お問い合わせ先</h2>
      丹南ケーブルテレビ株式会社　メディア戦略室<br>
    （お問い合わせ受付　平日：09:00～18:00）<br>
      <a href="https://fukui.bosai-signal.jp/#/contact" target="_blank">お問合せフォームはこちら</a>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('当サイトについて') as string
    }
  }
})
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
