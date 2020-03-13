<template>
  <div :class="$style.General">
    <div class="mx-2 mb-4">
      <HumanIcon :class="$style.GeneralIcon" />
      <p :class="$style.GeneralHeader">
        {{ $t('一般の方') }}
      </p>
    </div>
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
            <span place="tempNum">37.5℃</span>
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
    <p :class="$style.GeneralText">
      <i18n path="{duration}続いている">
        <i18n
          tag="span"
          place="duration"
          path="{day}日以上"
          :class="$style.GeneralTextLarger"
        >
          <strong place="day">4</strong>
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

<i18n src="./FlowSpGeneral.i18n.json"></i18n>

<script lang="ts">
import HumanIcon from '@/static/flow/accessibility-24px.svg'
import ArrowForwardIcon from '@/static/flow/arrow_forward-24px.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon }
}
</script>

<style module lang="scss">
.General {
  text-align: center;
  color: $gray-2;
  &Icon {
    width: 2rem;
    height: 2rem;
  }
  &Header {
    @include font-size(16);
    color: $gray-1;
    font-weight: bold;
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
  &Text {
    @include lessThan($small) {
      @include font-size(14);
    }
    @include largerThan($small) {
      @include font-size(16);
    }
    color: $gray-2;
    font-weight: bold;
    margin-bottom: 8px;
    &Larger {
      border-bottom: 4px solid $green-1;
      @include lessThan($small) {
        @include font-size(18);
      }
      @include largerThan($small) {
        @include font-size(24);
      }
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
    color: $gray-2;
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
}
</style>
