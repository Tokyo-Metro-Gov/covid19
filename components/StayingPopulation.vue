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
      <div class="StayingPopulation-place">
        {{ placeName }}
      </div>
      <div class="StayingPopulation-state">
        <!-- TODO: 「時点」は辞書を参照するようにする -->
        [ {{ formatDate(date) }}時点 ]<br />
        <span v-for="(datum, index) in formattedData" :key="index">
          <!-- TODO: 「比」は辞書を参照するようにする -->
          {{ datum.formattedMonth }}比 {{ datum.increaseRateWithArrow }}<br />
        </span>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import {
  Data as IStayingPopulationData,
  Datum as IStayingPopulationDatum,
  StayingPopulation as IStayingPopulation,
} from '@/libraries/auto_generated/data_converter/convertStayingPopulation'

interface StayingPopulationFormattedData {
  formattedMonth: string
  increaseRateWithArrow: string
}

type Data = {
  mdiChevronRight: string
}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  date: Date
  placeName: string
  formattedData: StayingPopulationFormattedData[]
  stayingPopulationDatasets: IStayingPopulationDatum[]
  stayingPopulationData: IStayingPopulationData
  stayingPopulation: IStayingPopulation
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    date(): Date {
      return new Date(this.stayingPopulation.date)
    },
    placeName(): string {
      const placeToDisplay = this.stayingPopulationData.place.display

      return ['ja', 'ja-basic'].includes(this.$i18n.locale)
        ? placeToDisplay.ja
        : placeToDisplay.en
    },
    formattedData(): StayingPopulationFormattedData[] {
      return this.stayingPopulationDatasets.map((datum) => {
        const { referenceDate, increaseRate } = datum

        const formattedMonth = this.$d(referenceDate, 'dateWithoutDay')

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
    stayingPopulationDatasets(): IStayingPopulationDatum[] {
      return this.stayingPopulationData.data
    },
    stayingPopulationData(): IStayingPopulationData {
      return this.stayingPopulation.data
    },
    stayingPopulation(): IStayingPopulation {
      return this.$store.state.stayingPopulation
    },
  },
  methods: {
    formatDate(date: Date): string {
      return this.$d(date, 'date') as string
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
