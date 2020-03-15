<template>
  <div class="About">
    <h2 class="About-Heading">
      当サイトについて
    </h2>
    <TextCard>
      <p>
        当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、
        <a href="https://www.code4chiba.org/" target="_blank" rel="noopener">
          NPO法人Code for Chiba
        </a>
        が開設したものです。
      </p>
      <p>
        千葉市による公式情報と客観的な数値をわかりやすく伝えることで、千葉市にお住まいの方や、千葉市内に拠点を持つ企業の方、千葉市を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。
      </p>
    </TextCard>
    <TextCard title="ブラウザ環境について">
      <p>
        当サイトは以下の環境でご覧いただくことを推奨いたします。
      </p>
      <ul class="About-Browser-List">
        <li>Microsoft Edge 最新版</li>
        <li>Mozilla Firefox 最新版</li>
        <li>Google Chrome 最新版 (Windows 10以上)</li>
        <li>Safari (macOS) 最新版</li>
        <li>Opera 最新版</li>
      </ul>
      <p>
        ※
        推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。
      </p>
    </TextCard>
    <TextCard title="当サイトへのリンクについて">
      <p>
        当サイトへのリンクは自由です。
      </p>
    </TextCard>
    <TextCard title="JavaScriptについて">
      <p>
        当サイトではJavaScriptを使用しております。JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。
      </p>
      <p>
        当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。
      </p>
    </TextCard>
    <TextCard title="クッキー (Cookie) について">
      <p>
        当サイトの一部ではクッキーを使用しています。
        クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。
      </p>
      <p>
        ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。
        ただし、クッキーを受け入れない設定をされている場合は、当サイトの機能が正常に動作しない場合がございます。
      </p>
    </TextCard>
    <TextCard title="Google Analyticsの利用について">
      <p>
        当サイトでは、サービス向上やWebサイトの改善のためにGoogle
        LLCの提供するアクセス分析のツールであるGoogle
        Analyticsを利用した計測を行っております。
      </p>
      <p>
        Google
        Analyticsは、当サイトが発行するクッキー(Cookie)を利用して、個人を特定する情報を含まずにWebサイトの利用データ（アクセス状況、トラフィック、閲覧環境など）を収集しております。クッキー(Cookie)の利用に関してはGoogleのプライバシーポリシーと規約に基づいております。<br />取得したデータはWebサイト利用状況の分析、サイト運営者へのレポートの作成、その他のサービスの提供に関わる目的に限り、これを使用します。
      </p>
      <p>
        Google
        Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google
        Analyticsのサイトをご覧ください。
      </p>
      <ul>
        <li>
          <a
            href="https://marketingplatform.google.com/about/analytics/terms/jp"
            target="_blank"
            rel="noopener"
          >
            Google Analytics利用規約
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/privacy?hl=ja"
            target="_blank"
            rel="noopener"
          >
            Googleのプライバシーポリシー
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener"
          >
            Google Analyticsに関する詳細情報
          </a>
        </li>
      </ul>
    </TextCard>
    <TextCard title="免責事項">
      <p>
        当サイトに掲載されている情報の正確性については万全を期していますが、NPO法人Code
        for Chiba
        は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。
      </p>
      <p>
        また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。
      </p>
      <p>
        当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。
      </p>
    </TextCard>
    <TextCard title="データについて">
      <p>
        本サイトで公表しているデータは、
        <a
          href="https://www.city.chiba.jp/opendata/index.php"
          target="_blank"
          rel="noopener"
        >
          千葉市オープンデータカタログサイト
        </a>
        より誰でも自由にダウンロードが可能です（データは順次追加予定です）。
      </p>
    </TextCard>
    <TextCard title="ソースコードについて">
      <p>
        本サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。詳しくは、
        <a
          href="https://github.com/codeforchiba/covid19"
          target="_blank"
          rel="noopener"
        >
          GitHub リポジトリ
        </a>
        をご確認ください。
      </p>
      <p>
        また、当サイトは東京都の公開するサイトをフォークして作られています。詳しくは、東京都の公開する
        <a
          href="https://github.com/codeforchiba/covid19"
          target="_blank"
          rel="noopener"
        >
          GitHub リポジトリ
        </a>
        をご覧ください。東京都のサイトを作成するすべての皆様に感謝します。
      </p>
    </TextCard>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: '当サイトについて'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}

a {
  @include text-link();
}
</style>
