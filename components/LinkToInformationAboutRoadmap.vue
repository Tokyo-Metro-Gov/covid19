<template>
  <span :class="$style.linkButton">
    <external-link
      :class="$style.TextLink"
      url="https://www.bousai.metro.tokyo.lg.jp/1007942/index.html"
    >
      {{ $t('ロードマップについて') }}
    </external-link>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: { ExternalLink },
})
</script>

<style lang="scss" module>
.linkButton {
  display: inline-flex;
  flex: 0 1 auto;

  @include lessThan($medium) {
    margin-top: 8px;
  }
}

.TextLink {
  @include button-text('sm', 16);

  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }
}
</style>
