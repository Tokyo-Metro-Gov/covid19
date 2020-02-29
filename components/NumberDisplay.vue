<template>
<v-card sm-3>
  <v-card-title>
    {{ title }}
  </v-card-title>
  <v-card-text>
    {{ `${number} ${unit}` }}
  </v-card-text>
</v-card>
</template>

<style>
</style>

<script>
export default {
  props: ['title', 'number', 'unit']
}
</script>
