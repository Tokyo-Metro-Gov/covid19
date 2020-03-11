<template>
  <section :class="$style.Flow">
    <div :class="$style.FlowHeading">
      <i18n path="{past}の出来ごとと症状" tag="span">
        <i18n
          :class="$style.FlowLText"
          tag="span"
          path="発症前{two}週間以内"
          place="past"
        >
          <span :class="$style.FlowNum" place="two">2</span>
        </i18n>
      </i18n>
    </div>
    <div :class="$style.FlowInner">
      <div :class="$style.FlowItem">
        <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
          <strong :class="$style.FlowTitle">
            {{ $t('「新型コロナウイルス感染者」と') }}
          </strong>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="$style.FlowPerson"
          >
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
        </template>
        <template v-else>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="$style.FlowPerson"
          >
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
          <span :class="$style.FlowTitle">
            {{ $t('「新型コロナウイルス感染者」と') }}
          </span>
        </template>
      </div>
      <div :class="$style.FlowItem">
        <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
          <strong :class="$style.FlowTitle">
            {{ $t('流行地域への渡航・居住歴がある方') }}
          </strong>
          <i18n
            tag="span"
            :class="$style.FlowPerson"
            path="{you} か {closeContact}をした方"
          >
            <em :class="$style.FlowLine" place="you">
              {{ $t('ご本人') }}
            </em>
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
        </template>
        <template v-else>
          <i18n
            tag="span"
            :class="[$style.FlowPerson, $style.FlowPersonS]"
            path="travel history from {area}"
          >
            <em :class="$style.FlowLine" place="area">
              {{ $t('COVID-19 prevalent area') }}
            </em>
          </i18n>
          <i18n
            tag="span"
            :class="[$style.FlowPerson, $style.FlowPersonS]"
            path="been {inCloseContact} with returnees"
          >
            <em :class="$style.FlowLine" place="inCloseContact">
              {{ $t('in close contact') }}
            </em>
          </i18n>
        </template>
      </div>
      <div :class="$style.FlowCondition">
        <em :class="$style.FlowSymptom">{{ $t('発熱') }}</em>
        <span :class="$style.FlowText">{{ $t('または') }}</span>
        <em :class="$style.FlowSymptom">{{ $t('呼吸器症状') }}</em>
        <span :class="$style.FlowText">{{ $t('かつ') }}</span>
        <em :class="$style.FlowSymptom">
          <i18n tag="span" :class="$style.FlowTextSm" path="発熱{temperature}">
            <i18n tag="span" path="{tempNum}以上" place="temperature">
              <span :class="$style.FlowTemperature" place="tempNum">
                {{ $t('37.5℃') }}
              </span>
            </i18n>
          </i18n>
        </em>
      </div>
    </div>
  </section>
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
  }
}
</script>

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

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);
  position: relative;
  padding-bottom: 20px;
  color: $gray-2;
  text-align: center;
  &Heading {
    position: relative;
    width: calc(100% - 2px);
    margin: 0 0 0 1px;
    background-color: $white;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }
  &Num {
    display: inline-block;
    padding: 0 5px;
    font-size: calc(1.5rem + ((1vw - 7.68px) * 5.4726));
    @include largerThan($large) {
      font-size: 42px;
      padding: 0 10px;
    }
  }
  &Inner {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    border-top: 1px solid $gray-4;
  }
  &Item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 50%;
    padding: 10px 5px;
    @include largerThan($large) {
      padding: 20px;
    }
  }
  &Title {
    margin-bottom: 4px;
    color: $green-1;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 0.4464));
    font-weight: bold;
    display: block;
    @include largerThan($large) {
      font-size: 15px;
    }
  }
  &Person {
    font-weight: bold;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 1.1905));
    line-height: 1.8;
    text-align: center;
    @include largerThan($large) {
      font-size: 23px;
    }
    &S {
      @include largerThan($large) {
        font-size: 20px;
      }
    }
  }
  &Line {
    border-bottom: 2px solid $green-1;
    font-style: inherit;
    @include largerThan($large) {
      border-width: 4px;
    }
  }
  &Condition {
    display: flex;
    width: 100%;
    padding: 0 15px;
    margin-top: 15px;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    @include largerThan($large) {
      padding: 0 20px;
    }
  }
  &Symptom {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 10px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
    font-weight: bold;
    font-style: normal;
    &::before {
      $icon-size: 27px;
      content: url('/flow/check_circle-24px.svg');
      position: absolute;
      top: $icon-size / 2 * -1;
      left: $icon-size / 2 * -1;
      width: $icon-size;
      height: $icon-size;
      background-color: $white;
      z-index: 1;
    }
    @include largerThan($large) {
      max-width: 190px;
      font-size: 20px;
    }
  }
  &Text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 12.5%;
    padding: 10px;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 1.4881));
    white-space: nowrap;
    @include largerThan($large) {
      max-width: 190px;
      font-size: 21px;
    }
  }
  &LText {
    font-size: calc(1.25rem + ((1vw - 7.68px) * 0.744));
    @include largerThan($large) {
      font-size: 25px;
    }
  }
  &Temperature {
    font-size: calc(1rem + ((1vw - 7.68px) * 2.4876));
    padding-left: 2px;
    padding-right: 2px;
    @include largerThan($large) {
      font-size: 20px;
      padding-left: 5px;
      padding-right: 5px;
      margin-top: -5px;
    }
  }
  &TextSm {
    font-size: 15px;
  }
}
</style>
