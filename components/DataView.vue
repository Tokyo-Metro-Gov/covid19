<template>
  <v-card class="DataView">
    <v-toolbar flat class="DataView-Header">
      <div class="DataView-TitleContainer">
        <v-toolbar-title class="DataView-Title">
          {{ title }}
        </v-toolbar-title>
        <slot name="button" />
      </div>
    </v-toolbar>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-footer class="DataView-Footer">
      2020/3/2 08:00 更新
    </v-footer>
  </v-card>
</template>

<style>
.CardHeader {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #4d4d4d;
}
.CardFooter {
  font-family: Hiragino Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 15px;

  color: #808080;
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DataView extends Vue {
  @Prop() private title!: string
  @Prop() private lastUpdateDate!: Date
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
