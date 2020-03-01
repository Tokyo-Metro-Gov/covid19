<template>
  <v-btn-toggle :value="value" @change="$emit('input', $event)">
    <v-btn :value="'transition'">
      推移
    </v-btn>
    <v-btn :value="'cummulative'">
      累積
    </v-btn>
  </v-btn-toggle>
</template>

<style></style>

<script>
export default {
  name: 'DataSelector',
  props: ['value']
}
</script>
