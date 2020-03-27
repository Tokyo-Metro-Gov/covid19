<template>
  <div :class="[$style.container, $style.SpAdvisory]">
    <h4
      id="consult"
      :class="[$style.heading, $style.fzXLarge, $style.SpAdvisoryHeader]"
    >
      <span>{{ $t('帰国者・接触者') }}</span>
      <br />
      <span>{{ $t('相談センター') }}</span>
    </h4>
    <p :class="[$style.break, $style.fzLarge, $style.HealthCenters]">
      <span>{{ $t('各保健所 ') }}</span>
    </p>

    <p :class="[$style.fzRegular, $style.break, $style.mb10, 'mt-4', 'mb-3']">
      <span>{{ $t('各地域の保健所の電話番号は青森県庁HP') }}</span>
      <br />
      <span>{{ $t('または、下記表をご参照ください。') }}</span>
    </p>

    <div class="mb-3">
      <a
        href="https://www.pref.aomori.lg.jp/index.html"
        target="_blank"
        rel="noopener"
      >
        {{ $t('青森県庁HPはこちらから') }}
        <v-icon size="16">
          mdi-open-in-new
        </v-icon>
      </a>
    </div>
  </div>
</template>

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
