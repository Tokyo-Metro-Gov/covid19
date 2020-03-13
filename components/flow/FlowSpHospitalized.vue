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

<i18n src="./FlowSpHospitalized.i18n.json"></i18n>

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
