<template>
  <v-col cols="12" md="6" class="DataCard">
    <v-card class="DataView">
      <div class="DataView-Inner">
        <div class="DataView-Header">
          <h3
            class="DataView-Title"
            :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
          >
            {{ $t('県警戒レベル判断指標') }}
          </h3>
        </div>
        <div class="mapImage">
          <iframe
            src="https://okinawa-covid19map.netlify.app/cards/indicators"
            frameborder="0"
          />
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
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
    @include lessThan($small) {
      height: 714px;
    }
  }
}
</style>
