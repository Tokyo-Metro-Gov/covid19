<template>
  <v-btn-toggle
    :value="value"
    class="DataSelector"
    mandatory
    @change="$emit('input', $event)"
  >
    <v-btn
      v-for="(dataType, i) in dataTypes"
      :key="i"
      v-ripple="false"
      :value="dataType.value"
      class="DataSelector-Button"
    >
      {{ $t(dataType.tKey) }}
    </v-btn>
  </v-btn-toggle>
</template>

<i18n src="./DataSelector.i18n.json"></i18n>

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
    },
    dataTypes: {
      type: Array,
      required: false,
      default: () => []
    }
  }
}
</script>
