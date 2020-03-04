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
    margin-top: 20px;
    text-align: right;
    &-summary {
      display: inline-block;
      font-family: Hiragino Sans;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      &-unit {
        font-size: 0.6em;
      }
    }
    &-date {
      display: inline-block;
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
    }
  }
}
.DataView {
  @include card-container();
  height: 100%;
  &-Header {
    background-color: transparent !important;
    height: auto !important;
  }
  &-TitleContainer {
    padding: 14px 0 8px;
  }
  &-Title {
    @include card-h2();
  }
  &-CardText {
    margin-bottom: 46px;
    margin-top: 20px;
  }
  &-Footer {
    background-color: $white !important;
    text-align: right;
    margin: 2px 4px 12px;
    flex-direction: row-reverse;
    @include font-size(12);
    color: $gray-3 !important;
  }
}
.v-toolbar__content {
  height: auto !important;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DataViewBasicInfoPanel extends Vue {
  @Prop() private lText!: string
  @Prop() private sText!: string
  @Prop() private unit!: string
}
</script>
