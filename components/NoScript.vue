<template>
  <!-- eslint-disable vue/html-indent -->
  <noscript inline-template>
    <div class="noscript">
      <style>
        .loader {
          display: none;
        }
      </style>
      <div class="noscript-heading">
        <img src="/logo.svg" :alt="$t('山口県')" />
        {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト') }}
      </div>
      <div class="noscript-body">
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
      </div>
    </div>
  </noscript>
  <!--eslint-enable-->
</template>

<i18n>
{
  "ja": {
    "山口県": "山口県",
    "新型コロナウイルス感染症": "新型コロナウイルス感染症",
    "対策サイト": "対策サイト",
    "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"
  },
  "en": {
    "東京都": "Yamaguchi Metropolitan Government",
    "新型コロナウイルス感染症": "COVID-19",
    "対策サイト": "Task Force website",
    "当WebサイトではJavaScriptを使用しております。JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "This site uses Javascript. If Javascript is disabled, the site may not work as expected or may not display correctly. Please make sure to enable Javascript when browsing this site."
  },
  "zh-cn": {
    "東京都": "東京都",
    "新型コロナウイルス感染症": "新型冠状病毒",
    "対策サイト": "资讯站",
    "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "本网站使用了Javascript。如果您将Javascript设为无效化，会造成网页无法正常操作，或者造成网页无法正常显示。当您使用本网站时，请务必将Javascript设为有效。"
  },
  "zh-tw": {
    "東京都": "东京都",
    "新型コロナウイルス感染症": "新型冠狀病毒",
    "対策サイト": "戰情中心",
    "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "本網站使用了 Javascript。如果您將 Javascript 設為無效化，會造成網頁無法正常操作，或者造成網頁無法正常顯示。當您使用本網站時，請務必將 Javascript 設為有效。"
  },
  "ko": {
    "東京都": "도쿄도청",
    "新型コロナウイルス感染症": "코로나19",
    "対策サイト": "TF 웹사이트",
    "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "본 웹사이트에서는 자바스크립트를 사용합니다. 자바스크립트를 허용하지 않으면 각 페이지가 제대로 작동하지 않거나 표시되지 않을 수 있습니다. 본 웹사이트를 이용시에는 자바스크립트를 허용해 주시기를 요청드립니다."
  },
  "ja-basic": {
    "東京都": "やまぐちけん",
    "新型コロナウイルス感染症": "あたらしいコロナウイルスの",
    "対策サイト": "びょうきについて",
    "当WebサイトではJavaScriptを使用しております。 JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。 当Webサイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。": "このページでは、JavaScriptというぎじゅつをつかっています。これをOFFにしていると、ページがうまくみられない場合があるので、ONにしてください。"
  }
}
</i18n>

<style lang="scss" scoped>
.noscript {
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 310px;
  max-width: 440px;
  transform: translateY(-50%) translateX(-50%);
}
.noscript-heading {
  display: flex;
  justify-content: center;
  align-items: center;
  @include font-size(13);
  color: #898989;
  img {
    margin-right: 16px;
  }
}
.noscript-body {
  @include font-size(13);
  @include card-container();
  border-radius: 4px;
  margin-top: 16px;
  padding: 1em;
  color: rgba(0, 0, 0, 0.87);
}
</style>
