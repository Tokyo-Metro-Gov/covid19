<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <small :class="$style.DataViewDesc">
        {{ $t('※土・日・祝日を除く庁舎開庁日の1週間累計数') }}
      </small>
    </template>
    <bar
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
  </data-view>
</template>

<style module lang="scss">
.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import agencyData from '@/data/agency.json'
import DataView from '@/components/DataView.vue'

interface HTMLElementEvent<T extends HTMLElement> extends Event {
  currentTarget: T
}
type Data = {
  chartData: typeof agencyData
  date: string
  agencies: VueI18n.TranslateResult[]
}
type Methods = {}
type Computed = {
  displayData: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string
    }[]
  }
  displayOption: any
}
type Props = {
  title: string
  titleId: string
  chartId: string
  unit: string
  url: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: { DataView },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    titleId: {
      type: String,
      required: false,
      default: ''
    },
    chartId: {
      type: String,
      required: false,
      default: 'agency-bar-chart'
    },
    unit: {
      type: String,
      required: false,
      default: ''
    },
    url: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    const agencies = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計')
    ]
    agencyData.datasets.map(dataset => {
      dataset.label = this.$t(dataset.label) as string
    })
    return {
      chartData: agencyData,
      date: agencyData.date,
      agencies
    }
  },
  computed: {
    displayData() {
      const colors = ['#008b41', '#63c765', '#a6e29f']
      return {
        labels: this.chartData.labels as string[],
        datasets: this.chartData.datasets.map((item, index) => {
          return {
            label: this.agencies[index] as string,
            data: item.data,
            backgroundColor: colors[index] as string
          }
        })
      }
    },
    displayOption() {
      const self = this
      return {
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItem: any) {
              const dateString = tooltipItem[0].label
              return self.$t('期間: {duration}', {
                duration: dateString!
              }) as string
            },
            label(tooltipItem: any, data: any) {
              const index = tooltipItem.datasetIndex!
              const title = self.$t(data.datasets[index].label!)
              const num = parseInt(tooltipItem.value).toLocaleString()
              const unit = self.$t(self.unit)
              return `${title}: ${num} ${unit}`
            }
          }
        },
        legend: {
          display: true,
          onHover: (e: HTMLElementEvent<HTMLInputElement>) => {
            e!.currentTarget.style!.cursor = 'pointer'
          },
          onLeave: (e: HTMLElementEvent<HTMLInputElement>) => {
            e!.currentTarget.style!.cursor = 'default'
          },
          labels: {
            boxWidth: 20
          }
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080'
              }
            }
          ],
          yAxes: [
            {
              stacked: true,
              gridLines: {
                display: true
              },
              ticks: {
                fontSize: 9,
                fontColor: '#808080',
                maxTicksLimit: 10,
                callback(label: string) {
                  return `${label}${self.unit}`
                }
              }
            }
          ]
        }
      }
    }
  }
}

export default Vue.extend(options)
</script>
