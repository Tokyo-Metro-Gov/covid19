<template>
  <div :class="$style.container">
    <h4 :class="[$style.heading, $style.multi]">
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <directions-walk-icon aria-hidden="true" />
        </span>
        {{ $t('ご高齢な方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <accessible-icon aria-hidden="true" />
        </span>
        {{ $t('基礎疾患のある方') }}
      </span>
      <span :class="[$style.item, $style.fzMedium]">
        <span :class="$style.icon">
          <pregnant-woman-icon aria-hidden="true" />
        </span>
        {{ $t('妊娠中の方') }}
      </span>
    </h4>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        <span>
          <i18n path="{cold}のような症状">
            <template v-slot:cold>
              <span :class="$style.ConditionsItemLarger">
                {{ $t('風邪') }}
              </span>
            </template>
          </i18n>
        </span>
      </li>
      <li :class="$style.symptom">
        <i18n tag="span" path="発熱{temperature}" :class="$style.fzSmall">
          <template v-slot:temperature>
            <i18n
              tag="span"
              path="{tempNum}以上"
              :class="[$style.break, $style.fzRegular]"
            >
              <template v-slot:tempNum>
                <span :class="$style.temp">{{ $t('37.5℃') }}</span>
              </template>
            </i18n>
          </template>
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
        <template v-slot:duration>
          <i18n
            :class="[$style.underline, $style.fzLarge]"
            tag="span"
            path="{day}日程度"
          >
            <template v-slot:day>
              <strong :class="$style.fzNumeric">2</strong>
            </template>
          </i18n>
        </template>
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
      <arrow-forward-icon :class="$style.icon" />
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
