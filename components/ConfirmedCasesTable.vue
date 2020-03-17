<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.tall, $style.tested]">
      <div :class="[$style.pillar]">
        <div :class="$style.content">
          <!-- eslint-disable vue/no-v-html-->
          <span v-html="$t('検査実施<br />人数')" />
          <!-- eslint-enable vue/no-v-html-->
          <span>
            <b>{{ 検査実施人数 }}</b>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
    <li :class="[$style.box, $style.tall, $style.parent, $style.confirmed]">
      <div :class="$style.pillar">
        <div :class="$style.content">
          <span>
            {{ $t('陽性者数') }}
            <br />{{ $t('(累積)') }}
          </span>
          <span>
            <b>{{ 陽性物数 }}</b>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent, $style.hospitalized]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <span>{{ $t('入院中') }}</span>
              <span>
                <b>{{ 入院中 }}</b>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </span>
            </div>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box, $style.short, $style.minor]">
              <div :class="$style.pillar">
                <div :class="$style.content">
                  <!-- eslint-disable vue/no-v-html-->
                  <span v-html="$t('軽症・<br />中等症')" />
                  <!-- eslint-enable vue/no-v-html-->
                  <span>
                    <b>{{ 軽症中等症 }}</b>
                    <span :class="$style.unit">{{ $t('人') }}</span>
                  </span>
                </div>
              </div>
            </li>
            <li :class="[$style.box, $style.short, $style.severe]">
              <div :class="$style.pillar">
                <div :class="$style.content">
                  <span>{{ $t('重症') }}</span>
                  <span>
                    <b>{{ 重症 }}</b>
                    <span :class="$style.unit">{{ $t('人') }}</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box, $style.deceased]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <span>{{ $t('死亡') }}</span>
              <span>
                <b>{{ 死亡 }}</b>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </span>
            </div>
          </div>
        </li>
        <li :class="[$style.box, $style.recovered]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <span>{{ $t('退院') }}</span>
              <span>
                <b>{{ 退院 }}</b>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

