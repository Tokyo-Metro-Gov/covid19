<template>
  <div :class="$style.Suspect">
    <div :class="['mb-5', $style.Targets]">
      <div :class="$style.TargetsItem">
        <SentimentIcon
          :class="['mb-n4', $style.TargetsItemImg]"
          aria-hidden="true"
        />
        <div>
          {{ $t('不安に思う方') }}
        </div>
      </div>
    </div>

    <ul :class="['mb-5', $style.Conditions]">
      <li :class="['py-4', $style.ConditionsItem]">
        {{ $t('微熱') }}
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        {{ $t('軽い咳') }}
      </li>
      <li :class="['py-4', $style.ConditionsItem, $style.ConditionsItemLarge]">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="['mb-3', $style.CallCenter]">
      <div :class="$style.CallCenterName">
        {{ $t('新型コロナコールセンター') }}
      </div>
      <div :class="$style.CallCenterTime">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
      </div>
    </div>

    <div :class="['mb-4', $style.Phone]">
      <div :class="$style.PhoneItem">
        <PhoneIcon :class="$style.PhoneItemImg" alt="Phone" />
        <a href="tel:0570550571">
          0570-550571
        </a>
      </div>
    </div>

    <a
      v-scroll-to="'#consult'"
      href="#consult"
      :class="['pa-5', $style.Advisory]"
    >
      <span :class="$style.AdvisoryText">
        {{ $t('専門的な助言が必要な場合') }}
      </span>
      <ArrowForwardIcon :class="$style.AdvisoryIcon" />
    </a>
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
    "午前9時から午後9時（土日祝含む）": "午前9時から午後9時（土日祝含む）",
    "専門的な助言が必要な場合": "専門的な助言が必要な場合"
  },
  "en": {
    "不安に思う方": "For those who suspect they have COVID-19 infection",
    "微熱": "Having slight fever",
    "軽い咳": "Having minor coughs",
    "感染の不安": "If you suspect you have COVID-19",
    "新型コロナコールセンター": "COVID-19 Telephone Advisory Center (Support in English, Chinese, Korean and Japanese)",
    "午前9時から午後9時（土日祝含む）": "9:00 am - 9:00 pm(7 days a week)",
    "専門的な助言が必要な場合": "If you need advice from an expert"
  },
  "zh-cn": {
    "不安に思う方": "如果您感到不安",
    "微熱": "发低烧",
    "軽い咳": "有轻微的咳嗽症状",
    "感染の不安": "怀疑自己感染新冠肺炎",
    "新型コロナコールセンター": "新冠肺炎服务专线（提供中文、英语、日语、韩语服务）",
    "午前9時から午後9時（土日祝含む）": "上午 9 点至晚上 9 点（含周六日及节假日）",
    "専門的な助言が必要な場合": "如果您需要专业的建议"
  },
  "zh-tw": {
    "不安に思う方": "若您感到不適",
    "微熱": "輕微發燒",
    "軽い咳": "輕微咳嗽",
    "感染の不安": "覺得自己可能感染新型冠狀病毒",
    "新型コロナコールセンター": "新型冠狀病毒肺炎服務專線（提供中文、英文、日文、韓文服務）",
    "午前9時から午後9時（土日祝含む）": "早上 9 點到晚上 9 點（含週末例假日）",
    "専門的な助言が必要な場合": "若您需要專業建議"
  },
  "ko": {
    "不安に思う方": "코로나19가 의심되는 경우",
    "微熱": "미열 증상",
    "軽い咳": "가벼운 기침",
    "感染の不安": "코로나19가 의심된다면",
    "新型コロナコールセンター": "코로나19 콜센터(영어, 중국어, 한국어, 일본어 서비스)",
    "午前9時から午後9時（土日祝含む）": "오전 9:00 - 오후 9:00(매일)",
    "専門的な助言が必要な場合": "전문적 상담이 필요할 경우"
  },
  "ja-basic": {
    "不安に思う方": "ふあん、しんぱい な ひと",
    "微熱": "ちょっと ねつが あるひと",
    "軽い咳": "ちょっと せきがある",
    "感染の不安": "びょうきが こわい",
    "新型コロナコールセンター": "あたらしい コロナについて でんわ できるところ",
    "午前9時から午後9時（土日祝含む）": "まいにち あさ の ごぜん９じ～よる の ごご９じまで（やすみ の ひも やっています）",
    "専門的な助言が必要な場合": "コロナをよくしっているひとから くわしい はなし を ききたい とき"
  }
}
</i18n>

<script lang="ts">
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
import PhoneIcon from '@/static/flow/phone-24px.svg'
import SentimentIcon from '@/static/flow/sentiment_very_dissatisfied-24px.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon }
}
</script>

<style module lang="scss">
.Suspect {
  font-weight: bold;
  color: $gray-2;
  text-align: center;
}
.Targets {
  &Item {
    $imgSize: 2rem;
    @include font-size(16);
    font-weight: bold;
    line-height: $imgSize;
    &Img {
      width: $imgSize;
    }
  }
}
.Conditions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0 !important; // FIXME: ulを使用している関係で、paddingを打ち消す必要がある
  &Item {
    @include lessThan($small) {
      @include font-size(16);
    }
    @include largerThan($small) {
      @include font-size(18);
    }
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;
    flex-basis: 28%;
    &::before {
      $imgSize: 24px;
      content: '';
      position: absolute;
      top: -13px;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: $imgSize;
      height: $imgSize;
      background: #fff url(/flow/check_circle-24px.svg) no-repeat center;
      background-size: $imgSize;
    }
    &Large {
      flex-basis: 36%;
    }
  }
}
.CallCenter {
  &Name {
    @include lessThan($small) {
      @include font-size(20);
    }
    @include largerThan($small) {
      @include font-size(22);
    }
  }
  &Time {
    @include lessThan($small) {
      @include font-size(14);
    }
    @include largerThan($small) {
      @include font-size(16);
    }
  }
}
.Phone {
  &Item {
    $imgSize: 2rem;
    @include font-size(24);
    font-weight: bold;
    line-height: $imgSize;
    display: flex;
    align-items: center;
    justify-content: center;
    &Img {
      width: $imgSize;
    }
    a {
      color: $gray-2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.Advisory {
  align-items: center;
  background-color: #ffe200;
  border-radius: 4px;
  box-shadow: -1px 2px 5px $gray-3;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: $gray-2 !important;
  font-weight: bold;
  &Text {
    @include lessThan($small) {
      @include font-size(16);
    }
    @include largerThan($small) {
      @include font-size(20);
    }
    text-align: initial;
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
</style>
