<template>
  <div>
    <div :class="$style.title">
      <covid-icon aria-hidden="true" />
      <page-header :class="$style.text">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
      <printer-button :wrapper-class="$style.printerButton" to="/print/flow" />
    </div>
    <div :class="$style.container">
      <h3 :class="$style.heading">
        {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
      </h3>
      <p ref="trigger" :class="$style.lead">
        {{ $t('相談方法は、症状や状況別で3つに分かれます') }}
      </p>
      <nav ref="anchor" :class="$style.anchor">
        <ul :class="$style.items">
          <li :class="$style.item">
            <a
              ref="sydr"
              href="#sydr"
              :class="$style.link"
              @click="onClickAnchor"
            >
              <span>{{ $t('かかりつけ医がいて症状のある方') }}</span>
              <fig-cond-sy-dr :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.item">
            <a ref="sy" href="#sy" :class="$style.link" @click="onClickAnchor">
              <span>{{ $t('かかりつけ医がいない症状のある方') }}</span>
              <fig-cond-sy :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.item">
            <a
              ref="anx"
              href="#anx"
              :class="$style.link"
              @click="onClickAnchor"
            >
              <span>{{ $t('軽い症状があり不安のある方') }}</span>
              <fig-cond-anx :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <div id="sydr" :class="$style.section">
        <h4 :class="$style.heading">
          {{ $t('かかりつけ医がいて、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead">{{
              $t('風邪のような症状や、37.5℃以上の発熱が続いている')
            }}</span>
            <span :class="$style.alignLeft">{{
              $t(
                'ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead">{{
              $t('強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある')
            }}</span>
          </li>
        </ul>
        <p :class="[$style.box, $style.bgYellow]">
          <span :class="$style.large">{{
            $t('日ごろ受診されている医療機関に電話でご相談ください。')
          }}</span>
          <span :class="$style.small">{{
            $t(
              '（上記の症状がない場合も、軽い症状があるなど不安のある方は、日ごろ受診されている医療機関に電話でご相談ください。）'
            )
          }}</span>
        </p>
      </div>
      <div id="sy" :class="$style.section">
        <h4 :class="$style.heading">
          {{ $t('かかりつけ医がいない、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead">{{
              $t('風邪のような症状や、37.5℃以上の発熱が続いている')
            }}</span>
            <span :class="$style.alignLeft">{{
              $t(
                'ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.lead">{{
              $t('強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある')
            }}</span>
          </li>
        </ul>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">
            {{ $t('新型コロナ受診相談窓口は、24時間対応しています') }}
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
                >{{ $t('に掲載しています') }}
              </dd>
            </div>
            <div>
              <dt :class="$style.telWrapperHeading">
                {{ $t('平日（夜間）：') }}
              </dt>
              <dd :class="$style.telWrapper">
                <span :class="$style.telBeforeText">{{
                  $t('午後5時から翌朝午前9時/土日祝 終日')
                }}</span>
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
          {{
            $t(
              '上記の症状に当てはまらない方は、新型コロナコールセンターにご相談ください。'
            )
          }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">{{ $t('新型コロナコールセンター') }}</h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前9時から午後9時（土日祝含む）') }}</dt>
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
            {{
              $t(
                '電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。'
              )
            }}
          </p>
        </div>
      </div>
      <div id="anx" ref="bottom" :class="$style.section">
        <h4 :class="$style.heading">
          {{ $t('軽い症状があり、不安のある方') }}
        </h4>
        <p :class="$style.lead">
          {{ $t('下記、新型コロナコールセンターにご相談ください。') }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.heading">{{ $t('新型コロナコールセンター') }}</h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前9時から午後9時（土日祝含む）') }}</dt>
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
            {{
              $t(
                '電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。'
              )
            }}
          </p>
        </div>
      </div>
      <div :class="[$style.section, $style.yellow]">
        <h4 :class="$style.headingLv2">
          {{
            $t(
              '新型コロナ受診相談窓口、またはかかりつけ医によって新型コロナ外来（帰国者・接触者外来）の受診が必要だと判断された方'
            )
          }}
        </h4>
        <p :class="[$style.box, $style.bgGray]">
          <span :class="$style.large">{{
            $t('医師が検査の必要性を判断いたします。')
          }}</span>
          <span>{{
            $t(
              'マスクをして公共交通機関をできるだけ使わずに受診をしてください。'
            )
          }}</span>
        </p>
        <h4 :class="[$style.headingLv2]">
          {{
            $t(
              '医師により検査が必要だと判断されPCR検査（東京都健康安全研究センター等）を受けた結果'
            )
          }}
        </h4>
        <div :class="$style.boxes">
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.lead">{{ $t('陽性の場合') }}</h5>
            <p>
              {{ $t('感染症指定医療機関等に入院となります') }}
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
            <h5 :class="$style.lead">{{ $t('陰性の場合') }}</h5>
            <p>{{ $t('自宅安静となり、医療機関を受診していただきます') }}</p>
            <p :class="[$style.small, $style.grow]">
              {{
                $t(
                  'ただし、症状が良くならない場合は再度受診相談窓口またはかかりつけ医に相談してください'
                )
              }}
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
import VueScrollTo from 'vue-scrollto'
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton.vue'
import PageHeader from '@/components/PageHeader.vue'
import FigCondSyDr from '@/static/flow/responsive/cond_sydr.svg'
import FigCondSy from '@/static/flow/responsive/cond_sy.svg'
import FigCondAnx from '@/static/flow/responsive/cond_anx.svg'

type LocalData = {
  nav: any
  buttons: any
  sections: any
  trigger: any
  bottom: any
  navW: number
  navH: number
  navOffsetTop: number
  triggerPos: number
  bottomPos: number
  headerOffset: number
  timerId: number
}

export default Vue.extend({
  components: {
    CovidIcon,
    PrinterButton,
    PageHeader,
    FigCondSyDr,
    FigCondSy,
    FigCondAnx
  },
  data(): LocalData {
    const nav = null
    const buttons = null
    const sections = null
    const trigger = null
    const bottom = null
    const navW = 0
    const navH = 0
    const navOffsetTop = 0
    const triggerPos = 0
    const bottomPos = 0
    const headerOffset = 0
    const timerId = 0

    return {
      nav,
      buttons,
      sections,
      trigger,
      bottom,
      navW,
      navH,
      navOffsetTop,
      triggerPos,
      bottomPos,
      headerOffset,
      timerId
    }
  },
  mounted() {
    this.nav = this.$refs.anchor as HTMLElement
    this.buttons = Array.prototype.slice.call(
      document.getElementsByClassName(this.$style.link)
    )
    this.sections = Array.prototype.slice.call(
      document.querySelectorAll(`.${this.$style.section}[id]`)
    )
    this.trigger = this.$refs.trigger as HTMLElement
    this.bottom = this.$refs.bottom as HTMLElement
    const self = this
    window.addEventListener('scroll', function() {
      // debounce
      if (self.timerId) {
        window.clearTimeout(self.timerId)
      }
      self.timerId = window.setTimeout(self.onBrowserRender, 100)
    })
    window.addEventListener('resize', this.onBrowserRender)

    // 初期化
    this.onBrowserRender()

    // ハッシュ付きアクセス処理
    const hash = this.$route.hash
    if (hash !== '') {
      if (hash !== '#sydr') {
        this.startFloating()
      }
      document // eslint-disable-line no-unused-expressions
        .querySelector(`a.${this.$style.link}[href='${hash}']`)
        ?.classList.add(this.$style.active)
      VueScrollTo.scrollTo(hash, 1000, {
        offset: -(this.navH + this.headerOffset)
      })
    }
  },
  methods: {
    onBrowserRender(): void {
      this.timerId = 0

      // 整形
      const navRect = this.nav.getBoundingClientRect()
      const triggerRect = this.trigger.getBoundingClientRect()
      const bottomRect = this.bottom.getBoundingClientRect()
      this.navOffsetTop = navRect.top
      this.navW = this.trigger.clientWidth
      this.navH = this.nav.offsetHeight
      this.bottomPos = bottomRect.bottom
      if (matchMedia('(max-width: 600px)').matches) {
        this.headerOffset = 64 // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
      } else {
        this.headerOffset = 0
      }
      this.triggerPos = triggerRect.bottom - this.headerOffset

      // 表示切替
      if (
        this.triggerPos <= 0 &&
        this.bottomPos >= this.navH + this.headerOffset
      ) {
        this.startFloating()

        // 表示位置追従カレント処理
        const self = this
        this.sections.forEach(function(ele: HTMLElement, idx: number) {
          const rect = ele.getBoundingClientRect()
          // const id = ele.getAttribute('id')
          if (
            rect.top <= self.navH + self.headerOffset &&
            rect.bottom >= self.navH + self.headerOffset
          ) {
            // document.querySelector(`a.${self.$style.link}[href='#${id}']`)?.classList.add(self.$style.active)
            self.buttons[idx].classList.add(self.$style.active)
          } else if (self.buttons[idx].classList.contains(self.$style.active)) {
            // document.querySelector(`a.${self.$style.link}[href='#${id}']`)?.classList.remove(self.$style.active)
            self.buttons[idx].classList.remove(self.$style.active)
          }
        })
      } else {
        this.stopFloating()
        this.resetNavCurrent()
      }
    },
    onClickAnchor(event: Event): void {
      const target = event.target as HTMLAnchorElement
      const hash = target.hash
      VueScrollTo.scrollTo(hash, 1000, {
        offset: -(this.navH + this.headerOffset)
      })
      if (hash !== '#sydr') {
        this.startFloating()
      }
      this.resetNavCurrent()
      target.classList.add(this.$style.active)
    },
    startFloating(): void {
      if (!this.nav.classList.contains(this.$style.floating)) {
        this.nav.classList.add(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.trigger.style.marginBottom = this.navH + 'px'
      this.nav.style.width = this.navW + 'px'
    },
    stopFloating(): void {
      if (this.nav.classList.contains(this.$style.floating)) {
        this.nav.classList.remove(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.trigger.style.marginBottom = ''
      this.nav.style.width = ''
    },
    resetNavCurrent(): void {
      const self = this
      this.buttons.forEach(function(ele: HTMLElement) {
        ele.classList.remove(self.$style.active)
      })
    }
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
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
$margin: 20;

.title {
  display: flex;
  align-items: center;
  margin-bottom: $margin * 1px;
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
    margin-top: $margin * 1.5px;
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
  padding-top: $margin * 1px;
  padding-bottom: $margin * 1px;
  background-color: $white;
  position: relative;

  /*
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 20px;
    transform: translateY(100%);
    background: linear-gradient(180deg, $white, transparent);
  }
  */
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
    z-index: 2;
    > * {
      display: block;
      max-width: 100%;
      pointer-events: none;
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
      bottom: 20px;
      transform: translate(-50%, 50%);
      width: 0;
      height: 0;
      border-width: 9.5px 6.3px 0 6.3px;
      border-style: solid;
      border-color: $green-1 transparent transparent transparent;
      transition: border-color 0.2s;
    }
    &.active {
      &::after {
        bottom: -1px;
        transform: translate(-50%, 100%);
        border-width: 19.5px 12.99px 0 12.99px;
        transition: none;
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
  &.floating {
    position: fixed;
    top: 0;
    z-index: 1;
  }
}
.section {
  margin-top: $margin * 1.5px;
  padding: $padding * 1px;
  border: 3px solid $gray-3;
  border-radius: 10px;
  background-color: $white;
  &.yellow {
    border-width: 4px;
    border-color: $emergency;
  }
  > * {
    line-height: 1.5;
    &:not(.box):not(.boxes):not(:first-child) {
      margin-top: $margin * 1px;
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
    margin-top: $margin * 1px;
    padding-top: $margin * 1.5px;
    border-top: 1px solid $gray-2;
  }
}
.anchor + .section {
  margin-top: 0;
}
.boxes {
  display: flex;
  justify-content: space-between;
}
.box {
  margin-top: $margin * 1px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
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
    margin-top: $margin * 0.75px;
  }
  > .notice {
    width: 100%;
    padding: $margin * 1px;
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
      margin-top: $margin * 0.5px;
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

    margin: ($margin * 1.5px) auto 0;
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
  .title {
    margin-bottom: px2vw($margin);
  }
  .container {
    padding: px2vw($padding);
    font-size: px2vw($fzRegular);
    > .heading {
      font-size: px2vw($fzHeading);
    }
    > .lead {
      margin-top: px2vw($margin * 1.5);
      font-size: px2vw($fzHuge);
    }
  }
  .anchor {
    padding-top: px2vw($margin);
    .link {
      padding: px2vw(20) px2vw(20) px2vw(40);
      border-width: px2vw(4);
      border-radius: px2vw(10);
      > img,
      > svg {
        margin-top: px2vw(20);
      }
      &::after {
        bottom: px2vw(20);
        border-width: px2vw(9.5) px2vw(6.3) 0 px2vw(6.3);
      }
      &.active {
        &::after {
          border-width: px2vw(19.5) px2vw(12.99) 0 px2vw(12.99);
        }
      }
    }
    &.floating {
      top: 64px; // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
    }
  }
  .section {
    //margin-top: px2vw($margin * 1.5);
    margin-top: 20px;
    padding: px2vw($padding);
    border-width: px2vw(3);
    border-radius: px2vw(10);
    &.yellow {
      border-width: px2vw(3);
    }
    > * {
      &:not(.box):not(.boxes):not(:first-child) {
        margin-top: px2vw($margin);
      }
    }
    > .heading {
      font-size: px2vw($fzHeadingL);
    }
    > .headingLv2 {
      font-size: px2vw($fzHuge);
    }
    > .lead {
      font-size: px2vw($fzMedium);
    }
    > .separated {
      margin-top: px2vw($margin);
      padding-top: px2vw($margin * 1.5);
    }
  }
  .box {
    margin-top: px2vw($margin);
    padding: px2vw($padding);
    border-radius: px2vw(4);
    &.border {
      border-width: px2vw(2);
    }
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
    > *:not(:first-child) {
      margin-top: px2vw($margin * 0.75);
    }
    > .notice {
      padding: px2vw($margin);
      border-radius: px2vw(4);
      font-size: px2vw($fzSmall);
    }
    > .contact {
      > *:not(:first-child) {
        margin-top: px2vw($margin * 0.5);
      }
    }
  }
  .tel {
    font-size: px2vw($fzHuge);
  }
  .detail {
    .button {
      padding: px2vw(24) px2vw(36);
      margin: px2vw($margin * 1.5) auto 0;
      font-size: px2vw(20);
    }
  }
}
</style>
