<template>
  <v-row>
    <v-col xs12 sm6 md4>
      <number-display :title="'本日の感染者'" :number="data.patients ? data.patients.length : 0" :unit="'人'">
      </number-display>
    </v-col>
    <v-col xs12 sm6 md4>
      <number-display :title="'test'" :number=123 :unit="'人'">
      </number-display>
    </v-col>
    <v-col xs12 sm6 md4>
      <number-display :title="'test'" :number=123 :unit="'人'">
      </number-display>
    </v-col>
    <v-col xs12 sm6 md4>
      <number-display :title="'test'" :number=123 :unit="'人'">
      </number-display>
    </v-col>
  </v-row>
</template>

<script>
import NumberDisplay from '@/components/NumberDisplay.vue'
import { SHEET_URL } from '@/constants.js'

export default {
  components: {
    NumberDisplay
  },
  async asyncData ({ $axios }) {
    const data = await $axios.$get(SHEET_URL)
    return { data }
  },
}
</script>
