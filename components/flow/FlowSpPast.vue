<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <i18n path="{past}の出来ごとと症状" tag="span">
        <i18n
          :class="$style.fzLarge"
          tag="span"
          path="発症前{two}週間以内"
          place="past"
        >
          <span :class="$style.fzNumeric" place="two">2</span>
        </i18n>
      </i18n>
    </p>
    <p :class="$style.type">
      <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
        <strong :class="$style.source">{{
          $t('「新型コロナウイルス感染者」と')
        }}</strong>
        <i18n
          tag="span"
          path="{closeContact}をした方"
          :class="[$style.behavior, $style.fzXLarge]"
        >
          <em :class="$style.underline" place="closeContact">{{
            $t('濃厚接触')
          }}</em>
        </i18n>
      </template>
      <template v-else>
        <i18n
          tag="span"
          path="{closeContact}をした方"
          :class="[$style.behavior, $style.fzXLarge]"
        >
          <em :class="$style.underline" place="closeContact">{{
            $t('濃厚接触')
          }}</em>
        </i18n>
        <span :class="$style.behavior">{{
          $t('「新型コロナウイルス感染者」と')
        }}</span>
      </template>
    </p>
    <div :class="[$style.symptomContainer, $style.req]">
      <p :class="$style.symptom">{{ $t('発熱') }}</p>
      <p :class="$style.op">{{ $t('または') }}</p>
      <p :class="$style.symptom">{{ $t('呼吸器症状') }}</p>
    </div>
    <div :class="$style.hr" />
    <p :class="$style.type">
      <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
        <strong :class="$style.source">{{
          $t('流行地域への渡航・居住歴がある方')
        }}</strong>
        <i18n
          tag="span"
          :class="[$style.behavior, $style.fzXLarge]"
          path="{you} か {closeContact}をした方"
        >
          <em :class="$style.underline" place="you">{{ $t('ご本人') }}</em>
          <em :class="$style.underline" place="closeContact">{{
            $t('濃厚接触')
          }}</em>
        </i18n>
      </template>
      <template v-else>
        <i18n
          tag="span"
          :class="[$style.behavior, $style.fzSmall]"
          path="travel history from {area}"
        >
          <em :class="$style.underline" place="area">{{
            $t('COVID-19 prevalent area')
          }}</em>
        </i18n>
        <i18n
          tag="span"
          :class="[$style.behavior, $style.fzXLarge]"
          path="been {inCloseContact} with returnees"
        >
          <em :class="$style.underline" place="inCloseContact">{{
            $t('in close contact')
          }}</em>
        </i18n>
      </template>
    </p>
    <div :class="[$style.symptomContainer, $style.req]">
      <p :class="$style.symptom">{{ $t('呼吸器症状') }}</p>
      <p :class="$style.op">{{ $t('かつ') }}</p>
      <p :class="$style.symptom">
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
      </p>
    </div>
    <a v-scroll-to="'#consult'" href="#consult" :class="$style.button">
      <span :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</span>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<i18n src="./FlowSpPast.i18n.json"></i18n>

<script lang="ts">
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'

export default {
  components: { ArrowForwardIcon },
  computed: {
    langsNeedReversedOrder() {
      return ['en']
    },
    langsWithoutFlowTitle() {
      return ['en', 'zh-cn', 'zh-tw']
    }
  }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
</style>
