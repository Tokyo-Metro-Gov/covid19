<template>
  <div class="Menu">
    <section
      v-for="(menu, slug, i) in menuItemsObj"
      :key="`menu-block-${i}`"
      class="MenuSection"
    >
      <h2 class="MenuTitle">
        {{ setMenuTitle(slug) }}
      </h2>
      <ul class="MenuList">
        <li
          v-for="(item, j) in menu"
          :key="`menu-item-${j}`"
          class="MenuList-Item"
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
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
import CovidIcon from '@/static/covid.svg'
import MaskTrashIcon from '@/static/masktrash.svg'
import ParentIcon from '@/static/parent.svg'
import SupportIcon from '@/static/support.svg'

type MenuItemTitle = {
  slug: string
  text: string
}

type MenuItem = {
  iconPath?: string
  svg?: string
  title: string
  link: string
  slug: string
}

type MenuObj = {
  [key: string]: MenuItem[]
}

export default Vue.extend({
  components: { AppLink, CovidIcon, MaskTrashIcon, ParentIcon, SupportIcon },
  props: {
    itemTitles: {
      type: Array as PropType<MenuItemTitle[]>,
      required: true,
    },
    items: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
  },
  computed: {
    menuItemsObj(): MenuObj {
      const menuObj = {}
      this.itemTitles.forEach((v) => {
        const splitItemsBySlug = this.items.filter((item) => {
          return v.slug === item.slug
        })
        if (splitItemsBySlug.length > 0) menuObj[v.slug] = [...splitItemsBySlug]
      })
      return menuObj
    },
  },
  methods: {
    setMenuTitle(slug): string {
      return this.itemTitles.find((v) => v.slug === slug).text
    },
  },
})
</script>

<style lang="scss" scoped>
.Menu {
  margin-top: 24px;

  @include largerThan($small) {
    border-top: 1px solid $gray-4;
  }
}
.MenuSection {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid $gray-4;

  &:first-child {
    padding-top: 12px;
  }
}
.MenuTitle {
  color: $gray-3;
  padding: 12px 0;
  font-weight: normal;
  @include font-size(13);
}
.MenuList {
  list-style: none;
  padding: 0;
}

.MenuList-Item {
  line-height: 1.2;
  white-space: normal;
  @include font-size(14);
  @include lessThan($small) {
    font-weight: 600;
    @include font-size(14.5);
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
