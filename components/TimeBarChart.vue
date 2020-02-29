<template>
<data-view :title="title">
  <template v-slot:button>
    <data-selector v-model="dataKind"></data-selector>
  </template>
  <bar :chart-data="displayData" :options="chartOption"></bar>
</data-view>
</template>

<style>
</style>

<script>
import DataView from '@/components/DataView.vue';
import DataSelector from '@/components/DataSelector.vue';

export default {
  components: { DataView, DataSelector },
  props: [ 'title', 'chartData', 'chartOption' ],
  data() {
    return {
      dataKind: 'transition'
    };
  },
  computed: {
    displayData() {
      if (this.dataKind === 'transition') {
        return {
          labels: this.chartData.map(function(d) {return d.label;}),
          datasets: [{
              label: this.dataKind,
              data: this.chartData.map(function(d) {return d.transition;}),
              backgroundColor: 'green',
              borderWidth: 1
          }]
        };
      }
      return {
        labels: this.chartData.map(function(d) {return d.label;}),
        datasets: [{
            label: this.dataKind,
            data: this.chartData.map(function(d) {return d.cummulative;}),
            backgroundColor: 'green',
            borderWidth: 1
        }]
      };
    }
  },
};
</script>
