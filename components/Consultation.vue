<template>
  <v-col cols="12" md="6">
    <lazy-static-info
      class="Consultation"
      url="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
      :text="$t('自分や家族の症状に不安や心配があれば\nまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
  </v-col>
</template>

<style lang="scss" scoped>
.Consultation {
  padding: 3px 18px;
  min-height: 5.5em;
}
</style>
