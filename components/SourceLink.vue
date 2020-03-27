<template>
  <div class="SourceLink">
    <div>{{ header }}</div>
    <i18n path="出典: {source}" tag="div" :for="linkString">
      <a
        place="source"
        class="SourceLink"
        :href="url"
        target="_blank"
        rel="noopener"
      >
        {{ linkString }}
        <v-icon class="ExternalLinkIcon" size="15">
          mdi-open-in-new
        </v-icon>
      </a>
    </i18n>
  </div>
</template>

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
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: ''
    },
    linkString: {
      type: String,
      default: ''
    },
    header: {
      type: String,
      default: ''
    }
  }
})
</script>
