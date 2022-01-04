<template>
  <div class="range-slider">
    <span class="range-slider-title">{{ $t('表示期間') }}</span>
    <div class="range-slider-inner">
      <input
        :id="`start-${id}`"
        v-model="start"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @change="$emit('start-date', getDateFormat($event.target.value))"
      />
      <input
        :id="`end-${id}`"
        v-model="end"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @change="$emit('end-date', getDateFormat($event.target.value))"
      />
      <div class="range-slider-label">
        <output :for="`start-${id}`">
          {{ $t(`{date}から`, { date: getDisplayDate(start) }) }}
        </output>
        <output :for="`end-${id}`">
          {{ $t(`{date}まで`, { date: getDisplayDate(end) }) }}
        </output>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type Data = {
  start: number
  end: number
  step: number
}

type Methods = {
  getDateFormat: (seconds: number) => string
  getDisplayDate: (seconds: number) => string
}

type Computed = {
  min: number
  max: number
}

type Props = {
  id: string
  minDate: string
  maxDate: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    id: {
      type: String,
      required: true,
    },
    minDate: {
      type: String,
      default: '2020-01-01',
    },
    maxDate: {
      type: String,
      default: dayjs().format('YYYY-MM-DD'),
    },
  },
  data() {
    return {
      start: dayjs(this.minDate).unix(),
      end: dayjs(this.maxDate).unix(),
      step: 86400,
    }
  },
  watch: {
    start(value) {
      if (value >= 0 && value > this.end)
        this.start = dayjs.unix(this.end).subtract(2, 'day').unix()
    },
    end(value) {
      if (value >= 0 && value < this.start)
        this.end = dayjs.unix(this.start).add(2, 'day').unix()
    },
  },
  computed: {
    min() {
      return dayjs(this.minDate).unix()
    },
    max() {
      return dayjs(this.maxDate).unix()
    },
  },
  methods: {
    getDateFormat(seconds: number) {
      return dayjs.unix(seconds).format('YYYY-MM-DD')
    },
    getDisplayDate(seconds: number) {
      const date = this.getDateFormat(seconds)
      return this.$d(dayjs(date).toDate(), 'date')
    },
  },
}
export default options
</script>

<style scoped lang="scss">
input[type='range'] {
  width: 100%;
  height: 30px;
  overflow: hidden;
  cursor: pointer;
  outline: none;
}

input[type='range'],
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: none;
}

input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 2px;
  background: $green-1;
}

input[type='range']:nth-child(2)::-webkit-slider-runnable-track {
  background: none;
}

input[type='range']::-webkit-slider-thumb {
  position: relative;
  height: 15px;
  width: 15px;
  margin-top: -7px;
  background: #fff;
  border: 1px solid $green-1;
  border-radius: 25px;
  z-index: 1;
}

input[type='range']:nth-child(1)::-webkit-slider-thumb {
  z-index: 2;
}

.range-slider {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
}

.range-slider-title {
  margin: 6px 12px 0 0;

  @include font-size(14);
}

.range-slider-inner {
  position: relative;
  flex: 1 1 auto;
}

.range-slider input {
  position: absolute;
}

.range-slider-label {
  flex: 0 0 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 28px;

  @include font-size(14);
}
</style>
