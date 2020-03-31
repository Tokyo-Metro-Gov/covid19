<template>
  <div class="WhatsNew">
    <h3 class="WhatsNew-heading">
      <v-icon size="24" class="WhatsNew-heading-icon">
        mdi-information
      </v-icon>
      <a
        href="https://www.pref.kagoshima.jp/ae06/kenko-fukushi/kenko-iryo/kansen/kansensho/coronavirus.html"
        target="_blank"
      >
        {{ $t('鹿児島県発表の新型コロナウイルス感染症に関する情報はこちら') }}
      </a>
    </h3>
  </div>
</template>

<i18n src="./WhatsNew.i18n.json"></i18n>

<style lang="scss">
.WhatsNew {
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
}

.WhatsNew-heading {
  display: flex;
  align-items: center;
  @include card-h2();
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }

  a {
    padding: 0.5em;
    font-size: 0.875rem;
    color: #006ca8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
