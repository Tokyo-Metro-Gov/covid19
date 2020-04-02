<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('新型コロナ受診相談窓口（日本語のみ）') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">{{
        $t('帰国者・接触者 電話相談センター')
      }}</small>
    </h4>
    <dl>
      <p :class="[$style.open, $style.fzMedium]">
        <span>{{ $t('平日') }}</span>
        <span>{{ $t('8時30分〜17時15分') }}</span>
      </p>
      <p>
        {{ $t('緊急の場合はこの限りではありません。') }}
      </p>
      <div>
        <ul :class="[$style.night]">
          <li>
            <span :class="[$style.fzMedium, $style.break, $style.mb10]">
              {{ $t('お問い合わせ先') }}
            </span>
          </li>
          <li>
            <span :class="$style.fzMedium">
              <nuxt-link
                :to="localePath('/contacts')"
                class="SideNavigation-HeaderLink"
              >
                <span>{{
                  $t('各保健所の電話番号はお問い合わせ先一覧へ')
                }}</span>
                <v-icon size="18">
                  mdi-open-in-new
                </v-icon>
              </nuxt-link>
            </span>
          </li>
        </ul>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
// import PhoneIcon from '@/static/flow/responsive/phone.svg'

export default {
  // components: { PhoneIcon }
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
</style>
