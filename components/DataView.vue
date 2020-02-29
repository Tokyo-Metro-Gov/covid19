<template>
<v-card>
  <v-toolbar>
    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <slot name="button"></slot>
  </v-toolbar>
  <v-card-text>
    <slot></slot>
  </v-card-text>
</v-card>
</template>

<style>
</style>

<script>
export default {
  props: ['title']
}
</script>
