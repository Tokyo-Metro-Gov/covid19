<template>
  <component :is="linkTag" v-bind="attr">
    <slot />
    <v-icon
      v-if="_showIcon"
      class="ExternalLinkIcon"
      :class="iconClass"
      :size="_iconSize"
      :aria-label="$t('別タブで開く')"
      role="img"
      :aria-hidden="false"
    >
      {{ iconPath }}
    </v-icon>
  </component>
</template>

<script lang="ts">
import { mdiOpenInNew } from '@mdi/js'
import Vue from 'vue'

import { isExternal } from '@/utils/urls'

type InternalAttr = {
  to: String
  class: String
}

type ExternalAttr = {
  href: String
  target: String
  rel: String
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
    iconPath: {
      type: String,
      default: mdiOpenInNew,
    },
    iconClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    isExternal(): boolean {
      return isExternal(this.to)
    },
    linkTag(): string {
      return this.isExternal ? 'a' : 'nuxt-link'
    },
    attr(): ExternalAttr | InternalAttr {
      if (this.isExternal) {
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
      return this.showIcon ?? this.isExternal
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
