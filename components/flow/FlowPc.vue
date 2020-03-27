<template>
  <div :class="[$style.container, $style.block]">
    <h3 :class="$style.heading">
      新型コロナウイルス感染症にかかる相談窓口について
    </h3>
    <div :class="$style.inquiry">
      <div :class="[$style.block, $style.blockA]">
        <p
          :class="$style.lead"
          aria-label="症状等の条件に応じた相談窓口をご案内します"
        >
          <i18n path="{past}の出来ごとと症状" tag="span">
            <i18n
              :class="$style.past"
              tag="span"
              path="発症前{two}週間以内"
              place="past"
            >
              <span :class="$style.num" place="two">2</span>
            </i18n>
          </i18n>
        </p>
        <section :class="$style.blockA1">
          <h4 :class="$style.srOnly">条件1</h4>
          <ul :class="$style.cond">
            <li :class="$style.symptom">
              <em :class="$style.symptomBox">{{ $t('発熱') }}</em>
              <span>{{ $t('または') }}</span>
              <em :class="$style.symptomBox">{{ $t('呼吸器症状') }}</em>
            </li>
            <li :class="$style.contact">
              <span :class="$style.srOnly">発症前2週間以内に</span>
              <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
                <strong>
                  {{ $t('「新型コロナウイルス感染者」と') }}
                </strong>
                <i18n tag="span" path="{closeContact}をした方">
                  <em place="closeContact">
                    {{ $t('濃厚接触') }}
                  </em>
                </i18n>
              </template>
              <template v-else>
                <i18n tag="span" path="{closeContact}をした方">
                  <em place="closeContact">
                    {{ $t('濃厚接触') }}
                  </em>
                </i18n>
                <span :class="$style.strong">
                  {{ $t('「新型コロナウイルス感染者」と') }}
                </span>
              </template>
            </li>
          </ul>
          <p :class="$style.srOnly">
            <a href="#hotline">条件1にあてはまる場合</a>
          </p>
        </section>
        <section :class="$style.blockA2">
          <h4 :class="$style.srOnly">条件2</h4>
          <ul :class="$style.cond">
            <li :class="$style.symptom">
              <em :class="$style.symptomBox">
                <i18n tag="span" :class="$style.small" path="発熱{temperature}">
                  <i18n tag="span" path="{tempNum}以上" place="temperature">
                    <span :class="$style.medium" place="tempNum">
                      {{ $t('37.5℃') }}
                    </span>
                  </i18n>
                </i18n>
              </em>
              <span>{{ $t('かつ') }}</span>
              <em :class="[$style.symptomBox, $style.hidden]">{{
                $t('呼吸器症状')
              }}</em>
            </li>
            <li :class="$style.contact">
              <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
                <strong>
                  {{ $t('流行地域への渡航・居住歴がある方') }}
                </strong>
                <i18n tag="span" path="{you} か {closeContact}をした方">
                  <em place="you">
                    {{ $t('ご本人') }}
                  </em>
                  <em place="closeContact">
                    {{ $t('濃厚接触') }}
                  </em>
                </i18n>
              </template>
              <template v-else>
                <i18n tag="span" path="travel history from {area}">
                  <em place="area">
                    {{ $t('COVID-19 prevalent area') }}
                  </em>
                </i18n>
                <i18n tag="span" path="been {inCloseContact} with returnees">
                  <em place="inCloseContact">
                    {{ $t('in close contact') }}
                  </em>
                </i18n>
              </template>
            </li>
          </ul>
          <p :class="$style.srOnly">
            <a href="#hotline">条件2にあてはまる場合</a>
          </p>
        </section>
      </div>
      <section :class="[$style.block, $style.blockB]">
        <h4 :class="$style.srOnly">条件3</h4>
        <ul :class="$style.cond">
          <li :class="$style.symptomBox">
            <i18n tag="span" path="{cold}のような症状" :class="$style.small">
              <span :class="$style.medium" place="cold">
                {{ $t('風邪') }}
              </span>
            </i18n>
          </li>
          <li :class="$style.symptomBox">
            <i18n tag="span" :class="$style.small" path="発熱{temperature}">
              <i18n tag="span" place="temperature" path="{tempNum}以上">
                <span :class="$style.medium" place="tempNum">
                  {{ $t('37.5℃') }}
                </span>
              </i18n>
            </i18n>
          </li>
          <li :class="$style.symptomBox">{{ $t('強いだるさ') }}</li>
          <li :class="$style.symptomBox">{{ $t('息苦しさ') }}</li>
        </ul>
        <p :class="$style.elder">
          <span :class="$style.req">
            <span :class="$style.duration">
              <i18n path="{duration}続いている">
                <i18n
                  tag="span"
                  place="duration"
                  path="{day}日程度"
                  :class="$style.day"
                  ><span :class="$style.num" place="day">2</span></i18n
                >
              </i18n>
            </span>
            <span :class="$style.type">
              <span :class="$style.typeInner">
                <span>
                  <img
                    src="/flow/directions_walk-24px.svg"
                    aria-hidden="true"
                    alt=" "
                  />
                  {{ $t('ご高齢な方') }}</span
                >
                <span>
                  <img
                    src="/flow/accessible-24px.svg"
                    aria-hidden="true"
                    alt=" "
                  />
                  {{ $t('基礎疾患のある方') }}</span
                >
                <span>
                  <img
                    src="/flow/pregnant_woman-24px.svg"
                    aria-hidden="true"
                    alt=" "
                  />
                  {{ $t('妊娠中の方') }}</span
                >
              </span>
            </span>
          </span>
        </p>
        <p :class="$style.general">
          <span :class="$style.srOnly">または</span>
          <span :class="$style.req">
            <span :class="$style.duration">
              <i18n path="{duration}続いている">
                <i18n
                  tag="span"
                  place="duration"
                  path="{day}日以上"
                  :class="$style.day"
                  ><span :class="$style.num" place="day">4</span></i18n
                >
              </i18n>
            </span>
            <span :class="$style.type">
              <img
                src="/flow/accessibility-24px.svg"
                aria-hidden="true"
                alt=" "
              />
              {{ $t('一般の方') }}
            </span>
          </span>
        </p>
        <p :class="$style.srOnly">
          <a href="#hotline">条件3にあてはまる場合</a>
        </p>
      </section>
      <div :class="$style.blockC">
        <section :class="[$style.block, $style.blockC1]">
          <h4 :class="$style.srOnly">条件4</h4>
          <ul>
            <li>微熱</li>
            <li>軽い咳</li>
            <li>感染の不安</li>
          </ul>
          <p>不安に思う方</p>
          <p :class="$style.srOnly">
            <a href="#callcenter">条件4にあてはまる場合</a>
          </p>
        </section>
        <section id="callcenter" :class="$style.blockC2_3">
          <div :class="[$style.block, $style.blockC2]">
            <h4>新型コロナコールセンター</h4>
            <p>午前9時から午後9時（土日祝含む）</p>
            <p><a href="tel:0570-550571">0570-550571</a></p>
          </div>
          <p :class="$style.blockC3">
            <a href="#hotline">専門的な助言が必要な場合</a>
          </p>
        </section>
      </div>
      <section id="hotline" :class="[$style.block, $style.blockD]">
        <h4>
          新型コロナ受診相談窓口
          <span>帰国者・接触者 電話相談センター</span>
        </h4>
        <p>24時間対応</p>
        <dl>
          <dt>平日（日中）</dt>
          <dd>各保健所の電話番号は福祉保健局HPへ</dd>
          <dt>
            平日（夜間）
            <span>午後5時から翌朝午前9時</span>
            土日祝 終日
          </dt>
          <dd><a href="tel:03-5320-4592">03-5320-4592</a></dd>
        </dl>
      </section>
    </div>
    <h3>
      新型コロナ受診相談窓口
      <span>による相談結果</span>
    </h3>
    <ul :class="$style.srOnly">
      <li>
        <a href="#facility">新型コロナ外来の受診が必要と判断された場合</a>
      </li>
      <li><a href="#rest">新型コロナ外来の受診が不要と判断された場合</a></li>
    </ul>
    <div :class="$style.treatment">
      <section :class="[$style.block, $style.blockF]">
        <h4>
          新型コロナ外来
          <span>受診が必要</span>
          と判断された場合
        </h4>
        <div id="#facility">
          <p>
            新型コロナ外来（帰国者・接触者外来） 医師による判断
          </p>
          <ul>
            <li><a href="#pcr">検査の必要あり</a></li>
            <li><a href="#rest">検査の必要なし</a></li>
          </ul>
        </div>
      </section>
      <section id="pcr" :class="[$style.block, $style.blockG]">
        <h4>
          PCR検査
          <span>※</span>
        </h4>
        <p>東京都健康安全研究センター等</p>
        <ul>
          <li><a href="#hospitalize">陽性</a></li>
          <li><a href="#rest">陰性</a></li>
        </ul>
      </section>
      <section id="hospitalize" :class="[$style.block, $style.blockI]">
        <h4>入院となります</h4>
        <p>感染症指定医療機関等</p>
      </section>
      <section :class="[$style.block, $style.blockH]">
        <h4>
          新型コロナ外来
          <span>受診が不要</span>
          と判断された場合
        </h4>
        <div id="rest">
          <ul>
            <li>自宅で安静に過ごす</li>
            <li>一般の医療機関を受診</li>
          </ul>
          <p>
            症状が良くならない場合は
            <a href="#hotline">新型コロナ受診相談窓口</a>
            に相談
          </p>
        </div>
      </section>
    </div>
    <p>
      ※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    langsNeedReversedOrder() {
      return ['en']
    },
    langsWithoutFlowTitle() {
      return ['en', 'zh-cn', 'zh-tw']
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.matchHeight()
    })
    window.addEventListener('resize', this.matchHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.matchHeight)
  },
  methods: {
    matchHeight(event) {
      const targets = document.getElementsByClassName(this.$style.symptom)
      const elements = [...targets]
      if (event) {
        elements.forEach(function(ele) {
          ele.removeAttribute('style')
        })
      }
      if (targets[0].offsetHeight !== targets[1].offsetHeight) {
        const height = elements.reduce(function(acc, ele) {
          return Math.max(acc, ele.offsetHeight)
        }, 0)
        elements.forEach(function(ele) {
          if (ele.offsetHeight < height) {
            ele.style.height = `${height}px`
          }
        })
      }
    }
  }
}
</script>

