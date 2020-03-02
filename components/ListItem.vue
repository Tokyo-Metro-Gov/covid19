<template>
  <v-list-item
    v-ripple="false"
    :to="isInternalLink(link) ? link : ''"
    :href="!isInternalLink(link) ? link : ''"
    :target="!isInternalLink(link) ? '_brank' : ''"
    router
    exact
    class="ListItem-Container"
    style="color: transparent"
  >
    <v-list-item-action v-if="icon" class="ListItem-IconContainer">
      <v-icon
        v-if="checkIconType(icon) === 'material'"
        :class="['ListItem-Icon', isActive(link)]"
        size="20"
      >
        {{ icon }}
      </v-icon>
      <CovidIcon
        v-else-if="checkIconType(icon) === 'covid'"
        :class="['ListItem-Icon', isActive(link)]"
      />
      <ParentIcon
        v-else-if="checkIconType(icon) === 'parent'"
        :class="['ListItem-Icon', isActive(link)]"
      />
    </v-list-item-action>
    <v-list-item-content class="ListItem-TextContainer">
      <v-list-item-title
        :class="[
          'ListItem-Text',
          isActive(link),
          isMobile ? 'mobile' : 'desktop'
        ]"
        v-text="title"
      />
    </v-list-item-content>
    <v-icon
      v-if="!isInternalLink(link)"
      class="ListItem-ExternalLinkIcon"
      size="12"
    >
      mdi-open-in-new
    </v-icon>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import CovidIcon from '@/static/covid.svg'
import ParentIcon from '@/static/parent.svg'

@Component({
  components: { CovidIcon, ParentIcon }
})
export default class ListItem extends Vue {
  @Prop({
    default: '',
    required: false
  })
  link!: string

  @Prop({
    default: '',
    required: false
  })
  icon!: string

  @Prop({
    default: '',
    required: false
  })
  title!: string

  @Prop({
    default: false,
    required: true
  })
  isMobile!: boolean

  isInternalLink(path: string): boolean {
    return !/^https?:\/\//.test(path)
  }

  isActive(link: string): string | undefined {
    if (link === this.$route.path) {
      return 'isActive'
    }
  }

  checkIconType(
    icon?: string
  ): 'none' | 'material' | 'covid' | 'parent' | 'others' {
    if (!icon) return 'none'
    if (icon.startsWith('mdi')) {
      return 'material'
    } else if (icon.includes('covid')) {
      return 'covid'
    } else if (icon.includes('parent')) {
      return 'parent'
    } else {
      return 'others'
    }
  }
}
</script>

<style lang="scss">
.ListItem {
  &-Container {
    min-height: 30px;
    padding: 0;
    color: transparent !important;
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
.desktop {
  font-size: 0.75rem;
}
.mobile {
  font-size: 1.25rem;
}
</style>
