<template>
  <v-carousel cycle width="240" height="180" hide-delimiter-background>
    <v-carousel-item v-for="(image, i) in images" :key="i">
      <v-sheet height="100%" color="#fff">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            <a target="_blank" :href="image.href">
              <img width="240" height="180" :src="image.src" :alt="image.alt" />
            </a>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
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
  images: IImage[]
  monitoringCommentImage: IMonitoringCommentImage
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    images() {
      return this.monitoringCommentImage.data.images
    },
    monitoringCommentImage() {
      return this.$store.state.monitoringCommentImage
    },
  },
})
</script>
