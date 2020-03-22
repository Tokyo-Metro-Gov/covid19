<template>
  <div :class="$style.Container">
    <div :class="['pa-4', $style.AdvisoryBoxContainer]">
      <span :class="$style.AdvisoryBlackBoxSentense">{{
        $t('専門的な助言が必要な場合')
      }}</span>
    </div>
  </div>
</template>

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
