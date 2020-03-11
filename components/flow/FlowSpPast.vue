<template>
  <div :class="$style.SpPast">
    <h4 :class="['mb-2', $style.Heading]">
      発症前<strong>2</strong>週間以内<!--
   --><span :class="$style.small">の出来ごとと症状</span>
    </h4>
    <p class="mb-5">
      <span :class="$style.small">「新型コロナウイルス感染者」と</span><br />
      <span :class="$style.underline">濃厚接触</span>をした方<br />
    </p>
    <div :class="['mb-4', $style.flexContainer]">
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
    <div :class="['mb-5', $style.hr]" />
    <p class="mb-5">
      <span :class="$style.small">流行地域への渡航・居住歴がある方</span><br />
      <span :class="$style.underline">ご本人</span>か<!--
   --><span :class="$style.underline">濃厚接触</span>をした方
    </p>
    <div :class="['mb-4', $style.flexContainer]">
      <div :class="$style.item">
        <div class="py-4">
          {{ $t('呼吸器症状') }}
        </div>
      </div>
      <div :class="$style.item">
        {{ $t('かつ') }}
      </div>
      <div :class="$style.item">
        <div :class="['py-4', $style.block]">
          <span :class="$style.small">発熱</span>
          <div>
            37.5℃以上
          </div>
        </div>
      </div>
    </div>
    <a
      v-scroll-to="'#consult'"
      href="#consult"
      :class="['pa-5', $style.Advisory]"
    >
      <span :class="$style.AdvisoryText">
        {{ $t('新型コロナ受診相談窓口へ') }}
      </span>
      <ArrowForwardIcon :class="$style.AdvisoryIcon" />
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
    "37.5℃": "37.5℃"
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
    "37.5℃": "37.5℃"
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
    "37.5℃": "37.5℃"
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
    "37.5℃": "37.5℃"
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
    "37.5℃": "37.5도"
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
    "37.5℃": "37.5℃"
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
.SpPast {
  color: $gray-2;
  .Heading {
    @include lessThan($small) {
      @include font-size(18);
    }
    @include largerThan($small) {
      @include font-size(24);
    }
    text-align: center;
    margin-bottom: 0.5em;
    strong {
      @include lessThan($small) {
        @include font-size(32);
      }
      @include largerThan($small) {
        @include font-size(40);
      }
    }
    .small {
      @include lessThan($small) {
        @include font-size(14);
      }
      @include largerThan($small) {
        @include font-size(20);
      }
    }
  }
  p {
    @include lessThan($small) {
      @include font-size(18);
    }
    @include largerThan($small) {
      @include font-size(24);
    }
    text-align: center;
    font-weight: bold;
    .small {
      @include lessThan($small) {
        @include font-size(14);
      }
      @include largerThan($small) {
        @include font-size(16);
      }
      color: $green-1;
    }
    .underline {
      display: inline-block;
      border-bottom: $green-1 4px solid;
    }
  }
  .flexContainer {
    align-items: stretch;
    display: flex;
    font-weight: bold;
    @include lessThan($small) {
      @include font-size(16);
    }
    @include largerThan($small) {
      @include font-size(18);
    }
    justify-content: space-between;
    .item {
      display: flex;
      line-height: 1rem;
      text-align: center;
      &:nth-child(1),
      &:nth-child(3) {
        flex-basis: 40%;
        > div {
          border: $green-1 2px solid;
          border-radius: 5px;

          // 上下中央寄せ
          display: flex;
          flex-basis: 100%;
          justify-content: center;
          align-items: center;

          // before要素の親要素
          position: relative;
          &::before {
            width: 24px;
            height: 24px;
            content: '';
            background-color: $white;
            background-image: url(/flow/check_circle-24px.svg);
            position: absolute;
            top: -12px;
            left: 0;
            right: 0;
            margin: auto;
          }
          &.block {
            display: block;
          }
        }
      }
      &:nth-child(2) {
        // 上下左右中央寄せ
        display: flex;
        align-items: center;
        justify-content: center;
        flex-basis: 20%;
      }
      .small {
        @include lessThan($small) {
          @include font-size(12);
        }
        @include largerThan($small) {
          @include font-size(14);
        }
      }
    }
  }
  .hr {
    border-bottom: 1px $gray-4 solid;
    height: 1px;
    width: 100%;
    display: block;
  }
  .Advisory {
    align-items: center;
    background-color: #ffe200;
    border-radius: 4px;
    box-shadow: -1px 2px 5px $gray-3;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: $gray-2;
    font-weight: bold;
    &Text {
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(20);
      }
    }
    &Icon {
      @include lessThan($small) {
        width: 28px;
        height: 28px;
      }
      @include largerThan($small) {
        width: 45px;
        height: 45px;
      }
      transform: rotateZ(90deg);
      display: block;
    }
  }
}
</style>
