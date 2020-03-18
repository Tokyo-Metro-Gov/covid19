<template>
  <component
    :is="isInternalLink ? 'nuxt-link' : 'a'"
    :to="isInternalLink ? url : ''"
    :href="isInternalLink ? '' : url"
    class="StaticInfo"
  >
    <span>{{ text }}</span>
    <div v-if="btnText" class="StaticInfo-Button">
      <span>
        {{ btnText }}
      </span>
    </div>
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
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
