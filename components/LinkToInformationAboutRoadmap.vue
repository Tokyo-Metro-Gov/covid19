<template>
  <span :class="$style.linkButton">
    <a
      :class="$style.externalLink"
      href="https://www.bousai.metro.tokyo.lg.jp/1007942/index.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ $t('ロードマップについて') }}
      <v-icon
        :class="$style.externalLinkIcon"
        size="1.5rem"
        :aria-label="this.$t('別タブで開く')"
        role="img"
        :aria-hidden="false"
      >
        mdi-open-in-new
      </v-icon>
    </a>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss" module>
.linkButton {
  display: inline-flex;
  flex: 0 1 auto;
  a {
    @include button-text('sm', 16);
  }

  @include lessThan($small) {
    margin-top: 4px;
  }
}

.externalLink {
  text-decoration: none;
}
</style>
