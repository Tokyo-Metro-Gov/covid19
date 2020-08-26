<template>
  <div class="DataView-DataSet">
    <span class="DataView-DataSet-title">{{ title }}</span>
    <div class="DataView-DataSet-DataInfo">
      <span v-if="lText !== ''" class="DataView-DataSet-DataInfo-summary">
        {{ lText }}
        <small class="DataView-DataSet-DataInfo-summary-unit">{{ unit }}</small>
      </span>
      <br v-if="lText !== ''" />
      <small class="DataView-DataSet-DataInfo-date">{{ sText }}</small>
      <br v-if="sTextUnder !== ''" />
      <small v-if="sTextUnder !== ''" class="DataView-DataSet-DataInfo-date">{{
        sTextUnder
      }}</small>
    </div>
  </div>
</template>

<style lang="scss">
.DataView {
  &-DataSet {
    display: flex;
    flex-flow: column;
    margin-bottom: 10px;

    @include largerThan($large) {
      justify-content: space-between;
      flex-flow: row;
    }

    &-title {
      font-size: 2rem;
      flex: 1 1 50%;
      margin-bottom: 10px;
    }

    &-DataInfo {
      flex: 1 1 50%;

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
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
      default: '',
    },
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
