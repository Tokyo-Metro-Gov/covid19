<template>
  <v-row>
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
    <v-col xs12 sm6 md4>
      <number-display :title="'test'" :number=123 :unit="'人'">
      </number-display>
    </v-col>
  </v-row>
</template>

<script>
import NumberDisplay from '@/components/NumberDisplay.vue'

export default {
  components: {
    NumberDisplay
  }
}
</script>
