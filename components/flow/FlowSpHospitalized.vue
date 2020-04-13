<template>
  <div id="hospitalized" :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <hotel-icon aria-hidden="true" />
      </span>
      <span :class="$style.fzMedium">{{ $t('入院となります') }}</span>
    </p>
    <p :class="[$style.facility, $style.fzXLarge]">
      {{ $t('感染症指定医療機関等') }}
    </p>
  </div>
</template>

<script lang="ts">
import HotelIcon from '@/static/flow/responsive/hotel.svg'

export default {
  components: { HotelIcon }
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
