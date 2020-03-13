<template>
  <div id="hospitalized" :class="$style.Hospitalization">
    <HotelIcon :class="$style.HospitalizationImg" aria-hidden="true" />
    <p :class="$style.HospitalizationText">
      {{ $t('入院となります') }}
    </p>
    <p :class="['mb-0', $style.HospitalizationLargeText]">
      {{ $t('感染症指定医療機関等') }}
    </p>
  </div>
</template>

<i18n>
{
  "ja": {
    "入院となります": "入院となります",
    "感染症指定医療機関等": "感染症指定医療機関等"
  },
  "en": {
    "入院となります": "Need to discharge",
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
    "入院となります": "입원치료하게됩니다",
    "感染症指定医療機関等": "감영병전문 의료기관등"
  },
  "ja-basic": {
    "入院となります": "入院（にゅういん）と なります",
    "感染症指定医療機関等": "感染症指定医療機関（かんせんしょう していいりょうきかん）等（など）"
  }
}
</i18n>

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
