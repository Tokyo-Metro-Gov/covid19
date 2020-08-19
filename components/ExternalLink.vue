<template>
  <a class="ExternalLink" :href="to" target="_blank" rel="noopener noreferrer">
    <slot />
    <v-icon
      v-if="showIcon"
      class="ExternalLinkIcon"
      :class="iconClass"
      :size="`${iconSize / 10}rem`"
      :aria-label="this.$t('別タブで開く')"
      role="img"
      :aria-hidden="false"
    >
      {{ iconType }}
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
    to: {
      type: String,
      default: ''
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    iconSize: {
      type: Number,
      default: 15
    },
    iconType: {
      type: String,
      default: 'mdi-open-in-new'
    },
    iconClass: {
      type: String,
      default: ''
    }
  }
})
</script>
