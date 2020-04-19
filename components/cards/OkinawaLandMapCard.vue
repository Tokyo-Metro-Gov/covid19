<template>
  <v-col cols="12" md="6" class="DataCard">
    <v-card class="DataView">
      <div class="DataView-Inner">
        <div class="DataView-Header">
          <h3
            class="DataView-Title"
            :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
          >
            {{ $t('沖縄県内感染者発生状況') }}
          </h3>
          <div class="mapImage">
            <img :src="$t('/map/hontou.png')" alt="" />
            <img :src="$t('/map/ritou.png')" alt="" />
          </div>
        </div>
      </div>
    </v-card>
  </v-col>
</template>

<script>
// import Data from '@/data/data.json'
// import formatGraph from '@/utils/formatGraph'
// import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  // components: {
  //   TimeBarChart
  // },
  // data() {
  //   // 感染者数グラフ
  //   const patientsGraph = formatGraph(Data.patients_summary.data)
  //   const data = {
  //     Data,
  //     patientsGraph
  //   }
  //   return data
  // }
}
</script>
<style lang="scss">
.mapImage {
  img {
    width: 48%;
    @include lessThan(959) {
      width: 100%;
    }
  }
}
</style>
