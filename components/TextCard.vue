<template>
  <div class="TextCard">
    <h2 v-if="title" class="TextCard-Heading">
      {{ title }}
    </h2>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="TextCard-Body" v-html="body" />
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
    required: true
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
  }
}
</style>
