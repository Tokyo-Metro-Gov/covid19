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

<i18n>
{
  "ja": {
    "PCR検査": "PCR検査",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究センター等",
    "陰性": "陰性",
    "陽性": "陽性"
  },
  "en": {
    "PCR検査": "PCR diagnostic test",
    "※": "*",
    "東京都健康安全研究センター等": "Tokyo Metropolitan Institute of Public Health or other facilities",
    "陰性": "Negative",
    "陽性": "Positive"
  },
  "zh-cn": {
    "PCR検査": "PCR检测",
    "※": "※",
    "東京都健康安全研究センター等": "东京都健康安全研究中心等",
    "陰性": "阴性",
    "陽性": "阳性"
  },
  "zh-tw": {
    "PCR検査": "PCR檢驗",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究中心等",
    "陰性": "陰性",
    "陽性": "陽性"
  },
  "ko": {
    "PCR検査": "PCR 진단 검사",
    "※": "※",
    "東京都健康安全研究センター等": "도쿄도청 건강 안전 연구 센터 등",
    "陰性": "음성",
    "陽性": "양성"
  },
  "ja-basic": {
    "PCR検査": "（コロナか しらべる ための）PCRけんさ",
    "※": "※",
    "東京都健康安全研究センター等": "とうきょうと けんこうあんぜん けんきゅう せんたー など",
    "陰性": "コロナに かんせん していません",
    "陽性": "コロナに かんせん しています"
  }
}
</i18n>

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
