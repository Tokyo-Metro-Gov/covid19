<template>
  <div class="DataView-DataInfo">
    <span v-if="lText !== ''" class="DataView-DataInfo-summary">
      {{ lText }}
      <small class="DataView-DataInfo-summary-unit">{{ unit }}</small>
    </span>
    <br v-if="lText !== ''" />
    <small class="DataView-DataInfo-date">{{ sText }}</small>
  </div>
</template>

<style lang="scss">
.DataView {
  &-DataInfo {
    @include largerThan($large) {
      text-align: right;
      width: 50%;
    }

    &-summary {
      display: inline-block;
      font-family: Hiragino Sans, sans-serif;
      font-style: normal;
      line-height: 30px;
      @include font-size(30);

      &-unit {
        @include font-size(18);
      }
    }

    &-date {
      white-space: wrap;
      display: inline-block;
      line-height: 12px;
      color: $gray-3;
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
      default: ''
    },
    sText: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: false,
      default: ''
    }
  }
})
</script>
