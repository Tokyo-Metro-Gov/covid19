<template>
  <div :class="$style.Container">
    <div :class="['pa-4', $style.AdvisoryBoxContainer]">
      <t-i18n :class="$style.AdvisoryBlackBoxSentense">{{
        $t('専門的な助言が必要な場合')
      }}</t-i18n>
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
.Container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
}

.AdvisoryBoxContainer {
  @include font-size(20);

  align-items: center;
  background-color: $gray-2;
  border-radius: 4px;
  color: $white;
  display: flex;
  width: 80%;
  text-align: center;
  justify-content: center;
}
</style>
