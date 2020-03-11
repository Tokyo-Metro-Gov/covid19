<template>
  <div :class="$style.FlowPcHospitalized">
    <p :class="$style.FlowPcHospitalizedHeading">
      {{ $t('入院となります') }}
    </p>
    <p :class="$style.FlowPcHospitalizedsubHeading">
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
    "入院となります": "",
    "感染症指定医療機関等": ""
  },
  "ja-basic": {
    "入院となります": "",
    "感染症指定医療機関等": ""
  }
}
</i18n>

<style module lang="scss">
.FlowPcHospitalized {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 15px 30px 20px;
  color: $gray-2;
  @include card-container();

  &Heading {
    color: $gray-2;
    display: flex;
    align-items: center;
    margin: 0 !important;
    padding: 0 5px 0 0;

    &::before {
      min-width: 30px;
      min-height: 30px;
      content: '';
      display: block;
      background: url('/flow/hotel-24px.svg') no-repeat;
      margin-right: 10px;
    }
  }

  &subHeading {
    @include font-size(20);
    margin: 0 !important;
  }
}
</style>
