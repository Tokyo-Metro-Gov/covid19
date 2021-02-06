<template>
  <v-btn-toggle
    :aria-controls="targetId"
    :value="value"
    class="DataSelector"
    mandatory
    @change="$emit('input', $event)"
  >
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 1 ? 'true' : 'false'"
      :value="1"
      class="DataSelector-Button"
    >
      {{ $t('月') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 2 ? 'true' : 'false'"
      :value="2"
      class="DataSelector-Button"
    >
      {{ $t('火') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 3 ? 'true' : 'false'"
      :value="3"
      class="DataSelector-Button"
    >
      {{ $t('水') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 4 ? 'true' : 'false'"
      :value="4"
      class="DataSelector-Button"
    >
      {{ $t('木') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 5 ? 'true' : 'false'"
      :value="5"
      class="DataSelector-Button"
    >
      {{ $t('金') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 6 ? 'true' : 'false'"
      :value="6"
      class="DataSelector-Button"
    >
      {{ $t('土') }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :aria-pressed="value === 0 ? 'true' : 'false'"
      :value="0"
      class="DataSelector-Button"
    >
      {{ $t('日') }}
    </v-btn>
  </v-btn-toggle>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DataSelector',
  props: {
    value: {
      type: Number,
      default: 0,
    },
    targetId: {
      type: String,
      default: (val: string | null) => {
        return val && val !== '' ? val : null
      },
    },
  },
})
</script>

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
    color: $gray-1 !important;
    background-color: $white !important;
    @include font-size(12, true);

    &::before {
      background-color: inherit;
    }

    &:focus {
      outline: dotted $gray-3 1px;
    }
  }

  & .v-btn--active {
    background-color: $gray-2 !important;
    color: $white !important;
  }
}
</style>
