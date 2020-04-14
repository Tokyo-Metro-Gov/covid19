<template>
  <a class="ExternalLink" :href="url" target="_blank" rel="noopener noreferrer">
    <slot />
    <v-icon
      class="ExternalLinkIcon"
      :size="iconSize"
      :aria-label="this.$t('別タブで開く')"
      role="img"
      :aria-hidden="false"
    >
      mdi-open-in-new
    </v-icon>
  </a>
</template>

<style lang="scss">
.ExternalLink {
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
    },
    iconSize: {
      type: Number,
      default: 15
    }
  }
})
</script>
