<template>
  <v-card class="DataView pa-1">
    <v-toolbar flat>
      <div class="DataView-TitleContainer">
        <v-toolbar-title>
          {{ title }}
        </v-toolbar-title>
        <slot name="button" />
      </div>
    </v-toolbar>
    <v-card-text class="DataView-CardText">
      <slot />
    </v-card-text>
    <v-footer class="DataView-Footer"> {{ date }} 更新 </v-footer>
  </v-card>
</template>

<style>
.DataView {
  height: 100%;
}
.DataView-CardText {
  margin-bottom: 46px;
}
.DataView-Footer {
  margin: 4px 0px 12px !important;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DataView extends Vue {
  @Prop() private title!: string
  @Prop() private date!: string
}
</script>

<style lang="scss">
.DataView {
  @include card-container();
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
