<template>
  <div :class="[$style.container, $style.SpAdvisory]">
    <h4
      id="consult"
      :class="[$style.heading, $style.fzLarge, $style.SpAdvisoryHeader]"
    >
      <span>{{ $t('新型コロナウイルス感染症') }}</span>
      <br />
      <span>{{ $t('コールセンター') }}</span>
    </h4>

    <p :class="[$style.fzMedium, $style.break, $style.mb10, 'mt-4', 'mb-3']">
      <span>{{ $t('9時00分〜21時00分') }}</span>
      <br />
      <span>{{ $t('（土日祝含む）') }}</span>
    </p>

    <p :class="[$style.phone, $style.fzNumeric]">
      <span :class="$style.icon">
        <PhoneIcon alt="Phone" />
      </span>
      <a href="tel:0120563653">0120-563-653</a>
    </p>

    <p :class="[$style.fzMedium, $style.break, $style.mb10, 'mt-4', 'mb-3']">
      <span>{{ $t('聴覚に障害のある方をはじめ、') }}</span>
      <br />
      <span>{{ $t('電話でのご相談が難しい方') }}</span>
    </p>

    <p :class="[$style.fzLarge, $style.break, $style.mb10, 'mb-3']">
      FAX 03-3595-2756
    </p>
  </div>
</template>

<script lang="ts">
import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $green-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}

.SpAdvisory {
  text-align: center;

  &Header {
    margin-top: 12px !important;
  }
}

.HealthCenters {
  margin-top: 2vw;
}

.fzRegular {
  @media screen and (max-width: 320px) {
    font-size: 20 / 600 * 100vw !important;
  }
}
</style>
