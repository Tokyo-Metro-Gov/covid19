<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.tall, $style.tested]">
      <div :class="[$style.pillar]">
        <div :class="$style.content">
          <!-- eslint-disable vue/no-v-html-->
          <span>
            {{ $t('検査実施人数') }}
            <br />({{ $t('累計') }})
          </span>
          <!-- eslint-enable vue/no-v-html-->
          <span>
            <strong>{{ 累計人数 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
    <li :class="[$style.box, $style.tall, $style.parent, $style.cases]">
      <div :class="$style.title">
        {{ $t('検査実施件数') }}
        ({{ $t('累計') }})
      </div>
      <div :class="$style.pillar">
        <div :class="$style.content">
          <span>{{ $t('合計') }}</span>
          <span>
            <strong>{{ 合計件数 }}</strong>
            <span :class="$style.unit">{{ $t('件.tested') }}</span>
          </span>
        </div>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.inside]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <span>{{ $t('都内発生') }}</span>
              <span>
                <strong>{{ 都内発生件数 }}</strong>
                <span :class="$style.unit">{{ $t('件.tested') }}</span>
              </span>
            </div>
          </div>
        </li>
        <li :class="[$style.box, $style.others]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <span>{{ $t('その他.graph') }}</span>
              <span :class="$style.small">{{
                $t('（チャーター機・クルーズ船等）')
              }}</span>
              <span>
                <strong>{{ その他件数 }}</strong>
                <span :class="$style.unit">{{ $t('件.tested') }}</span>
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
    累計人数: {
      type: Number,
      required: true
    },
    合計件数: {
      type: Number,
      required: true
    },
    都内発生件数: {
      type: Number,
      required: true
    },
    その他件数: {
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

.content {
  min-height: $default-boxh;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > span {
    display: block;

    @include font-size(16);

    &:last-child {
      margin-top: 0.1em;
    }

    &:not(:last-child) {
      word-break: break-all;
    }
  }

  span strong {
    @include font-size(18);
  }

  span.unit {
    @include font-size(16);
  }

  .small {
    @include font-size(14);
  }
}

.box {
  display: flex;

  &.parent {
    border-top: $default-bdw solid $green-1;
    border-left: $default-bdw solid $green-1;
    position: relative;

    > .pillar {
      margin-top: -$default-bdw * 3;
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  &.tested {
    display: flex;
    flex: 0 0 auto;
    // [4列] 1/4セル
    width: calc((100% - #{$default-bdw} * 3) / 4);
  }

  &.cases {
    flex-wrap: wrap;
    align-items: stretch;
    margin-left: $default-bdw;
    // [4列] 3/4
    width: calc((100% - #{$default-bdw} * 3) / 4 * 3 + #{$default-bdw} * 2);

    > .title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      padding: 10px 10px 10px calc(10px + #{$default-bdw});
      border-right: $default-bdw solid $green-1;
    }

    > .pillar {
      // [3列] 1/3
      width: calc((100% + #{$default-bdw} * 2) / 3 - #{$default-bdw} * 3);
      align-self: flex-end;

      > .content {
        padding-top: 10px + $default-bdw * 3;
      }
    }

    > .group {
      // [3列] 2/3
      width: calc((100% + #{$default-bdw} * 2) / 3 * 2 + #{$default-bdw});
    }
  }

  &.inside,
  &.others {
    margin-left: $default-bdw;
    // [2列] 1/2
    width: calc(100% / 2 - #{$default-bdw});
  }
}

@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxh) {
  .pillar {
    border-width: px2vw($bdw, $vw);
  }

  .group {
    padding-top: px2vw($bdw, $vw);
    border-top-width: px2vw($bdw, $vw);
    border-left-width: px2vw($bdw, $vw);
  }

  .content {
    span strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }

    > span {
      @include font-size($fz);
    }

    .unit {
      @include font-size($fz - 2);
    }

    .small {
      @include font-size($fz - 1);
    }
  }

  .box {
    &.parent {
      border-top-width: px2vw($bdw, $vw);
      border-left-width: px2vw($bdw, $vw);

      > .pillar {
        margin-top: px2vw((-$bdw * 3), $vw);
      }
    }

    &.tested {
      width: calc((100% - #{px2vw($bdw, $vw)} * 3) / 4);
    }

    &.cases {
      margin-left: px2vw($bdw, $vw);
      width: calc(
        (100% - #{px2vw($bdw, $vw)} * 3) / 4 * 3 + #{px2vw($bdw, $vw)} * 2
      );

      > .title {
        margin-top: -1px;
        padding-left: calc(10px + #{px2vw($bdw, $vw)});
        border-right-width: px2vw($bdw, $vw);
      }

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

    &.inside,
    &.others {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 2 - #{px2vw($bdw, $vw)});
    }
  }
}

// variables.scss Breakpoints: huge (1440)
@include lessThan(1440) {
  @include override(1440, 3, 15, 150);
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 2, 13, 107);
}

// variables.scss Breakpoints: large (1170)
@include lessThan(1170) {
  @include override(1170, 2, 13, 107);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 4, 14, 180);
}

@include lessThan(767) {
  @include override(960, 3, 14, 180);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 150);
}

@include lessThan(420) {
  @include override(600, 2, 12, 150);
}
</style>
