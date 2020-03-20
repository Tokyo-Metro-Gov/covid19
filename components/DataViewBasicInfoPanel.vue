<template>
  <div class="DataView-DataInfo">
    <span class="DataView-DataInfo-summary">
      {{ lText }}
      <small class="DataView-DataInfo-summary-unit">{{ unit }}</small>
    </span>
    <br />
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
      font-size: 30px;
      line-height: 30px;

      &-unit {
        font-size: 0.6em;
      }
    }

    &-date {
      white-space: wrap;
      display: inline-block;
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
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
      required: true
    },
    sText: {
      type: String,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  }
})
</script>
