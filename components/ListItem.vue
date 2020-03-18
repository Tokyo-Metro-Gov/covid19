<template>
  <v-list-item
    v-ripple="false"
    :to="isInternalLink(link) ? link : ''"
    :href="!isInternalLink(link) ? link : ''"
    :target="!isInternalLink(link) ? '_blank' : ''"
    :rel="!isInternalLink(link) ? 'noopener' : ''"
    router
    exact
    class="ListItem-Container"
    style="color: transparent"
  >
    <v-list-item-action v-if="icon" class="ListItem-IconContainer">
      <v-icon
        v-if="checkIconType(icon) === 'material'"
        class="ListItem-Icon"
        :class="{ isActive: isActive(link) }"
        size="20"
      >
        {{ icon }}
      </v-icon>
      <CovidIcon
        v-else-if="checkIconType(icon) === 'covid'"
        class="ListItem-Icon"
        :class="{ isActive: isActive(link) }"
      />
      <ParentIcon
        v-else-if="checkIconType(icon) === 'parent'"
        class="ListItem-Icon"
        :class="{ isActive: isActive(link) }"
      />
    </v-list-item-action>
    <v-list-item-content class="ListItem-TextContainer">
      <v-list-item-title
        class="ListItem-Text"
        :class="{ isActive: isActive(link) }"
        v-text="title"
      />
    </v-list-item-content>
    <v-icon
      v-if="!isInternalLink(link)"
      :aria-label="this.$t('別タブで開く')"
      class="ListItem-ExternalLinkIcon"
      size="12"
      role="img"
      :aria-hidden="false"
    >
      mdi-open-in-new
    </v-icon>
  </v-list-item>
</template>

<script lang="ts">
import Vue from 'vue'
import CovidIcon from '@/static/covid.svg'
import ParentIcon from '@/static/parent.svg'

enum iconType {
  none = 'none',
  material = 'material',
  covid = 'covid',
  parent = 'parent',
  others = 'others'
}

export default Vue.extend({
  components: { CovidIcon, ParentIcon },
  props: {
    link: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    isActive(link: string): boolean {
      return link === this.$route.path || `${link}/` === this.$route.path
    },
    checkIconType(icon?: string): iconType {
      if (!icon) return iconType.none
      if (icon.startsWith('mdi')) {
        return iconType.material
      } else if (icon === 'covid') {
        return iconType.covid
      } else if (icon === 'parent') {
        return iconType.parent
      } else {
        return iconType.others
      }
    }
  }
})
</script>

<style lang="scss">
.ListItem {
  &-Container {
    min-height: 30px;
    padding: 0;
    color: transparent !important;
    & .ListItem-TextContainer {
      max-width: calc(100% - 20px);
    }
    & .ListItem-Text {
      overflow: visible;
      white-space: normal;
      font-size: 0.85rem;
    }
    &:hover {
      color: transparent !important;
      & .ListItem-Text {
        font-weight: bold;
      }
      & .ListItem-Icon {
        color: $gray-1 !important;
        &.isActive {
          color: $green-1 !important;
        }
      }
      & .ListItem-ExternalLinkIcon {
        color: $gray-1 !important;
      }
      & .ListItem-IconContainer {
        > svg {
          > path:not(:first-of-type) {
            fill: $gray-1;
          }
        }
        > svg.isActive {
          > path:not(:first-of-type) {
            fill: $green-1;
          }
        }
      }
    }
  }
  &-Text {
    color: $gray-1;
  }
  &-IconContainer {
    margin: 8px 3px 8px 0 !important;
    > svg {
      > path:not(:first-of-type) {
        fill: $gray-2;
      }
      width: 20px;
      height: 20px;
    }
  }
  &-Icon {
    color: $gray-2 !important;
  }
  &-TextContainer {
    display: inline-block;
    flex: none;
  }
  &-ExternalLinkIcon {
    margin-left: 2px;
    color: $gray-3 !important;
  }
}
.isActive {
  color: $green-1 !important;
  font-weight: 600;
}
svg.isActive {
  > path:not(:first-of-type) {
    fill: $green-1;
  }
}
</style>
