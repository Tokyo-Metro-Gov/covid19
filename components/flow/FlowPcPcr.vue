<template>
  <div :class="$style.FlowPcPcr">
    <div :class="$style.actionArea">
      <div>
        <p :class="$style.h1">
          PCR検査
        </p>
        <p :class="$style.content">
          東京都健康安全<br />
          研究センター等
        </p>
      </div>
    </div>
    <div :class="$style.resultArea">
      <div :class="[$style.label, $style.ResultLabel]">
        陰性
      </div>
      <div :class="[$style.label, $style.ResultLabel, $style.positive]">
        陽性
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
        @include font-size(48);
        line-height: 1;
        margin-bottom: 0.25em;
      }

      &.content {
        @include font-size(22);
        line-height: 1.2;
      }
    }
  }

  .resultArea {
    flex-basis: 48%;

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
  padding: 0.7em 0;

  &.positive {
    background: $green-1;
    color: $white;
  }
}
</style>
