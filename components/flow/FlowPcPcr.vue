<template>
  <div :class="$style.FlowPcPcr">
    <div :class="$style.actionArea">
      <div>
        <p :class="$style.h1">
          {{ $t('PCR検査') }}
          <span :class="$style.small">{{ $t('※') }}</span>
        </p>
        <p :class="$style.content">
          {{ $t('東京都健康安全研究センター等') }}
        </p>
      </div>
    </div>
    <div :class="$style.resultArea">
      <div :class="[$style.label, $style.ResultLabel]">
        {{ $t('陰性') }}
      </div>
      <div :class="[$style.label, $style.ResultLabel, $style.positive]">
        {{ $t('陽性') }}
      </div>
    </div>
  </div>
</template>

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
