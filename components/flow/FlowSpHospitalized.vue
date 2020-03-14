<template>
<<<<<<< HEAD
<<<<<<< HEAD
  <div id="hospitalized" :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <HotelIcon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('入院となります') }}</span>
    </p>
    <p :class="[$style.facility, $style.fzXLarge]">
=======
  <div id="hospitalized" :class="$style.Hospitalization">
    <HotelIcon :class="$style.HospitalizationImg" aria-hidden="true" />
    <p :class="$style.HospitalizationText">
      {{ $t('入院となります') }}
    </p>
    <p :class="['mb-0', $style.HospitalizationLargeText]">
>>>>>>> [i18n] fix components/flow Hospitalized
=======
  <div id="hospitalized" :class="$style.Hospitalization">
    <HotelIcon :class="$style.HospitalizationImg" aria-hidden="true" />
    <p :class="$style.HospitalizationText">
      {{ $t('入院となります') }}
    </p>
    <p :class="['mb-0', $style.HospitalizationLargeText]">
>>>>>>> Revert "Merge remote-tracking branch 'upstream/dev-i18n' into fix/1323"
      {{ $t('感染症指定医療機関等') }}
    </p>
  </div>
</template>

<<<<<<< HEAD
<<<<<<< HEAD
<i18n src="./FlowSpHospitalized.i18n.json"></i18n>
=======
=======
>>>>>>> [i18n] fix components/flow Hospitalized
<i18n>
{
  "ja": {
    "入院となります": "入院となります",
    "感染症指定医療機関等": "感染症指定医療機関等"
  },
  "en": {
<<<<<<< HEAD
    "入院となります": "Need to be hospitalized",
=======
    "入院となります": "Need to discharge",
>>>>>>> [i18n] fix components/flow Hospitalized
    "感染症指定医療機関等": "designated medical institutions for specified infectious diseases and equivalent institutions"
  },
  "zh-cn": {
    "入院となります": "需要住院",
    "感染症指定医療機関等": "到传染病指定医疗机构"
  },
  "zh-tw": {
    "入院となります": "須住院治療",
    "感染症指定医療機関等": "至傳染病專責醫療機構"
  },
  "ko": {
<<<<<<< HEAD
    "入院となります": "입원치료하게됩니다",
    "感染症指定医療機関等": "감영병전문 의료기관등"
=======
    "入院となります": "",
    "感染症指定医療機関等": ""
>>>>>>> [i18n] fix components/flow Hospitalized
  },
  "ja-basic": {
    "入院となります": "入院（にゅういん）と なります",
    "感染症指定医療機関等": "感染症指定医療機関（かんせんしょう していいりょうきかん）等（など）"
  }
}
</i18n>
<<<<<<< HEAD
>>>>>>> Fix the English translation of 「入院」
=======
>>>>>>> [i18n] fix components/flow Hospitalized

<script lang="ts">
import HotelIcon from '@/static/flow/hotel-24px.svg'

export default {
  components: { HotelIcon }
}
</script>

<style module lang="scss">
.Hospitalization {
  display: flex;
  flex-direction: column;
  align-items: center;
  &Text {
    color: $gray-2;
    font-weight: bold;
    @include font-size(16);
  }
  &LargeText {
    color: $gray-2;
    font-weight: bold;
    @include font-size(22);
  }
  &Img {
    width: 2rem;
  }
}
</style>
