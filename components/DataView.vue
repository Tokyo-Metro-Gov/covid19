<template>
  <v-card>
    <v-toolbar>
      <v-toolbar-title>
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
</style>

<script>
export default {
  props: ['title']
}
</script>
