<template>
  <!-- eslint-disable vue/html-indent -->
  <noscript inline-template>
    <div>
      <style>
        .loader {
          display: none;
        }
        .v-overlay {
          display: none;
        }
        @media screen and (max-width: 600px) {
          .appContainer {
            margin-bottom: 150px;
          }
        }
        @media screen and (min-width: 601px) {
          .appContainer {
            margin-top: 100px;
          }
        }
      </style>
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

<style lang="scss" scoped>
@include lessThan($small) {
  .noscript-body {
    position: fixed;
    bottom: 0;
    color: rgba(0, 0, 0, 0.87);
  }
}

@include largerThan($small) {
  .noscript-body {
    position: fixed;
    top: 0;
    margin-left: 240px;
    width: calc(100% - 240px);
  }
}

@include largerThan($huge) {
  .noscript-body {
    margin-left: 324px;
    width: calc(100% - 324px);
    max-width: 1100px;
  }
}

.noscript-body {
  @include font-size(13);
  @include card-container();

  background-color: #ffe200;
  border-radius: 4px;
  padding: 1em;
  z-index: 3;
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>
