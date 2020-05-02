<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:infoPanel>
      <small :class="$style.DataViewDesc">
        <slot name="description" />
      </small>
    </template>
    <ul
      :class="$style.GraphLegend"
      :style="{ display: canvas ? 'block' : 'none' }"
    >
      <li v-for="(item, i) in agencies" :key="i" @click="onClickLegend(i)">
        <button>
          <div
            :style="{
              backgroundColor: colors[i].fillColor,
              borderColor: colors[i].strokeColor
            }"
          />
          <t-i18n
            :style="{
              textDecoration: displayLegends[i] ? 'none' : 'line-through'
            }"
            >{{ item }}</t-i18n
          >
        </button>
      </li>
    </ul>
    <h4 :id="`${titleId}-graph`" class="visually-hidden">
      {{ $t(`{title}のグラフ`, { title }) }}
    </h4>
    <div>
      <t-i18n :class="$style.GraphUnit">
        {{ $t('単位:') }} {{ $t('人') }}
      </t-i18n>
      <bar
        :ref="'barChart'"
        :style="{ display: canvas ? 'block' : 'none' }"
        :chart-id="chartId"
        :chart-data="displayData"
        :options="displayOption"
        :display-legends="displayLegends"
        :height="240"
      />
    </div>
    <template v-slot:dataTable>
      <v-data-table
        :headers="tableHeaders"
        :items="tableData"
        :items-per-page="-1"
        :hide-default-footer="true"
        :hide-default-header="true"
        :height="240"
        :fixed-header="true"
        :disable-sort="true"
        :mobile-breakpoint="0"
        class="cardTable"
        item-key="name"
      >
        <template v-slot:header="{ props: { headers } }">
          <thead>
            <tr>
              <th
                v-for="(header, i) in headers"
                :key="i"
                :class="[header.align ? `text-${header.align}` : '']"
              >
                <div>
                  <t-i18n>{{ header.text }}</t-i18n>
                </div>
              </th>
            </tr>
          </thead>
        </template>
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
import TI18n from '@/components/TI18n.vue'
import { getGraphSeriesStyle, SurfaceStyle } from '@/utils/colors'
import { DisplayData, DataSets } from '@/plugins/vue-chart'
import { customTooltip } from '@/utils/ruby'

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
  displayLegends: boolean[]
  colors: SurfaceStyle[]
}
type Methods = {
  onClickLegend: (i: number) => void
}
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
  components: { DataView, TI18n },
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
      agencies,
      displayLegends: [true, true, true],
      colors: getGraphSeriesStyle(agencyData.datasets.length)
    }
  },
  computed: {
    displayData() {
      return {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets.map((item, index) => {
          return {
            label: this.agencies[index] as string,
            data: item.data,
            backgroundColor: this.colors[index].fillColor,
            borderColor: this.colors[index].strokeColor,
            borderWidth: 1
          }
        })
      }
    },
    displayOption() {
      const self = this
      const options: ChartOptions = {
        tooltips: {
          enabled: false,
          custom: tooltipModel => customTooltip(this, tooltipModel),
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
          display: false
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
                  return `${label}`
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
        .reverse()
    }
  },
  methods: {
    onClickLegend(i) {
      this.displayLegends[i] = !this.displayLegends[i]
      this.displayLegends = this.displayLegends.slice()
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
.Graph {
  &Desc {
    width: 100%;
    margin: 0;
    margin-bottom: 0 !important;
    padding-left: 0 !important;
    font-size: 12px;
    color: $gray-3;
    list-style: none;
  }
  &Legend {
    text-align: center;
    list-style: none;
    padding: 0 !important;
    li {
      display: inline-block;
      margin: 0 3px;
      div {
        height: 12px;
        margin: 2px 4px;
        width: 40px;
        display: inline-block;
        vertical-align: middle;
        border-width: 1px;
        border-style: solid;
      }
      button {
        color: $gray-3;
        font-size: 12px;
      }
    }
  }
  &Unit {
    font-size: 12px;
    color: $gray-3;
  }
}

.DataView {
  &Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: $gray-3;
  }
}
</style>
