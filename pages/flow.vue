<template>
  <div>
    <div :class="$style.title">
      <covid-icon aria-hidden="true" />
      <page-header :class="$style.text">
        {{ $t('感染症が心配な方へ') }}
      </page-header>
      <printer-button :wrapper-class="$style.printerButton" to="/print/flow" />
    </div>
    <div :class="$style.container">
      <h3 :class="$style.heading">
        新型コロナウイルス感染症にかかる相談窓口について
      </h3>
      <p :class="$style.lead">相談方法は、症状や状況別で3つに分かれます</p>
      <nav :class="$style.anchor">
        <ul :class="$style.items">
          <li :class="$style.item">
            <a href="#sydr" :class="[$style.link, $style.active]">
              <span>かかりつけ医がいて症状のある方</span>
              <fig-cond-sy-dr :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.item">
            <a href="#sy" :class="$style.link">
              <span>かかりつけ医がいない症状のある方</span>
              <fig-cond-sy :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.item">
            <a href="#anx" :class="$style.link">
              <span>軽い症状があり不安のある方</span>
              <fig-cond-anx :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <div :class="$style.section">
        <h4 :class="$style.heading">かかりつけ医がいて、次の症状がある方</h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead"
              >風邪のような症状や、37.5℃以上の発熱が続いている</span
            >
            <span :class="$style.alignLeft"
              >ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。</span
            >
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead"
              >強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある</span
            >
          </li>
        </ul>
        <p :class="[$style.box, $style.bgYellow]">
          <span :class="$style.large"
            >日ごろ受診されている医療機関に電話でご相談ください。</span
          >
          <span :class="$style.small"
            >（上記の症状がない場合も、軽い症状があるなど不安のある方は、日ごろ受診されている医療機関に電話でご相談ください。）</span
          >
        </p>
      </div>
      <div :class="$style.section">
        <h4 :class="$style.heading">かかりつけ医がいない、次の症状がある方</h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead"
              >風邪のような症状や、37.5℃以上の発熱が続いている</span
            >
            <span :class="$style.alignLeft"
              >ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。</span
            >
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead"
              >強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある</span
            >
          </li>
        </ul>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">
            新型コロナ受診相談窓口は、24時間対応しています
          </h5>
          <dl :class="$style.contact">
            <div>
              <dt>平日（日中）：</dt>
              <dd>
                <a
                  href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
                >
                  {{ $t('各保健所の電話番号は福祉保健局HP') }}
                  <v-icon
                    :class="$style.iconExternal"
                    :aria-label="this.$t('別タブで開く')"
                    role="img"
                    :aria-hidden="false"
                  >
                    mdi-open-in-new
                  </v-icon> </a
                >に掲載しています
              </dd>
            </div>
            <div>
              <dt :class="$style.telWrapperHeading">平日（夜間）：</dt>
              <dd :class="$style.telWrapper">
                <span :class="$style.telBeforeText"
                  >午後5時から翌朝午前9時/土日祝 終日</span
                >
                <a :class="$style.tel" href="tel:03-5320-4592">
                  <img
                    src="/flow/responsive/phone_white.svg"
                    alt=""
                    aria-hidden="true"
                  />
                  03-5320-4592</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <p :class="[$style.lead, $style.separated]">
          上記の症状に当てはまらない方は、新型コロナコールセンターにご相談ください。
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">新型コロナコールセンター</h5>
          <dl :class="$style.contact">
            <dt>午前9時から午後9時（土日祝含む）</dt>
            <dd>
              <a :class="$style.tel" href="tel:0570-550571">
                <img
                  src="/flow/responsive/phone_white.svg"
                  alt=""
                  aria-hidden="true"
                />
                0570-550571</a
              >
            </dd>
          </dl>
          <p :class="$style.notice">
            電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。
          </p>
        </div>
      </div>
      <div :class="$style.section">
        <h4 :class="$style.heading">軽い症状があり、不安のある方</h4>
        <p :class="$style.lead">
          下記、新型コロナコールセンターにご相談ください。
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">新型コロナコールセンター</h5>
          <dl :class="$style.contact">
            <dt>午前9時から午後9時（土日祝含む）</dt>
            <dd>
              <a :class="$style.tel" href="tel:0570-550571">
                <img
                  src="/flow/responsive/phone_white.svg"
                  alt=""
                  aria-hidden="true"
                />
                0570-550571</a
              >
            </dd>
          </dl>
          <p :class="$style.notice">
            電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。
          </p>
        </div>
      </div>
      <div :class="[$style.section, $style.yellow]">
        <h4 :class="$style.headingLv2">
          新型コロナ受診相談窓口、またはかかりつけ医によって新型コロナ外来（帰国者・接触者外来）の受診が必要だと判断された方
        </h4>
        <p :class="[$style.box, $style.bgGray]">
          <span :class="$style.large"
            >医師が検査の必要性を判断いたします。</span
          >
          <span
            >マスクをして公共交通機関をできるだけ使わずに受診をしてください。</span
          >
        </p>
        <h4 :class="[$style.headingLv2]">
          医師により検査が必要だと判断されPCR検査（東京都健康安全研究センター等）を受けた結果
        </h4>
        <div :class="$style.boxes">
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.lead">陽性の場合</h5>
            <p>
              感染症指定医療機関等に入院となります
            </p>
            <p :class="$style.grow">
              <img
                :class="[$style.iconPositive]"
                src="/flow/responsive/hotel.svg"
                alt=""
              />
            </p>
          </div>
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.lead">陰性の場合</h5>
            <p>自宅安静となり、医療機関を受診していただきます</p>
            <p :class="[$style.small, $style.grow]">
              ただし、症状が良くならない場合は再度受診相談窓口またはかかりつけ医に相談してください
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.detail">
      <a
        href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
        target="_blank"
        :class="$style.button"
        rel="noopener noreferrer"
        >{{ $t('詳細を見る（東京都福祉保健局）') }}
        <v-icon :class="$style.icon" size="20">
          mdi-open-in-new
        </v-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton.vue'
