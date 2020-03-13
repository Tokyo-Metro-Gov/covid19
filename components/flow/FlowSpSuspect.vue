<template>
  <div :class="$style.Suspect">
    <div :class="['mb-5', $style.Targets]">
      <div :class="$style.TargetsItem">
        <SentimentIcon
          :class="['mb-n4', $style.TargetsItemImg]"
          aria-hidden="true"
        />
        <div>
          {{ $t('不安に思う方') }}
        </div>
      </div>
    </div>

    <ul :class="['mb-5', $style.Conditions]">
      <li :class="['py-4', $style.ConditionsItem]">
        {{ $t('微熱') }}
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        {{ $t('軽い咳') }}
      </li>
      <li :class="['py-4', $style.ConditionsItem, $style.ConditionsItemLarge]">
        {{ $t('感染の不安') }}
      </li>
    </ul>

    <div :class="['mb-3', $style.CallCenter]">
      <div :class="$style.CallCenterName">
        {{ $t('新型コロナコールセンター') }}
      </div>
      <div :class="$style.CallCenterTime">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
      </div>
    </div>

    <div :class="['mb-4', $style.Phone]">
      <div :class="$style.PhoneItem">
        <PhoneIcon :class="$style.PhoneItemImg" alt="Phone" />
        <a href="tel:0570550571">
          0570-550571
        </a>
      </div>
    </div>

    <a
      v-scroll-to="'#consult'"
      href="#consult"
      :class="['pa-5', $style.Advisory]"
    >
      <span :class="$style.AdvisoryText">
        {{ $t('専門的な助言が必要な場合') }}
      </span>
      <ArrowForwardIcon :class="$style.AdvisoryIcon" />
    </a>
  </div>
</template>

<i18n src="./FlowSpSuspect.i18n.json"></i18n>

<script lang="ts">
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
import PhoneIcon from '@/static/flow/phone-24px.svg'
import SentimentIcon from '@/static/flow/sentiment_very_dissatisfied-24px.svg'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon }
}
</script>

<style module lang="scss">
.Suspect {
  font-weight: bold;
  color: $gray-2;
  text-align: center;
}
.Targets {
  &Item {
    $imgSize: 2rem;
    @include font-size(16);
    font-weight: bold;
    line-height: $imgSize;
    &Img {
      width: $imgSize;
    }
  }
}
.Conditions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0 !important; // FIXME: ulを使用している関係で、paddingを打ち消す必要がある
  &Item {
    @include lessThan($small) {
      @include font-size(16);
    }
    @include largerThan($small) {
      @include font-size(18);
    }
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;
    flex-basis: 28%;
    &::before {
      $imgSize: 24px;
      content: '';
      position: absolute;
      top: -13px;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: $imgSize;
      height: $imgSize;
      background: #fff url(/flow/check_circle-24px.svg) no-repeat center;
      background-size: $imgSize;
    }
    &Large {
      flex-basis: 36%;
    }
  }
}
.CallCenter {
  &Name {
    @include lessThan($small) {
      @include font-size(20);
    }
    @include largerThan($small) {
      @include font-size(22);
    }
  }
  &Time {
    @include lessThan($small) {
      @include font-size(14);
    }
    @include largerThan($small) {
      @include font-size(16);
    }
  }
}
.Phone {
  &Item {
    $imgSize: 2rem;
    @include font-size(24);
    font-weight: bold;
    line-height: $imgSize;
    display: flex;
    align-items: center;
    justify-content: center;
    &Img {
      width: $imgSize;
    }
    a {
      color: $gray-2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.Advisory {
  align-items: center;
  background-color: #ffe200;
  border-radius: 4px;
  box-shadow: -1px 2px 5px $gray-3;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: $gray-2 !important;
  font-weight: bold;
  &Text {
    @include lessThan($small) {
      @include font-size(16);
    }
    @include largerThan($small) {
      @include font-size(20);
    }
    text-align: initial;
  }
  &Icon {
    @include lessThan($small) {
      width: 28px;
      height: 28px;
    }
    @include largerThan($small) {
      width: 45px;
      height: 45px;
    }
    transform: rotateZ(90deg);
    display: block;
  }
}
</style>
