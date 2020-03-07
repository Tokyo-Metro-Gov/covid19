<template>
  <div class="Hospitalization">
    <img
      width="40"
      height="40"
      src="/flow/hotel-24px.svg"
      alt="入院となります／感染症指定医療機関等"
    />
    <p class="text">
      入院となります
    </p>
    <p class="largeText">
      感染症指定医療機関等
    </p>
  </div>
</template>

<style lang="scss">
.Hospitalization {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    color: $gray-2;
    font-weight: bold;
    @include font-size(14);
  }
  .largeText {
    color: $gray-2;
    font-weight: bold;
    @include font-size(20);
  }
}
</style>

<script>
export default {}
</script>
