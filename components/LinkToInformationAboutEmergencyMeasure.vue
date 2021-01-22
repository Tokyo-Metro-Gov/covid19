<template>
  <span class="link-to-information-about-emergency-measure">
    <app-link to="https://www.bousai.metro.tokyo.lg.jp/1007617/index.html">
      <v-icon
        size="2rem"
        class="link-to-information-about-emergency-measure-icon"
      >
        {{ mdiBullhorn }}
      </v-icon>
      {{ $t('東京都緊急事態措置について') }}
    </app-link>
  </span>
</template>

<script lang="ts">
import { mdiBullhorn } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
  data() {
    return {
      mdiBullhorn,
    }
  },
})
</script>

<style lang="scss">
.link-to-information-about-emergency-measure {
  background-color: $emergency;
  border: 2px solid $emergency;
  color: $gray-2;
  border-radius: 4px;
  padding: 4px 8px;
  display: inline-flex;
  @include font-size(16);
  &:hover {
    background-color: $white;
    border-radius: 4px;
  }

  .ExternalLink {
    color: $gray-2 !important;
    text-decoration: none;
    margin: -10px;
    padding: 10px;
  }

  > span {
    @include button-text('sm');
  }

  @include lessThan($medium) {
    margin-top: 8px;
  }
}
</style>
