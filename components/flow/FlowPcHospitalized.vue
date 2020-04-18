<template>
  <div :class="$style.FlowPcHospitalized">
    <p :class="$style.FlowPcHospitalizedHeading">
      <img
        :class="$style.FlowPcHospitalizedHeadingIcon"
        src="/flow/hotel-24px.svg"
        aria-hidden="true"
        alt=" "
      />
      <t-i18n>{{ $t('入院となります') }}</t-i18n>
    </p>
    <p :class="$style.FlowPcHospitalizedsubHeading">
      <t-i18n>{{ $t('感染症指定医療機関等') }}</t-i18n>
    </p>
  </div>
</template>
<script lang="ts">
import TI18n from '@/components/TI18n.vue'
export default {
  components: {
    TI18n
  }
}
</script>
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
