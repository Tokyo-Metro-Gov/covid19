<template>
  <component
    :is="isInternalLink(url) ? 'nuxt-link' : 'a'"
    :to="isInternalLink(url) ? url : ''"
    :href="isInternalLink(url) ? '' : url"
    class="StaticInfo"
  >
    <span>{{ text }}</span>
    <!--
    <div v-if="btnText" class="StaticInfo-Button">
      <span>
        {{ btnText }}
      </span>
    </div>
	-->
  </component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StaticInfo extends Vue {
  @Prop({ default: '', required: false })
  url!: string

  @Prop({ default: '', required: false })
  text!: string

  @Prop({ default: '', required: false })
  btnText!: string

  isInternalLink(path: string): boolean {
    return !/^https?:\/\//.test(path)
  }
}
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
