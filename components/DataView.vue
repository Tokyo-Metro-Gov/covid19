<template>
  <v-card class="DataView pa-1">
    <v-toolbar flat>
      <div class="DataView-TitleContainer">
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <slot name="button" />
      </div>
      <v-spacer />
      <div v-if="info" class="DataView-DataInfo">
        <span class="DataView-DataInfo-summary">

          {{info.lText}}<small class="DataView-DataInfo-summary-unit">{{info.unit}}</small>
        </span>
        <br />
        <small class="DataView-DataView-DataInfo-date">{{info.sText}}</small>
      </div>
    </v-toolbar>
    <v-card-text class="DataView-CardText">
      <slot />
    </v-card-text>
    <v-footer class="DataView-Footer"> {{ date }} 更新 </v-footer>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DataView extends Vue {
  @Prop() private title!: string
  @Prop() private date!: string
  @Prop() private info!: any // FIXME expect info as {lText:string, sText:string unit:string}
}
</script>

<style lang="scss">
.DataView {
  &-DataInfo {
    &-summary {
      font-family: Hiragino Sans;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      &-unit {
        font-size: 0.6em;
      }
    }
    &-date {
      font-size: 12px;
      line-height: 12px;
      color: #808080;
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
  height: 80px !important;
}
</style>
