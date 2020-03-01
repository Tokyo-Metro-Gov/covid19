<template>
  <v-list-item
    v-ripple="false"
    :to="isInternalLink(link) ? link : ''"
    :href="!isInternalLink(link) ? link : ''"
    router
    exact
    class="ListItem-Container"
    style="color: transparent"
  >
    <v-list-item-action v-if="icon" class="ListItem-IconContainer">
      <v-icon :class="isActive(icon)" size="20">
        {{ icon }}
      </v-icon>
    </v-list-item-action>
    <v-list-item-content class="ListItem-TextContainer">
      <v-list-item-title
        :class="['ListItem-Text', isActive(icon)]"
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

  isActive(icon: string): string | undefined {
    if (icon === 'mdi-chart-timeline-variant') {
      return 'isActive'
    }
  }
}
</script>

<style lang="scss">
.ListItem {
  &-Container {
    min-height: 32px;
    padding: 0;
    color: transparent !important;
    &:hover {
      color: transparent !important;
    }
  }
  &-Text {
    font-size: 12px;
  }
  &-IconContainer {
    margin: 8px 3px 8px 0 !important;
  }
  &-TextContainer {
    display: inline-block;
    flex: none;
  }
  &-ExternalLinkIcon {
    margin-left: 2px;
    color: #808080 !important;
  }
}
.isActive {
  color: $green-1 !important;
  font-weight: 600;
}
</style>
