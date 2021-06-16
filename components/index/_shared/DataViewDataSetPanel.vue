<template>
  <div class="DataView-DataSet">
    <span v-if="title" class="DataView-DataSet-title">{{ title }}</span>
    <div class="DataView-DataSet-info">
      <template v-if="lText">
        <span class="DataView-DataSet-summary">
          {{ lText }}
          <small class="DataView-DataSet-summary-unit">{{ unit }}</small>
        </span>
        <br />
      </template>
      <small class="DataView-DataSet-date">{{ sText }}</small>
      <template v-if="sTextUnder">
        <br />
        <small class="DataView-DataSet-date">{{ sTextUnder }}</small>
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
    margin-bottom: 10px;
    color: $gray-2;

    @include largerThan($large) {
      justify-content: space-between;
      flex-flow: row;
    }

    &-title {
      font-size: 2rem;
      flex: 1 1 50%;
      margin-bottom: 10px;
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
