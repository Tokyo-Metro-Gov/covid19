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
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}

.pageTitle {
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
</style>
