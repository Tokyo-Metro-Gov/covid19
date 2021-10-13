<template>
  <div class="DataView-DataSet">
    <h4 v-if="title" class="DataView-DataSet-title">{{ title }}</h4>
    <div class="DataView-DataSet-info">
      <template v-if="lText">
        <p class="DataView-DataSet-summary">
          {{ lText }}
          <span class="DataView-DataSet-summary-unit">{{ unit }}</span>
        </p>
      </template>
      <span class="DataView-DataSet-date">{{ sText }}</span>
      <template v-if="sTextUnder">
        <br />
        <span class="DataView-DataSet-date">{{ sTextUnder }}</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: false,
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

<style lang="scss">
.DataView {
  &-DataSet {
    display: flex;
    flex-flow: column;
    margin-bottom: 12px;
    color: $gray-2;

    @include largerThan($large) {
      justify-content: space-between;
      flex-flow: row;
    }

    &-title {
      font-weight: normal;
      flex: 1 1 50%;

      @include font-size(18);
    }

    &-info {
      flex: 1 1 50%;

      @include largerThan($large) {
        text-align: right;
      }
    }

    &-summary {
      display: inline-block;
      color: $gray-2;
      white-space: nowrap;
      font-style: normal;
      line-height: 30px;
      margin-bottom: 0 !important;

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
