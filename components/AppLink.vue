<template>
  <component :is="linkTag" v-bind="attr">
    <slot />
    <v-icon
      v-if="_showIcon"
      class="ExternalLinkIcon"
      :class="iconClass"
      :size="`${iconSize / 10}rem`"
      :aria-label="this.$t('別タブで開く')"
      role="img"
      :aria-hidden="false"
    >
      {{ iconType }}
    </v-icon>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import { isExternal } from '@/utils/urls.ts'

type ExternalAttr = {
  to?: String
  href?: String
  target?: String
  rel?: String
  class: String
}

export default Vue.extend({
  props: {
    to: {
      type: String,
      required: true,
    },
    showIcon: {
      type: Boolean,
      default: null,
    },
    iconSize: {
      type: Number,
      default: 15,
    },
    iconType: {
      type: String,
      default: 'mdi-open-in-new',
    },
    iconClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkTag(): string {
      return isExternal(this.to) ? 'a' : 'nuxt-link'
    },
    attr(): ExternalAttr {
      if (isExternal(this.to)) {
        return {
          href: this.to,
          target: '_blank',
          rel: 'noopener noreferrer',
          class: 'ExternalLink',
        }
      } else {
        return {
          to: this.to,
          class: 'Link',
        }
      }
    },
    _showIcon(): boolean {
      // 指定がない場合、外部なら表示、内部なら表示しない
      if (this.showIcon == null) {
        return isExternal(this.to)
      } else {
        return this.showIcon
      }
    },
  },
})
</script>

<style lang="scss" scopred>
.ExternalLink {
  text-decoration: none;
  .ExternalLinkIcon {
    vertical-align: text-bottom;
  }
}
</style>
