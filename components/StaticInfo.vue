<template>
  <div class="StaticInfo">
    <span>{{ text }}</span>
    <div v-if="btnText" class="StaticInfo-Button">
      <span :is="linkTag" v-bind="linkAttrs">
        {{ btnText }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
  computed: {
    linkTag(): string {
      return this.isInternalLink ? 'nuxt-link' : 'a'
    },
    linkAttrs(): any {
      return this.isInternalLink ? { to: `${this.url}` } : { href: this.url }
    },
    isInternalLink(): boolean {
      return !/^https?:\/\//.test(this.url)
    },
  },
})
</script>

<style lang="scss">
.StaticInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: $white;
  border: 1px solid $gray-4;
  box-shadow: $shadow;
  border-radius: 4px;
  padding: 0.5em 1em;

  @include font-size(14);

  &-Button {
    flex: 1 0 auto;
    text-align: right;

    > a {
      text-decoration: none;
      @include button-text('sm');
    }

    @include lessThan($small) {
      margin-top: 4px;
    }
  }
}
</style>
