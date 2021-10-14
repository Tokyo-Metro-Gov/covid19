<template>
  <v-col cols="12" md="6">
    <div class="ConsultationWrap">
      <static-info
        class="Consultation"
        url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/corona_portal/index.html"
        :text="
          $t('ワクチン情報・変異株情報・検査情報等の新型コロナ関連情報はこちら')
        "
        :btn-text="$t('新型コロナ保健医療情報ポータル')"
      />
    </div>
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
.ConsultationWrap {
  display: flex;
  align-items: center;
  height: 100%;
}

.Consultation {
  height: 100%;
  padding: 3px 18px;
  min-height: 5.5em;
}
</style>
