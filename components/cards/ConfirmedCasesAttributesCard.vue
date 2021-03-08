<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-table
      :title="$t('陽性患者の属性')"
      :title-id="'attributes-of-confirmed-cases'"
      :chart-data="patientsTable"
      :chart-option="{}"
      :date="Data.patients.date"
      :info="sumInfoOfPatients"
      :url="'http://www.pref.kagoshima.jp/ac03/infra/info/opendata/index.html'"
    />
  </v-col>
</template>

<i18n>
{
  "ja": {
    "陽性患者の属性": "陽性患者の属性",
    "{date}の累計": "{date}の累計",
    "人": "人",
    "日付": "日付",
    "居住地": "居住地",
    "年代": "年代",
    "性別": "性別",
    "都内": "都内",
    "埼玉県": "埼玉県",
    "湖南省長沙市": "湖南省長沙市",
    "湖北省武漢市": "湖北省武漢市",
    "{age}代": "{age}代",
    "10歳未満": "10歳未満",
    "男性": "男性",
    "女性": "女性",
    "退院※": "退院※"
  },
  "en": {
    "陽性患者の属性": "Confirmed patient attributes",
    "{date}の累計": "Cumulative total as of {date}",
    "人": "persons",
    "日付": "Date",
    "居住地": "Residence",
    "年代": "Age",
    "性別": "Gender",
    "都内": "Tokyo",
    "埼玉県": "Saitama",
    "湖南省長沙市": "Changsha, Hunan Province",
    "湖北省武漢市": "Wuhan City, Hubei Province ",
    "{age}代": "{age}s",
    "10歳未満": "Under 10",
    "男性": "Male",
    "女性": "Female",
    "退院※": "Discharge*"
  },
  "zh-cn": {
    "陽性患者の属性": "确诊患者的信息",
    "{date}の累計": "截至 {date}",
    "人": "人",
    "日付": "日期",
    "居住地": "居住地",
    "年代": "年龄",
    "性別": "性别",
    "都内": "东京都",
    "埼玉県": "埼玉县",
    "湖南省長沙市": "湖南省长沙市",
    "湖北省武漢市": "湖北省武汉市",
    "{age}代": "{age}多岁",
    "10歳未満": "不到10岁",
    "男性": "男性",
    "女性": "女性",
    "退院※": "出院※"
  },
  "zh-tw": {
    "陽性患者の属性": "確診案例概況",
    "{date}の累計": "累計至 {date}",
    "人": "人",
    "日付": "日期",
    "居住地": "居住地",
    "年代": "年齡",
    "性別": "性別",
    "都内": "東京都",
    "埼玉県": "埼玉縣",
    "湖南省長沙市": "湖南省長沙市",
    "湖北省武漢市": "湖北省武漢市",
    "{age}代": "{age}多歲",
    "10歳未満": "10歲以下",
    "男性": "男性",
    "女性": "女性",
    "退院※": "出院※"
  },
  "ko": {
    "陽性患者の属性": "확진 사례의 세부 사항",
    "{date}の累計": "{date}의 누적 수",
    "人": "인",
    "日付": "날짜",
    "居住地": "거주지",
    "年代": "나이",
    "性別": "성별",
    "都内": "도쿄도내",
    "埼玉県": "사이타마현",
    "湖南省長沙市": "후난성 창사시",
    "湖北省武漢市": "",
    "{age}代": "{age}대",
    "10歳未満": "10살 미만",
    "男性": "남성",
    "女性": "여성",
    "退院※": "후베이성 우한시"
  },
  "ja-basic": {
    "陽性患者の属性": "びょうきの ひとの じょうほう",
    "{date}の累計": "{date} ぜんぶで",
    "人": "にん",
    "日付": "ひづけ",
    "居住地": "すんでいるところ",
    "年代": "とし",
    "性別": "おとこ・おんな・そのほか",
    "都内": "とうきょうと の なか",
    "埼玉県": "さいたまけん",
    "湖南省長沙市": "ちゅうごく こなん しょう ちょうさ し",
    "湖北省武漢市": "ちゅうごく こほく しょう ぶかん し",
    "{age}代": "{age}さい",
    "10歳未満": "10さい より ちいさい ひと",
    "男性": "おとこ の ひと",
    "女性": "おんな の ひと",
    "退院※": "たいいん※"
  }
}
</i18n>

<script>
import Data from '@/data/data.json'
import Patients from '@/data/patients.json'
import formatGraph from '@/utils/formatGraph'
import formatTable from '@/utils/formatTable'
import DataTable from '@/components/DataTable.vue'

export default {
  components: {
    DataTable
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const patientsTable = formatTable(Patients.data.slice(-100))

    const sumInfoOfPatients = {
      lText: patientsGraph[
        patientsGraph.length - 1
      ].cumulative.toLocaleString(),
      sText: this.$t('{date}の累計', {
        date: patientsGraph[patientsGraph.length - 1].label
      }),
      unit: this.$t('人')
    }

    // 陽性患者の属性 ヘッダー翻訳
    for (const header of patientsTable.headers) {
      header.text =
        header.value === '退院' ? this.$t('退院※') : this.$t(header.value)
    }

    // 陽性患者の属性 中身の翻訳
    for (const row of patientsTable.datasets) {
      row['居住地'] = this.$t(row['居住地'])
      row['性別'] = this.$t(row['性別'])

      if (row['年代'] === '10歳未満') {
        row['年代'] = this.$t('10歳未満')
      } else {
        const age = row['年代'].substring(0, 2)
        row['年代'] = this.$t('{age}代', { age })
      }
    }

    const data = {
      Data,
      patientsTable,
      sumInfoOfPatients
    }
    return data
  }
}
</script>
