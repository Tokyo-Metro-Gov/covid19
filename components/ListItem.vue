<template>
  <v-list-item
    :to="isInternalLink(link) ? link : ''"
    :href="!isInternalLink(link) ? link : ''"
    router
    exact
  >
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      <v-list-item-title v-text="title" />
    </v-list-item-content>
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
  link!: string;

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

  isInternalLink (path: string): boolean {
    return !/^https?:\/\//.test(path)
  }
}
</script>
