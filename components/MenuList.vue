<template>
  <ul class="MenuList">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="['MenuList-Item', { '-border': item.divider }]"
      @click="$emit('click', $event)"
    >
      <component :is="linkTag(item.link)" v-bind="linkAttrs(item.link)">
        <span v-if="item.icon" class="MenuList-Icon">
          <component :is="iconTag(item.icon)" v-bind="iconAttrs(item.icon)">
            {{ item.icon }}
          </component>
        </span>
        <span class="MenuList-Title">{{ item.title }}</span>
        <v-icon
          v-if="isExternal(item.link)"
          role="img"
          aria-hidden="false"
          aria-label="別タブで開く"
          class="MenuList-ExternalIcon"
          size="12"
        >
          mdi-open-in-new
        </v-icon>
      </component>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import ParentIcon from '@/static/parent.svg'
type MenuItem = {
  icon?: string
  title: string
  link: string
  divider?: boolean
}
export default Vue.extend({
  components: {
    ParentIcon
  },
  props: {
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true
    }
  },
  methods: {
    linkTag(link: MenuItem['link']) {
      return this.isExternal(link) ? 'a' : 'nuxt-link'
    },
    linkAttrs(link: MenuItem['link']) {
      return this.isExternal(link)
        ? {
            href: link,
            target: '_blank',
            rel: 'noopener noreferrer',
            class: 'MenuList-Link'
          }
        : {
            to: link,
            router: true,
            class: 'MenuList-Link'
          }
    },
    iconTag(icon: MenuItem['icon']) {
      return icon ? (icon.startsWith('mdi') ? 'v-icon' : icon) : null
    },
    iconAttrs(icon: MenuItem['icon']) {
      return icon
        ? icon.startsWith('mdi')
          ? {
              size: 20,
              class: 'MenuList-MdIcon'
            }
          : {
              'aria-hidden': true,
              class: 'MenuList-SvgIcon'
            }
        : null
    },
    isExternal(path: MenuItem['link']): boolean {
      return /^https?:\/\//.test(path)
    }
  }
})
</script>

<style lang="scss" scoped>
.MenuList {
  padding: 12px 0 0;
  @include largerThan($small) {
    border-top: 1px solid $gray-4;
  }
}
.MenuList-Item {
  list-style: none;
  font-size: 0.85rem;
  line-height: 1.2;
  white-space: normal;
  &.-border {
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid $gray-4;
  }
}
.MenuList-Link {
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  color: $gray-1;
  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }
  &:hover,
  &:focus {
    font-weight: bold;
  }
  &:focus {
    outline: 1px dotted $gray-3;
  }
  &.nuxt-link-exact-active {
    font-weight: bold;
    &:link,
    &:hover,
    &:focus,
    &:visited,
    &:active {
      color: $green-1;
    }
  }
}
.MenuList-Icon {
  margin-right: 3px;
  min-width: 24px;
}
.MenuList-MdIcon {
  color: $gray-2;
  .nuxt-link-exact-active & {
    color: $green-1;
  }
}
.MenuList-SvgIcon {
  width: 20px;
  height: 20px;
  fill: $gray-2;
  .nuxt-link-exact-active & {
    fill: $green-1;
  }
}
.MenuList-ExternalIcon {
  margin-left: 2px;
  color: $gray-3;
}
</style>
