<template>
  <div class="header">
    <h2 class="pageTitle">
      <v-icon v-if="icon" size="40" class="mr-2">
        {{ icon }}
      </v-icon>
      <slot />
    </h2>
  </div>
</template>

<script lang="ts">
// FIXME: to nuxt-property-decorator
// SEE: https://github.com/tokyo-metropolitan-gov/covid19/issues/646
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class extends Vue {
  @Prop({ type: String, required: false }) private icon?: string
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.pageTitle {
  color: $gray-2;
  display: flex;
  align-items: center;
  @include font-size(30);
  line-height: 1;
  font-weight: normal;
  margin: 0 0.5em 0 0;
  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
