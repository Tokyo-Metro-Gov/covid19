<template>
  <div :class="$style.Container">
    <div :class="$style.Row">
      <i18n
        :class="$style.Catch"
        tag="p"
        path="新型コロナ外来 {advice} と判断された場合"
      >
        <span :class="$style.Emphasis" place="advice">
          {{ $t('受診が必要') }}
        </span>
      </i18n>
    </div>
    <div :class="$style.Row">
      <div :class="[$style.Card, $style.CardLarge, $style.CardGray]">
        <p :class="$style.Outpatient">
          {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
        </p>
        <p :class="$style.Judge">
          {{ $t('医師による判断') }}
        </p>
      </div>
    </div>
    <div :class="$style.TwoRow">
      <div :class="[$style.Card, $style.CardGreen]">
        <p :class="$style.CardGreenText">
          {{ $t('検査の必要あり') }}
        </p>
      </div>
      <div :class="[$style.Card, $style.CardWhite]">
        <p :class="$style.CardWhiteText">
          {{ $t('検査の必要なし') }}
        </p>
      </div>
    </div>
  </div>
</template>

<!-- v-html で展開される場所の翻訳待ちは 空文字ではなく 0 にする  -->
<i18n>
{
  "ja": {
    "新型コロナ外来 {advice} と判断された場合": "新型コロナ外来 {advice} と判断された場合",
    "受診が必要": "受診が必要",
    "新型コロナ外来（帰国者・接触者外来）": "新型コロナ外来（帰国者・接触者外来）",
    "医師による判断": "医師による判断",
    "検査の必要あり": "検査の必要あり",
    "検査の必要なし": "検査の必要なし"
  },
  "en": {
    "新型コロナ外来 {advice} と判断された場合": "If you are {advice} for COVID-19",
    "受診が必要": "advised to be examined",
    "新型コロナ外来（帰国者・接触者外来）": "COVID-19 consultation for returnees and contactees",
    "医師による判断": "Diagnosis by doctors",
    "検査の必要あり": "You are required to be tested",
    "検査の必要なし": "You are not required to be tested"
  },
  "zh-cn": {
    "新型コロナ外来 {advice} と判断された場合": "如果被诊断为 {advice} 到新冠肺炎专科就诊时",
    "受診が必要": "需要",
    "新型コロナ外来（帰国者・接触者外来）": "经新冠肺炎专科（海外返日者、接触者专科）",
    "医師による判断": "医生诊断",
    "検査の必要あり": "需要检测",
    "検査の必要なし": "不需要检测"
  },
  "zh-tw": {
    "新型コロナ外来 {advice} と判断された場合": "經判斷 {advice} 至新型冠狀病毒門診就診",
    "受診が必要": "須要",
    "新型コロナ外来（帰国者・接触者外来）": "新型冠狀病毒肺炎門診（歸國者、接觸者門診）",
    "医師による判断": "經醫師判斷",
    "検査の必要あり": "需要檢驗",
    "検査の必要なし": "不需要檢驗"
  },
  "ko": {
    "新型コロナ外来 {advice} と判断された場合": "코로나19 외래  {advice} 로 판단될경우",
    "受診が必要": "진료필요",
    "新型コロナ外来（帰国者・接触者外来）": "귀국자 외래진료 (귀국자, 접촉자 외래진료)",
    "医師による判断": "의사에 의한 판단",
    "検査の必要あり": "검사의 필요가 있음",
    "検査の必要なし": "검사의 필요가 없음"
  },
  "ja-basic": {
    "新型コロナ外来 {advice} と判断された場合": "病院（びょういん）の 新（あたら）しい コロナ外来（がいらい）{advice}と 判断（はんだん）された とき",
    "受診が必要": "必（かなら）ず 受（う）けてください",
    "新型コロナ外来（帰国者・接触者外来）": "コロナに かかっているひとが おおい くに から にほん に かえってきたひと が かならず うけなければいけないけんさ",
    "医師による判断": "びょういんで みてもらった けっか",
    "検査の必要あり": "あなたは けんさ をうけてください といわれています",
    "検査の必要なし": "あなたは けんさを うけなくてよい と いわれています"
  }
}
</i18n>

<style module lang="scss">
.Container {
  @include card-container();
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 30px !important;
  text-align: center;
}
.Row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
}
.Row:last-of-type {
  margin: 0;
}
.TwoRow {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Catch {
  color: $gray-2;
  font-weight: bold;
  margin: 0 !important;
}
.Card {
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  p {
    margin: 0;
  }
}
.CardLarge {
  flex-basis: 100%;
}
.CardGray {
  color: $white;
  background-color: $gray-2;
  border: 0.5px solid $gray-4 !important;
}
.CardWhite {
  background-color: $white;
  border: 2px solid $green-1 !important;
  &Text {
    font-size: 22px;
    color: $gray-2;
  }
}
.CardGreen {
  background-color: $green-1;
  &Text {
    color: $white;
    font-size: 22px;
  }
}
.Outpatient {
  font-size: 18px;
}
.Judge {
  font-size: 20px;
}
.Emphasis {
  font-size: 28px;
}
</style>