<style module lang="scss">
$gap: 12px;
$fzXXSmall: 14px;
$fzXSmall: 16px;
$fzSmall: 18px;
$fzRegular: 20px;
$fzMedium: 22px;
$fzLarge: 24px;
$fzXLarge: 28px;
$fzXXLarge: 42px;

/* stylelint-disable */
.container {
  color: $gray-1;
  line-height: 1.35;
  //overflow-wrap: break-word;
  word-break: break-word;
  padding: 20px;
  p {
    margin-bottom: 0;
  }
  ul {
    padding-left: 0;
  }
  li {
    list-style-type: none;
  }
  em {
    font-style: normal;
  }
}
.heading {
  font-size: $fzLarge;
  margin-bottom: 10px;
  &:not(:first-child) {
    margin-top: 30px;
  }
}
.inquiry {
  display: grid;
  grid-template-columns: calc(70% - #{$gap} * 0.7) calc(30% - #{$gap} * 0.3);
  grid-template-rows: repeat(3, auto);
  grid-gap: $gap;
}
.block {
  background-color: $white;
  box-shadow: $shadow;
  border: 1px solid $gray-4;
  border-radius: 4px;
}
.symptomBox {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  padding: 10px;
  border: 2px solid $green-1;
  border-radius: 3px;
  background-color: $white;
  font-weight: bold;
  font-style: normal;
  font-size: $fzMedium;
  text-align: center;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -9px;
    top: -9px;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background-color: #fff;
    background-image: url('/flow/check_circle-24px.svg');
  }
  > span {
    text-align: center;
    /*
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: baseline;
    > span {
      &:first-child {
        padding-right: 5px;
      }
      &:last-child {
        padding-left: 5px;
      }
      &:not(:first-child):not(:last-child) {
        padding: 0 5px;
      }
    }
    */
  }
  .small {
    font-size: $fzXXSmall;
  }
  .medium {
    font-size: $fzMedium;
  }
  .large {
    font-size: $fzLarge;
  }
}
.blockA {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  display: flex;
  flex-wrap: wrap;
  .lead {
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid $gray-4;
    text-align: center;
    font-size: $fzXSmall;
    font-weight: bold;
    .past {
      font-size: $fzLarge;
      .num {
        font-size: $fzXXLarge;
        padding: 0 0.1em;
      }
    }
  }
  .blockA1,
  .blockA2 {
    width: 50%;
    padding: 20px;
  }
  .cond {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
  }
  .symptom {
    display: flex;
    font-weight: bold;
    width: calc((100% + 20px) * 1.25);
    > span {
      display: flex;
      flex: 0 0 auto;
      justify-content: center;
      align-items: center;
      min-width: 20%;
      width: 20%;
      font-size: $fzRegular;
      text-align: center;
    }
    > em {
      min-width: 40%;
      width: 40%;
    }
    .hidden {
      visibility: hidden;
    }
  }
  .contact {
    display: block;
    padding-bottom: 30px;
    font-size: $fzMedium;
    flex: 1 0 auto;
    font-weight: bold;
    text-align: center;
    > * {
      display: block;
    }
    > span {
      line-height: 1.5;
    }
    em {
      border-bottom: 4px solid $green-1;
    }
    strong,
    .strong {
      display: block;
      color: $green-1;
      font-size: $fzXSmall;
      &:not(:last-child) {
        margin-bottom: 10px;
      }
      &:last-child {
        margin-top: 5px;
      }
    }
  }
  .blockA1 {
    position: relative;
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      border-right: 1px solid $gray-4;
    }
  }
  .blockA2 {
    .symptom {
      flex-direction: row-reverse;
      margin-left: calc(100% - (100% + 20px) * 1.25);
    }
  }
}
.blockB {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
  display: flex;
  padding: 20px;
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 50%;
    border-right: 1px solid $gray-4;
  }
  > .cond {
    order: 1;
    width: 25%;
    > .symptomBox:not(:first-child) {
      margin-top: 10px;
    }
  }
  .req {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    padding: 10px 0;
    .duration {
      display: block;
      font-size: $fzSmall;
      text-align: center;
      flex: 0 0 auto;
      .day {
        font-weight: bold;
        font-size: $fzLarge;
        border-bottom: 4px solid $green-1;
        .num {
          font-size: $fzXXLarge;
        }
      }
    }
    .type {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1 0 auto;
      > img {
        margin-bottom: 5px;
        display: block;
      }
    }
    .typeInner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      > span {
        display: flex;
        align-items: center;
        > img {
          margin-right: 5px;
        }
      }
      > span:not(:first-child) {
        margin-top: 10px;
      }
    }
  }
  > .elder,
  > .general {
    width: calc(37.5% - 12px);
  }
  > .elder {
    order: 2;
    margin-left: 12px;
  }
  > .general {
    order: 0;
    margin-right: 12px;
  }
}
.blockC {
  grid-row: 3 / 4;
  grid-column: 1 / 3;
  display: flex;
  .blockC1 {
    width: calc(70% * 0.6 - #{$gap});
    margin-right: $gap;
  }
  .blockC2_3 {
    display: flex;
    justify-content: space-between;
    flex: 1 0 auto;
    .blockC2 {
      width: calc(
        100% * 0.7 * 0.4 / (100 * 0.7 * 0.4 + 100 * 0.3) * 100 - #{$gap} * 0.7
      );
    }
    .blockC3 {
      width: calc(
        100% * 0.3 / (100 * 0.7 * 0.4 + 100 * 0.3) * 100 - #{$gap} * 0.3
      );
    }
  }
}
.blockD {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
}
.treatment {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - #{$gap} * 0.5));
  grid-template-rows: repeat(3, auto);
  grid-gap: $gap;
}
.blockF {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.blockG {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
.blockH {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.blockI {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.srOnly {
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
}

@include lessThan(1170) {
  .blockA {
    .blockA1,
    .blockA2 {
      width: 100%;
    }
    .symptom {
      width: 100%;
      justify-content: space-between;
      .hidden {
        visibility: visible;
      }
      > span,
      > em {
        flex: 0 1 auto;
        min-width: auto;
      }
    }
    .blockA1 {
      border-bottom: 1px solid $gray-4;
      &::before {
        display: none;
      }
    }
    .blockA2 {
      .symptom {
        flex-direction: row;
        margin-left: 0;
      }
    }
  }

  .blockB {
    display: block;
    &::before {
      display: none;
    }
    > .cond {
      order: 0;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      > .symptomBox {
        width: calc(50% - 5px);
      }
      > .symptomBox:not(:first-child) {
        margin-top: 0;
      }
      > .symptomBox:nth-child(n + 3) {
        margin-top: 10px;
      }
    }
    .req {
      .typeInner {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        > span {
          margin: 10px 10px auto;
        }
      }
    }
    > .elder,
    > .general {
      width: 100%;
    }
    > .elder {
      order: 1;
      margin-left: 0;
    }
    > .general {
      order: 2;
      margin-right: 0;
      padding-top: 15px;
      position: relative;
      &::before {
        content: '';
        display: block;
        top: 0;
        right: 20px;
        left: 20px;
        border-top: 1px solid $gray-4;
      }
    }
  }
}
@include lessThan(960) {
  .blockA {
    .blockA1,
    .blockA2 {
      padding: 15px;
    }
  }
  .blockB {
    padding: 15px;
  }
}
</style>
