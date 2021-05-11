<template>
  <div class="InfectionMedicalcareprovisionStatus">
    <div class="InfectionMedicalcareprovisionStatus-heading">
      <h3 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('感染状況・医療提供体制（サマリ）') }}
        {{ formatDate(date) }}時点
      </h3>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://www.fukushihoken.metro.tokyo.lg.jp/hodo/saishin/hassei.html"
        >
          {{ $t('感染状況') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('新規陽性者')
        }}<span>{{ statuses['新規陽性者'].toLocaleString() }}人</span> /
        {{ $t('検査数')
        }}<span>{{ statuses['検査数'].toLocaleString() }}件</span>（{{
          formatDate(statisticDate)
        }}{{ $t('参考値') }} （{{ $t('3日間移動平均') }}））、
        {{ $t('うち65歳以上の高齢者数')
        }}<span
          >{{ statuses['うち65歳以上の高齢者数'].toLocaleString() }}人</span
        >、 {{ $t('死亡者数')
        }}<span>{{ statuses['死亡者数'].toLocaleString() }}人</span>、
        {{ $t('都外からの持込検体による陽性数')
        }}<span>{{
          statuses['都外からの持込検体による陽性数'].toLocaleString()
        }}</span>
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        <app-link
          to="https://stopcovid19.metro.tokyo.lg.jp/cards/details-of-confirmed-cases/"
        >
          {{ $t('医療提供体制') }}
        </app-link>
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('入院数')
        }}<span>{{ statuses['入院数'].toLocaleString() }}人</span> （{{
          $t('確保病床数')
        }}<span>{{ statuses['確保病床数'].toLocaleString() }}床</span>）、
        {{ $t('うち重症者数')
        }}<span>{{ statuses['うち重症者数'].toLocaleString() }}人</span> （{{
          $t('うち重症病床数')
        }}<span>{{ statuses['うち重症病床数'].toLocaleString() }}床</span>）
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import {
  Data as IInfectionMedicalCareProvisionStatusData,
  InfectionMedicalcareprovisionStatus as IInfectionMedicalCareProvisionStatus,
} from '@/libraries/auto_generated/data_converter/convertInfectionMedicalcareprovisionStatus'

type Data = {}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {
  statuses: IInfectionMedicalCareProvisionStatusData
  date: Date
  statisticDate: Date
  infectionMedicalCareProvisionStatus: IInfectionMedicalCareProvisionStatus
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  computed: {
    statuses() {
      return this.infectionMedicalCareProvisionStatus.data
    },
    date() {
      return new Date(this.infectionMedicalCareProvisionStatus.date)
    },
    statisticDate() {
      return this.infectionMedicalCareProvisionStatus.data['検査統計日時']
    },
    infectionMedicalCareProvisionStatus() {
      return this.$store.state.infectionMedicalCareProvisionStatus
    },
  },
  methods: {
    formatDate(date) {
      return this.$d(date, 'date') as string
    },
  },
})
</script>

<style lang="scss">
.InfectionMedicalcareprovisionStatus {
  @include card-container();

  padding: 8px 18px;
  margin-bottom: 10px;

  .InfectionMedicalcareprovisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalcareprovisionStatus-title {
      display: flex;
      align-items: center;
      padding: 0 0 4px 0;
      color: $gray-2;

      @include card-h2();
      @include font-size(14);
    }
  }

  .InfectionMedicalcareprovisionStatus-Box {
    overflow: hidden;

    .InfectionMedicalcareprovisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin: 0 4px 1px 0;
      color: $gray-3;

      @include font-size(12);
    }

    .InfectionMedicalcareprovisionStatus-description {
      @include font-size(12);

      padding: 3px 0 0 0;
      margin: 0;

      > span {
        color: #008830;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
