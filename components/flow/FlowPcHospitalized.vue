<template>
  <div :class="$style.FlowPcHospitalized">
    <p :class="$style.FlowPcHospitalizedHeading">
      <img
        :class="$style.FlowPcHospitalizedHeadingIcon"
        src="/flow/hotel-24px.svg"
        aria-hidden="true"
        alt=" "
      />
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
    width: 50%;

    &Icon {
      min-width: 30px;
      min-height: 30px;
      display: block;
      margin-right: 10px;
    }
  }

  &subHeading {
    @include font-size(20);

    margin: 0 !important;
    width: 50%;
  }
}
</style>
