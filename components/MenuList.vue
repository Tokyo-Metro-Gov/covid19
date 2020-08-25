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
          :aria-label="$t('別タブで開く')"
          class="MenuList-ExternalIcon"
          size="1.2rem"
        >
          {{ mdiOpenInNew }}
        </v-icon>
      </component>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import {
  mdiMenu,
  mdiClose,
  mdiChartTimelineVariant,
  mdiAccountMultiple,
  mdiDomain,
  mdiOpenInNew,
} from '@mdi/js'
const isPath = require('is-svg-path')
const CovidIcon = require('@/static/covid.svg?inline')
const MaskTrashIcon = require('@/static/masktrash.svg?inline')
const ParentIcon = require('@/static/parent.svg?inline')

type MenuItem = {
  icon?: string | any
  title: string
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: {
    CovidIcon,
    MaskTrashIcon,
    ParentIcon,
  },
  data() {
    const svgPath = {
      mdiMenu,
      mdiClose,
      mdiChartTimelineVariant,
      mdiAccountMultiple,
      mdiDomain,
      mdiOpenInNew,
    }
    return svgPath
  },
  props: {
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
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
            class: 'MenuList-Link',
          }
        : {
            href: link,
            router: true,
            class: 'MenuList-Link',
            to: '/#',
          }
    },
    iconTag(icon: MenuItem['icon']) {
      return icon
        ? // icon.includes('mdi') ||
          isPath(icon)
          ? 'v-icon'
          : icon
        : null
    },
    iconAttrs(icon: MenuItem['icon']) {
      return icon
        ? // icon.includes('mdi') ||
          isPath(icon)
          ? {
              size: '2rem',
              class: 'MenuList-MdIcon',
            }
          : {
              'aria-hidden': true,
              class: 'MenuList-SvgIcon',
            }
        : null
    },
    isExternal(path: MenuItem['link']): boolean {
      return /^https?:\/\//.test(path)
    },
  },
})
</script>

<style lang="scss" scoped>
.MenuList {
  margin-top: 24px;
  padding: 12px 0;
  border-bottom: 1px solid $gray-4;

  @include largerThan($small) {
    border-top: 1px solid $gray-4;
  }
}

.MenuList-Item {
  list-style: none;
  line-height: 1.2;
  white-space: normal;
  @include font-size(14);
  @include lessThan($small) {
    font-weight: bold;
    @include font-size(14.5);
  }

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

  &:hover {
    font-weight: bold;
  }

  &:focus {
    font-weight: bold;
    outline: dotted $gray-3 1px;
  }

  &.nuxt-link-exact-active {
    font-weight: bold;

    &:link,
    &:hover,
    &:visited,
    &:active {
      color: $green-1;
    }
    &:focus {
      color: $green-1;
      outline: dotted $gray-3 1px;
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
  margin-left: 5px;
  color: $gray-3;
  @include lessThan($small) {
    @include font-size(14, true);
  }
}
</style>
