<template>
  <v-col cols="12" md="6">
    <template>
        <lazy-static-info
          v-if="$vuetify.breakpoint.smAndUp || showStaticInfo"
          class="mb-4"
          :url="'https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html'"
          :text="$t('自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ')"
          :btn-text="$t('相談の手順を見る')"
        />
    </template>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showStaticInfo: false,
    }
  },
  methods: {
    onScroll() {
      this.showStaticInfo = true
    },
  },
})
</script>
