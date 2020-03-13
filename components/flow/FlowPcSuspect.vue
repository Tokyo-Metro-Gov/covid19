<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <div :class="$style.RowItems">
        <div>
          <img
            src="/flow/sentiment_very_dissatisfied-24px.svg"
            alt="dissatisfied face icon"
          />
        </div>
        <div :class="$style.SmallerText">
          {{ $t('不安に思う方') }}
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          {{ $t('微熱') }}
        </div>
        <div :class="$style.CheckBox">
          {{ $t('軽い咳') }}
        </div>
        <div :class="$style.CheckBox">
          {{ $t('感染の不安') }}
        </div>
      </div>
    </div>

    <div :class="[$style.SubtleBox, $style.Box2, $style.Center]">
      <div :class="$style.LargerText">
        {{ $t('新型コロナコールセンター') }}
      </div>
      <div :class="$style.SmallerText">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
      </div>

      <div :class="$style.TelLink">
        <a href="tel:0570550571">
          <img src="/flow/phone-24px.svg" alt="Phone" />
          0570-550571
        </a>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "不安に思う方": "不安に思う方",
    "微熱": "微熱",
    "軽い咳": "軽い咳",
    "感染の不安": "感染の不安",
    "新型コロナコールセンター": "新型コロナコールセンター",
    "午前9時から午後9時（土日祝含む）": "午前9時から午後9時（土日祝含む）"
  },
  "en": {
    "不安に思う方": "For those who suspect they have COVID-19 infection",
    "微熱": "Having slight fever",
    "軽い咳": "Having minor coughs",
    "感染の不安": "If you suspect you have COVID-19",
    "新型コロナコールセンター": "COVID-19 Telephone Advisory Center (Support in English, Chinese, Korean and Japanese)",
    "午前9時から午後9時（土日祝含む）": "9:00 am - 9:00 pm (7 days a week)"
  },
  "zh-cn": {
    "不安に思う方": "如果您感到不安",
    "微熱": "发低烧",
    "軽い咳": "有轻微的咳嗽症状",
    "感染の不安": "怀疑自己感染新冠肺炎",
    "新型コロナコールセンター": "新冠肺炎服务专线（提供中文、英语、日语、韩语服务）",
    "午前9時から午後9時（土日祝含む）": "上午 9 点至晚上 9 点（含周六日及节假日）"
  },
  "zh-tw": {
    "不安に思う方": "若您感到不適",
    "微熱": "輕微發燒",
    "軽い咳": "輕微咳嗽",
    "感染の不安": "覺得自己可能感染新型冠狀病毒",
    "新型コロナコールセンター": "新型冠狀病毒肺炎服務專線（提供中文、英文、日文、韓文服務）",
    "午前9時から午後9時（土日祝含む）": "早上 9 點到晚上 9 點（含週末例假日）"
  },
  "ko": {
    "不安に思う方": "코로나19가 의심되는 경우",
    "微熱": "미열 증상",
    "軽い咳": "가벼운 기침",
    "感染の不安": "코로나19가 의심된다면",
    "新型コロナコールセンター": "코로나19 콜센터(영어, 중국어, 한국어, 일본어 서비스)",
    "午前9時から午後9時（土日祝含む）": "오전 9:00 - 오후 9:00 (매일)"
  },
  "ja-basic": {
    "不安に思う方": "ふあん、しんぱい な ひと",
    "微熱": "ちょっと ねつが あるひと",
    "軽い咳": "ちょっと せきがある",
    "感染の不安": "びょうきが こわい",
    "新型コロナコールセンター": "あたらしい コロナについて でんわ できるところ",
    "午前9時から午後9時（土日祝含む）": "まいにち あさ の ごぜん９じ～よる の ごご９じまで（やすみ の ひも やっています）"
  }
}
</i18n>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.TelLink {
  @include largerThan($medium) {
    font-size: larger;
  }
  a {
    color: $gray-2;
    text-decoration: none;
    font-weight: bold;
  }
}

.CheckBox {
  position: relative;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px 0;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
  @include largerThan($large) {
    font-size: 20px;
  }

  &:after {
    position: absolute;
    left: -8px;
    top: -8px;
    content: url(/flow/check_circle-24px.svg);
  }

  &:before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}

.SubtleBox {
  @include card-container();
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
}

.Box1 {
  position: relative;
  flex: 0 0 60%;
  flex-direction: row;
  &::after {
    content: '';
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
}

.Box2 {
  flex: 0 0 38%;
  flex-direction: column;
  div {
    margin: 0.5em;
  }
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;
  @include largerThan($large) {
    margin: 0 2em;
  }
}

.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: larger;
  font-weight: bold;
}

.Center {
  text-align: center;
}

.SmallerText {
  font-size: smaller;
}
</style>
