<template>
  <div>
    <div class="Flow-Card">
      <h2>
        新型コロナウイルス感染症にかかる相談窓口について
      </h2>
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
    <div class="Flow-Card">
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

<style module lang="scss"></style>
