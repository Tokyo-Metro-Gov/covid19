<template>
  <!-- eslint-disable vue/html-indent -->
  <noscript inline-template>
    <div class="noscript">
      <style>
        .loader {
          display: none;
        }
        .v-overlay {
          display: none;
        }
      </style>
      <div class="noscript-heading">
        <img src="/logo.svg" :alt="$t('青森県')" />
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>
