<template>
  <div class="StaticCard">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend()
</script>

<style lang="scss">
.StaticCard {
  @include card-container();

  padding: 20px;
  margin-bottom: 20px;
  overflow-wrap: break-word;
  > *:not(:first-child) {
    margin-top: 1.2em;
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
    margin-top: 0.6em;
  }

  dd {
    margin-top: 0.6em;
    margin-left: 2em;

    @include lessThan($medium) {
      margin-left: 32 / 768 * 100vw;
    }
  }

  dd > *:not(:first-child) {
    margin-top: 0.6em;
  }

  img {
    max-width: 100%;
  }

  figcaption {
    margin-top: 0.6em;
    color: $gray-2;
  }

  strong,
  em {
    border-bottom: 2px solid $green-1;
  }

  em {
    font-style: normal;
  }

  a {
    @include text-link();

    font-size: inherit;
  }

  a[target='_blank']::after {
    content: '\F03CC';
    margin-left: 0.1em;
    margin-right: 0.2em;
    display: inline-block;
    text-decoration: none;
    /* stylelint-disable-next-line font-family-no-missing-generic-family-keyword */
    font: normal normal normal 24px/1 'Material Design Icons';
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* stylelint-disable no-descending-specificity */
  &-Note {
    display: flex;

    > span {
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

      > span {
        display: block;

        &:first-child {
          margin-right: 0.5em;
        }
      }
    }
  }
  /* stylelint-enable no-descending-specificity */
}
</style>
