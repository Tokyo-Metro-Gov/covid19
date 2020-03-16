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