import PageHeader from '@/components/PageHeader.vue'
import FigCondSyDr from '@/static/flow/responsive/cond_sydr.svg'
import FigCondSy from '@/static/flow/responsive/cond_sy.svg'
import FigCondAnx from '@/static/flow/responsive/cond_anx.svg'

export default Vue.extend({
  components: {
    CovidIcon,
    PrinterButton,
    PageHeader,
    FigCondSyDr,
    FigCondSy,
    FigCondAnx
  },
  head(): any {
    const title: TranslateResult = this.$t('感染症が心配な方へ')
    return {
      title
    }
  }
})
</script>

<style lang="scss" module>
/* stylelint-disable no-descending-specificity */

$fzTiny: 12;
$fzSmall: 14;
$fzRegular: 16;
$fzMedium: 18;
$fzLarge: 20;
$fzHuge: 22;
$fzHeading: 24;
$fzHeadingL: 26;

$padding: 20;

.title {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  > svg {
    width: 30px;
    height: 30px;
    > path:not(:first-of-type) {
      fill: $gray-2;
    }
  }
  .text {
    margin-left: 8px;
  }
  .printerButton {
    margin: 0 0 0 auto;
  }
}
.container {
  background-color: $white;
  box-shadow: $shadow;
  border: 0.5px solid $gray-4 !important;
  border-radius: 4px;
  padding: $padding * 1px;
  line-height: 1.35;
  color: $gray-2;
  @include font-size($fzRegular);

  > .heading {
    @include font-size($fzHeading);
  }
  > .lead {
    margin-top: 30px;
    color: $green-1;
    font-weight: bold;
    text-align: center;
    @include font-size($fzHuge);
  }
  ul {
    // override Vuetify style
    padding-left: 0;
  }
  p {
    // override Vuetify style
    margin-bottom: 0;
  }
}
.anchor {
  margin-top: 20px;
  .items {
    margin: 0 -6px;
    display: flex;
  }
  .item {
    display: flex;
    width: (100% / 3);
    padding: 0 6px;
    flex: 0 0 auto;
  }
  .link {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    flex: 1 0 auto;
    position: relative;
    padding: 20px 20px 40px;
    width: 100%;
    border: 4px solid $green-1;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
    text-decoration: none;
    font-size: inherit;
    color: $gray-2;
    transition: color 0.2s;
    > * {
      display: block;
      max-width: 100%;
    }
    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
    }
    > img,
    > svg {
      flex: 0 0 auto;
      margin-top: 20px;
      max-width: 120px;
      max-height: 120px;
      width: 100%;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 50%;
      bottom: 20px - 9.5 / 2;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-width: 9.5px 6.3px 0 6.3px;
      border-style: solid;
      border-color: $green-1 transparent transparent transparent;
      transition: border-color 0.2s;
    }
    &.active {
      &::after {
        bottom: -19.5px;
        border-width: 19.5px 12.99px 0 12.99px;
      }
    }
    &:hover {
      background-color: $green-1;
      color: $white;
      > svg * {
        fill: currentColor;
      }
    }
    &:not(.active) {
      &:hover {
        &::after {
          border-top-color: $white;
        }
      }
    }
  }
}
.section {
  margin-top: 30px;
  border: 3px solid $gray-3;
  border-radius: 10px;
  padding: $padding * 1px;
  background-color: $white;
  &.yellow {
    border-width: 4px;
    border-color: $emergency;
  }
  > * {
    line-height: 1.5;
    &:not(.box):not(.boxes):not(:first-child) {
      margin-top: 20px;
    }
  }
  > .heading {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHeadingL);
  }
  > .headingLv2 {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .lead {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .separated {
    margin-top: 20px;
    padding-top: 30px;
    border-top: 1px solid $gray-2;
  }
}
.boxes {
  display: flex;
  justify-content: space-between;
}
.box {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: $padding * 1px;
  text-align: center;
  line-height: 1.65;
  &.border {
    border: 2px solid $gray-3;
  }
  &.bgGray {
    background-color: $gray-2;
    color: $white;
  }
  &.bgYellow {
    background-color: $emergency;
  }
  > .heading {
    font-weight: bold;
    @include font-size($fzLarge);
  }
  > .lead {
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .large {
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .small {
    @include font-size($fzSmall);
  }
  > .alignLeft {
    text-align: left;
  }
  > .grow {
    flex: 1 0 auto;
  }
  > * {
    max-width: 100%;
  }
  > *:not(:first-child) {
    margin-top: 15px;
  }
  > .notice {
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: $white;
    color: #a00000;
    text-align: center;
    font-weight: bold;
    line-height: 1.35;
    @include font-size($fzSmall);
  }
  > .contact {
    > div {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: flex-start;
      > dt {
        margin-right: 0.5em;
        white-space: nowrap;
      }
      > dd {
        text-align: left;
      }
    }
    > *:not(:first-child) {
      margin-top: 10px;
    }
  }
  li {
    list-style-type: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:not(.tel) {
      > i {
        vertical-align: baseline;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.container .box a {
  color: inherit; // for IE11
}
.boxes > .box {
  width: calc(50% - 10px);
}
.iconPositive {
  max-width: 37px;
  width: 100%;
}
.iconExternal {
  font-size: 1em !important;
  &::before {
    color: $white;
    margin-right: 0.2em;
  }
}
.telWrapper,
.telWrapperHeading {
  line-height: 1px * $fzHuge * 1.35;
}
.telBeforeText {
  vertical-align: top;
}
.telAfterText {
  vertical-align: top;
}
.tel {
  font-weight: bold;
  vertical-align: baseline;
  white-space: nowrap;
  line-height: 1px * $fzHuge * 1.35;
  padding: 0 0.25em;
  @include font-size($fzHuge);

  > img {
    vertical-align: baseline;
    max-width: 0.7em;
    width: 100%;
  }

  &:visited,
  &:hover,
  &:active,
  &:focus {
    outline: 1px dotted $white;
  }
}

.detail {
  text-align: center;
  .button {
    @include button-text('md');
    @include font-size(20);

    margin: 30px auto 0;
    font-weight: bold;
    text-decoration: none;
    color: $green-1 !important;
    &:hover {
      color: $white !important;
    }
    > .icon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
}

@include lessThan(960) {
  .anchor {
    .link {
      padding: 10px 10px 40px;
    }
  }
  .boxes {
    display: block;
  }
  .boxes > .box {
    width: auto;
  }
}

// 768
@include lessThan($medium) {
  .box {
    > .contact {
      > div {
        display: block;
        > dt {
          margin-right: 0;
          text-align: left;
        }
        > dd {
          margin-left: 1em;
        }
      }
    }
  }
  .telWrapper,
  .telWrapperHeading {
    line-height: inherit;
  }
}

// 600
@function px2vw($px, $vw: 600) {
  @return $px / $vw * 100vw;
}
@include lessThan($small) {
  .container {
    padding: px2vw($padding);
    font-size: px2vw($fzRegular);

    > .heading {
      font-size: px2vw($fzHeading);
    }
    > .lead {
      font-size: px2vw($fzHuge);
    }
  }
  .section {
    padding: px2vw($padding);
    > .heading {
      font-size: px2vw($fzHeadingL);
    }
    > .headingLv2 {
      font-size: px2vw($fzHuge);
    }
    > .lead {
      font-size: px2vw($fzMedium);
    }
  }
  .box {
    padding: px2vw($padding);
    > .heading {
      font-size: px2vw($fzLarge);
    }
    > .lead {
      font-size: px2vw($fzMedium);
    }
    > .large {
      font-size: px2vw($fzHuge);
    }
    > .small {
      font-size: px2vw($fzSmall);
    }
    > .notice {
      font-size: px2vw($fzSmall);
    }
  }
  .tel {
    font-size: px2vw($fzHuge);
  }
  .detail {
    .button {
      font-size: px2vw(20);
    }
  }
}
</style>
