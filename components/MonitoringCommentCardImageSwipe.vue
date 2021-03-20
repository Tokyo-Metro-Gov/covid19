<template>
  <div>
    <v-carousel
      :cycle="carouselControl === 'play'"
      width="240"
      height="260"
      :delimiter-icon="mdiCircleOutline"
      light
      :show-arrows="false"
    >
      <v-carousel-item
        v-for="(item, i) in monitoringCommentImage.data.images"
        :key="i"
      >
        <v-sheet height="100%" color="#fff">
          <v-row class="fill-height" justify="center">
            <div class="mb-4">
              <a target="_blank" :href="item.href" class="ImageLink">
                <img width="240" height="180" :src="item.src" alt="" />
              </a>
              <span>{{ item.alt }}</span>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <div class="CarouselControlContainer">
      <v-btn-toggle v-model="carouselControl" class="CarouselControl" mandatory>
        <v-btn v-ripple="false" class="CarouselControl-Button" value="play">
          <v-icon class="ButtonIcon">
            {{ mdiPlayOutline }}
          </v-icon>
        </v-btn>
        <v-btn v-ripple="false" class="CarouselControl-Button" value="pause">
          <v-icon class="ButtonIcon">
            {{ mdiPause }}
          </v-icon>
        </v-btn>
      </v-btn-toggle>
    </div>
  </div>
</template>

<script lang="ts">
import { mdiCircleOutline, mdiPause, mdiPlayOutline } from '@mdi/js'
import Vue from 'vue'

import monitoringCommentImage from '@/data/monitoring_comment_image.json'

export default Vue.extend({
  data() {
    return {
      mdiCircleOutline,
      mdiPlayOutline,
      mdiPause,
      monitoringCommentImage,
      carouselControl: 'play',
    }
  },
})
</script>

<style lang="scss" scoped>
.ImageLink {
  display: block;
  margin-bottom: 12px;
}
.CarouselControlContainer {
  text-align: right;
}
.CarouselControl {
  border: 1px solid $gray-4;
  background-color: $white;

  &-Button {
    border: none !important;
    margin: 2px;
    border-radius: 4px !important;
    height: 24px !important;
    color: $gray-1 !important;
    background-color: $white !important;
    @include font-size(12, true);

    &::before {
      background-color: inherit;
    }

    &:focus {
      outline: dotted $gray-3 1px;
    }

    .ButtonIcon {
      color: $gray-1 !important;
    }
  }

  & .v-btn--active {
    background-color: $gray-2 !important;
    color: $white !important;

    .ButtonIcon {
      color: $white !important;
    }
  }
}
</style>
