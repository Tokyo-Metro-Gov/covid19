<template>
  <data-view :title="title" :date="date">
    <template v-slot:button>
      <p class="MetroGraph-Desc">
        {{ $t('相対値', { range: chartData.base_period }) }}
        <br />
        *{{ $t('自動改札出場数') }}
      </p>
    </template>
    <bar :chart-data="displayData" :options="chartOption" :height="240" />
  </data-view>
</template>

<i18n>
{
  "ja": {
    "相対値": "{range}の利用者数*の平均値を100としたときの相対値",
    "自動改札出場数": "都営地下鉄4路線の自動改札出場数"
  },
  "en": {
    "相対値": "Congestion index compared to {range}.",
    "自動改札出場数": "Total number of passengers using four Toei subway lines"
  },
  "zh-cn": {
    "相対値": "{range}间乘客数*的平均值为 100 时的相对值",
    "自動改札出場数": "都营地下铁 4 条路线的出站乘客数"
  },
  "zh-tw": {
    "相対値": "{range}搭乘人數*平均值為 100 人為基準之相對數值",
    "自動改札出場数": "都營地下鐵 4 條路線的出站人數"
  },
  "ko": {
    "相対値": "1월 20일부터 24일까지의 이용자 수*의 평균값을 100으로 했을 때의 상대값",
    "自動改札出場数": "도에이 전철 4개 노선을 이용한 승객 수"
  },
  "pt-BR": {
    "相対値": "Valor indicador comparado ao valor da média do dia 20 a 24 de Janeiro",
    "自動改札出場数": "Total de usuarios das 4 linhas de metro Toei"
  },
  "ja-basic": {
    "相対値": "ひとの かずを くらべると",
    "自動改札出場数": "ちかてつから でてきた ひとの かず"
  }
}
</i18n>

<style lang="scss">
.MetroGraph {
  &-Desc {
    margin-top: 10px;
    margin-bottom: 0 !important;
    font-size: 12px;
    color: #808080;
  }
}
</style>

<script>
import DataView from '@/components/DataView.vue'

export default {
  components: { DataView },
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    chartData: {
      type: Object,
      required: false,
      default: () => {}
    },
    chartOption: {
      type: Object,
      required: false,
      default: () => {}
    },
    date: {
      type: String,
      required: true,
      default: ''
    }
  },
  computed: {
    displayData() {
      const colors = ['#a6e29f', '#63c765', '#008b41']
      return {
        labels: this.chartData.datasets.map(d => d.label),
        datasets: this.chartData.labels.map((label, i) => {
          return {
            label,
            data: this.chartData.datasets.map(d => d.data[i]),
            backgroundColor: colors[i],
            borderWidth: 0
          }
        })
      }
    }
  }
}
</script>
