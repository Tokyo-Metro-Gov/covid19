<template>
  <v-tabs hide-slider show-arrows>
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      :to="tab.path"
      nuxt
      active-class="ActiveTab"
    >
      <v-icon>
        mdi-chart-timeline-variant
      </v-icon>
      {{ tab.label }}
    </v-tab>
  </v-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { label: this.$t('モニタリング指標'), path: '/' },
        { label: this.$t('その他 参考指標'), path: '/reference' }
      ]
    }
  }
}
</script>

<style lang="scss">
.v-slide-group__content {
  border-bottom: 1px solid $gray-2;
  background: $gray-5;
}
.v-tab {
  top: 1px;
  margin: 0 8px;
  border-style: solid;
  border-radius: 4px 4px 0 0;
  font-weight: bold !important;
  @include font-size(16, true);

  &.ActiveTab {
    color: $gray-2 !important;
    background: $gray-5;
    border-color: $gray-2;
    border-width: 1px 1px 0 1px;
  }

  &:not(.ActiveTab) {
    color: $green-1 !important;
    background: $white;
    border-color: $green-1 $green-1 $gray-2 $green-1;
    border-width: 1px;
    &:hover {
      color: $white !important;
      background: $green-1;
    }
    .v-icon {
      color: inherit !important;
    }
  }
}
</style>
