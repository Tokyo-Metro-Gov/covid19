<template>
  <v-col cols="12" md="6">
    <div class="StayingPopulation">
      <div class="StayingPopulation-inner">
        <div class="StayingPopulation-title">
          <h3 class="StayingPopulation-heading">
            {{ $t('都内の滞在人口の増減状況（毎週月曜日更新）') }}
          </h3>
          <div class="StayingPopulation-link">
            <v-icon color="#D9D9D9">{{ mdiChevronRight }}</v-icon>
            <app-link
              to="https://www.seisakukikaku.metro.tokyo.lg.jp/information/corona-people-flow-analysis.html#top"
              >{{ $t('詳細はこちら') }}
            </app-link>
          </div>
        </div>
        <div class="StayingPopulation-box">
          <div class="StayingPopulation-place">
            {{ placeName }}
          </div>
          <div class="StayingPopulation-state">
            [ {{ $t('{date}〜{enddate}', { date, enddate }) }} ]
            <span v-for="(datum, index) in formattedData" :key="index">
              {{
                $t('{month}比 {rateWithArrow}', {
                  month: datum.formattedMonth,
                  rateWithArrow: datum.increaseRateWithArrow,
                })
              }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'
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
type Methods = {}
type Computed = {
  date: string
  enddate: string
  placeName: string
  formattedData: StayingPopulationFormattedData[]
  stayingPopulationDatasets: IStayingPopulationDatum[]
  stayingPopulationData: IStayingPopulationData
  stayingPopulation: IStayingPopulation
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    AppLink,
  },
  data() {
    return {
      mdiChevronRight,
    }
  },
  computed: {
    date() {
      return this.$d(new Date(this.stayingPopulationData.date), 'date')
    },
    enddate() {
      const baseDate = new Date(this.stayingPopulationData.date)
      baseDate.setDate(baseDate.getDate() + 6)
      return this.$d(baseDate, 'dateWithoutYear')
    },
    placeName() {
      const placeToDisplay = this.stayingPopulationData.place.display

      return ['ja', 'ja-basic', 'zh-cn', 'zh-tw'].includes(this.$i18n.locale)
        ? placeToDisplay.ja
        : placeToDisplay.en
    },
    formattedData() {
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
    stayingPopulationDatasets() {
      return this.stayingPopulationData.data
    },
    stayingPopulationData() {
      return this.stayingPopulation.data
    },
    stayingPopulation() {
      return this.$store.state.stayingPopulation
    },
  },
})
</script>

<style lang="scss" scoped>
.StayingPopulation {
  @include card-container();

  display: flex;
  align-items: center;
  height: 100%;
  padding: 10px 20px;
  min-height: 5em;

  .StayingPopulation-inner {
    flex: 1;
  }

  .StayingPopulation-title {
    display: flex;
    justify-content: space-between;

    @include card-h2();

    .StayingPopulation-heading {
      flex: 1;
    }

    .StayingPopulation-heading,
    .StayingPopulation-link {
      @include font-size(12);

      font-weight: 600;
    }
  }

  .StayingPopulation-box {
    display: flex;
    align-items: center;

    .StayingPopulation-place {
      padding: 5px 10px;
      margin: 0 5px 2px 0;
      background-color: $green-1;
      color: $white;
      vertical-align: middle;
      text-align: center;
      font-weight: 600;

      @include font-size(12);
    }

    .StayingPopulation-state {
      flex: 1;
      padding: 2px;
      margin: 0 5px 2px;
      min-width: 15em;
      color: $gray-3;

      @include font-size(11);
    }
  }
}
</style>
