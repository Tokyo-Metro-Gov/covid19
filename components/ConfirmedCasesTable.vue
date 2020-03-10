<template>
  <ul class="wrapper group">
    <li class="item checked">
      <div class="gutter">
        <div class="box tall">
          <span>
            検査実施
            <br />人数
          </span>
          <span>
            <b>{{ 検査実施人数 }}</b>
            <span class="unit">人</span>
          </span>
        </div>
      </div>
    </li>
    <li class="item positive">
      <div class="gutter">
        <div class="box tall">
          <span>
            陽性者数
            <br />(累積)
          </span>
          <span>
            <b>{{ 陽性物数 }}</b>
            <span class="unit">人</span>
          </span>
        </div>
      </div>
      <ul class="group">
        <li class="item in-hospital">
          <div class="gutter">
            <div class="box">
              <span>入院中</span>
              <span>
                <b>{{ 入院中 }}</b>
                <span class="unit">人</span>
              </span>
            </div>
          </div>
          <ul class="group">
            <li class="item mild">
              <div class="gutter">
                <div class="box short">
                  <span>
                    軽症・
                    <br />中等症
                  </span>
                  <span>
                    <b>{{ 軽症中等症 }}</b>
                    <span class="unit">人</span>
                  </span>
                </div>
              </div>
            </li>
            <li class="item serious">
              <div class="gutter">
                <div class="box short">
                  <span>重症</span>
                  <span>
                    <b>{{ 重症 }}</b>
                    <span class="unit">人</span>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </li>
        <li class="item deceased">
          <div class="gutter">
            <div class="box">
              <span>死亡</span>
              <span>
                <b>{{ 死亡 }}</b>
                <span class="unit">人</span>
              </span>
            </div>
          </div>
        </li>
        <li class="item recovered">
          <div class="gutter">
            <div class="box">
              <span>退院</span>
              <span>
                <b>{{ 退院 }}</b>
                <span class="unit">人</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    '検査実施人数',
    '陽性物数',
    '入院中',
    '軽症中等症',
    '重症',
    '死亡',
    '退院'
  ],
  methods: {
    /** 桁数に応じて位置の調整をする */
    getAdjustX(input) {
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
      inspected,
      positive,
      hospitalized,
      mild,
      critically,
      deceased,
      discharged
    ) {
      const ariaLabel = `検査陽性者の状況: 検査実施人数は${inspected}人、うち累積の陽性者数は${positive}人です。入院中は${hospitalized}人で、うち軽症・中等症は${mild}人、また重症は${critically}人です。さらに死亡は${deceased}人、退院は${discharged}人です。`
      return ariaLabel
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: calc(100% + 3px);
  box-sizing: border-box;
  * {
    box-sizing: inherit;
  }
}
.group {
  display: flex;
  align-items: flex-end;
  padding-left: 0;
  flex: 0 0 auto;
}
.item {
  display: block;
  list-style-type: none;
  flex: 0 0 auto;
}
.gutter {
  width: 100%;
  padding-right: 3px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 26px;
  width: 100%;
  height: 150px;
  border: 3px solid $green-1;
  color: $green-1;
  @include font-size(14);
  text-align: center;
  line-height: 1.2;
  &.tall {
    height: 185px;
  }
  &.short {
    height: 115px;
  }
  span:last-child {
    margin-top: 0.2em;
  }
  b {
    font-weight: normal;
    @include font-size(18);
  }
}
.unit {
  @include font-size(14);
}

// 検査
.item.checked {
  width: calc(100% / 7);
  > .gutter > .box {
    border-color: $gray-1;
    color: $gray-1;
  }
}
// 陽性
.item.positive {
  display: flex;
  justify-content: space-between;
  width: calc(100% / 7 * 6);
  > .group {
    width: calc(100% / 6 * 5);
  }
}
// 入院
.item.in-hospital {
  display: flex;
  justify-content: space-between;
  width: calc(100% / 5 * 3);
  > .group {
    width: calc(100% / 3 * 2);
  }
}
// 軽症・中等症
.item.mild {
  width: calc(100% / 2);
}
// 重症
.item.serious {
  width: calc(100% / 2);
}
// 死亡
.item.deceased {
  width: calc(100% / 5);
}
// 退院
.item.recovered {
  width: calc(100% / 5);
}

.item.positive > .gutter > .box::before,
.item.in-hospital > .gutter > .box::before,
.item.serious > .gutter > .box::before,
.item.recovered > .gutter > .box::before {
  content: '';
  display: block;
  border: 3px solid $green-1;
  background-color: $white;
  position: absolute;
  height: 32px;
}
.item.positive > .gutter > .box::before,
.item.in-hospital > .gutter > .box::before {
  border-right: none;
  top: -3px;
  right: calc(-100% - 3px - 3px);
  width: calc(100% + 3px + 3px);
  border-left: none;
  border-right: none;
}
.item.serious > .gutter > .box::before,
.item.recovered > .gutter > .box::before {
  top: calc(-35px - 3px);
  right: -3px;
  border-left: none;
}
.item.serious > .gutter > .box::before {
  width: 200%;
}
.item.recovered > .gutter > .box::before {
  width: 520%;
}

@function px2vw($px, $vw) {
  @return ceil($px / $vw * 100000vw) / 1000;
}
@mixin variation($vw, $bdw, $fz, $boxh, $boxdiff) {
  .gutter {
    padding-right: px2vw($bdw, $vw);
  }
  .box {
    padding-bottom: px2vw($boxh * 0.17, $vw);
    border-width: px2vw($bdw, $vw);
    height: px2vw($boxh, $vw);
    font-size: px2vw($fz, $vw);
    &.tall {
      height: px2vw($boxh + $boxdiff, $vw);
    }
    &.short {
      height: px2vw($boxh - $boxdiff, $vw);
    }
    b {
      font-size: px2vw($fz + 2, $vw);
    }
  }
  .unit {
    font-size: px2vw($fz, $vw);
  }
  .item.positive > .gutter > .box::before,
  .item.in-hospital > .gutter > .box::before,
  .item.serious > .gutter > .box::before,
  .item.recovered > .gutter > .box::before {
    border-width: px2vw($bdw, $vw);
    height: px2vw($boxdiff - $bdw, $vw);
  }
  .item.positive > .gutter > .box::before,
  .item.in-hospital > .gutter > .box::before {
    top: px2vw(-$bdw, $vw);
    right: calc(-100% - #{px2vw($bdw * 2, $vw)} + 0.3px);
    width: calc(100% + #{px2vw($bdw * 2, $vw)});
  }
  .item.serious > .gutter > .box::before,
  .item.recovered > .gutter > .box::before {
    top: px2vw(-$boxdiff - $bdw, $vw);
    right: px2vw(-$bdw, $vw);
  }
}

// variables.scss Breakpoints: huge
@include lessThan(1440) {
  @include variation(1440, 3, 14, 150, 35);
}

// Vuetify Breakpoints: Large
@include lessThan(1263) {
  @include variation(1263, 2, 12, 107, 24);
}

// Vuetify Breakpoints: Small
@include lessThan(959) {
  @include variation(960, 4, 16, 180, 40);
}

// Vuetify Breakpoints: Extra Small
@include lessThan(599) {
  @include variation(600, 3, 14, 150, 35);
}
</style>
