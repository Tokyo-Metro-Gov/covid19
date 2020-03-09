<template>
  <div class="StaticCard">
    <slot />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class StaticCard extends Vue {}
</script>

<style lang="scss">
.StaticCard {
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  > *:not(:first-child) {
    margin-top: 1em;
  }
  h3,
  &-Heading1 {
    @include card-h1();
  }
  h4,
  &-Heading2 {
    @include card-h2();
  }
  h5,
  &-Heading3 {
    @include card-h3();
  }
  p {
    // Override `.v-application p`
    margin-bottom: 0;
  }
  sup {
    vertical-align: top;
  }
  ul,
  ol {
    padding-left: 24px;
  }
  dt:not(:first-child) {
    margin-top: 0.5em;
  }
  dd {
    margin-top: 0.5em;
    margin-left: 2em;
    @include lessThan($medium) {
      margin-left: 32 / 768 * 100vw;
    }
  }
  dd > p:not(:first-child),
  dd > ul:not(:first-child),
  dd > ol:not(:first-child),
  dd > dl:not(:first-child) {
    margin-top: 0.5em;
  }
  img {
    max-width: 100%;
  }
  figcaption {
    margin-top: 0.5em;
  }
  a {
    @include text-link();
  }
  a[target='_blank']::after {
    content: '\F3CC';
    margin-left: 0.2em;
    display: inline-block;
    font: normal normal normal 24px/1 'Material Design Icons';
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  &-Note {
    display: flex;
    span {
      display: block;
      &:first-child {
        margin-right: 0.5em;
      }
    }
  }
  &-Notes {
    padding-left: 0 !important;
    > li {
      display: flex;
      list-style-type: none;
      span {
        display: block;
        &:first-child {
          margin-right: 0.5em;
        }
      }
    }
  }
}
</style>
