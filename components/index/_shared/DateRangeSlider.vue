<template>
  <div class="range-slider" role="group" aria-labelledby="date-range">
    <span id="date-range" class="range-slider-title">{{ $t('表示期間') }}</span>
    <div class="range-slider-container">
      <div class="range-slider-inner">
        <label
          :for="`start-${id}`"
          :style="{
            transform: `translateX(${((start - min) / (max - min)) * 100}%)`,
          }"
          class="range-slider-inner-label label-start"
        >
          <span role="img" :aria-label="$t('開始日')">▶</span>
        </label>
        <span
          aria-hidden="true"
          :style="{
            transform: `translateX(${((start - min) / (max - min)) * 100}%)`,
          }"
          class="range-slider-inner-label-value label-value-start"
        >
          {{ getDisplayDate(start) }}
        </span>
        <input
          :id="`start-${id}`"
          :value="start"
          class="input-range-start"
          type="range"
          :min="min"
          :max="max"
          :step="step"
          :aria-valuetext="getDisplayDate(start)"
          @change="
            $emit('start-date', getDateFormat($event.target.value))
            start = $event.target.value
          "
        />
        <label
          :for="`end-${id}`"
          :style="{
            transform: `translateX(${((end - min) / (max - min)) * 100}%)`,
          }"
          class="range-slider-inner-label label-end"
        >
          <span role="img" :aria-label="$t('終了日')">◀</span>
        </label>
        <span
          aria-hidden="true"
          :style="{
            transform: `translateX(${((end - min) / (max - min)) * 100}%)`,
          }"
          class="range-slider-inner-label-value label-value-end"
        >
          {{ getDisplayDate(end) }}
        </span>
        <input
          :id="`end-${id}`"
          :value="end"
          type="range"
          class="input-range-end"
          :min="min"
          :max="max"
          :step="step"
          :aria-valuetext="getDisplayDate(end)"
          @change="
            $emit('end-date', getDateFormat($event.target.value))
            end = $event.target.value
          "
        />
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
    getDateFormat(seconds: number): string {
      return dayjs.unix(seconds).format('YYYY-MM-DD')
    },
    getDisplayDate(seconds: number): string {
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

input[type='range'] {
  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb,
  & {
    -webkit-appearance: none;
  }

  &:focus {
    outline: none;
  }

  position: relative;
  grid-column: 1;
  grid-row: 2;
  margin: 0;
  background: none;
  color: $gray-1;
  font: inherit;
  cursor: pointer;
  pointer-events: none;
  width: 100%;

  &::after {
    position: absolute;
    display: block;
    width: 100%;
    height: 15px;
    content: '';
    pointer-events: auto;
  }

  &.input-range-start::after {
    top: -15px;
  }

  &.input-range-end::after {
    bottom: -15px;
  }

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
  margin: 23px 12px 0 0;

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
  background-image: linear-gradient(
    0deg,
    transparent 33%,
    $gray-4 33%,
    $gray-4 66%,
    transparent 66%
  );
}

.range-slider-inner-label {
  position: absolute;
  width: 100%;
  left: -7em;

  @include font-size(12);

  &.label-start {
    top: 0;
  }

  &.label-end {
    bottom: 0;
  }
}

.range-slider-inner-label-value {
  position: relative;
  grid-column: 1;
  left: -6em;

  @include font-size(12);

  &.label-value-start {
    grid-row: 1;
  }

  &.label-value-end {
    grid-row: 3;
  }
}
</style>
