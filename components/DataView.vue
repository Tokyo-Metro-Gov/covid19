<template>
  <v-card class="DataView">
    <v-toolbar flat class="DataView-Header">
      <v-toolbar-title class="DataView-Title">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot name="button" />
    </v-toolbar>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-footer class="CardFooter">
      {{ lastUpdateDate | datetimeFormatter }} 更新
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
  }
  &-Title {
    @include card-h2();
  }
}
</style>
