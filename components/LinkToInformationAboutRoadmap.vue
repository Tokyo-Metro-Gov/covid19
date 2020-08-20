<template>
  <span :class="$style.linkButton">
    <app-link
      :class="$style.TextLink"
      to="https://www.bousai.metro.tokyo.lg.jp/1007942/index.html"
    >
      {{ $t('ロードマップについて') }}
    </app-link>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
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