/* eslint-disable vue/prop-name-casing */
export default Vue.extend({
  props: {
    検査実施人数: {
      type: Number,
      required: true
    },
    陽性物数: {
      type: Number,
      required: true
    },
    入院中: {
      type: Number,
      required: true
    },
    軽症中等症: {
      type: Number,
      required: true
    },
    重症: {
      type: Number,
      required: true
    },
    死亡: {
      type: Number,
      required: true
    },
    退院: {
      type: Number,
      required: true
    }
  },
  methods: {
    /** 桁数に応じて位置の調整をする */
    getAdjustX(input: number) {
      const length = input.toString(10).length
      switch (length) {
        case 1: {
          return 3
        }
        case 2: {
          return 0
        }
        case 3: {
          return -3
        }
        case 4: {
          return -8
        }
        default: {
          return 0
        }
      }
    },
    /** グラフ内容がわかる支援技術用テキストの中身を取得する **/
    ariaLabel(
      inspected: number,
      positive: number,
      hospitalized: number,
      mild: number,
      critically: number,
      deceased: number,
      discharged: number
    ) {
      const ariaLabel = `検査陽性者の状況: 検査実施人数は${inspected}人、うち累積の陽性者数は${positive}人です。入院中は${hospitalized}人で、うち軽症・中等症は${mild}人、また重症は${critically}人です。さらに死亡は${deceased}人、退院は${discharged}人です。`
      return ariaLabel
    }
  }
})
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxdiff: 35px;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
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
.box {
  display: flex;
  align-items: flex-end;
  flex: 0 0 auto;
  &.parent {
    border-top: $default-bdw solid $green-1;
    border-left: $default-bdw solid $green-1;
    position: relative;
    padding-top: $default-boxdiff - $default-bdw * 2;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      right: 0;
      height: $default-boxdiff - $default-bdw - 2;
      border-left: $default-bdw solid $green-1;
    }
    > .pillar {
      margin-top: -$default-boxdiff;
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }
  &.tested {
    // [7列] 1/7セル
    width: calc((100% - #{$default-bdw} * 6) / 7);
    color: $gray-1;
    > .pillar {
      border-color: $gray-1;
    }
  }
  &.confirmed {
    margin-left: $default-bdw;
    // [7列] 6/7
    width: calc((100% - #{$default-bdw} * 6) / 7 * 6 + #{$default-bdw} * 5);
    > .pillar {
      // [6列] 1/6
      width: calc((100% + #{$default-bdw} * 2) / 6 - #{$default-bdw} * 3);
    }
    > .group {
      // [6列] 5/6
      width: calc((100% + #{$default-bdw} * 2) / 6 * 5 + #{$default-bdw});
    }
  }
  &.hospitalized {
    margin-left: $default-bdw;
    // [5列] 3/5
    width: calc(100% / 5 * 3 - #{$default-bdw});
    > .pillar {
      // [3列] 1/3
      width: calc((100% + #{$default-bdw} * 2) / 3 - #{$default-bdw} * 3);
    }
    > .group {
      // [3列] 2/3
      width: calc((100% + #{$default-bdw} * 2) / 3 * 2 + #{$default-bdw});
    }
  }
  &.minor,
  &.severe {
    margin-left: $default-bdw;
    // [2列] 1/2
    width: calc(100% / 2 - #{$default-bdw});
  }
  &.deceased,
  &.recovered {
    margin-left: $default-bdw;
    // [5列] 1/5
    width: calc(100% / 5 - #{$default-bdw});
  }
}
.pillar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 auto;
  text-align: center;
  width: 100%;
  height: 100%;
  border: $default-bdw solid $green-1;
  > span {
    display: block;
    @include font-size(14);
    &:last-child {
      margin-top: 0.1em;
    }
  }
  span b {
    @include font-size(16);
  }
  span.unit {
    @include font-size(14);
  }
}
.group {
  height: 100%;
  padding-left: 0;
  padding-top: $default-bdw;
  border-top: $default-bdw solid $green-1;
  border-left: $default-bdw solid $green-1;
  display: flex;
  align-items: flex-end;
  .box {
    height: 100%;
  }
}
.content {
  height: 100%;
  min-height: 150px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  > span:first-child {
    word-break: break-all;
  }
}

@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxh, $boxdiff) {
  .box {
    &.parent {
      border-top-width: px2vw($bdw, $vw);
      border-left-width: px2vw($bdw, $vw);
      padding-top: px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2;
      &::after {
        height: px2vw($boxdiff - $bdw, $vw);
        border-left-width: px2vw($bdw, $vw);
      }
      > .pillar {
        margin-top: px2vw((-$boxdiff), $vw);
      }
    }
    &.tested {
      width: calc((100% - #{px2vw($bdw, $vw)} * 6) / 7);
    }
    &.confirmed {
      margin-left: px2vw($bdw, $vw);
      width: calc(
        (100% - #{px2vw($bdw, $vw)} * 6) / 7 * 6 + #{px2vw($bdw, $vw)} * 5
      );
      > .pillar {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 6 - #{px2vw($bdw, $vw)} * 3
        );
      }
      > .group {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 6 * 5 + #{px2vw($bdw, $vw)}
        );
      }
    }
    &.hospitalized {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 5 * 3 - #{px2vw($bdw, $vw)});
      > .pillar {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 - #{px2vw($bdw, $vw)} * 3
        );
      }
      > .group {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 * 2 + #{px2vw($bdw, $vw)}
        );
      }
    }
    &.minor,
    &.severe {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 2 - #{px2vw($bdw, $vw)});
    }
    &.deceased,
    &.recovered {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 5 - #{px2vw($bdw, $vw)});
    }
  }
  .pillar {
    border: px2vw($bdw, $vw) solid $green-1;
    > span {
      @include font-size($fz);
    }
    span b {
      @include font-size($fz + 2);
    }
    span.unit {
      @include font-size($fz);
    }
  }
  .group {
    padding-top: px2vw($bdw, $vw);
    border-top-width: px2vw($bdw, $vw);
    border-left-width: px2vw($bdw, $vw);
  }
}

// variables.scss Breakpoints: huge (1440)
@include lessThan(1440) {
  @include override(1440, 3, 14, 150, 35);
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 2, 12, 107, 24);
}

// variables.scss Breakpoints: large (1170)
@include lessThan(1170) {
  @include override(1170, 2, 11, 107, 24);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 4, 16, 180, 40);
}
@include lessThan(767) {
  @include override(960, 3, 12, 180, 40);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 150, 35);
}
@include lessThan(420) {
  @include override(600, 2, 10, 150, 35);
}
</style>
