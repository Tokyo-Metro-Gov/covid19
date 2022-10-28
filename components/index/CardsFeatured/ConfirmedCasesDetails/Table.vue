<template>
  <ul :class="$style.container">
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span> {{ $t('陽性者数') }} ({{ $t('累計') }}) </span>
        <span>
          <strong>{{ items['陽性者数累計']?.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
    </li>
    <li :class="[$style.box, $style.parent, $style.space]">
      <div :class="$style.content">
        <span>{{ $t('入院') }}</span>
        <span>
          <strong>{{ items['入院中']?.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <!-- eslint-disable vue/no-v-html-->
            <span v-html="$t('軽症・中等症')" />
            <!-- eslint-enable vue/no-v-html-->
            <span>
              <strong>{{ items['軽症・中等症']?.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('確保病床') }}</span>
                <span>
                  <strong>{{ items['確保病床']?.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('床') }}</span>
                </span>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('重症') }}</span>
            <span>
              <strong>{{ items['重症']?.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('確保病床') }}</span>
                <span>
                  <strong>{{ items['確保病床重症']?.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('床') }}</span>
                </span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span> {{ $t('宿泊療養') }} </span>
        <span>
          <strong>{{ items['宿泊療養']?.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('宿泊療養施設 受入可能室数') }}</span>
            <span>
              <strong>{{ items['受入可能室数']?.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('室') }}</span>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('感染時拡大時療養施設 床数') }}</span>
            <span>
              <strong>{{
                items['感染拡大時療養施設']?.toLocaleString()
              }}</strong>
              <span :class="$style.unit">{{ $t('床') }}</span>
            </span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box]">
      <div :class="[$style.content, $style.space]">
        <span> {{ $t('死亡者数') }} ({{ $t('累計') }}) </span>
        <span>
          <strong>{{ items['死亡']?.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import Vue from 'vue'

import { Data as IPositiveStatusSummaryData } from '@/libraries/auto_generated/data_converter/convertPositiveStatusSummary'

export default Vue.extend({
  props: {
    items: {
      type: Object as PropType<IPositiveStatusSummaryData>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxdiff: 35px;

// .container > .box > (.group > .box > ...) .pillar > .content

.container {
  width: 100%;
  box-sizing: border-box;
  color: $green-1;
  line-height: 1.35;

  * {
    box-sizing: border-box;
  }

  // override default styles
  padding-left: 0 !important;

  ul {
    padding-left: 0;
  }
}

.group {
  flex: 0 0 auto;
  padding-left: $default-bdw !important;
  border-top: $default-bdw solid $green-1;
  border-left: $default-bdw solid $green-1;
}

.content {
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: $default-bdw solid $green-1;

  > span {
    display: block;

    @include font-size(14);

    &:first-child {
      text-align: left;
      margin-top: 1px;
      flex-shrink: 2;
    }

    &:last-child {
      margin-left: 10px;
      text-align: right;

      // white-space: nowrap;
      flex-shrink: 1;
    }

    &:not(:last-child) {
      overflow-wrap: break-word;
    }
  }

  strong {
    @include font-size(16);
  }

  span.unit {
    @include font-size(14);
  }

  &.space {
    margin-top: 18px;
  }
}

.box {
  display: block;
  margin-top: $default-bdw;

  &.parent {
    border-top: $default-bdw solid $green-1;
    border-left: $default-bdw solid $green-1;
    position: relative;
    padding-left: $default-boxdiff - $default-bdw * 2;

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: -1px;
      bottom: 0;
      width: $default-boxdiff - $default-bdw - 2;
      border-bottom: $default-bdw solid $green-1;
    }

    > .content {
      margin-left: -($default-boxdiff - $default-bdw * 2);
      width: calc(100% + #{($default-boxdiff - $default-bdw * 2)});
      border-top: none;
      border-left: none;
      border-bottom: none;
    }
  }

  &.space {
    margin-top: 18px;
  }
}

@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxdiff) {
  .group {
    padding-left: px2vw($bdw, $vw) !important;
    border-top: px2vw($bdw, $vw) solid $green-1;
    border-left: px2vw($bdw, $vw) solid $green-1;
  }

  .content {
    padding: px2vw(5, $vw) px2vw(10, $vw);
    border: px2vw($bdw, $vw) solid $green-1;

    > span {
      @include font-size($fz);

      &:first-child {
        margin-top: px2vw(1, $vw);
      }

      &:last-child {
        margin-left: 10px;
      }
    }

    strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }
  }

  .box {
    margin-top: px2vw($bdw, $vw);

    &.parent {
      border-top: px2vw($bdw, $vw) solid $green-1;
      border-left: px2vw($bdw, $vw) solid $green-1;
      padding-left: px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2;

      &::after {
        width: px2vw($boxdiff - $bdw, $vw);
        border-bottom: px2vw($bdw, $vw) solid $green-1;
      }

      > .content {
        margin-left: -(px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2);
        width: calc(100% + #{(px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2)});
      }
    }
  }
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 3, 14, 35);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 3, 14, 35);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 35);
}
</style>
