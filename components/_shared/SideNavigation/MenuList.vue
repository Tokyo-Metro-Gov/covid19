<template>
  <div class="Menu">
    <section
      v-for="(menu, slug, i) in menuItemsObj"
      :key="`menu-block-${i}`"
      class="MenuSection"
    >
      <custom-expansion-panel v-if="itemTitles[i].isExpand" :id="`menu-${i}`">
        <template #icon>
          <v-icon size="2.4rem">{{ mdiChevronRight }}</v-icon>
        </template>
        <template #title>
          <span class="MenuTitle">{{ setMenuTitle(slug) }}</span>
        </template>
        <template #content>
          <menu-list-contents :items="menu" @click="$emit('click', $event)" />
        </template>
      </custom-expansion-panel>
      <template v-else>
        <h2 class="MenuTitle">
          {{ setMenuTitle(slug) }}
        </h2>
        <menu-list-contents :items="menu" @click="$emit('click', $event)" />
      </template>
    </section>
  </div>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import type { PropType } from 'vue'
import Vue from 'vue'

import CustomExpansionPanel from '@/components/_shared/CustomExpansionPanel.vue'
import MenuListContents from '@/components/_shared/SideNavigation/MenuListContents.vue'

type MenuItemTitle = {
  slug: string
  text: string
  isExpand?: boolean
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
  components: { CustomExpansionPanel, MenuListContents },
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
  data() {
    return {
      mdiChevronRight,
    }
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
</style>
