<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('感染が疑われる方の電話相談窓口') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">{{
        $t('コールセンター')
      }}</small>
    </h4>
    <!-- <p :class="[$style.open, $style.fzMedium]">
      <span>{{ $t('24時間対応') }}</span>
    </p> -->

    <dl>
      <div>
        <dt>
          <ul :class="[$style.night]">
            <li>
              <div :class="$style.phone">
                <span :class="$style.icon">
                  <PhoneIcon alt="Phone" />
                </span>
                {{ $t('0570-052-092') }}
              </div>
            </li>
            <li>
              <span :class="[$style.fzMedium, $style.break, $style.mb10]">
                {{ $t('24時間（土日、祝日を含む)') }}
              </span>
            </li>
          </ul>
        </dt>
        <dd>
          <div :class="[$style.night]">
            <a
              href="http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/shingatakoronavirussoudannmadoguti.html#utagai"
              >管轄ごとの連絡先はこちら</a
            >
          </div>
        </dd>
      </div>
    </dl>
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
</style>
