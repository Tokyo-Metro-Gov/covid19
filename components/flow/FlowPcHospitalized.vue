<template>
  <div :class="$style.FlowPcHospitalized">
    <h2 :class="$style.FlowPcHospitalizedHeading">
      入院となります
    </h2>
    <h3 :class="$style.FlowPcHospitalizedsubHeading">
      感染症指定医療機関等
    </h3>
  </div>
</template>

<style module lang="scss">
.FlowPcHospitalized {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  @include card-container();

  &Heading {
    color: $gray-2;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;

    &:before {
      min-width: 30px;
      min-height: 30px;
      content: '';
      display: block;
      background: url('/flow/hotel-24px.svg') no-repeat;
      margin-right: 10px;
    }
  }

  &subHeading {
    color: $gray-2;
    font-size: 16px;
  }
}
</style>
