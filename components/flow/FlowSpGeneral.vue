<template>
  <div :class="$style.container">
    <h4 :class="$style.heading">
      <span :class="[$style.icon, $style.top]" aria-hidden="true">
        <human-icon />
      </span>
      <span :class="$style.fzMedium">{{ $t('一般の方') }}</span>
    </h4>
    <ul :class="[$style.rectContainer, $style.double]">
      <li :class="$style.symptom">
        <span>
          <i18n path="{cold}のような症状">
            <template v-slot:cold>
              <span :class="$style.ConditionsItemLarger">{{ $t('風邪') }}</span>
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
            path="{day}日以上"
          >
            <template v-slot:day>
              <strong :class="$style.fzNumeric">4</strong>
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
