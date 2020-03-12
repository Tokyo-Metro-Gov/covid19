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
        :class="['ListItem-Text', isActive(link)]"
        v-text="title"
      />
    </v-list-item-content>
    <v-icon
      v-if="!isInternalLink(link)"
      aria-label="別タブで開く"
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

  isInternalLink(path: string): boolean {
    return !/^https?:\/\//.test(path)
  }

  isActive(link: string): string | undefined {
    if (link === this.$route.path || `${link}/` === this.$route.path) {
      return 'isActive'
    }
  }

  checkIconType(
    icon?: string
  ): 'none' | 'material' | 'covid' | 'parent' | 'others' {
    if (!icon) return 'none'
    if (icon.startsWith('mdi')) {
      return 'material'
    } else if (icon === 'covid') {
      return 'covid'
    } else if (icon === 'parent') {
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
