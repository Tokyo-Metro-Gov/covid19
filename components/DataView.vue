<template>
  <v-card>
    <v-toolbar flat class="CardTitleBar">
      <v-toolbar-title class="CardTitle">
        {{ title }}
      </v-toolbar-title>
      <v-spacer />
      <slot name="button" />
    </v-toolbar>
    <v-card-text>
      <slot />
    </v-card-text>
  </v-card>
</template>

<style>
.CardTitleBar {
}
</style>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataView extends Vue {
  @Prop() private title!: string;
}
</script>
