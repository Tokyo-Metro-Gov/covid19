<template>
  <div id="hospitalized" :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <HotelIcon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('入院となります') }}</span>
    </p>
    <p :class="[$style.facility, $style.fzXLarge]">
      {{ $t('感染症指定医療機関等') }}
    </p>
  </div>
</template>

<<<<<<< HEAD
<i18n src="./FlowSpHospitalized.i18n.json"></i18n>
=======
<i18n>
{
  "ja": {
    "入院となります": "入院となります",
    "感染症指定医療機関等": "感染症指定医療機関等"
  },
  "en": {
    "入院となります": "Need to be hospitalized",
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
>>>>>>> Fix the English translation of 「入院」

<script lang="ts">
import HotelIcon from '@/static/flow/responsive/hotel.svg'

export default {
  components: { HotelIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.heading .icon {
  margin-bottom: px2vw(10);
}
.facility {
  margin-top: px2vw(30);
  text-align: center;
}
</style>
