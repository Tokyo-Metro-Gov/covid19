<template>
  <v-col cols="12" md="6">
    <div class="StayingPopulation">
      <div class="StayingPopulation-title">
        {{ $t('●緊急事態宣言中の都内の滞在人口の増減状況') }}<br />
        <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
        <app-link
          to="https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#nav1"
          >{{ $t('詳細はこちら') }}
        </app-link>
      </div>
      <div class="StayingPopulation-value">
        <div class="StayingPopulation-place">
          {{ placeName }}
        </div>
        <div class="StayingPopulation-state">
          <!-- TODO: 「時点」は辞書を参照するようにする -->
          [ {{ date }}時点 ]<br />
          <span v-for="(data, index) in formattedData" :key="index">
            <!-- TODO: 「比」は辞書を参照するようにする -->
            {{ data.formattedMonth }}比 {{ data.increaseRateWithArrow }}<br />
          </span>
        </div>
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
    placeName() {
      const placeToDisplay = StayingPopulation.data.place.display
      return ['ja', 'ja-basic'].includes(this.$i18n.locale)
        ? placeToDisplay['@ja']
        : placeToDisplay['@en']
    },
    formattedData() {
      const data = StayingPopulation.data.data
      const self = this

      return data.map((dataForEachMonth) => {
        const referenceDate = dataForEachMonth.reference_date
        const increaseRate = dataForEachMonth.increase_rate

        const formattedMonth = self.$d(
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

  padding: 5px 18px;
  min-height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  .StayingPopulation-title {
    text-align: left;
    @include card-h2();
    @include font-size(12);
  }

  .StayingPopulation-value {
    border: 2px solid $green-1;
  }

  .StayingPopulation-place {
    padding: 2px;
    background-color: $green-1;
    color: #fff;
    text-align: center;
    font-weight: 600;

    @include font-size(12);
  }

  .StayingPopulation-state {
    flex: 1;
    padding: 5px;
    text-align: center;
    min-width: 15em;
    @include font-size(11);
  }
}
</style>
