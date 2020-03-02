<template>
  <div class="About">
    <h1 class="About-Heading">
      このサイトについて
    </h1>
    <div v-for="(item, i) in items" :key="i">
      <TextCard :title="item.title" :body="item.body" />
    </div>
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  data() {
    return {
      items: [
        {
          body:
            'このサイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、東京都が開設したものです。<br /> <br />東京都による公式情報と客観的な数値をわかりやすく伝えることで、東京都にお住まいの方や、東京都内に拠点を持つ企業の方、東京都を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。'
        },
        {
          title: 'ブラウザ環境について',
          body:
            '本サイトは以下の環境でご覧いただくことを推奨いたします。<br /> <br />Microsoft Edge 最新版<br />Mozilla Firefox 最新版<br />Google Chrome 最新版 (Windows10以上)<br />Apple Safari (OS X) 最新版<br />Opera Software ASA Opera 最新版<br /> <br />※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。'
        },
        {
          title: '当Webサイトへのリンクについて',
          body: '当Webサイトへのリンクは自由です。'
        },
        {
          title: 'JavaScriptについて',
          body:
            '当WebサイトではJavaScriptを使用しております。<br />JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。<br />当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。'
        },
        {
          title: 'クッキー (Cookie) について',
          body:
            '当Webサイトの一部ではクッキーを使用しています。<br />クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当Webサイトでは利用状況の把握のためにクッキーを使用する場合があります。<br /> <br />ブラウザに関する情報の収集を希望しない場合は、インターネット閲覧ソフト（ブラウザ）をご自身で設定することにより、クッキーの機能が働かないようにすることも可能です。<br /> <br />ただし、クッキーを受け入れない設定をされている場合は、本サイトの機能が正常に動作しない場合がございます。'
        },
        {
          title: '免責事項',
          body:
            '当サイトに掲載されている情報の正確性については万全を期していますが、東京都は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。<br /> <br />また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。<br /> <br />当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。'
        },
        {
          title: 'データについて',
          body:
            '本サイトで公表しているデータは、東京都オープンデータサイト(準備中)より誰でも自由にダウンロードが可能です。'
        },
        {
          title: 'ソースコードについて',
          body:
            '本サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。詳しくは、<a href="https://github.com/tokyo-metropolitan-gov/covid19/" target="_blank">GitHub リポジトリ</a> をご確認ください。'
        },
        {
          title: 'お問い合わせ先',
          body: '東京都生活文化局広報広聴部広報課<br />電話　03-5388-3085'
        }
      ]
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
}
</style>
