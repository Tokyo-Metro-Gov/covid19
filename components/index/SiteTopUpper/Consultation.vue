<template>
  <v-col cols="12" md="6">
    <v-lazy>
      <static-info
        class="Consultation"
        url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
        :text="
          $t('自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ')
        "
        :btn-text="$t('相談の手順を見る')"
      />
    </v-lazy>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

import StaticInfo from '@/components/index/SiteTopUpper/Consultation/StaticInfo.vue'

type Data = {}
type Methods = {}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    StaticInfo,
  },
})
</script>

<style lang="scss" scoped>
.Consultation {
  padding: 3px 18px;
  min-height: 5.5em;
}
</style>
