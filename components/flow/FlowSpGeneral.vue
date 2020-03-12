<template>
  <div :class="$style.General">
    <div class="mx-2 mb-4">
      <HumanIcon :class="$style.GeneralIcon" />
      <p :class="$style.GeneralHeader">
        {{ $t('一般の方') }}
      </p>
    </div>

    <ul :class="$style.Conditions">
      <li :class="['py-4', $style.ConditionsItem]">
        <span>
          <!-- eslint-disable-next-line prettier/prettier -->
          <span :class="$style.ConditionsItemLarger">風邪</span>のような症状
        </span>
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        <!-- eslint-disable-next-line prettier/prettier -->
        <span>発熱
          <span
            :class="[
              $style.ConditionsItemLarger,
              $style.ConditionsItemWithWordBreak
            ]"
          >
            <span>37.5℃</span>以上
          </span>
        </span>
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('息苦しさ') }}
      </li>
    </ul>

    <p :class="$style.GeneralText">
      <span><strong>4</strong>日以上</span>続いている
    </p>

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

<i18n>
{
  "ja": {
    "一般の方": "一般の方",
    "{duration}続いている": "{duration}続いている",
    "{day}日以上": "{day}日以上",
    "{cold}のような症状": "{cold}のような症状",
    "風邪": "風邪",
    "発熱{temperature}以上": "発熱{temperature}",
    "{tempNum}以上": "{tempNum}以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "強いだるさ",
    "息苦しさ": "息苦しさ",
    "新型コロナ受診相談窓口へ": "新型コロナ受診相談窓口へ"
  },
  "en": {
    "一般の方": "People without any specific health conditions",
    "{duration}続いている": "Having these symptoms for {duration",
    "{day}日以上": "{day} consecutive days or more",
    "{cold}のような症状": "Having {cold} symptoms",
    "風邪": "cold/flu",
    "発熱{temperature}以上": "body temperature {temperature}",
    "{tempNum}以上": "above {tempNum}",
    "37.5℃": "37.5℃",
    "強いだるさ": "Extreme fatigue",
    "息苦しさ": "Having difficulty when breathing",
    "新型コロナ受診相談窓口へ": ""
  },
  "zh-cn": {
    "一般の方": "普通人",
    "{duration}続いている": "症状持续{duration}",
    "{day}日以上": "{day}天以上",
    "{cold}のような症状": "有疑似{cold}的症状",
    "風邪": "感冒",
    "発熱{temperature}以上": "发烧 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有强烈倦怠感",
    "息苦しさ": "感到呼吸困难",
    "新型コロナ受診相談窓口へ": ""
  },
  "zh-tw": {
    "一般の方": "一般人士",
    "{duration}続いている": "症狀持續{duration}",
    "{day}日以上": "{day}天以上",
    "{cold}のような症状": "疑似{cold}症狀",
    "風邪": "感冒",
    "発熱{temperature}以上": "發燒 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有強烈疲倦感",
    "息苦しさ": "呼吸不順暢",
    "新型コロナ受診相談窓口へ": ""
  },
  "ko": {
    "一般の方": "일반인",
    "{duration}続いている": "이러한 증상이 {duration} 지속될 경우",
    "{day}日以上": "{day}일 이상",
    "{cold}のような症状": "{cold} 비슷한 증상",
    "風邪": "감기와",
    "発熱{temperature}以上": "{temperature} 발열",
    "{tempNum}以上": "{tempNum} 이상의",
    "37.5℃": "37.5도",
    "強いだるさ": "극도의 피로감",
    "息苦しさ": "호흡이 어려운 경우",
    "新型コロナ受診相談窓口へ": ""
  },
  "ja-basic": {
    "一般の方": "ねつが ないひと",
    "{duration}続いている": "{duration} つづいている",
    "{day}日以上": "{day}にち より ながく",
    "{cold}のような症状": "{cold} が あるひと",
    "風邪": "かぜ",
    "発熱{temperature}以上": "{temperature} たかいねつが あるひと",
    "{tempNum}以上": "{tempNum}より",
    "37.5℃": "37.5℃",
    "強いだるさ": "からだがくるしい",
    "息苦しさ": "いきがくるしい",
    "新型コロナ受診相談窓口へ": ""
  }
}
</i18n>

<script lang="ts">
import HumanIcon from '@/static/flow/accessibility-24px.svg'
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon }
}
</script>

<style module lang="scss">
.General {
  text-align: center;
  color: $gray-2;
  &Icon {
    width: 2rem;
    height: 2rem;
  }
  &Header {
    @include font-size(16);
    color: $gray-1;
    font-weight: bold;
  }
  .Conditions {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 !important;

    &Item {
      @include lessThan($small) {
        @include font-size(12);
      }
      @include largerThan($small) {
        @include font-size(14);
      }
      &Larger {
        @include lessThan($small) {
          @include font-size(16);
        }
        @include largerThan($small) {
          @include font-size(18);
        }
      }
      font-weight: bold;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-basis: 47.5%;
      flex-direction: column;
      margin: 4% 0;
      border: 2px solid $green-1 !important;
      border-radius: 4px;
      line-height: 1;

      &WithWordBreak {
        display: block;
      }

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
    }
  }
  &Text {
    @include lessThan($small) {
      @include font-size(14);
    }
    @include largerThan($small) {
      @include font-size(16);
    }
    color: $gray-2;
    font-weight: bold;
    margin-bottom: 8px;
    span {
      border-bottom: 4px solid $green-1;
      @include lessThan($small) {
        @include font-size(18);
      }
      @include largerThan($small) {
        @include font-size(24);
      }
      margin-right: 0.25rem;
      strong {
        @include font-size(32);
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
    color: $gray-2;
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
}
</style>
