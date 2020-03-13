<template>
  <div class="SourceLink">
    <div>{{ header }}</div>
    <i18n path="出典:" tag="div" for="{linkString}">
      <a class="SourceLink" :href="url" target="_blank" rel="noopener">
        {{ $t('{linkString}', { linkString }) }}
        <v-icon class="ExternalLinkIcon" size="15">
          mdi-open-in-new
        </v-icon>
      </a>
    </i18n>
  </div>
</template>

<i18n>
{
  "ja": {
    "出典:": "出典: {0}",
    "{linkString}": "{linkString}"
  }
}
</i18n>
<style lang="scss">
.SourceLink {
  text-decoration: none;
  text-align: left;
  .ExternalLinkIcon {
    vertical-align: text-bottom;
  }
}
</style>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SourceLink extends Vue {
  @Prop() private url!: string
  @Prop() private linkString!: string
  @Prop() private header!: string
}
</script>
