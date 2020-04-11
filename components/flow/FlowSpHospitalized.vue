<template>
  <div id="hospitalized" :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <HotelIcon aria-hidden="true" />
      </span>
      <t-i18n :class="$style.fzMedium">{{ $t('入院となります') }}</t-i18n>
    </p>
    <p :class="[$style.facility, $style.fzXLarge]">
      <t-i18n>{{ $t('感染症指定医療機関等') }}</t-i18n>
    </p>
  </div>
</template>

<script lang="ts">
import HotelIcon from '@/static/flow/responsive/hotel.svg'
import TI18n from '@/components/TI18n.vue'

export default {
  components: { HotelIcon, TI18n }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.heading .icon {
  margin-bottom: px2vw(10);
}

.facility {
  margin-top: px2vw(30);
  text-align: center;
}

@include largerThan($small) {
  $vw: 960;

  .heading .icon {
    margin-bottom: px2vw(10, $vw);
  }

  .facility {
    margin-top: px2vw(30, $vw);
  }
}
</style>
