<template>
  <div class="range-slider" role="group" aria-labelledby="date-range">
    <span id="date-range" class="range-slider-title">{{ $t('表示期間') }}</span>
    <div class="range-slider-container">
      <div class="range-slider-inner">
        <label class="sr-only" :for="`start-${id}`">{{ $t('開始') }}</label>
        <input
          :id="`start-${id}`"
          v-model="start"
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :aria-valuetext="$t(`{date}から`, { date: getDisplayDate(start) })"
          @change="$emit('start-date', getDateFormat($event.target.value))"
        />
        <label class="sr-only" :for="`end-${id}`">{{ $t('終了') }}</label>
        <input
          :id="`end-${id}`"
          v-model="end"
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :aria-valuetext="$t(`{date}まで`, { date: getDisplayDate(end) })"
          @change="$emit('end-date', getDateFormat($event.target.value))"
        />
      </div>
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
  defaultDayPeriod: number
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
    defaultDayPeriod: {
      type: Number,
      default: 60,
    },
  },
  data() {
    return {
      start: dayjs(this.maxDate).subtract(this.defaultDayPeriod, 'day').unix(),
      end: dayjs(this.maxDate).unix(),
      step: 86400,
    }
  },
  watch: {
    start(value) {
      if (value >= 0 && value >= this.end)
        this.start = dayjs.unix(this.end).subtract(14, 'day').unix()
    },
    end(value) {
      if (value >= 0 && value <= this.start)
        this.end = dayjs.unix(this.start).add(14, 'day').unix()
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
$h: 1.2rem;

@mixin track() {
  width: 100%;
  height: 100%;
  background: none;
}

@mixin thumb() {
  border: none;
  width: $h;
  height: $h;
  border-radius: 3em;
  background: currentColor;
  pointer-events: auto;
  cursor: pointer;
}

@mixin thumb-focus() {
  outline-offset: 2px;
  outline: 2px solid $focus;
}

.sr-only {
  position: absolute;
  clip-path: inset(50%);
}

input[type='range'] {
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb,
  & {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  grid-column: 1;
  grid-row: 2;
  margin: 0;
  background: none;
  color: $gray-1;
  font: inherit;
  pointer-events: none;
  width: 100%;

  &::-webkit-slider-runnable-track {
    @include track;
  }

  &::-moz-range-track {
    @include track;
  }

  &::-webkit-slider-thumb {
    @include thumb;
  }

  &::-moz-range-thumb {
    @include thumb;
  }

  &:focus-visible::-webkit-slider-thumb {
    @include thumb-focus;
  }

  &:focus-visible::-moz-range-thumb {
    @include thumb-focus;
  }
}

.range-slider {
  width: 100%;
  display: flex;
  margin-top: 16px;
}

.range-slider-title {
  margin: 6px 12px 0 0;

  @include font-size(14);
}

.range-slider-container {
  flex: 1 1 auto;
}

.range-slider-inner {
  display: grid;
  grid-template-rows: max-content $h;
  grid-template-columns: auto;
  position: relative;
  margin: 1em auto;
  width: 100%;
  background: linear-gradient(0deg, $gray-4 $h, transparent 0);
}

.range-slider-label {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  @include font-size(14);
}
</style>
