<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <HumanIcon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </p>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        <span>
          <i18n path="{cold}のような症状">
            <span :class="$style.ConditionsItemLarger" place="cold">{{
              $t('風邪')
            }}</span>
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
          path="{day}日以上"
        >
          <strong :class="$style.fzNumeric" place="day">4</strong>
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
import HumanIcon from '@/static/flow/responsive/accessibility.svg'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
export default {
  components: { HumanIcon, ArrowForwardIcon },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';
</style>
