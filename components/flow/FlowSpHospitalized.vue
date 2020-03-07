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
    <p :class="$style.HospitalizationLargeText">
      感染症指定医療機関等
    </p>
  </div>
</template>

<style module lang="scss">
.Hospitalization {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include card-container();
  padding: 30px 20px;
  margin-bottom: 20px;
  &Text {
    color: $gray-2;
    font-weight: bold;
    @include font-size(14);
  }
  &LargeText {
    color: $gray-2;
    font-weight: bold;
    @include font-size(20);
  }
}
</style>

<script>
export default {}
</script>
