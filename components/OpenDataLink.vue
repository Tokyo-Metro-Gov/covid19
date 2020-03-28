<template>
  <a class="OpenDataLink" :href="url" target="_blank" rel="noopener">
    {{ $t('オープンデータを入手') }}
    <v-icon
      class="ExternalLinkIcon"
      size="15"
      :aria-label="this.$t('別タブで開く')"
      role="img"
      :aria-hidden="false"
    >
      mdi-open-in-new
    </v-icon>
  </a>
</template>

<style lang="scss">
.OpenDataLink {
  text-decoration: none;
  .ExternalLinkIcon {
    vertical-align: text-bottom;
  }
}
</style>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: ''
    }
  }
})
</script>
