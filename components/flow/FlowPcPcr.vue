<template>
  <div :class="$style.FlowPcPcr">
    <div :class="$style.actionArea">
      <div>
        <p :class="$style.h1">
          <t-i18n>{{ $t('PCR検査') }}</t-i18n>
          <t-i18n :class="$style.small">{{ $t('※') }}</t-i18n>
        </p>
        <p :class="$style.content">
          <t-i18n>{{ $t('東京都健康安全研究センター等') }}</t-i18n>
        </p>
      </div>
    </div>
    <div :class="$style.resultArea">
      <div :class="[$style.label, $style.ResultLabel]">
        <t-i18n>{{ $t('陰性') }}</t-i18n>
      </div>
      <div :class="[$style.label, $style.ResultLabel, $style.positive]">
        <t-i18n>{{ $t('陽性') }}</t-i18n>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TI18n from '@/components/TI18n.vue'
export default {
  components: {
    TI18n
  }
}
</script>
<style module lang="scss">
.FlowPcPcr {
  @include card-container();

  color: $gray-2;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  text-align: center;
  height: 100%;

  .actionArea {
    flex-grow: 1;
    margin-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin: 0;
      font-weight: 600;

      &.h1 {
        @include font-size(40);

        line-height: 1;
        margin-bottom: 0.25em;

        .small {
          @include font-size(14);

          vertical-align: top;
        }
      }

      &.content {
        @include font-size(22);

        line-height: 1.2;
      }
    }
  }

  .resultArea {
    flex-basis: 48%;
    flex-direction: column;
    display: flex;
    margin: auto 0;

    .label + .label {
      margin-top: 30px;
    }
  }
}

.ResultLabel {
  @include font-size(20);

  border-radius: 4px;
  border: 2px solid $green-1;
  line-height: 1;
  padding: 2.5rem 0.1rem;

  &.positive {
    background: $green-1;
    color: $white;
  }
}
</style>
