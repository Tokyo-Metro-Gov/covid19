<template>
  <div :class="$style.container">
    <p :class="$style.heading">
      <t-i18n>
        <i18n path="{past}の出来ごとと症状" tag="span">
          <template v-slot:past>
            <i18n :class="$style.fzLarge" tag="span" path="発症前{two}週間以内">
              <template v-slot:two>
                <span :class="$style.fzNumeric">2</span>
              </template>
            </i18n>
          </template>
        </i18n>
      </t-i18n>
    </p>
    <p :class="$style.type">
      <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
        <strong :class="$style.source"
          ><t-i18n>{{ $t('「新型コロナウイルス感染者」と') }}</t-i18n></strong
        >
        <t-i18n>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="[$style.behavior, $style.fzXLarge]"
          >
            <template v-slot:closeContact>
              <em :class="$style.underline">{{ $t('濃厚接触') }}</em>
            </template>
          </i18n>
        </t-i18n>
      </template>
      <template v-else>
        <t-i18n>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="[$style.behavior, $style.fzXLarge]"
          >
            <template v-slot:closeContact>
              <em :class="$style.underline">{{ $t('濃厚接触') }}</em>
            </template>
          </i18n>
        </t-i18n>
        <t-i18n :class="$style.source">{{
          $t('「新型コロナウイルス感染者」と')
        }}</t-i18n>
      </template>
    </p>
    <div :class="[$style.rectContainer, $style.req]">
      <p :class="$style.symptom">
        <t-i18n>{{ $t('発熱') }}</t-i18n>
      </p>
      <p :class="$style.op">
        <t-i18n>{{ $t('または') }}</t-i18n>
      </p>
      <p :class="$style.symptom">
        <t-i18n>{{ $t('呼吸器症状') }}</t-i18n>
      </p>
    </div>
    <p :class="[$style.type, $style.hr]">
      <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
        <strong :class="$style.source"
          ><t-i18n>{{ $t('流行地域への渡航・居住歴がある方') }}</t-i18n></strong
        >
        <t-i18n>
          <i18n
            tag="span"
            :class="[$style.behavior, $style.fzXLarge]"
            path="{you} か {closeContact}をした方"
          >
            <template v-slot:you>
              <em :class="$style.underline">{{ $t('ご本人') }}</em>
            </template>
            <template v-slot:closeContact>
              <em :class="$style.underline">{{ $t('濃厚接触') }}</em>
            </template>
          </i18n>
        </t-i18n>
      </template>
      <template v-else>
        <t-i18n>
          <i18n
            tag="span"
            :class="[$style.behavior, $style.fzRegular]"
            path="travel history from {area}"
          >
            <template v-slot:area>
              <em :class="$style.underline">{{
                $t('COVID-19 prevalent area')
              }}</em>
            </template>
          </i18n>
        </t-i18n>
        <t-i18n>
          <i18n
            tag="span"
            :class="[$style.behavior, $style.fzXLarge]"
            path="been {inCloseContact} with returnees"
          >
            <template v-slot:inCloseContact>
              <em :class="$style.underline">{{ $t('in close contact') }}</em>
            </template>
          </i18n>
        </t-i18n>
      </template>
    </p>
    <div :class="[$style.rectContainer, $style.req]">
      <p :class="$style.symptom">
        <t-i18n>{{ $t('呼吸器症状') }}</t-i18n>
      </p>
      <p :class="$style.op">
        <t-i18n>{{ $t('かつ') }}</t-i18n>
      </p>
      <p :class="$style.symptom">
        <t-i18n>
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
        </t-i18n>
      </p>
    </div>
    <a
      v-scroll-to="{
        el: '#consult',
        onDone: onDoneScroll
      }"
      href="#consult"
      :class="[$style.button, $style.clickable]"
    >
      <t-i18n :class="$style.text">{{ $t('新型コロナ受診相談窓口へ') }}</t-i18n>
      <ArrowForwardIcon :class="$style.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { onDoneScroll } from '@/utils/vueScrollTo'
import ArrowForwardIcon from '@/static/flow/responsive/arrow_forward.svg'
import TI18n from '@/components/TI18n.vue'

export default {
  components: { ArrowForwardIcon, TI18n },
  computed: {
    langsNeedReversedOrder() {
      return ['en']
    },
    langsWithoutFlowTitle() {
      return ['en', 'zh-cn', 'zh-tw']
    }
  },
  methods: { onDoneScroll }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// past
.type {
  margin-top: px2vw(20);
  text-align: center;

  &.hr {
    margin-top: px2vw(30);
    padding-top: px2vw(30);
    border-top: 1px $gray-4 solid;
  }

  .source {
    display: block;
    color: $green-1;

    &:last-child {
      margin-top: px2vw(10);
    }
  }

  .behavior {
    display: block;

    &:last-child {
      margin-top: px2vw(5);
    }
  }
}

.rectContainer {
  // past
  .op {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  // past
  &.req {
    margin-top: px2vw(20);

    > .symptom {
      flex-basis: 36%;
    }

    > .op {
      flex-basis: 28%;
      margin-top: px2vw(30);
      padding: px2vw(15) px2vw(15) px2vw(10);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .type {
    margin-top: px2vw(20, $vw);

    &.hr {
      margin-top: px2vw(30, $vw);
      padding-top: px2vw(30, $vw);
    }

    .source {
      &:last-child {
        margin-top: px2vw(10, $vw);
      }
    }

    .behavior {
      &:last-child {
        margin-top: px2vw(5, $vw);
      }
    }
  }

  .rectContainer {
    &.req {
      margin-top: px2vw(20, $vw);

      > .op {
        flex-basis: 28%;
        margin-top: px2vw(30, $vw);
        padding: px2vw(15, $vw) px2vw(15, $vw) px2vw(10, $vw);
      }
    }
  }
}
</style>
