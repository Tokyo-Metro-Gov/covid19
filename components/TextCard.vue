<template>
  <div class="TextCard">
    <h3 v-if="title" class="TextCard-Heading">
      <div v-if="link">
        <a :href="link" target="_blank" rel="noopener">
          {{ title }}
        </a>
        <v-icon
          v-if="!isInternalLink(link)"
          class="TextCard-ExternalLinkIcon"
          size="20"
        >
          mdi-open-in-new
        </v-icon>
      </div>
      <template v-else>
        {{ title }}
      </template>
    </h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="body" class="TextCard-Body" v-html="body" />
    <div v-if="$slots.default" class="TextCard-Body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    }
  }
})
</script>

<style lang="scss">
.TextCard {
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  &-Heading {
    @include card-h1();
    margin-bottom: 12px;
    a {
      @include card-h1();
      color: $link !important;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &-ExternalLinkIcon {
    margin-left: 2px;
    color: $gray-3 !important;
  }
  &-Body {
    * {
      @include body-text();
    }
    a {
      word-break: break-all;
      color: $link;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
