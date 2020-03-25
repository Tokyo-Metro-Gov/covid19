<template>
  <div :class="$style.container">
    <div :class="[$style.heading, $style.multi]">
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <DirectionsWalkIcon aria-hidden="true" />
        </span>
        {{ $t('ご高齢な方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <AccessibleIcon aria-hidden="true" />
        </span>
        {{ $t('基礎疾患のある方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <PregnantWomanIcon aria-hidden="true" />
        </span>
        {{ $t('妊娠中の方') }}
      </span>
    </div>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        <span>
          <i18n path="{cold}のような症状">
            <span :class="$style.ConditionsItemLarger" place="cold">
              {{ $t('風邪') }}
            </span>
          </i18n>
        </span>
      </li>
      <li :class="$style.symptom">
        <i18n tag="span" path="発熱{temperature}" :class="$style.fzSmall">
          <i18n
            tag="span"
            path="{tempNum}以上"
            place="temperature"
            :class="[$style.break, $style.fzRegular]"
          >
            <span :class="$style.temp" place="tempNum">{{ $t('37.5℃') }}</span>
          </i18n>
        </i18n>
      </li>
      <li :class="$style.symptom">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="$style.symptom">
        {{ $t('息苦しさ') }}
      </li>
    </ul>

    <p :class="$style.duration">
      <i18n path="{duration}続いている">
        <i18n
          :class="[$style.underline, $style.fzLarge]"
          tag="span"
          place="duration"
          path="{day}日程度"
        >
          <strong :class="$style.fzNumeric" place="day">2</strong>
        </i18n>
      </i18n>
    </p>

    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <span :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import AccessibleIcon from '@/static/flow/responsive/accessible.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import DirectionsWalkIcon from '@/static/flow/responsive/directions_walk.svg'
import PregnantWomanIcon from '@/static/flow/responsive/pregnant_woman.svg'

export default {
  components: {
    AccessibleIcon,
    ArrowForwardIcon,
    DirectionsWalkIcon,
    PregnantWomanIcon
  },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.heading {
  // elder
  &.multi {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: px2vw(-20);
    margin-left: px2vw(-10);
    margin-right: px2vw(-10);

    .icon {
      display: block;
      margin-bottom: 0;
      width: px2vw(50);
      height: px2vw(50);
    }

    > .item {
      display: flex;
      align-items: center;
      margin: px2vw(20) px2vw(10) 0;

      svg {
        margin-right: px2vw(5);
      }
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .heading {
    &.multi {
      margin-top: px2vw(-20, $vw);
      margin-left: px2vw(-10, $vw);
      margin-right: px2vw(-10, $vw);

      .icon {
        width: px2vw(50, $vw);
        height: px2vw(50, $vw);
      }

      > .item {
        margin: px2vw(20, $vw) px2vw(10, $vw) 0;

        svg {
          margin-right: px2vw(5, $vw);
        }
      }
    }
  }
}
</style>
