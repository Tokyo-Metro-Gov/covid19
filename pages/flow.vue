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
      <h3 :class="$style.conHeading">
        {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
      </h3>
      <p ref="upperTrigger" :class="$style.anchorLead">
        {{ $t('相談方法は、症状や状況別で3つに分かれます') }}
      </p>
      <nav ref="nav" :class="$style.anchor">
        <ul :class="$style.anchorList">
          <li :class="$style.anchorItem">
            <a href="#sydr" :class="$style.anchorLink" @click="onClickAnchor">
              <span>{{ $t('かかりつけ医がいて症状のある方') }}</span>
              <fig-cond-sy-dr :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.anchorItem">
            <a href="#sy" :class="$style.anchorLink" @click="onClickAnchor">
              <span>{{ $t('かかりつけ医がいない症状のある方') }}</span>
              <fig-cond-sy :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.anchorItem">
            <a href="#anx" :class="$style.anchorLink" @click="onClickAnchor">
              <span>{{ $t('軽い症状があり不安のある方') }}</span>
              <fig-cond-anx :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <div id="sydr" :class="$style.section">
        <h4 :class="$style.sxnHeading">
          {{ $t('かかりつけ医がいて、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.boxLead">{{
              $t('風邪のような症状や、37.5℃以上の発熱が続いている')
            }}</span>
            <span :class="$style.alignLeft">{{
              $t(
                'ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.boxLead">{{
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
        <h4 :class="$style.sxnHeading">
          {{ $t('かかりつけ医がいない、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <span :class="$style.boxLead">{{
              $t('風邪のような症状や、37.5℃以上の発熱が続いている')
            }}</span>
            <span :class="$style.alignLeft">{{
              $t(
                'ご高齢の方・基礎疾患のある方・妊娠中の方は2日程度続いた場合、それ以外の方は4日以上続いた場合を相談の目安としてください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <span :class="$style.boxLead">{{
              $t('強いだるさ（倦怠感）や息苦しさ（呼吸困難）がある')
            }}</span>
          </li>
        </ul>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.sxnHeading">
            {{ $t('新型コロナ受診相談窓口は、24時間対応しています') }}
          </h5>
          <dl :class="$style.contact">
            <div>
              <dt>{{ $t('平日（日中）:') }}</dt>
              <dd :class="$style.overrideExternalLink">
                <i18n path="{publicHealthCenter}に掲載しています">
                  <template v-slot:publicHealthCenter>
                    <external-link
                      url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
                    >
                      {{ $t('各保健所の電話番号は福祉保健局HP') }}
                    </external-link>
                  </template>
                </i18n>
              </dd>
            </div>
            <div>
              <dt>
                {{ $t('平日（夜間）: 午後5時から翌朝午前9時/土日祝 終日') }}
              </dt>
              <dd>
                <a :class="$style.tel" href="tel:03-5320-4592">
                  <icon-phone :class="$style.icon" aria-hidden="true" />
                  03-5320-4592</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <p :class="[$style.sxnText, $style.hr]">
          {{
            $t(
              '上記の症状に当てはまらない方は、新型コロナコールセンターにご相談ください。'
            )
          }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.boxHeading">
            {{ $t('新型コロナコールセンター') }}
          </h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前9時から午後10時（土日祝含む）') }}</dt>
            <dd>
              <a :class="$style.tel" href="tel:0570-550571">
                <icon-phone :class="$style.icon" aria-hidden="true" />
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
      <div id="anx" ref="lowerTrigger" :class="$style.section">
        <h4 :class="$style.sxnHeading">
          {{ $t('軽い症状があり、不安のある方') }}
        </h4>
        <p :class="$style.sxnText">
          {{ $t('下記、新型コロナコールセンターにご相談ください。') }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.boxHeading">
            {{ $t('新型コロナコールセンター') }}
          </h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前9時から午後10時（土日祝含む）') }}</dt>
            <dd>
              <a :class="$style.tel" href="tel:0570-550571">
                <icon-phone :class="$style.icon" aria-hidden="true" />
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
        <h4 :class="$style.sxnHeadingSmall">
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
        <h4 :class="[$style.sxnHeadingSmall]">
          {{
            $t(
              '医師により検査が必要だと判断されPCR検査（東京都健康安全研究センター等）を受けた結果'
            )
          }}
        </h4>
        <div :class="$style.boxes">
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.boxLead">{{ $t('陽性の場合') }}</h5>
            <p>
              {{
                $t(
                  '感染症指定医療機関等への入院、又は宿泊施設等での療養となります'
                )
              }}
            </p>
            <div :class="$style.grow" aria-hidden="true">
              <icon-bed :class="[$style.iconBed]" />
            </div>
          </div>
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.boxLead">{{ $t('陰性の場合') }}</h5>
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
        :class="$style.detailButton"
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
import ExternalLink from '@/components/ExternalLink.vue'
import FigCondSyDr from '@/static/flow/cond_sydr.svg'
import FigCondSy from '@/static/flow/cond_sy.svg'
import FigCondAnx from '@/static/flow/cond_anx.svg'
import IconPhone from '@/static/flow/phone.svg'
import IconBed from '@/static/flow/bed.svg'

type LocalData = {
  nav: HTMLElement | null // アンカーリンクコンテナ（フローティング対象）
  upperTrigger: HTMLElement | null // フローティング判定上側トリガ（代替余白付与対象）
  lowerTrigger: HTMLElement | null // フローティング判定下側トリガ
  buttons: HTMLElement[] | null // アンカーリンクボタン
  sections: HTMLElement[] | null // アンカーリンクの飛び先
  navW: number // アンカーリンクコンテナの幅（upperTriggerの幅を使用）
  navH: number // アンカーリンクコンテナの高さ（navW指定後のnavの高さ）
  navOffsetTop: number // アンカーリンクコンテナ上端の表示領域上端からのオフセット量
  upperTriggerOffsetTop: number // upperTrigger要素下端の表示領域上端からのオフセット量
  lowerTriggerOffsetTop: number // lowerTrigger要素下端の表示領域上端からのオフセット量
  floatingOffset: number // フローティング時のオフセット量
  timerId: number // scrollイベントのdebounce用タイマーID
}

export default Vue.extend({
  components: {
    CovidIcon,
    PrinterButton,
    PageHeader,
    ExternalLink,
    FigCondSyDr,
    FigCondSy,
    FigCondAnx,
    IconPhone,
    IconBed
  },
  data(): LocalData {
    const nav = null
    const upperTrigger = null
    const lowerTrigger = null
    const buttons = null
    const sections = null
    const navW = 0
    const navH = 0
    const navOffsetTop = 0
    const upperTriggerOffsetTop = 0
    const lowerTriggerOffsetTop = 0
    const floatingOffset = 0
    const timerId = 0

    return {
      nav,
      upperTrigger,
      lowerTrigger,
      buttons,
      sections,
      navW,
      navH,
      navOffsetTop,
      upperTriggerOffsetTop,
      lowerTriggerOffsetTop,
      floatingOffset,
      timerId
    }
  },
  mounted() {
    this.nav = this.$refs.nav as HTMLElement
    this.buttons = Array.prototype.slice.call(
      document.getElementsByClassName(this.$style.anchorLink)
    )
    this.sections = Array.prototype.slice.call(
      document.querySelectorAll(`.${this.$style.section}[id]`)
    )
    this.upperTrigger = this.$refs.upperTrigger as HTMLElement
    this.lowerTrigger = this.$refs.lowerTrigger as HTMLElement
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
        .querySelector(`a.${this.$style.anchorLink}[href='${hash}']`)
        ?.classList.add(this.$style.active)
      VueScrollTo.scrollTo(hash, 1000, {
        offset: -(this.navH + this.floatingOffset + 1) // +1はIE11用サブピクセル対策
      })
    }
  },
  methods: {
    onBrowserRender(): void {
      this.timerId = 0

      // 整形
      const navRect = this.nav!.getBoundingClientRect()
      const upperTriggerRect = this.upperTrigger!.getBoundingClientRect()
      const bottomTriggerRect = this.lowerTrigger!.getBoundingClientRect()
      this.navOffsetTop = navRect!.top
      this.navW = this.upperTrigger!.clientWidth
      this.navH = this.nav!.offsetHeight
      this.lowerTriggerOffsetTop = bottomTriggerRect.bottom
      if (matchMedia('(max-width: 600px)').matches) {
        this.floatingOffset = 64 // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
      } else {
        this.floatingOffset = 0
      }
      this.upperTriggerOffsetTop = upperTriggerRect.bottom - this.floatingOffset

      // 表示切替
      if (
        this.upperTriggerOffsetTop <= 0 + 1 && // +1はIE11用サブピクセル対策
        this.lowerTriggerOffsetTop >= this.navH + this.floatingOffset
      ) {
        this.startFloating()

        // 表示位置追従カレント処理
        const self = this
        this.sections!.forEach(function(ele: HTMLElement, idx: number) {
          const rect = ele.getBoundingClientRect()
          if (
            rect.top <= self.navH + self.floatingOffset + 10 &&
            rect.bottom >= self.navH + self.floatingOffset - 10
          ) {
            self.buttons![idx].classList.add(self.$style.active)
          } else if (
            self.buttons![idx].classList.contains(self.$style.active)
          ) {
            self.buttons![idx].classList.remove(self.$style.active)
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
        offset: -(this.navH + this.floatingOffset + 1) // +1はIE11用サブピクセル対策
      })
      if (hash !== '#sydr') {
        this.startFloating()
      }
      this.resetNavCurrent()
      target.classList.add(this.$style.active)
    },
    startFloating(): void {
      if (!this.nav!.classList.contains(this.$style.floating)) {
        this.nav!.classList.add(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.upperTrigger!.style.marginBottom = this.navH + 'px'
      this.nav!.style.width = this.navW + 'px'
    },
    stopFloating(): void {
      if (this.nav!.classList.contains(this.$style.floating)) {
        this.nav!.classList.remove(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.upperTrigger!.style.marginBottom = ''
      this.nav!.style.width = ''
    },
    resetNavCurrent(): void {
      const self = this
      this.buttons!.forEach(function(ele: HTMLElement) {
        if (ele.classList.contains(self.$style.active)) {
          ele.classList.remove(self.$style.active)
        }
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

  > .conHeading {
    @include font-size($fzHeading);
  }
  > .anchorLead {
    margin-top: $margin * 1.5px;
    color: $green-1;
    font-weight: bold;
    text-align: center;
    @include font-size($fzHuge);
  }
  ul {
    padding-left: 0; // override Vuetify style
  }
  p {
    margin-bottom: 0; // override Vuetify style
  }
}
.anchor {
  padding-top: $margin * 1px;
  padding-bottom: $margin * 1px;
  background-color: $white;
  position: relative;
  .anchorList {
    margin: 0 -6px;
    display: flex;
  }
  .anchorItem {
    display: flex;
    width: (100% / 3);
    padding: 0 6px;
    flex: 0 0 auto;
  }
  .anchorLink {
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
    &.active,
    &:hover {
      background-color: $green-1;
      color: $white;
      > svg path {
        fill: $white;
      }
    }
    &.active {
      &::after {
        bottom: -1px;
        transform: translate(-50%, 100%);
        border-width: 19.5px 12.99px 0 12.99px;
        transition: none;
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
  > .sxnHeading {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHeadingL);
  }
  > .sxnHeadingSmall {
    text-align: center;
    font-weight: bold;
    @include font-size($fzHuge);
  }
  > .sxnText {
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
    @include font-size($fzMedium);
  }
  > .hr {
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
    .icon path {
      fill: $white; // 内包するアイコンの色を変更
    }
  }
  &.bgYellow {
    background-color: $emergency;
  }
  > .boxHeading {
    font-weight: bold;
    @include font-size($fzLarge);
  }
  > .boxLead {
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
      align-items: flex-end;
      flex-wrap: wrap;
      > dt {
        margin-right: 0.5em;
      }
      > dd {
        text-align: left;
      }
    }
    > *:not(:first-child) {
      margin-top: $margin * 1px;
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
.iconBed {
  max-width: 37px;
  max-height: 37px; // for IE11
  width: 100%;
}
.overrideExternalLink {
  i {
    font-size: 1em !important;
    &::before {
      color: $white;
      margin-right: 0.2em;
    }
  }
}
.tel {
  font-weight: bold;
  vertical-align: baseline;
  white-space: nowrap;
  line-height: 1px * $fzHuge * 1.35;
  padding: 0 0.25em;
  @include font-size($fzHuge);

  > svg {
    vertical-align: baseline;
    max-width: 0.7em;
    max-height: 0.7em; // for IE11
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
  .detailButton {
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

// 960
@include lessThan(960) {
  .anchor {
    .anchorLink {
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
    > .conHeading {
      font-size: px2vw($fzHeading);
    }
    > .anchorLead {
      margin-top: px2vw($margin * 1.5);
      font-size: px2vw($fzHuge);
    }
  }
  .anchor {
    padding-top: px2vw($margin);
    .anchorLink {
      padding: px2vw(20) px2vw(20) px2vw(40);
      border-width: px2vw(4);
      border-radius: px2vw(10);
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
    margin-top: 20px; // フローティングの都合で固定
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
    > .sxnHeading {
      font-size: px2vw($fzHeadingL);
    }
    > .sxnHeadingSmall {
      font-size: px2vw($fzHuge);
    }
    > .sxnText {
      font-size: px2vw($fzMedium);
    }
    > .hr {
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
    > .boxHeading {
      font-size: px2vw($fzLarge);
    }
    > .boxLead {
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
        margin-top: px2vw($margin);
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
