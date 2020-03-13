<template>
  <div :class="$style.container">
    <i18n tag="h4" :class="$style.heading" path="{advisory}による相談結果">
      <span place="advisory">
        {{ $t('新型コロナ受診相談窓口') }}
      </span>
    </i18n>
    <i18n
      tag="p"
      :class="$style.diag"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <span :class="[$style.line, $style.large]" place="advice">
        {{ $t('受診が必要') }}
      </span>
    </i18n>
    <p :class="$style.decision">
      <span :class="$style.small">
        {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
      </span>
      <span>{{ $t('医師による判断') }}</span>
    </p>
    <div :class="$style.rectContainer">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.shadow]"
        href="#not_required"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.large, $style.line]" place="ifRequired">
              {{ $t('なし') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#pcr'"
        :class="[$style.rect, $style.shadow, $style.bgYellow]"
        href="#pcr"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.large, $style.line]" place="ifRequired">
              {{ $t('あり') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow">
          <Arrow />
        </div>
      </a>
    </div>
    <p id="pcr" :class="[$style.diag, $style.hr]">
      <span :class="$style.line">
        <!-- 改行によって空白が入らないように-->
        <!-- eslint-disable -->
        <span :class="$style.large">{{ $t('PCR検査') }}</span>{{ $t('※') }}
        <!-- eslint-enable -->
      </span>
      <span :class="[$style.place, $style.line]">
        {{ $t('東京都健康安全研究センター等') }}
      </span>
      <small :class="[$style.note, $style.line]">
        {{
          $t(
            '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
          )
        }}
      </small>
    </p>
    <div :class="$style.rectContainer">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.shadow]"
        href="#not_required"
      >
        <p>
          <span :class="$style.large">{{ $t('陰性') }}</span>
        </p>
        <div :class="$style.arrow">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#hospitalized'"
        :class="[$style.rect, $style.shadow, $style.bgYellow]"
        href="#hospitalized"
      >
        <p>
          <span :class="$style.large">{{ $t('陽性') }}</span>
        </p>
        <div :class="$style.arrow">
          <Arrow />
        </div>
      </a>
    </div>
    <i18n
      id="not_required"
      tag="p"
      :class="[$style.diag, $style.hr]"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <span :class="[$style.line, $style.large]" place="advice">
        {{ $t('受診が不要') }}
      </span>
    </i18n>
    <div :class="$style.rectContainer">
      <div :class="[$style.rect, $style.border]">
        <div :class="$style.icon">
          <House />
        </div>
        <p>{{ $t('自宅で安静に過ごす') }}</p>
      </div>
      <div :class="[$style.rect, $style.border]">
        <div :class="$style.icon">
          <Apartment />
        </div>
        <p>{{ $t('一般の医療機関を受診') }}</p>
      </div>
    </div>
    <div :class="$style.rectContainer">
      <div :class="[$style.rect, $style.wide, $style.border, $style.bdGreen]">
        <p>
          <i18n path="{getWorse}{advisory}に相談">
            <i18n place="getWorse" path="症状が良くならない場合は" />
            <strong :class="$style.advisory" place="advisory">
              {{ $t('新型コロナ受診相談窓口') }}
            </strong>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<i18n src="./FlowSpAccording.i18n.json"></i18n>

<script>
import Apartment from '../../static/flow/apartment-24px.svg'
import House from '../../static/flow/house-24px.svg'
import Arrow from '../../static/flow/arrow_downward.svg'
import GreenArrow from '../../static/flow/arrow_green.svg'

export default {
  components: {
    Apartment,
    House,
    Arrow,
    GreenArrow
  }
}
</script>

<style module lang="scss">
@function px2vw($px, $vw: 600) {
  @return $px / $vw * 100vw;
}

.container {
  color: $gray-2;
  font-size: px2vw(22);
  line-height: 1.15;
  // override default styles
  em {
    font-style: normal;
  }
  // override Vuetify styles
  p {
    margin-bottom: 0;
  }
}
.heading {
  color: $green-1;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  > span {
    display: block;
    font-size: px2vw(38);
  }
}
.diag {
  margin-top: px2vw(30);
  font-weight: bold;
  text-align: center;
  line-height: 1.35;
  &.hr {
    border-top: 1px solid $gray-4;
    padding-top: px2vw(30);
  }
  .large {
    font-size: px2vw(64);
  }
  .line {
    display: block;
  }
  .place {
    font-size: px2vw(30);
  }
  .note {
    margin-top: px2vw(10);
  }
}
.decision {
  margin-top: px2vw(20);
  padding: px2vw(25);
  background-color: $gray-2;
  border-radius: px2vw(5);
  color: $white;
  text-align: center;
  font-weight: bold;
  line-height: 1.65;
  > span {
    display: block;
    &.small {
      font-size: px2vw(18);
    }
  }
}
.rectContainer {
  margin-top: px2vw(25);
  display: flex;
  justify-content: space-between;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.rect {
  width: 47%;
  min-height: px2vw(188);
  flex: 0 0 auto;
  display: block;
  border-radius: px2vw(5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: px2vw(24);
  text-decoration: none !important;
  color: inherit !important;
  text-align: center;
  font-weight: bold;
  &.shadow {
    padding-top: 12px;
    box-shadow: 0 px2vw(3) px2vw(6) $gray-3;
  }
  &.border {
    border: px2vw(3) solid $gray-4;
    padding: px2vw(20);
  }
  &.bdGreen {
    border-color: $green-1;
  }
  &.bgYellow {
    background-color: #ffe200;
  }
  &.wide {
    width: 100%;
  }
  .large {
    font-size: px2vw(42);
  }
  .advisory {
    font-size: px2vw(38);
    display: block;
    margin-top: px2vw(10);
    margin-bottom: px2vw(10);
  }
  .line {
    margin-top: px2vw(5);
    display: block;
  }
  .arrow {
    margin-top: px2vw(10);
    width: 100%;
    text-align: center;
    line-height: 0;
    vertical-align: bottom;
  }
  .icon {
    margin-bottom: px2vw(10);
    width: 100%;
    text-align: center;
    line-height: 0;
    vertical-align: bottom;
  }
}

// 601-768 (769以上はPC版)
@include largerThan($small) {
  .container {
    font-size: px2vw(20, 768);
  }
  .heading {
    > span {
      font-size: px2vw(32, 768);
    }
  }
  .diag {
    margin-top: px2vw(30, 768);
    &.hr {
      padding-top: px2vw(30, 768);
    }
    .large {
      font-size: px2vw(48, 768);
    }
    .place {
      font-size: px2vw(26, 768);
    }
    .note {
      margin-top: px2vw(10, 768);
    }
  }
  .decision {
    margin-top: px2vw(20, 768);
    padding: px2vw(25, 768);
    border-radius: px2vw(5, 768);
    > span {
      &.small {
        font-size: px2vw(18, 768);
      }
    }
  }
  .rectContainer {
    margin-top: px2vw(25, 768);
  }
  .rect {
    min-height: px2vw(188, 768);
    border-radius: px2vw(5, 768);
    font-size: px2vw(24, 768);
    &.shadow {
      box-shadow: 0 px2vw(3, 768) px2vw(6, 768) $gray-3;
    }
    &.border {
      border: px2vw(3, 768) solid $gray-4;
      padding: px2vw(10, 768);
    }
    &.bdGreen {
      padding: px2vw(20, 768);
    }
    .large {
      font-size: px2vw(36, 768);
    }
    .advisory {
      font-size: px2vw(32, 768);
      margin-top: px2vw(10, 768);
      margin-bottom: px2vw(10, 768);
    }
    .line {
      margin-top: px2vw(5, 768);
    }
    .arrow {
      margin-top: px2vw(10, 768);
    }
    .icon {
      margin-bottom: px2vw(10, 768);
    }
  }
}
</style>
