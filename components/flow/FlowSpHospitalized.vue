<template>
  <div :class="$style.Hospitalization">
    <img
      width="40"
      height="40"
      src="/flow/hotel-24px.svg"
      alt="入院となります／感染症指定医療機関等"
    />
    <p :class="$style.HospitalizationText">
      入院となります
    </p>
    <p :class="['mb-0', $style.HospitalizationLargeText]">
      感染症指定医療機関等
    </p>
  </div>
</template>

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
}
</style>
