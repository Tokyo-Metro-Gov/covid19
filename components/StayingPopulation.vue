<template>
  <v-col cols="12" md="6">
    <div class="StayingPopulation">
      <div class="StayingPopulation-title">
        {{ $t('●緊急事態宣言中の都内の滞在人口の増減状況') }}<br />
        <app-link
          to="https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html"
          >{{ $t('詳細はこちら') }}</app-link
        ><v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
      </div>
      <div
        v-if="['ja', 'ja-basic'].includes($i18n.locale)"
        class="StayingPopulation-place"
      >
        {{ placeName['@ja'] }}
      </div>
      <div v-else class="StayingPopulation-place">{{ placeName['@en'] }}</div>
      <div class="StayingPopulation-state">
        [ {{ date }}時点 ]<br />
        <span v-for="(data, key) in StayingPopulation.data.data" :key="key">
          {{ data['reference_date'] | formatDate }}比
          {{ data['increase_rate'] | arrow }}％<br />
        </span>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import dayjs from 'dayjs'
import Vue from 'vue'

import StayingPopulation from '@/data/staying_population.json'

export default Vue.extend({
  filters: {
    formatDate(text: string) {
      return dayjs(text).format('YYYY/MM')
    },
    arrow: (increaseRate: number) => {
      if (increaseRate === 0) return 0
      return (increaseRate > 0 ? '↑' : '↓') + Math.abs(increaseRate)
    },
  },
  data() {
    return {
      mdiChevronRight,
      StayingPopulation,
      placeName: StayingPopulation.data.place.display,
      date: dayjs(StayingPopulation.data.date).format('YYYY年MM月DD'),
    }
  },
})
</script>

<style lang="scss" scoped>
.StayingPopulation {
  @include card-container();

  padding: 3px;
  min-height: 5em;
  display: flex;
  align-items: center;

  .StayingPopulation-title {
    padding: 2px 15px;
    text-align: left;
    @include card-h2();
    @include font-size(12);
  }
  .StayingPopulation-place {
    padding: 5px 5px 5px 5px;
    margin: 2px 5px 2px 10px;
    background-color: #008830;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    writing-mode: vertical-rl;
    font-weight: bold;

    @include font-size(12);
  }
  .StayingPopulation-state {
    flex: 1;
    border: 2px solid;
    padding: 2px;
    margin: 2px 5px 2px 5px;
    border-color: #008830;
    text-align: center;
    vertical-align: middle;
    min-width: 15em;
    @include font-size(11);
  }
}
</style>
