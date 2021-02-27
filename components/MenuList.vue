<template>
  <ul class="MenuList">
    <li
      v-for="(item, i) in items"
      :key="i"
      :class="['MenuList-Item', { '-border': item.divider }]"
      @click="$emit('click', $event)"
    >
      <app-link :to="item.link" class="MenuList-Link">
        <span v-if="item.svg || item.iconPath" class="MenuList-Icon">
          <svg
            :is="item.svg"
            v-if="item.svg"
            class="MenuList-SvgIcon"
            aria-hidden="true"
          />
          <v-icon v-if="item.iconPath" size="2rem" class="MenuList-MdIcon">
            {{ item.iconPath }}
          </v-icon>
        </span>
        <span class="MenuList-Title">{{ item.title }}</span>
      </app-link>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import AppLink from '@/components/AppLink.vue'
import CovidIcon from '@/static/covid.svg'
import MaskTrashIcon from '@/static/masktrash.svg'
import ParentIcon from '@/static/parent.svg'
import SupportIcon from '@/static/support.svg'

type MenuItem = {
  iconPath?: string
  svg?: string
  title: string
  link: string
  divider?: boolean
}

export default Vue.extend({
  components: { AppLink, CovidIcon, MaskTrashIcon, ParentIcon, SupportIcon },
  props: {
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true,
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
    font-weight: 600;
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
    font-weight: 600;
  }

  &:focus {
    font-weight: 600;
    outline: dotted $gray-3 1px;
  }

  &.nuxt-link-exact-active {
    font-weight: 600;

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

.MenuList ::v-deep .ExternalLinkIcon {
  margin-left: 5px;
  color: $gray-3;
  @include lessThan($small) {
    @include font-size(14, true);
  }
}
</style>
