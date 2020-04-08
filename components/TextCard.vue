<template>
  <div class="TextCard">
    <h3 v-if="title" class="TextCard-Heading">
      {{ title }}
    </h3>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="body" class="TextCard-Body" v-html="body" />
    <div v-if="$slots.default" class="TextCard-Body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'

@Component
export default class TextCard extends Vue {
  @Prop({
    default: '',
    required: false
  })
  title!: string

  @Prop({
    default: '',
    required: false
  })
  body!: string
}
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
      text-decoration: none;
    }
  }
}
</style>
