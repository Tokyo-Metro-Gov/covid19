<template>
  <div>
    <flow-sp-past />
    <flow-sp-general />
    <flow-sp-elder />
    <flow-sp-suspect />
    <flow-sp-advisory />
    <flow-sp-according />
    <flow-sp-hospitalized />
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
