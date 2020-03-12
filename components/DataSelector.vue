<template>
  <v-btn-toggle
    :value="value"
    class="DataSelector"
    mandatory
    @change="$emit('input', $event)"
  >
    <v-btn v-ripple="false" value="transition" class="DataSelector-Button">
      {{ $t('日別') }}
    </v-btn>
    <v-btn v-ripple="false" value="cumulative" class="DataSelector-Button">
      {{ $t('累計') }}
    </v-btn>
  </v-btn-toggle>
</template>

<i18n>
{
  "ja": {
    "日別": "日別",
    "累計": "累計"
  },
  "en": {
    "日別": "daily",
    "累計": "total"
  },
  "zh-cn": {
    "日別": "每日",
    "累計": "累计"
  },
  "zh-tw": {
    "日別": "每日",
    "累計": "累計"
  },
  "ko": {
    "日別": "날짜별",
    "累計": "총 집계"
  },
  "pt-BR": {
    "日別": "diário",
    "累計": "total"
  },
  "ja-basic": {
    "日別": "いちにちごと",
    "累計": "ぜんぶで"
  }
}
</i18n>

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
