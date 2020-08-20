<template>
  <component
    :is="linkTag(to)"
    :to="to"
    :show-icon="_showIcon"
    :icon-type="iconType"
    :icon-size="iconSize"
    :icon-class="iconClass"
  >
    <slot />
    <v-icon
      v-if="showIcon"
      class="LinkIcon"
      :icon-class="iconClass"
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
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    ExternalLink,
  },
  props: {
    to: {
      type: String,
      default: '',
    },
    external: {
      type: Boolean,
      default: null,
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
    _showIcon(): boolean {
      // 指定がない場合、外部なら表示、内部なら表示しない
      if (this.showIcon == null) {
        if (this.isExternal(this.to)) {
          return true
        } else {
          return false
        }
      } else {
        if (this.isExternal(this.to)) {
          return false
        }
        return this.showIcon
      }
    }
  },
  methods: {
    isExternal(path: string): boolean {
      if (this.external) return true
      return /^https?:\/\//.test(path)
    },
    linkTag(path: string): string {
      return this.isExternal(path) ? 'external-link' : 'nuxt-link'
    }
  }
})
</script>
