<template>
  <div :class="$style.Elder">
    <ul :class="['mb-1', $style.Targets]">
      <li :class="['mb-3', $style.TargetsItem]">
        <DirectionsWalkIcon
          :class="$style.TargetsItemImg"
          aria-hidden="true"
        />{{ $t('ご高齢な方') }}
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <AccessibleIcon :class="$style.TargetsItemImg" aria-hidden="true" />
        {{ $t('基礎疾患のある方') }}
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <PregnantWomanIcon
          :class="$style.TargetsItemImg"
          aria-hidden="true"
        />{{ $t('妊娠中の方') }}
      </li>
    </ul>

    <ul :class="$style.Conditions">
      <li :class="['py-4', $style.ConditionsItem]">
        <span>
          <i18n path="{cold}のような症状">
            <span :class="$style.ConditionsItemLarger" place="cold">
              {{ $t('風邪') }}
            </span>
          </i18n>
        </span>
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        <i18n tag="span" path="発熱{temperature}">
          <i18n
            tag="span"
            place="temperature"
            path="{tempNum}以上"
            :class="[
              $style.ConditionsItemLarger,
              $style.ConditionsItemWithWordBreak
            ]"
          >
            <span place="tempNum">{{ $t('37.5℃') }}</span>
          </i18n>
        </i18n>
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('息苦しさ') }}
      </li>
    </ul>

    <p :class="$style.Lasting">
      <i18n path="{duration}続いている">
        <i18n
          tag="span"
          :class="$style.LastingLarger"
          place="duration"
          path="{day}日程度"
        >
          <strong place="day">2</strong>
        </i18n>
      </i18n>
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
    "{duration}続いている": "{duration}続いている",
    "{day}日程度": "{day}日程度",
    "{cold}のような症状": "{cold}のような症状",
    "風邪": "風邪",
    "発熱{temperature}": "発熱{temperature}",
    "{tempNum}以上": "{tempNum}以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "強いだるさ",
    "息苦しさ": "息苦しさ",
    "ご高齢な方": "ご高齢な方",
    "基礎疾患のある方": "基礎疾患のある方",
    "妊娠中の方": "妊娠中の方",
    "新型コロナ受診相談窓口へ": "新型コロナ受診相談窓口へ"
  },
  "en": {
    "{duration}続いている": "Having these symptoms for {duration",
    "{day}日程度": "{day} consecutive days",
    "{cold}のような症状": "Having {cold} symptoms",
    "風邪": "cold/flu",
    "発熱{temperature}": "body temperature {temperature}",
    "{tempNum}以上": "above {tempNum}",
    "37.5℃": "37.5℃",
    "強いだるさ": "Extreme fatigue",
    "息苦しさ": "Having difficulty when breathing",
    "ご高齢な方": "The elderly",
    "基礎疾患のある方": "People with chronic illnesses",
    "妊娠中の方": "Pregnant women",
    "新型コロナ受診相談窓口へ": "Go COVID-19 advisory"
  },
  "zh-cn": {
    "{duration}続いている": "症状持续{duration}",
    "{day}日程度": "约{day}天",
    "{cold}のような症状": "有疑似{cold}的症状",
    "風邪": "感冒",
    "発熱{temperature}": "发烧 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有强烈倦怠感",
    "息苦しさ": "感到呼吸困难",
    "ご高齢な方": "老年人",
    "基礎疾患のある方": "患有基础疾病的人",
    "妊娠中の方": "孕妇",
    "新型コロナ受診相談窓口へ": "跳转到新冠肺炎就诊咨询窗口"
  },
  "zh-tw": {
    "{duration}続いている": "症狀持續{duration}",
    "{day}日程度": "約{day}天",
    "{cold}のような症状": "疑似{cold}症狀",
    "風邪": "感冒",
    "発熱{temperature}": "發燒 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有強烈疲倦感",
    "息苦しさ": "呼吸不順暢",
    "ご高齢な方": "老年人",
    "基礎疾患のある方": "具有潛在疾病者",
    "妊娠中の方": "孕婦",
    "新型コロナ受診相談窓口へ": "跳到新冠病毒就診諮詢窗口"
  },
  "ko": {
    "{duration}続いている": "이러한 증상이 {duration} 지속될 경우",
    "{day}日程度": "{day}일 동안",
    "{cold}のような症状": "{cold} 비슷한 증상",
    "風邪": "감기와",
    "発熱{temperature}": "{temperature} 발열",
    "{tempNum}以上": "{tempNum} 이상의",
    "37.5℃": "37.5도",
    "強いだるさ": "극도의 피로감",
    "息苦しさ": "호흡이 어려운 경우",
    "ご高齢な方": "노인",
    "基礎疾患のある方": "기저질환이 있는 사람",
    "妊娠中の方": "임산부",
    "新型コロナ受診相談窓口へ": "코로나 19 수진 상담 창구"
  },
  "ja-basic": {
    "{duration}続いている": "{duration} つづいている",
    "{day}日程度": "{day}にち くらい",
    "{cold}のような症状": "{cold} が あるひと",
    "風邪": "かぜ",
    "発熱{temperature}": "{temperature} たかいねつが あるひと",
    "{tempNum}以上": "{tempNum}より",
    "37.5℃": "37.5℃",
    "強いだるさ": "からだがくるしい",
    "息苦しさ": "いきがくるしい",
    "ご高齢な方": "おじいさん おばあさん",
    "基礎疾患のある方": "ふだんから びょうきが あるひと",
    "妊娠中の方": "おなかに こどもが いるひと",
    "新型コロナ受診相談窓口へ": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）へ ※受診相談窓口：病院（びょういん）で 見（み）てもらうか について 相談（そうだん） するところ"
  }
}
</i18n>

<script lang="ts">
import AccessibleIcon from '@/static/flow/accessible-24px.svg'
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
import DirectionsWalkIcon from '@/static/flow/directions_walk-24px.svg'
import PregnantWomanIcon from '@/static/flow/pregnant_woman-24px.svg'

export default {
  components: {
    AccessibleIcon,
    ArrowForwardIcon,
    DirectionsWalkIcon,
    PregnantWomanIcon
  }
}
</script>

<style module lang="scss">
.Elder {
  font-weight: bold;
  color: $gray-2;
  text-align: center;
}

.Targets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 4px !important;
  list-style: none;

  &Item {
    $imgSize: 2rem;

    @include font-size(16);
    font-weight: bold;
    line-height: $imgSize;
    display: flex;
    align-items: center;

    &Img {
      width: $imgSize;
    }
  }
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

.Lasting {
  @include lessThan($small) {
    @include font-size(14);
  }
  @include largerThan($small) {
    @include font-size(16);
  }
  color: $gray-2;
  font-weight: bold;
  &Larger {
    border-bottom: 4px solid $green-1;
    @include lessThan($small) {
      @include font-size(18);
    }
    @include largerThan($small) {
      @include font-size(24);
    }
    font-weight: bold;
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
