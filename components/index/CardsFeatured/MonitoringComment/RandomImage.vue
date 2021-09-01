<template>
  <div class="RandomImageContainer">
    <a target="_blank" :href="currentImage.href">
      <img
        width="320"
        height="240"
        :src="currentImage.src"
        :alt="currentImage.alt"
      />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {
  Image as IImage,
  MonitoringCommentImage as IMonitoringCommentImage,
} from '@/libraries/auto_generated/data_converter/convertMonitoringCommentImage'

type Data = {}
type Methods = {}
type Computed = {
  currentImage: IImage
  monitoringCommentImage: IMonitoringCommentImage
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    currentImage() {
      const imageLength = this.monitoringCommentImage.data.images.length
      const randomNum = Math.floor(Math.random() * imageLength)
      return this.monitoringCommentImage.data.images[randomNum]
    },
    monitoringCommentImage() {
      return this.$store.state.monitoringCommentImage
    },
  },
})
</script>

<style lang="scss" scoped>
.RandomImageContainer {
  display: flex;
  justify-content: center;
}
</style>
