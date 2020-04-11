<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]">
        <SentimentIcon aria-hidden="true" />
      </span>
      <t-i18n :class="$style.fzMedium">{{ $t('不安に思う方') }}</t-i18n>
    </p>

    <ul :class="[$style.rectContainer, $style.triple]">
      <li :class="$style.symptom">
        <t-i18n>{{ $t('微熱') }}</t-i18n>
      </li>
      <li :class="$style.symptom">
        <t-i18n>{{ $t('軽い咳') }}</t-i18n>
      </li>
      <li :class="$style.symptom">
        <t-i18n>{{ $t('感染の不安') }}</t-i18n>
      </li>
    </ul>

    <div :class="$style.callcenter">
      <p :class="$style.fzLarge">
        <t-i18n>{{ $t('新型コロナコールセンター') }}</t-i18n>
      </p>
      <p :class="$style.open">
        <t-i18n>{{ $t('午前9時から午後9時（土日祝含む）') }}</t-i18n>
      </p>
      <p :class="[$style.phone, $style.fzNumeric]">
        <span :class="$style.icon">
          <PhoneIcon alt="Phone" />
        </span>
        <a href="tel:0570550571">0570-550571</a>
      </p>
    </div>

    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <t-i18n :class="$style.text">{{ $t('専門的な助言が必要な場合') }}</t-i18n>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import PhoneIcon from '@/static/flow/responsive/phone.svg'
import SentimentIcon from '@/static/flow/responsive/sentiment_very_dissatisfied.svg'
import TI18n from '@/components/TI18n.vue'

export default {
  components: { ArrowForwardIcon, PhoneIcon, SentimentIcon, TI18n },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.rectContainer {
  // suspect
  &.triple {
    margin-left: px2vw(-11);
    margin-right: px2vw(-11);

    > .symptom {
      margin-left: px2vw(11);
      margin-right: px2vw(11);
      flex-grow: 10;
    }
  }
}
// suspect
.callcenter {
  margin-top: px2vw(25);
  text-align: center;

  .open {
    margin-top: px2vw(10);
  }
}

@include largerThan($small) {
  $vw: 960;

  .rectContainer {
    &.triple {
      margin-left: px2vw(-11, $vw);
      margin-right: px2vw(-11, $vw);

      > .symptom {
        margin-left: px2vw(11, $vw);
        margin-right: px2vw(11, $vw);
      }
    }
  }
  // suspect
  .callcenter {
    margin-top: px2vw(25, $vw);

    .open {
      margin-top: px2vw(10, $vw);
    }
  }
}
</style>
