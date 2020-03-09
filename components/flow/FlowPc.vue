<template>
  <div>
    <div :class="[$style.Outer, $style.OuterUpper]">
      <div :class="[$style.CardBlock, $style.Past]">
        <flow-pc-past />
      </div>
      <div :class="[$style.CardBlock, $style.Days]">
        <flow-pc-days />
      </div>
      <div :class="[$style.CardBlock, $style.CardBlockCenter, $style.Suspect]">
        <flow-pc-suspect />
      </div>
      <div :class="$style.Advisory">
        <flow-pc-advisory />
      </div>
    </div>
    <h3 :class="$style.Title">
      新型コロナ受診相談窓口
      <span :class="$style.TitleSmall">による相談結果</span>
    </h3>
    <div :class="[$style.Outer, $style.OuterLower]">
      <div
        :class="[$style.CardBlock, $style.CardBlockRequired, $style.Required]"
      >
        <flow-pc-required />
      </div>
      <div :class="[$style.CardBlock, $style.CardBlockPcr, $style.Pcr]">
        <flow-pc-pcr />
      </div>
      <div :class="$style.NotRequired">
        <flow-pc-not-required />
      </div>
      <div :class="$style.Hospitalized">
        <flow-pc-hospitalized />
      </div>
    </div>
  </div>
</template>

<script>
import FlowPcPast from './FlowPcPast.vue'
import FlowPcDays from './FlowPcDays.vue'
import FlowPcSuspect from './FlowPcSuspect.vue'
import FlowPcAdvisory from './FlowPcAdvisory.vue'
import FlowPcRequired from './FlowPcRequired.vue'
import FlowPcPcr from './FlowPcPcr.vue'
import FlowPcNotRequired from './FlowPcNotRequired.vue'
import FlowPcHospitalized from './FlowPcHospitalized.vue'

export default {
  components: {
    FlowPcPast,
    FlowPcDays,
    FlowPcSuspect,
    FlowPcAdvisory,
    FlowPcRequired,
    FlowPcPcr,
    FlowPcNotRequired,
    FlowPcHospitalized
  }
}
</script>

<style module lang="scss">
.Outer {
  display: grid;
  grid-gap: 12px;
  &Upper {
    grid-template-columns: 70% 30%;
    grid-template-rows: repeat(3, auto);
    margin-bottom: 36px;
  }
  &Lower {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
  }
}
.Title {
  @include font-size(28);
  color: $green-1;
  &Small {
    @include font-size(20);
  }
}
.CardBlock {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 12%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
  &Center::after {
    bottom: 25%;
    transform: translateY(-23px);
  }
  &Required::after {
    bottom: -30px;
    right: auto;
    left: 22%;
    transform: rotate(90deg);
  }
  &Required::before {
    content: '';
    position: absolute;
    bottom: 12%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
  &Pcr::after {
    bottom: auto;
    top: 12%;
  }
  &Pcr::before {
    content: '';
    position: absolute;
    bottom: 12%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
}
.Past {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Days {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.Suspect {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}
.Advisory {
  grid-column: 2 / 3;
  grid-row: 1 / 4;
}
.Required {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Pcr {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
.NotRequired {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.Hospitalized {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
</style>
