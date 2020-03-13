<template>
  <v-btn-toggle
    :value="value"
    class="DataSelector"
    mandatory
    @change="$emit('input', $event)"
  >
    <v-btn v-ripple="false" value="absolute" class="DataSelector-Button">
      実数値
    </v-btn>
    <v-btn v-ripple="false" value="relative" class="DataSelector-Button">
      相対値
    </v-btn>
  </v-btn-toggle>
</template>

<style lang="scss">
.DataSelector {
  margin-top: 20px;
  border: 1px solid $gray-4;
  background-color: $white;
  &-Button {
    border: none !important;
    margin: 2px;
    border-radius: 4px !important;
    height: 24px !important;
    font-size: 12px !important;
    color: $gray-1 !important;
    background-color: $white !important;
    &::before {
      background-color: inherit;
    }
  }

  & .v-btn--active {
    background-color: $gray-2 !important;
    color: $white !important;
  }
}
</style>

<script>
export default {
  name: 'DataSelector',
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
