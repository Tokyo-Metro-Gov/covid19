<template>
  <div :class="$style.FlowCard">
    <h3 :class="['mb-3', $style.FlowCardHeading]">
      {{ $t('相談・受診前に心がけていただきたいこと') }}
    </h3>
    <div :class="[$style.OuterUpper, $style.Knowledge]">
      <ul :class="$style.fzRegular">
        <li>
          {{
            $t(
              '発熱等の風邪症状がみられるときには、学校や会社を休み外出を控える。'
            )
          }}
        </li>
        <li>
          {{ $t('発熱等の風邪症状がみられたら、毎日、体温を測定しておく。') }}
        </li>
      </ul>
    </div>

    <h3 :class="['mb-4', $style.FlowCardHeading]">
      {{ $t('帰国者・相談者相談センターにご相談いただく目安') }}
    </h3>
    <div :class="$style.FlowCard">
      <flow-sp-past />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-general />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-elder />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-suspect />
    </div>
    <div :class="[$style.FlowCard, $style.FlowCardGrayBg]">
      <flow-sp-advisory />
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import FlowSpPast from './FlowSpPast.vue'
import FlowSpGeneral from './FlowSpGeneral.vue'
import FlowSpElder from './FlowSpElder.vue'
import FlowSpSuspect from './FlowSpSuspect.vue'
import FlowSpAdvisory from './FlowSpAdvisory.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory
  },
  mounted() {
    // ハッシュつきのURLにアクセスされたらすぐに遷移する
    const hash = this.$route.hash
    if (hash !== '') {
      VueScrollTo.scrollTo(hash, 1000, { offset: -72 }) // NOTE: nuxt.config.tsと同じoffset
    }
  }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.FlowCard {
  display: flex;
  flex-direction: column;

  @include card-container();

  padding: 20px;
  margin-bottom: 20px;
  word-break: break-word;
  hyphens: auto;

  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
  }

  &GrayBg {
    background-color: $gray-5;
    box-shadow: none;
    border: none !important; // FIXME: card-containerにてimportantが指定されている
  }
}

@mixin flowText($color: $gray-1, $font-weight: normal) {
  color: $color !important;
  font-weight: $font-weight;
}

@mixin tableCellStyle($font-weight: normal) {
  border: solid 1px #e5e5e5;
  padding: 0.5em 1em;
  @include flowText($gray-1, $font-weight);
}

@mixin telLink {
  margin-left: 0 !important;
  text-decoration: none;
  outline: 1px dotted #707070;
}

.Knowledge {
  margin-bottom: 24px !important;

  ul {
    @include flowText($green-1, bolder);

    list-style: none;
    margin-left: 1em;
    padding: 0;
    text-indent: -1.15em;

    > li::before {
      content: '';
      top: -2px;
      width: 12px;
      height: 12px;
      display: inline-block;
      background-color: $green-1;
      border-radius: 50%;
    }
  }
}
</style>
