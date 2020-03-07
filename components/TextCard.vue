<template>
  <div class="TextCard">
    <h2 v-if="title" class="TextCard-Heading">
      {{ title }}
    </h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-if="body" class="TextCard-Body" v-html="body" />
    <p class="TextCard-Body">
      <slot />
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    body: {
      type: String,
      required: false,
      default: ''
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
  }
  &-Body {
    * {
      @include body-text();
    }
    a {
      word-break: break-all;
      color: $link;
    }
  }
}
</style>
