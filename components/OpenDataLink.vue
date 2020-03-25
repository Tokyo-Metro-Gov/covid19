<template>
  <a class="OpenDataLink" :href="url" target="_blank" rel="noopener">
    {{ $t('オープンデータへのリンク') }}
    <v-icon class="ExternalLinkIcon" size="15">
      mdi-open-in-new
    </v-icon>
  </a>
</template>

<style lang="scss">
.OpenDataLink {
  text-decoration: none;
  .ExternalLinkIcon {
    vertical-align: text-bottom;
  }
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class OpenDataLink extends Vue {
  @Prop() private url!: string
}
</script>
