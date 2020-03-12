<template>
  <data-view :title="title" :title-id="titleId" :date="date" :url="url">
    <template v-slot:button>
      <small :class="$style.DataViewDesc">
        ※土・日・祝日を除く庁舎開庁日の1週間累計数
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

<i18n>
{
  "ja": {
    "第一庁舎計": "第一庁舎計",
    "第二庁舎計": "第二庁舎計",
    "議事堂計": "議事堂計",
    "人": "人",
    "期間: {duration}": "期間: {duration}"
  },
  "en": {
    "第一庁舎計": "TMG No. 1 Building",
    "第二庁舎計": "TMG No. 2 Building",
    "議事堂計": "Assembly Building",
    "期間: {duration}": "Period: {duration}"
  },
  "zh-cn": {
    "第一庁舎計": "第一本厅大厦来访人数",
    "第二庁舎計": "第二本厅大厦来访人数",
    "議事堂計": "都议会议事堂来发人数",
    "人": "persons",
    "期間: {duration}": "期间: {duration}"
  },
  "zh-tw": {
    "第一庁舎計": "第一本廳來訪人數",
    "第二庁舎計": "第二本廳來訪人數",
    "議事堂計": "議事堂來訪人數",
    "人": "人",
    "期間: {duration}": "期間: {duration}"
  },
  "ko": {
    "第一庁舎計": "제1청사 방문자 수",
    "第二庁舎計": "제2청사 방문자 수",
    "議事堂計": "도쿄도의회 의사당 방문자 수",
    "人": "인",
    "期間: {duration}": "기간: {duration}"
  },
  "ja-basic": {
    "第一庁舎計": "第一庁舎（だいいちちょうしゃ）に 来（き）た 人（ひと）の 合計（ごうけい）",
    "第二庁舎計": "第二庁舎（だいにちょうしゃ）に 来（き）た 人（ひと）の 合計（ごうけい）",
    "議事堂計": "議事堂（ぎじどう）に 来（き）た人（ひと）の 合計（ごうけい）",
    "人": "にん",
    "期間: {duration}": "きかん: {duration}"
  }
}
</i18n>

<script>
import agencyData from '@/data/agency.json'
import DataView from '@/components/DataView.vue'

export default {
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
    agencyData.datasets.map(dataset => {
      dataset.label = this.$t(dataset.label)
    })
    return {
      chartData: agencyData,
      date: agencyData.date
    }
  },
  computed: {
    displayData() {
      const colors = ['#008b41', '#63c765', '#a6e29f']
      return {
        labels: this.chartData.labels,
        datasets: this.chartData.datasets.map((d, i) => {
          return {
            label: d.label,
            data: d.data,
            backgroundColor: colors[i]
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
            title(tooltipItem) {
              const dateString = tooltipItem[0].label
              return self.$t('期間: {duration}', {
                duration: dateString
              })
            },
            label(tooltipItem, data) {
              const index = tooltipItem.datasetIndex
              const title = self.$t(data.datasets[index].label)
              const num = tooltipItem.value
              const unit = self.$t(self.unit)
              return `${title}: ${num}${unit}`
            }
          }
        },
        legend: {
          display: true,
          onHover: e => {
            e.currentTarget.style.cursor = 'pointer'
          },
          onLeave: e => {
            e.currentTarget.style.cursor = 'default'
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
    }
  }
}
</script>
