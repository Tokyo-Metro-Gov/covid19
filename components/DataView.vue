<template>
  <v-card>
    <v-toolbar flat class="CardHeader">
      <v-toolbar-title class="CardTitle">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot name="button" />
    </v-toolbar>
    <v-card-text>
      <slot />
    </v-card-text>
    <v-footer class="CardFooter">
      {{ lastUpdateDate || format - date }} 更新
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
  @Prop({
    default: new Date()
  })
  private lastUpdateDate!: Date
}
</script>
