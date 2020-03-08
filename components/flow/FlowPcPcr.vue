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
      <ResultLabel :class="$style.label" :is-positive="false">
        陰性
      </ResultLabel>
      <ResultLabel :class="$style.label" :is-positive="true">
        陽性
      </ResultLabel>
    </div>
  </div>
</template>

<script>
import ResultLabel from '@/components/flow/ResultLabel.vue'
export default {
  components: { ResultLabel }
}
</script>

<style module lang="scss">
.FlowPcPcr {
  @include card-container();
  color: $gray-2;
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;

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
    width: 45%;

    .label + .label {
      margin-top: 35px;
    }
  }
}
</style>
