<template>
  <div class="DataView-DataInfo">
    <span v-if="lText !== ''" class="DataView-DataInfo-summary">
      {{ lText }}
      <small class="DataView-DataInfo-summary-unit">{{ unit }}</small>
    </span>
    <br v-if="lText !== ''" />
    <small class="DataView-DataInfo-date">{{ sText }}</small>
    <br v-if="sTextUnder !== ''" />
    <small v-if="sTextUnder !== ''" class="DataView-DataInfo-date">{{
      sTextUnder
    }}</small>
  </div>
</template>

<style lang="scss">
.DataView {
  &-DataInfo {
    margin-bottom: 10px;

    @include largerThan($large) {
      text-align: right;
    }

    &-summary {
      display: inline-block;
      color: $gray-2;
      white-space: nowrap;
      font-family: Hiragino Sans, sans-serif;
      font-style: normal;
      line-height: 30px;
      @include font-size(30);

      &-unit {
        width: 100%;
        @include font-size(18);
      }
    }

    &-date {
      display: inline-block;
      width: 100%;
      color: $gray-3;
      line-height: initial;
      @include font-size(12);
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    lText: {
      type: String,
      required: false,
      default: '',
    },
    sText: {
      type: String,
      required: true,
    },
    sTextUnder: {
      type: String,
      required: false,
      default: '',
    },
    unit: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>
