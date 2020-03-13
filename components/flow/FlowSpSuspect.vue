<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <SentimentIcon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('不安に思う方') }}</span>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        {{ $t('微熱') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('軽い咳') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="$style.callcenter">
      <p :class="$style.fzLarge">
        {{ $t('新型コロナコールセンター') }}
      </p>
      <p :class="$style.open">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
      </p>
      <p :class="[$style.phone, $style.fzNumeric]">
        <span :class="$style.icon">
          <PhoneIcon alt="Phone" />
        </span>
        <a href="tel:0570550571">0570-550571</a>
      </p>
    </div>

    <a v-scroll-to="'#consult'" href="#consult" :class="$style.button">
      <span :class="$style.text">{{ $t('専門的な助言が必要な場合') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
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
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import PhoneIcon from '@/static/flow/responsive/phone.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.rectContainer {
  // suspect
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);
    > .symptom {
      margin: 0 px2vw(11);
      flex-grow: 10;
    }
  }
}
// suspect
.callcenter {
  margin-top: px2vw(25);
  text-align: center;
  .open {
    margin-top: px2vw(10);
  }
}
</style>
