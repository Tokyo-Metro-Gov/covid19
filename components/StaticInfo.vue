<template>
  <component :is="linkTag" v-bind="linkAttrs">
    <t-i18n>{{ text }}</t-i18n>
    <div v-if="btnText" class="StaticInfo-Button">
      <t-i18n>{{ btnText }}</t-i18n>
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'
import TI18n from '@/components/TI18n.vue'

export default Vue.extend({
  components: { TI18n },
  props: {
    url: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    btnText: {
      type: String,
      default: ''
    }
  },
  computed: {
    linkTag(): string {
      return this.isInternalLink ? 'nuxt-link' : 'a'
    },
    linkAttrs(): any {
      return this.isInternalLink
        ? { to: this.url, class: 'StaticInfo' }
        : { href: this.url, class: 'StaticInfo' }
    },
    isInternalLink(): boolean {
      return !/^https?:\/\//.test(this.url)
    }
  }
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

  @include text-link();

  &-Button {
    flex: 1 0 auto;
    text-align: right;

    > span {
      @include button-text('sm');
    }

    @include lessThan($small) {
      margin-top: 4px;
    }
  }
}
</style>
