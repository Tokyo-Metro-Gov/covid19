<template>
  <div :class="$style.flowContainer">
    <h3 :class="$style.sectionTitle">
      <i18n path="新型コロナ外来 {advice} と判断された場合" tag="p">
        <strong place="advice">
          {{ $t('受診が不要') }}
        </strong>
      </i18n>
    </h3>
    <ul :class="$style.actions">
      <li>
        <img :class="$style.icon" src="/flow/house-24px.svg" />
        {{ $t('自宅で安静に過ごす') }}
      </li>
      <li>
        <img :class="$style.icon" src="/flow/apartment-24px.svg" />
        {{ $t('一般の医療機関を受診') }}
      </li>
    </ul>
    <div :class="$style.nextAction">
      <i18n path="{getWorse}{advisory}に相談" :class="$style.content">
        <span place="getWorse">{{ $t('症状が良くならない場合は') }}</span>
        <strong place="advisory">{{ $t('新型コロナ受診相談窓口') }}</strong>
      </i18n>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "新型コロナ外来 {advice} と判断された場合": "新型コロナ外来 {advice} と判断された場合",
    "受診が不要": "受診が不要",
    "{getWorse}{advisory}に相談": "{getWorse}{advisory}に相談",
    "症状が良くならない場合は": "症状が良くならない場合は",
    "新型コロナ受診相談窓口": "新型コロナ受診相談窓口",
    "自宅で安静に過ごす": "自宅で安静に過ごす",
    "一般の医療機関を受診": "一般の医療機関を受診"
  },
  "en": {
    "新型コロナ外来 {advice} と判断された場合": "If you are {advice} for COVID-19",
    "受診が不要": "not advised to be examined",
    "{getWorse}{advisory}に相談": "{getWorse}call the {advisory}",
    "症状が良くならない場合は": "If your symptoms get worse,",
    "新型コロナ受診相談窓口": "Combined telephone advice center (Support in Japanese only)",
    "自宅で安静に過ごす": "Stay at home",
    "一般の医療機関を受診": "See a general practitioner."
  },
  "zh-cn": {
    "新型コロナ外来 {advice} と判断された場合": "如果被诊断为 {advice} 到新冠肺炎专科就诊时",
    "受診が不要": "不需要",
    "{getWorse}{advisory}に相談": "{getWorse}请联系{advisory}",
    "症状が良くならない場合は": "如果症状未见好转，",
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口（仅限日语服务）",
    "自宅で安静に過ごす": "请于家中静养",
    "一般の医療機関を受診": "请到普通的医疗机构就诊"
  },
  "zh-tw": {
    "新型コロナ外来 {advice} と判断された場合": "經判斷 {advice} 至新型冠狀病毒門診就診",
    "受診が不要": "不必",
    "{getWorse}{advisory}に相談": "{getWorse}請聯絡{advisory}",
    "症状が良くならない場合は": "若疑似症狀無好轉，",
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口（僅提供日語服務）",
    "自宅で安静に過ごす": "請在家中靜養",
    "一般の医療機関を受診": "至一般的醫療機構就診"
  },
  "ko": {
    "新型コロナ外来 {advice} と判断された場合": "코로나19 외래 {advice} 로 판단될경우",
    "受診が不要": "진료필요없음",
    "{getWorse}{advisory}に相談": "{getWorse} {advisory} 으로 상담하여주십시오",
    "症状が良くならない場合は": "증세가 완화되지 않으면",
    "新型コロナ受診相談窓口": "코로나19진단 문의처(일본어에 한함)",
    "自宅で安静に過ごす": "자가 격리 합니다",
    "一般の医療機関を受診": "일반 의료기관 진찰을 받습니다."
  },
  "ja-basic": {
    "新型コロナ外来 {advice} と判断された場合": 0,
    "受診が不要": 0,
    "{getWorse}{advisory}に相談": 0,
    "症状が良くならない場合は": 0,
    "新型コロナ受診相談窓口": "あたらしい コロナを びょういんで みてもらうか について おはなし する ところ",
    "自宅で安静に過ごす": "いえ で しずか に していてください",
    "一般の医療機関を受診": "ちかくの びょういん で みてもらってください"
  }
}
</i18n>

<style module lang="scss">
.flowContainer {
  @include card-container();
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  height: 100%;
  color: $gray-2;
}
.sectionTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;
  strong {
    margin: 0 0.2em;
    font-size: 28px;
    font-weight: bold;
  }
}
.actions {
  width: 49%;
  justify-items: auto;
  margin: auto 0;
  padding: 1rem !important;
  li {
    list-style-type: none;
    text-align: start;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }
}
.icon {
  margin-right: 10px;
}
.nextAction {
  width: 49%;
  padding: 1rem;
  border: $green-1 1.5px solid;
  border-radius: 4px;
  text-align: center;
  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
  }
  strong {
    font-size: 1.5rem;
  }
}
</style>
