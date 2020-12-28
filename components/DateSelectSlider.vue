<template>
  <v-range-slider
    v-model="sliderValue"
    :value="sliderValue"
    :label="$t('表示期間')"
    :rules="rules"
    :max="sliderMax"
    :min="0"
    thumb-label="always"
    style="padding-top: 45px;"
    color="#F07828"
    track-color="#fcd6bd"
    :thumb-size="38"
  >
    <template v-slot:thumb-label="props">
      {{ getSliderLabels(props.value) }}
    </template>
  </v-range-slider>
</template>

<style>
.v-slider__thumb-label {
  font-size: 0.8rem !important;
}
</style>

<script>
export default {
  name: 'DateSelectSlider',
  props: {
    chartData: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    },
    sliderMax: {
      type: Number,
      required: true,
      default: 1
    },
    isObject: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      sliderValue: this.value,
      rules: [
        v =>
          Math.abs(v[0] - v[1]) >= 13 ||
          this.$t('表示期間の最小範囲は14日間です')
      ]
    }
  },
  watch: {
    sliderMax() {
      this.sliderValue = [0, this.sliderMax]
    },
    sliderValue(newValue, oldValue) {
      if (Math.abs(newValue[0] - newValue[1]) < 13) {
        this.sliderValue = oldValue
      } else {
        this.$emit('sliderInput', newValue)
      }
    }
  },
  methods: {
    getSliderLabels(id) {
      let day = ''
      if (!this.chartData || this.chartData.length === 0) {
        return 1
      }
      if (!this.isObject) {
        day = this.chartData[id]
      } else {
        day = this.chartData[id].label
      }
      return day
    }
  }
}
</script>
