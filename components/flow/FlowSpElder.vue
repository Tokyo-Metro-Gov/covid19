<template>
  <div :class="$style.Elder">
    <ul :class="['mb-1', $style.Targets]">
      <li :class="['mb-3', $style.TargetsItem]">
        <DirectionsWalkIcon
          :class="$style.TargetsItemImg"
          aria-hidden="true"
        />{{ $t('ご高齢な方') }}
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <AccessibleIcon :class="$style.TargetsItemImg" aria-hidden="true" />
        {{ $t('基礎疾患のある方') }}
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <PregnantWomanIcon
          :class="$style.TargetsItemImg"
          aria-hidden="true"
        />{{ $t('妊娠中の方') }}
      </li>
    </ul>

    <ul :class="$style.Conditions">
      <li :class="['py-4', $style.ConditionsItem]">
        <span>
          <i18n path="{cold}のような症状">
            <span :class="$style.ConditionsItemLarger" place="cold">
              {{ $t('風邪') }}
            </span>
          </i18n>
        </span>
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        <i18n tag="span" path="発熱{temperature}">
          <i18n
            tag="span"
            place="temperature"
            path="{tempNum}以上"
            :class="[
              $style.ConditionsItemLarger,
              $style.ConditionsItemWithWordBreak
            ]"
          >
            <span place="tempNum">{{ $t('37.5℃') }}</span>
          </i18n>
        </i18n>
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('強いだるさ') }}
      </li>
      <li :class="['py-3', $style.ConditionsItem, $style.ConditionsItemLarger]">
        {{ $t('息苦しさ') }}
      </li>
    </ul>

    <p :class="$style.Lasting">
      <i18n path="{duration}続いている">
        <i18n
          tag="span"
          :class="$style.LastingLarger"
          place="duration"
          path="{day}日程度"
        >
          <strong place="day">2</strong>
        </i18n>
      </i18n>
    </p>

    <a
      v-scroll-to="'#consult'"
      href="#consult"
      :class="['pa-5', $style.Advisory]"
    >
      <span :class="$style.AdvisoryText">
        {{ $t('新型コロナ受診相談窓口へ') }}
      </span>
      <ArrowForwardIcon :class="$style.AdvisoryIcon" />
    </a>
  </div>
</template>

<i18n src="./FlowSpElder.i18n.json"></i18n>

<script lang="ts">
import AccessibleIcon from '@/static/flow/accessible-24px.svg'
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
import DirectionsWalkIcon from '@/static/flow/directions_walk-24px.svg'
import PregnantWomanIcon from '@/static/flow/pregnant_woman-24px.svg'

export default {
  components: {
    AccessibleIcon,
    ArrowForwardIcon,
    DirectionsWalkIcon,
    PregnantWomanIcon
  }
}
</script>

<style module lang="scss">
.Elder {
  font-weight: bold;
  color: $gray-2;
  text-align: center;
}

.Targets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 4px !important;
  list-style: none;

  &Item {
    $imgSize: 2rem;

    @include font-size(16);
    font-weight: bold;
    line-height: $imgSize;
    display: flex;
    align-items: center;

    &Img {
      width: $imgSize;
    }
  }
}

.Conditions {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 !important;

  &Item {
    @include lessThan($small) {
      @include font-size(12);
    }
    @include largerThan($small) {
      @include font-size(14);
    }
    &Larger {
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(18);
      }
    }
    font-weight: bold;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 47.5%;
    flex-direction: column;
    margin: 4% 0;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;

    &WithWordBreak {
      display: block;
    }

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
  }
}

.Lasting {
  @include lessThan($small) {
    @include font-size(14);
  }
  @include largerThan($small) {
    @include font-size(16);
  }
  color: $gray-2;
  font-weight: bold;
  &Larger {
    border-bottom: 4px solid $green-1;
    @include lessThan($small) {
      @include font-size(18);
    }
    @include largerThan($small) {
      @include font-size(24);
    }
    font-weight: bold;
    margin-right: 0.25rem;
    strong {
      @include font-size(32);
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
