<template>
  <div :class="$style.FlowCard">
    <h3 :class="['mb-4', $style.FlowCardHeading]">
      {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
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
    <div :class="$style.FlowCard">
      <flow-sp-according />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-hospitalized />
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
import FlowSpAccording from './FlowSpAccording.vue'
import FlowSpHospitalized from './FlowSpHospitalized.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory,
    FlowSpAccording,
    FlowSpHospitalized
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
</style>
