<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:infoPanel>
      <small :class="$style.DataViewDesc">
        <slot name="description" />
      </small>
    </template>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <bar
      :ref="'barChart'"
      :style="{ display: canvas ? 'block' : 'none' }"
      :chart-id="chartId"
      :chart-data="displayData"
      :options="displayOption"
      :height="240"
    />
    <template v-slot:dataTable>
      <v-data-table
        :headers="tableHeaders"
        :items="tableData"
        :items-per-page="-1"
        :hide-default-footer="true"
        :height="240"
        :fixed-header="true"
        :disable-sort="true"
        :mobile-breakpoint="0"
        class="cardTable"
        item-key="name"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr v-for="item in items" :key="item.text">
              <th>{{ item.text }}</th>
              <td class="text-end">{{ item[0] }}</td>
              <td class="text-end">{{ item[1] }}</td>
              <td class="text-end">{{ item[2] }}</td>
            </tr>
          </tbody>
        </template>
      </v-data-table>
    </template>
  </data-view>
</template>

<script lang="ts">
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { ChartOptions } from 'chart.js'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import agencyData from '@/data/agency.json'
import DataView from '@/components/DataView.vue'
import { getGraphSeriesStyle } from '@/utils/colors'
import { DisplayData, DataSets } from '@/plugins/vue-chart'

interface AgencyDataSets extends DataSets {
  label: string
}
interface AgencyDisplayData extends DisplayData {
  datasets: AgencyDataSets[]
}

interface HTMLElementEvent<T extends HTMLElement> extends MouseEvent {
  currentTarget: T
}
type Data = {
  canvas: boolean
  chartData: typeof agencyData
  date: string
  agencies: VueI18n.TranslateResult[]
}
type Methods = {}
type Computed = {
  displayData: AgencyDisplayData
  displayOption: ChartOptions
  tableHeaders: {
    text: VueI18n.TranslateResult
    value: string
  }[]
  tableData: {
    [key: number]: number
  }[]
}
type Props = {
  title: string
  titleId: string
  chartId: string
  unit: string
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  created() {
    this.canvas = process.browser
  },
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
    }
  },
  data() {
    const agencies = [
      this.$t('第一庁舎計'),
      this.$t('第二庁舎計'),
      this.$t('議事堂計')
    ]

    return {
      canvas: true,
      chartData: agencyData,
      date: agencyData.date,
      agencies
    }
  },
  computed: {
    displayData() {
      const graphSeries = getGraphSeriesStyle(this.chartData.datasets.length)
      return {
        labels: this.chartData.labels as string[],
        datasets: this.chartData.datasets.map((item, index) => {
          return {
            label: this.agencies[index] as string,
            data: item.data,
            backgroundColor: graphSeries[index].fillColor,
            borderColor: graphSeries[index].strokeColor,
            borderWidth: 1
          }
        })
      }
    },
    displayOption() {
      const self = this
      const options: ChartOptions = {
        tooltips: {
          displayColors: false,
          callbacks: {
            title(tooltipItem) {
              const dateString = tooltipItem[0].label
              return self.$t('期間: {duration}', {
                duration: dateString!
              }) as string
            },
            label(tooltipItem, data) {
              const index = tooltipItem.datasetIndex!
              const title = self.$t(data.datasets![index].label!)
              const num = parseInt(tooltipItem.value!).toLocaleString()
              const unit = self.$t(self.unit)
              return `${title}: ${num} ${unit}`
            }
          }
        },
        legend: {
          display: true,
          onHover: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget!.style!.cursor = 'pointer'
          },
          onLeave: (e: HTMLElementEvent<HTMLInputElement>) => {
            e.currentTarget!.style!.cursor = 'default'
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
                callback(label) {
                  return `${label}${self.unit}`
                }
              }
            }
          ]
        }
      }
      if (this.$route.query.ogp === 'true') {
        Object.assign(options, { animation: { duration: 0 } })
      }
      return options
    },
    tableHeaders() {
      return [
        { text: this.$t('日付'), value: 'text' },
        ...this.displayData.datasets.map((text, value) => {
          return { text: text.label, value: String(value), align: 'end' }
        })
      ]
    },
    tableData() {
      return this.displayData.datasets[0].data
        .map((_, i) => {
          return Object.assign(
            { text: this.displayData.labels![i] },
            ...this.displayData.datasets!.map((_, j) => {
              return {
                [j]: this.displayData.datasets[j].data[i].toLocaleString()
              }
            })
          )
        })
        .sort((a, b) => {
          const aDate = a.text.split('~')[0]
          const bDate = b.text.split('~')[0]
          return aDate > bDate ? -1 : 1
        })
    }
  },
  mounted() {
    const barChart = this.$refs.barChart as Vue
    const barElement = barChart.$el
    const canvas = barElement.querySelector('canvas')
    const labelledbyId = `${this.titleId}-graph`

    if (canvas) {
      canvas.setAttribute('role', 'img')
      canvas.setAttribute('aria-labelledby', labelledbyId)
    }
  }
}

export default Vue.extend(options)
</script>

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
