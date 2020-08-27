<template>
  <component :is="linkTag" v-bind="attr">
    <slot />
    <v-icon
      v-if="_showIcon"
      class="ExternalLinkIcon"
      :class="iconClass"
      :size="_iconSize"
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
      default: 12,
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
    _iconSize(): string {
      return `${this.iconSize / 10}rem`
    },
  },
})
</script>

<style lang="scss" scoped>
.ExternalLink {
  text-decoration: none;
}
</style>
