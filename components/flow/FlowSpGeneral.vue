<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <HumanIcon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </p>
    <ul :class="[$style.symptomContainer, $style.double]">
      <li :class="$style.symptom">
        <span>
          <i18n path="{cold}のような症状">
            <span :class="$style.ConditionsItemLarger" place="cold">{{
              $t('風邪')
            }}</span>
          </i18n>
        </span>
      </li>
      <li :class="$style.symptom">
        <i18n tag="span" path="発熱{temperature}" :class="$style.fzSmall">
          <i18n
            tag="span"
            path="{tempNum}以上"
            place="temperature"
            :class="[$style.break, $style.fzRegular]"
          >
            <span :class="$style.temp" place="tempNum">{{ $t('37.5℃') }}</span>
          </i18n>
        </i18n>
      </li>
      <li :class="$style.symptom">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}
      </li>
    </ul>
    <p :class="$style.duration">
      <i18n path="{duration}続いている">
        <i18n
          :class="[$style.underline, $style.fzLarge]"
          tag="span"
          place="duration"
          path="{day}日以上"
        >
          <strong :class="$style.fzNumeric" place="day">4</strong>
        </i18n>
      </i18n>
    </p>
    <a v-scroll-to="'#consult'" href="#consult" :class="$style.button">
      <span :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<<<<<<< HEAD
<i18n src="./FlowSpGeneral.i18n.json"></i18n>
=======
<i18n>
{
  "ja": {
    "一般の方": "一般の方",
    "{duration}続いている": "{duration}続いている",
    "{day}日以上": "{day}日以上",
    "{cold}のような症状": "{cold}のような症状",
    "風邪": "風邪",
    "発熱{temperature}": "発熱{temperature}",
    "{tempNum}以上": "{tempNum}以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "強いだるさ",
    "息苦しさ": "息苦しさ",
    "新型コロナ受診相談窓口へ": "新型コロナ受診相談窓口へ"
  },
  "en": {
    "一般の方": "People without any specific health conditions",
    "{duration}続いている": "Having these symptoms for {duration}",
    "{day}日以上": "{day} consecutive days or more",
    "{cold}のような症状": "Having {cold} symptoms",
    "風邪": "cold/flu",
    "発熱{temperature}": "body temperature {temperature}",
    "{tempNum}以上": "above {tempNum}",
    "37.5℃": "37.5℃",
    "強いだるさ": "Extreme fatigue",
    "息苦しさ": "Having difficulty when breathing",
    "新型コロナ受診相談窓口へ": "Go COVID-19 advisory"
  },
  "zh-cn": {
    "一般の方": "普通人",
    "{duration}続いている": "症状持续{duration}",
    "{day}日以上": "{day}天以上",
    "{cold}のような症状": "有疑似{cold}的症状",
    "風邪": "感冒",
    "発熱{temperature}": "发烧 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有强烈倦怠感",
    "息苦しさ": "感到呼吸困难",
    "新型コロナ受診相談窓口へ": "跳转到新冠肺炎就诊咨询窗口"
  },
  "zh-tw": {
    "一般の方": "一般人士",
    "{duration}続いている": "症狀持續{duration}",
    "{day}日以上": "{day}天以上",
    "{cold}のような症状": "疑似{cold}症狀",
    "風邪": "感冒",
    "発熱{temperature}": "發燒 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有強烈疲倦感",
    "息苦しさ": "呼吸不順暢",
    "新型コロナ受診相談窓口へ": "跳到新冠病毒就診諮詢窗口"
  },
  "ko": {
    "一般の方": "일반인",
    "{duration}続いている": "이러한 증상이 {duration} 지속될 경우",
    "{day}日以上": "{day}일 이상",
    "{cold}のような症状": "{cold} 비슷한 증상",
    "風邪": "감기와",
    "発熱{temperature}": "{temperature} 발열",
    "{tempNum}以上": "{tempNum} 이상의",
    "37.5℃": "37.5도",
    "強いだるさ": "극도의 피로감",
    "息苦しさ": "호흡이 어려운 경우",
    "新型コロナ受診相談窓口へ": "코로나 19 수진 상담 창구"
  },
  "ja-basic": {
    "一般の方": "ねつが ないひと",
    "{duration}続いている": "{duration} つづいている",
    "{day}日以上": "{day}にち より ながく",
    "{cold}のような症状": "{cold} が あるひと",
    "風邪": "かぜ",
    "発熱{temperature}": "{temperature} たかいねつが あるひと",
    "{tempNum}以上": "{tempNum}より",
    "37.5℃": "37.5℃",
    "強いだるさ": "からだがくるしい",
    "息苦しさ": "いきがくるしい",
    "新型コロナ受診相談窓口へ": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）へ ※受診相談窓口：病院（びょういん）で 見（み）てもらうか について 相談（そうだん） するところ"
  }
}
</i18n>
>>>>>>> FlowSp Past,General,Elder,Suspect マークアップ・スタイル共通化 多言語用調整

<script lang="ts">
import HumanIcon from '@/static/flow/responsive/accessibility.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
</style>
