<template>
  <v-tabs hide-slider>
    <v-tab
      v-for="(tab, index) in tabs"
      :key="index"
      v-ripple="false"
      :to="localePath(tab.path)"
      nuxt
      exact-active-class="ActiveTab"
    >
      <v-icon class="TabIcon">
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
        { label: this.$t('モニタリング項目'), path: '/' },
        { label: this.$t('その他 参考指標'), path: '/?tab=reference' }
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

  &:focus {
    outline: dotted $gray-3 1px;
  }

  &.ActiveTab {
    color: $gray-2 !important;
    background: $gray-5;
    border-color: $gray-2 $gray-2 $gray-5 $gray-2;
    border-width: 1px 1px 2px 1px;
    &::before {
      background-color: transparent;
    }
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
    .TabIcon {
      color: inherit !important;
    }
  }
}
@function px2vw($px, $vw: 768) {
  @return $px / $vw * 100vw;
}
@include lessThan($medium) {
  .v-slide-group__content {
    width: 100%;
  }
  .v-tab {
    font-size: px2vw(16) !important;
    font-weight: normal !important;
    flex: 1 1 auto;
    width: 100%;
    padding: 0 8px !important;
  }
}
@include lessThan($small) {
  .v-tab {
    font-size: px2vw(20, 600) !important;
    padding: 0 4px !important;
  }
  .TabIcon {
    font-size: px2vw(24, 600) !important;
  }
}
</style>
