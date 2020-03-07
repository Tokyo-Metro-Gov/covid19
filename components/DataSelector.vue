<template>
  <v-btn-toggle
    :value="value"
    class="DataSelector"
    mandatory
    @change="$emit('input', $event)"
  >
    <v-btn
      v-ripple="false"
      :value="btnData[0].attr"
      class="DataSelector-Button"
    >
      {{ btnData[0].text }}
    </v-btn>
    <v-btn
      v-ripple="false"
      :value="btnData[1].attr"
      class="DataSelector-Button"
    >
      {{ btnData[1].text }}
    </v-btn>
  </v-btn-toggle>
</template>

<style lang="scss">
.DataSelector {
  margin-top: 2px;
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
    displayType: {
      type: String,
      required: false,
      default: 'time'
    }
  },
  computed: {
    btnData() {
      return this.displayType === 'time'
        ? [
            { attr: 'transition', text: '日別' },
            { attr: 'cumulative', text: '累计' }
          ]
        : [
            { attr: 'table', text: 'テーブル' },
            { attr: 'graph', text: 'グラフ' }
          ]
    }
  }
}
</script>
