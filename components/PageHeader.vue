<template>
  <div class="PageHeader">
    <h2 class="PageTitle">
      <v-icon v-if="iconPath" size="4rem" class="mr-2">
        {{ iconPath }}
      </v-icon>
      <slot />
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    iconPath: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.PageHeader {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  .PageTitle {
    @include font-size(30);

    color: $gray-2;
    display: flex;
    align-items: center;
    line-height: 1.35;
    font-weight: normal;
    margin: 0 0.5em 0 0;

    @include lessThan($small) {
      @include font-size(20);
    }
  }
}
</style>
