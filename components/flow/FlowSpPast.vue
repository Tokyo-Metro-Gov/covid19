<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <i18n path="{past}の出来ごとと症状" tag="span">
        <i18n
          :class="$style.large"
          tag="span"
          path="発症前{two}週間以内"
          place="past"
        >
          <span :class="$style.numeric" place="two">2</span>
        </i18n>
      </i18n>
    </p>
    <p :class="$style.type">
      <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
        <strong :class="$style.source">
          {{ $t('「新型コロナウイルス感染者」と') }}
        </strong>
        <i18n tag="span" path="{closeContact}をした方" :class="$style.behavior">
          <em :class="$style.underline" place="closeContact">
            {{ $t('濃厚接触') }}
          </em>
        </i18n>
      </template>
      <template v-else>
        <i18n tag="span" path="{closeContact}をした方" :class="$style.behavior">
          <em :class="$style.underline" place="closeContact">
            {{ $t('濃厚接触') }}
          </em>
        </i18n>
        <span :class="$style.behavior">
          {{ $t('「新型コロナウイルス感染者」と') }}
        </span>
      </template>
    </p>
    <div :class="$style.condition">
      <div :class="$style.item">
        <div class="py-4">
          {{ $t('発熱') }}
        </div>
      </div>
      <div :class="$style.item">
        {{ $t('または') }}
      </div>
      <div :class="$style.item">
        <div class="py-4">
          {{ $t('呼吸器症状') }}
        </div>
      </div>
    </div>
    <div :class="$style.hr" />
    <p :class="$style.type">
      <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
        <strong :class="$style.source">
          {{ $t('流行地域への渡航・居住歴がある方') }}
        </strong>
        <i18n
          tag="span"
          :class="$style.behavior"
          path="{you} か {closeContact}をした方"
        >
          <em :class="$style.underline" place="you">
            {{ $t('ご本人') }}
          </em>
          <em :class="$style.underline" place="closeContact">
            {{ $t('濃厚接触') }}
          </em>
        </i18n>
      </template>
      <template v-else>
        <i18n
          tag="span"
          :class="[$style.behavior, $style.small]"
          path="travel history from {area}"
        >
          <em :class="$style.underline" place="area">
            {{ $t('COVID-19 prevalent area') }}
          </em>
        </i18n>
        <i18n
          tag="span"
          :class="[$style.behavior, $style.small]"
          path="been {inCloseContact} with returnees"
        >
          <em :class="$style.underline" place="inCloseContact">
            {{ $t('in close contact') }}
          </em>
        </i18n>
      </template>
    </p>
    <div :class="$style.condition">
      <div :class="$style.item">
        <div class="py-4">
          {{ $t('呼吸器症状') }}
        </div>
      </div>
      <div :class="$style.item">
        {{ $t('かつ') }}
      </div>
      <div :class="$style.item">
        <div>
          <i18n tag="span" path="発熱{temperature}" :class="$style.temp">
            <i18n tag="span" path="{tempNum}以上" place="temperature">
              <span :class="$style.temp" place="tempNum">
                {{ $t('37.5℃') }}
              </span>
            </i18n>
          </i18n>
        </div>
      </div>
    </div>
    <a v-scroll-to="'#consult'" href="#consult" :class="$style.button">
      <span :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<i18n src="./FlowSpPast.i18n.json"></i18n>

<script lang="ts">
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'

