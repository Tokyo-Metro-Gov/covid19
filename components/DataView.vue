<template>
  <v-card class="DataView pa-1">
    <div class="DataView-Content">
      <div class="DataView-TitleContainer">
        <div class="DataView-Title">
          {{ title }}
        </div>
        <div>
          <slot name="button" />
        </div>
      </div>
      <slot name="infoPanel" />
    </div>
    <v-card-text
      :class="
        $vuetify.breakpoint.xs ? 'DataView-CardTextForXS' : 'DataView-CardText'
      "
    >
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
  &-Content {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
  }
  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      text-align: right;
      white-space: nowrap;
      &-unit {
        font-size: 0.6em;
        width: 100%;
      }
    }
    &-date {
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
    }
  }
}
.DataView {
  @include card-container();
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 100%;
  &-content {
    height: auto !important;
    .v-toolbar__content {
      align-items: start;
    }
  }
  &-Header {
    background-color: transparent !important;
    height: auto !important;
  }
  &-TitleContainer {
    display: flex;
    flex-flow: column;
    padding: 14px 0 8px;
    color: $gray-2;
  }
  &-Title {
    font-size: 1.25rem;
    line-height: 1.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &-CardText {
    margin-bottom: 46px;
    margin-top: 35px;
  }
  &-CardTextForXS {
    margin-bottom: 46px;
    margin-top: 70px;
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
