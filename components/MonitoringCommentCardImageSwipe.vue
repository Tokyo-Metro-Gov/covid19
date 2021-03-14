<template>
  <v-carousel cycle width="240" height="180" hide-delimiter-background>
    <v-carousel-item
      v-for="(item, i) in monitoringCommentImage.data.images"
      :key="i"
    >
      <v-sheet height="100%" color="#fff">
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-3">
            <a target="_blank" :href="item.href">
              <img width="240" height="180" :src="item.src" :alt="item.alt" />
            </a>
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import Vue from 'vue'

import { MonitoringCommentImage as IMonitoringCommentImage } from '@/libraries/auto_generated/data_converter/convertMonitoringCommentImage'
import { Registry } from '@/libraries/Registry'

const monitoringCommentImageData: IMonitoringCommentImage =
  Registry.MonitoringCommentImageRepository.data

export default Vue.extend({
  data() {
    return {
      monitoringCommentImage: monitoringCommentImageData,
    }
  },
})
</script>
