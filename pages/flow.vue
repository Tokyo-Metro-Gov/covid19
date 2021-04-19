<template>
  <div class="Flow">
    <h1 class="Flow-Heading">
      {{ $t('新型コロナウイルス感染症が心配なときに.title') }}
    </h1>
    <div class="Flow-BodyContainer">
      <p class="Flow-Body">
        {{
          $t(`{pageName}をご覧ください。`, {
            pageName: $t(
              '東京都福祉保健局のページ「新型コロナウイルス感染症にかかる相談窓口について」'
            ),
          })
        }}
      </p>
      <div class="Flow-ButtonContainer">
        <app-link
          to="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
          :icon-size="16"
          class="Flow-Button"
        >
          {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
        </app-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: {
    AppLink,
  },
  // middleware: 'redirect',
})
</script>

<style lang="scss" scoped>
.Flow {
  &-Heading {
    @include font-size(30);

    color: $gray-2;
    font-weight: normal;
    margin-top: 28px;

    @include lessThan($small) {
      margin-top: 12px;
    }
  }

  &-BodyContainer {
    margin-top: 12px;

    @include card-container();

    padding: 20px;
  }

  &-Body {
    @include body-text();
  }

  &-ButtonContainer {
    margin-top: 24px;
    text-align: center;
  }

  &-Button {
    @include button-text('md');

    text-decoration: none;
    max-width: 300px;
    width: 100%;
    font-weight: 600;
  }
}
</style>
