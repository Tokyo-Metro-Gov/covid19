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
      <v-icon :class="['ListItem-Icon', isActive(link)]" size="20">
        {{ icon }}
      </v-icon>
    </v-list-item-action>
    <v-list-item-content class="ListItem-TextContainer">
      <v-list-item-title
        :class="['ListItem-Text', isActive(link)]"
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

@Component
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
    if (link === this.$route.path) {
      return 'isActive'
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
        font-weight: 600;
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
    }
  }
  &-Text {
    font-size: 12px;
    color: $gray-1;
  }
  &-IconContainer {
    margin: 8px 3px 8px 0 !important;
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
</style>
