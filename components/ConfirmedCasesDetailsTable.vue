<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.tall, $style.parent, $style.confirmed]">
      <div :class="$style.pillar">
        <div :class="$style.content">
          <span>
            {{ $t('陽性者数') }}
            <br />({{ $t('累計') }})
          </span>
          <span>
            <strong>{{ 陽性者数.toLocaleString() }}</strong>
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
                <strong>{{ 入院中.toLocaleString() }}</strong>
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
                    <strong>{{ 軽症中等症.toLocaleString() }}</strong>
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
                    <strong>{{ 重症.toLocaleString() }}</strong>
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
                <strong>{{ 死亡.toLocaleString() }}</strong>
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
                <strong>{{ 退院.toLocaleString() }}</strong>
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
    陽性者数: {
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
    }
  }
})
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxh: 150px;
$default-boxdiff: 35px;

// .container > .box > (.group > .box > ...) .pillar > .content

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

.pillar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 auto;
  text-align: center;
  width: 100%;
  border: $default-bdw solid $green-1;
}

.group {
  display: flex;
  flex: 0 0 auto;
  padding-left: 0;
  padding-top: $default-bdw;
  border-top: $default-bdw solid $green-1;
  border-left: $default-bdw solid $green-1;
}

.box {
  display: flex;

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
      margin-top: -($default-boxdiff - $default-bdw * 2);
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  &.confirmed {
    width: 100%;

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

.content {
  min-height: $default-boxh;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > span {
    display: block;
    width: 100%;

    @include font-size(16);

    &:last-child {
      margin-top: 0.1em;
    }

    &:not(:last-child) {
      overflow-wrap: break-word;
    }
  }
  span strong {
    @include font-size(18);
  }

  span.unit {
    @include font-size(16);
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
  .pillar {
    border-width: px2vw($bdw, $vw);
  }

  .group {
    padding-top: px2vw($bdw, $vw);
    border-top-width: px2vw($bdw, $vw);
    border-left-width: px2vw($bdw, $vw);
  }

  .content {
    > span {
      @include font-size($fz);
    }
    span strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }
  }

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
        margin-top: px2vw((-($boxdiff - $bdw * 2)), $vw);
      }
    }

    &.confirmed {
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
}

// variables.scss Breakpoints: huge (1440)
@include lessThan(1440) {
  @include override(1440, 3, 15, 150, 35);
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 2, 13, 107, 24);
}

// variables.scss Breakpoints: large (1170)
@include lessThan(1170) {
  @include override(1170, 2, 13, 107, 24);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 4, 14, 180, 40);
}

@include lessThan(767) {
  @include override(960, 3, 14, 180, 40);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 150, 35);
}

@include lessThan(420) {
  @include override(600, 2, 12, 150, 35);
}
</style>