export default {
  components: { ArrowForwardIcon },
  computed: {
    langsNeedReversedOrder() {
      return ['en']
    },
    langsWithoutFlowTitle() {
      return ['en', 'zh-cn', 'zh-tw']
    }
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
  text-align: center;
  font-weight: bold;
  line-height: 1.35;
  .large {
    font-size: px2vw(30);
  }
  .numeric {
    font-size: px2vw(50);
    margin-right: 0.1em;
  }
}
.type {
  margin-top: px2vw(20);
  text-align: center;
  .source {
    display: block;
    color: $green-1;
    &:last-child {
      margin-top: px2vw(10);
    }
  }
  .behavior {
    display: block;
    font-size: px2vw(32);
    font-weight: bold;
    line-height: 1.35;
    &:last-child {
      margin-top: px2vw(5);
    }
    .underline {
      border-bottom: px2vw(4) solid $green-1;
    }
  }
}
.condition {
  margin-top: px2vw(40);
  align-items: stretch;
  display: flex;
  font-weight: bold;
  justify-content: space-between;
  .item {
    display: flex;
    text-align: center;
    min-height: px2vw(92);
    &:first-child,
    &:last-child {
      flex-basis: 35%;
      > div {
        padding: px2vw(15) px2vw(10);
        border: $green-1 px2vw(2) solid;
        border-radius: px2vw(5);

        // 上下中央寄せ
        display: flex;
        flex-basis: 100%;
        justify-content: center;
        align-items: center;

        // before要素の親要素
        position: relative;
        &::before {
          width: px2vw(30);
          height: px2vw(30);
          content: '';
          background-color: $white;
          background-image: url(/flow/check_circle-24px.svg);
          background-size: cover;
          position: absolute;
          top: px2vw(-1);
          left: 0;
          right: 0;
          margin: auto;
          transform: translateY(-50%);
        }
      }
    }
    &:nth-child(2) {
      // 上下左右中央寄せ
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 30%;
    }
    .temp {
      font-size: px2vw(18);
      span {
        font-size: px2vw(22);
      }
      > span {
        display: block;
      }
    }
  }
}
.hr {
  margin-top: px2vw(30);
  border-bottom: 1px $gray-4 solid;
  height: 1px;
  width: 100%;
}
.button {
  margin-top: px2vw(30);
  padding: 0 px2vw(30) 0 px2vw(36);
  height: px2vw(96);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffe200;
  border-radius: 4px;
  box-shadow: -1px 2px 5px $gray-3;
  text-decoration: none;
  font-weight: bold;
  .text {
    color: $gray-2;
    font-size: px2vw(20);
  }
  .icon {
    width: px2vw(45);
    height: px2vw(45);
    transform: rotateZ(90deg);
    display: block;
  }
}

// 601-768 (769以上はPC版)
@include largerThan($small) {
  .container {
    font-size: px2vw(22, 960);
  }
  .heading {
    .large {
      font-size: px2vw(28, 960);
    }
    .numeric {
      font-size: px2vw(48, 960);
    }
  }
  .type {
    margin-top: px2vw(20, 960);
    .source {
      &:last-child {
        margin-top: px2vw(10, 960);
      }
    }
    .behavior {
      font-size: px2vw(30, 960);
      &:last-child {
        margin-top: px2vw(5, 960);
      }
      .underline {
        border-bottom: px2vw(4, 960) solid $green-1;
      }
    }
  }
  .condition {
    margin-top: px2vw(40, 960);
    .item {
      min-height: px2vw(92, 960);
      &:first-child,
      &:last-child {
        > div {
          padding: px2vw(15, 960) px2vw(10, 960);
          border: $green-1 px2vw(2, 960) solid;
          border-radius: px2vw(5, 960);

          &::before {
            width: px2vw(30, 960);
            height: px2vw(30, 960);
            top: px2vw(-1, 960);
          }
        }
      }
      .temp {
        font-size: px2vw(20, 960);
        span {
          font-size: px2vw(22, 960);
        }
      }
    }
  }
  .hr {
    margin-top: px2vw(30, 960);
  }
  .button {
    margin-top: px2vw(30, 960);
    padding: 0 px2vw(30, 960) 0 px2vw(36, 960);
    height: px2vw(96, 960);
    .text {
      font-size: px2vw(20, 960);
    }
    .icon {
      width: px2vw(45, 960);
      height: px2vw(45, 960);
    }
  }
}
</style>
