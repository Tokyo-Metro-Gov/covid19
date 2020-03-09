<template>
  <div>
    <div class="Flow-Card">
      <h3 class="Flow-Card-Heading">
        新型コロナウイルス感染症にかかる相談窓口について
      </h3>
      <flow-sp-past />
    </div>
    <div class="Flow-Card">
      <flow-sp-general />
    </div>
    <div class="Flow-Card">
      <flow-sp-elder />
    </div>
    <div class="Flow-Card">
      <flow-sp-suspect />
    </div>
    <div class="Flow-Card Flow-Card-GrayBg">
      <flow-sp-advisory />
    </div>
    <div class="Flow-Card">
      <flow-sp-according />
    </div>
    <div class="Flow-Card">
      <flow-sp-hospitalized />
    </div>
  </div>
</template>

<script>
import FlowSpPast from './FlowSpPast.vue'
import FlowSpGeneral from './FlowSpGeneral.vue'
import FlowSpElder from './FlowSpElder.vue'
import FlowSpSuspect from './FlowSpSuspect.vue'
import FlowSpAdvisory from './FlowSpAdvisory.vue'
import FlowSpAccording from './FlowSpAccording.vue'
import FlowSpHospitalized from './FlowSpHospitalized.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory,
    FlowSpAccording,
    FlowSpHospitalized
  }
}
</script>

<style lang="scss">
.Flow-Card {
  display: flex;
  flex-direction: column;
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
  }
  &-Button {
    @include button-text('md');
    margin: 24px auto 0;
    @include font-size(20);
    font-weight: 600;
    text-decoration: none;
    color: $green-1 !important;
    &:hover {
      color: $white !important;
    }
    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
  &-GrayBg {
    background-color: $gray-5;
  }
}
</style>
