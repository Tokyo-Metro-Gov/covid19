<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <covid-icon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
      <printer-button :wrapper-class="'Flow-PullRight'" to="/print/flow" />
    </div>
    <div>
      <div class="Flow-Card-Button-Wrapper">
        <a
          href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
          target="_blank"
          rel="noopener noreferrer"
          class="Flow-Card-Button"
        >
          <span class="Flow-Card-Button-Description">
            {{ $t('かかりつけ医に相談することもできます。') }}<br />
            {{ $t('詳しくはこちらをご参照ください。') }}
          </span>
          {{ $t('詳細を見る（東京都福祉保健局）') }}
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
            mdi-open-in-new
          </v-icon>
        </a>
      </div>
      <div class="only-pc" aria-hidden="true">
        <flow-pc />
      </div>
      <div class="only-sp">
        <flow-sp />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton.vue'
import FlowPc from '@/components/flow/FlowPc.vue'
import FlowSp from '@/components/flow/FlowSp.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    PrinterButton,
    FlowPc,
    FlowSp
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
    return {
      title
    }
  }
})
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;

  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    > svg {
      width: 30px;
      height: 30px;

      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }

    &-Title {
      margin-left: 8px;
    }
  }

  &-Card-Button {
    @include button-text('md');
    @include font-size(20);

    width: 100%;
    max-width: 600px;
    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;

    &-Wrapper {
      text-align: center;
      margin-bottom: 20px;
    }

    &:hover {
      color: $white !important;
    }

    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }

    &-Description {
      margin-bottom: 12px;
      display: block;
      font-weight: normal;
      text-align: left;
    }
  }

  &-PullRight {
    margin: 0 0 0 auto;
  }
}

@include largerThan($medium) {
  .only-sp {
    @include visually-hidden;
  }

  .only-pc {
    display: block;
  }
}

@include lessThan($medium) {
  .only-pc {
    display: none;
  }
}
</style>
