<template>
  <DesktopFlowSvg />
</template>

<script>
import DesktopFlowSvg from '@/components/DesktopFlowSvg.vue'
export default {
  components: { DesktopFlowSvg },
  layout: 'print',
  head() {
    return {
      title: '新型コロナウイルス感染症にかかる相談窓口について'
    }
  }
}
</script>
