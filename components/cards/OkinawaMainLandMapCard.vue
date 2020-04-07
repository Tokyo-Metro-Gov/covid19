<template>
  <v-col cols="12" md="6" class="DataCard">
    <v-card class="DataView" :loading="loading">
      <div class="DataView-Inner">
        <div class="DataView-Header">
          <h3
            class="DataView-Title"
            :class="!!$slots.infoPanel ? 'with-infoPanel' : ''"
          >
            沖縄本島患者発生状況
          </h3>
          <img
            src="https://files.slack.com/files-pri/TLXN38HV0-F011HUBB2P3/image.png?pub_secret=c617326dcd"
            alt=""
          />
          <img
            src="https://files.slack.com/files-pri/TLXN38HV0-F011A3UAJLB/ritou_0407.png?pub_secret=aa7af9c4f7"
            alt=""
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
