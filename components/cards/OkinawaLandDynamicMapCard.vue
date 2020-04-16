<template>
  <v-col cols="12" md="6" class="DataCard">
    <v-card class="DataView">
      <div class="DataView-Inner">
        <div class="DataView-Header">
          <h3
            class="DataView-Title"
            :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
          >
            {{ $t('感染者発生状況詳細マップ') }}
          </h3>
          <div class="map">
            <iframe
              src="/covid19_okinawa_map.html"
              frameborder="0"
              width="100%"
            />
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
.map {
  width: 100%;
  iframe {
    width: 100%;
    height: 400px;
  }
}
</style>
