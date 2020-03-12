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

<!-- v-html で展開される場所の翻訳待ちは 空文字ではなく 0 にする  -->
<i18n>
{
  "ja": {
    "{past}の出来ごとと症状": "{past}の出来ごとと症状",
    "発症前{two}週間以内": "発症前{two}週間以内",
    "「新型コロナウイルス感染者」と": "「新型コロナウイルス感染者」と",
    "{closeContact}をした方": "{closeContact}をした方",
    "濃厚接触": "濃厚接触",
    "流行地域への渡航・居住歴がある方": "流行地域への渡航・居住歴がある方",
    "{you} か {closeContact}をした方": "{you} か {closeContact}をした方",
    "ご本人": "ご本人",
    "発熱": "発熱",
    "または": "または",
    "呼吸器症状": "呼吸器症状",
    "かつ": "かつ",
    "発熱{temperature}": "発熱{temperature}",
    "{tempNum}以上": "{tempNum}以上",
    "37.5℃": "37.5℃",
    "新型コロナ受診相談窓口へ": "新型コロナ受診相談窓口へ"
  },
  "en": {
    "{past}の出来ごとと症状": "{past}, if you have...",
    "発症前{two}週間以内": "In the past {two} weeks",
    "「新型コロナウイルス感染者」と": "with a COVID-19 patient",
    "{closeContact}をした方": "been {closeContact}",
    "濃厚接触": "in close contact",
    "流行地域への渡航・居住歴がある方": 0,
    "{you} か {closeContact}をした方": 0,
    "ご本人": 0,
    "travel history from {area}": "travel history from {area}",
    "COVID-19 prevalent area": "COVID-19 prevalent area",
    "been {inCloseContact} with returnees": "been {inCloseContact} with returnees",
    "in close contact": "in close contact",
    "発熱": "Fever",
    "または": "or",
    "呼吸器症状": "Having respiratory symptoms",
    "かつ": "and",
    "発熱{temperature}": "body temperature {temperature}",
    "{tempNum}以上": "above {tempNum}",
    "37.5℃": "37.5℃",
    "新型コロナ受診相談窓口へ": "Go COVID-19 advisory"
  },
  "zh-cn": {
    "{past}の出来ごとと症状": "如果您在{past}有过以下情况或症状",
    "発症前{two}週間以内": "发病前{two}周内",
    "「新型コロナウイルス感染者」と": "与「新冠肺炎患者」",
    "{closeContact}をした方": "有过{closeContact}的人",
    "濃厚接触": "密切接触",
    "流行地域への渡航・居住歴がある方": 0,
    "{you} か {closeContact}をした方": 0,
    "ご本人": 0,
    "travel history from {area}": "曾到{area}",
    "COVID-19 prevalent area": "过疫区",
    "been {inCloseContact} with returnees": "与来自疫区的人{inCloseContact}",
    "in close contact": "有密切接触者",
    "発熱": "发烧",
    "または": "或者",
    "呼吸器症状": "呼吸道症状",
    "かつ": "和",
    "発熱{temperature}": "发烧 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "新型コロナ受診相談窓口へ": "跳转到新冠肺炎就诊咨询窗口"
  },
  "zh-tw": {
    "{past}の出来ごとと症状": "{past} 如果您有以下症狀",
    "発症前{two}週間以内": "發病前{two}週內",
    "「新型コロナウイルス感染者」と": "與「新型冠狀病毒肺炎患者」",
    "{closeContact}をした方": "有{closeContact}",
    "濃厚接触": "過密切接觸",
    "流行地域への渡航・居住歴がある方": 0,
    "{you} か {closeContact}をした方": 0,
    "ご本人": 0,
    "travel history from {area}": "曾去{area}",
    "COVID-19 prevalent area": "過疫區",
    "been {inCloseContact} with returnees": "與去過疫區的人{inCloseContact}",
    "in close contact": "有過密切接觸",
    "発熱": "發燒",
    "または": "或者是",
    "呼吸器症状": "呼吸道症狀",
    "かつ": "以及",
    "発熱{temperature}": "發燒 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "新型コロナ受診相談窓口へ": "跳到新冠病毒就診諮詢窗口"
  },
  "ko": {
    "{past}の出来ごとと症状": "{past}의 증세",
    "発症前{two}週間以内": "발병전{two}주이내",
    "「新型コロナウイルス感染者」と": "코로나19 환자와",
    "{closeContact}をした方": "{closeContact} 한 사람",
    "濃厚接触": "긴밀한 접촉을",
    "流行地域への渡航・居住歴がある方": "코로나19 발생지역에 방문 혹은 거주한 적이 있는 사람",
    "{you} か {closeContact}をした方": "{you} 또는 {closeContact} 한 사람",
    "ご本人": "본인",
    "発熱": "발열",
    "または": "혹은",
    "呼吸器症状": "호흡기 증상",
    "かつ": "또는",
    "発熱{temperature}": "{temperature} 발열",
    "{tempNum}以上": "{tempNum} 이상의",
    "37.5℃": "37.5도",
    "新型コロナ受診相談窓口へ": "코로나 19 수진 상담 창구"
  },
  "ja-basic": {
    "{past}の出来ごとと症状": "{past}で したことと、からだの ぐあい ",
    "発症前{two}週間以内": "ねつが でるまえの {two}しゅうかん",
    "「新型コロナウイルス感染者」と": "コロナに なったひとと",
    "{closeContact}をした方": "{closeContact}ひと",
    "濃厚接触": "あった",
    "流行地域への渡航・居住歴がある方": "コロナがあるところにいったり、すんだことがあるひと",
    "{you} か {closeContact}をした方": "{you}か、{closeContact}ひと",
    "ご本人": "じぶん",
    "発熱": "ねつが あるひと",
    "または": "",
    "呼吸器症状": "いきがつらいひと、むねがくるしい・ぜいぜいするひと",
    "かつ": "",
    "発熱{temperature}": "{temperature} たかいねつが あるひと",
    "{tempNum}以上": "{tempNum}より",
    "37.5℃": "37.5℃",
    "新型コロナ受診相談窓口へ": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）へ ※受診相談窓口：病院（びょういん）で 見（み）てもらうか について 相談（そうだん） するところ"
  }
}
</i18n>

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
