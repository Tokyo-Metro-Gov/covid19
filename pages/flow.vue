<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon aria-hidden="true" />
      <page-header class="Flow-Heading-Title">
        {{ $t('新型コロナウイルス感染症についての相談・受診の目安') }}
      </page-header>
      <PrinterButton :wrapper-class="'Flow-PullRight'" to="/print/flow" />
    </div>
    <div>
      <div class="only-pc">
        <flow-pc />
      </div>
      <div class="only-sp">
        <!--        <flow-sp />-->
        <img src="/flow/flow-image.png" aria-hidden="true" />
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
// import FlowSp from '@/components/flow/FlowSp.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    CovidIcon,
    PageHeader,
    PrinterButton,
    FlowPc
    // FlowSp
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症についての相談・受診の目安'
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
    margin-bottom: 12px;

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

    font-weight: bold;
    display: inline-block;
    text-decoration: none;
    color: $green-1 !important;

    &-Wrapper {
      text-align: center;
    }

    &:hover {
      color: $white !important;
    }

    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }

  &-PullRight {
    margin: 0 0 0 auto;
  }
}

@include largerThan($medium) {
  .only-sp {
    display: none;
  }

  .only-pc {
    display: block;
  }
}

@include lessThan($medium) {
  .only-sp {
    display: block;
  }

  .only-pc {
    display: none;
  }
}
</style>
