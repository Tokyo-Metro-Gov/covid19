<template>
  <v-radio-group
    :aria-controls="targetId"
    :value="value"
    :column="false"
    :row="true"
    class="DataSelector"
    mandatory="mandatory"
    @change="$emit('input', $event)"
  >
    <v-radio
      :ripple="false"
      :aria-checked="value === 'transition' ? 'true' : 'false'"
      value="transition"
      :label="$t('日別')"
    />
    <v-radio
      :ripple="false"
      :aria-checked="value === 'cumulative' ? 'true' : 'false'"
      value="cumulative"
      :label="$t('累計')"
    />
  </v-radio-group>
</template>

<style lang="scss">
.DataSelector .v-input--radio-group__input {
  padding: 3px;
  border: 1px solid $gray-4;
  border-radius: 4px;
  align-items: stretch;

  & .v-radio {
    margin-right: inherit;
  }

  & .v-label {
    display: block;
    line-height: normal;
    border: 1px solid $white;
    border-radius: 4px;
    border-width: thin;
    box-shadow: none;
    padding: 5px 18px 23px 18px;
    height: 24px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.1s;
    color: $gray-1;
    background-color: $white;
    justify-content: center;

    &:hover {
      opacity: 0.5;
      outline: dotted $gray-3 1px;
      border-radius: 4px;
      color: $white;
      background-color: $green-1;
    }
  }

  & .v-input--selection-controls__input {
    @include visually-hidden;
  }

  & .v-item--active .v-label {
    background-color: $gray-2;
    color: $white;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DataSelector',
  props: {
    value: {
      type: String,
      default: 'transition'
    },
    targetId: {
      type: String,
      default: (val: string | null) => {
        // TODO: type defaults to null when NullableString is in
        return typeof val === 'string' && val !== '' ? val : null
      }
    }
  }
})
</script>
