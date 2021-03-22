<template>
  <v-col cols="12" md="6">
    <div class="StayingPopulation">
      <div class="StayingPopulation-title">
        {{ $t('都内の滞在人口の増減状況（毎週月曜日更新）') }}<br />
        <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
        <app-link
          to="https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#nav1"
          >{{ $t('詳細はこちら') }}
        </app-link>
      </div>
      <div class="StayingPopulation-place">
        {{ placeName }}
      </div>
      <div class="StayingPopulation-state">
        [ {{ date }}〜{{ enddate }} ]<br />
        <span v-for="(data, index) in formattedData" :key="index">
          {{ data.formattedMonth }}{{ $t('比') }} {{ data.increaseRateWithArrow
          }}<br />
        </span>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import StayingPopulation from '@/data/staying_population.json'

export default Vue.extend({
  data() {
    return {
      mdiChevronRight,
      StayingPopulation,
    }
  },
  computed: {
    date() {
      return this.$d(new Date(StayingPopulation.data.date), 'date')
    },
    enddate(): string {
      const dt = new Date(StayingPopulation.data.date)
      dt.setDate(dt.getDate() + 6)
      return this.$d(dt, 'dateWithoutYear')
    },
    placeName() {
      const placeToDisplay = StayingPopulation.data.place.display
      return ['ja', 'ja-basic'].includes(this.$i18n.locale)
        ? placeToDisplay['@ja']
        : placeToDisplay['@en']
    },
    formattedData() {
      const data = StayingPopulation.data.data

      return data.map((dataForEachMonth) => {
        const referenceDate = dataForEachMonth.reference_date
        const increaseRate = dataForEachMonth.increase_rate

        const formattedMonth = this.$d(
          new Date(referenceDate),
          'dateWithoutDay'
        )

        let increaseRateWithArrow = '0'
        if (increaseRate !== 0) {
          const arrow = increaseRate > 0 ? '↑' : '↓'
          increaseRateWithArrow = `${arrow}${Math.abs(increaseRate)} %`
        }

        return {
          formattedMonth,
          increaseRateWithArrow,
        }
      })
    },
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
    font-weight: 600;

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
