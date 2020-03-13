<template>
  <div :class="$style.FlowCard">
    <h3 :class="['mb-4', $style.FlowCardHeading]">
      {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
    </h3>
    <div :class="$style.FlowCard">
      <flow-sp-past />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-general />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-elder />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-suspect />
    </div>
    <div :class="[$style.FlowCard, $style.FlowCardGrayBg]">
      <flow-sp-advisory />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-according />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-hospitalized />
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "新型コロナウイルス感染症にかかる相談窓口について": "新型コロナウイルス感染症にかかる相談窓口について"
  },
  "en": {
    "新型コロナウイルス感染症にかかる相談窓口について": "Regarding the COVID-19 Infection Telephone Advisory Center"
  },
  "zh-cn": {
    "新型コロナウイルス感染症にかかる相談窓口について": "关于新冠肺炎的咨询窗口"
  },
  "zh-tw": {
    "新型コロナウイルス感染症にかかる相談窓口について": "關於新型冠狀病毒肺炎的諮詢窗口"
  },
  "ko": {
    "新型コロナウイルス感染症にかかる相談窓口について": "코로나19에 대한 문의처에 대해서"
  },
  "ja-basic": {
    "新型コロナウイルス感染症にかかる相談窓口について": "コロナについての でんわそうだん"
  }
}
</i18n>

<script>
import FlowSpPast from './FlowSpPast.vue'
import FlowSpGeneral from './FlowSpGeneral.vue'
import FlowSpElder from './FlowSpElder.vue'
import FlowSpSuspect from './FlowSpSuspect.vue'
import FlowSpAdvisory from './FlowSpAdvisory.vue'
import FlowSpAccording from './FlowSpAccording.vue'
import FlowSpHospitalized from './FlowSpHospitalized.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory,
    FlowSpAccording,
    FlowSpHospitalized
  }
}
</script>

<style module lang="scss">
.FlowCard {
  display: flex;
  flex-direction: column;
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
  }
  &GrayBg {
    background-color: $gray-5;
    box-shadow: none;
    border: none !important; // FIXME: card-containerにてimportantが指定されている
  }
}
</style>
