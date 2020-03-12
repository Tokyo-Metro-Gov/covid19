<template>
  <div :class="$style.container">
    <i18n tag="h4" :class="$style.heading" path="{advisory}による相談結果">
      <span place="advisory">
        {{ $t('新型コロナ受診相談窓口') }}
      </span>
    </i18n>
    <i18n
      tag="p"
      :class="$style.diag"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <span :class="[$style.line, $style.large]" place="advice">
        {{ $t('受診が必要') }}
      </span>
    </i18n>
    <p :class="$style.decision">
      <span :class="$style.small">
        {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
      </span>
      <span>{{ $t('医師による判断') }}</span>
    </p>
    <div :class="$style.rectContainer">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.shadow]"
        href="#not_required"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.large, $style.line]" place="ifRequired">
              {{ $t('なし') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#pcr'"
        :class="[$style.rect, $style.shadow, $style.bgYellow]"
        href="#pcr"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.large, $style.line]" place="ifRequired">
              {{ $t('あり') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow">
          <Arrow />
        </div>
      </a>
    </div>
    <p id="pcr" :class="[$style.diag, $style.hr]">
      <span :class="$style.line">
        <!-- 改行によって空白が入らないように-->
        <!-- eslint-disable -->
        <span :class="$style.large">{{ $t('PCR検査') }}</span>{{ $t('※') }}
        <!-- eslint-enable -->
      </span>
      <span :class="[$style.place, $style.line]">
        {{ $t('東京都健康安全研究センター等') }}
      </span>
      <small :class="[$style.note, $style.line]">
        {{
          $t(
            '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
          )
        }}
      </small>
    </p>
    <div :class="$style.rectContainer">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.shadow]"
        href="#not_required"
      >
        <p>
          <span :class="$style.large">{{ $t('陰性') }}</span>
        </p>
        <div :class="$style.arrow">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#hospitalized'"
        :class="[$style.rect, $style.shadow, $style.bgYellow]"
        href="#hospitalized"
      >
        <p>
          <span :class="$style.large">{{ $t('陽性') }}</span>
        </p>
        <div :class="$style.arrow">
          <Arrow />
        </div>
      </a>
    </div>
    <i18n
      id="not_required"
      tag="p"
      :class="[$style.diag, $style.hr]"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <span :class="[$style.line, $style.large]" place="advice">
        {{ $t('受診が不要') }}
      </span>
    </i18n>
    <div :class="$style.rectContainer">
      <div :class="[$style.rect, $style.border]">
        <div :class="$style.icon">
          <House />
        </div>
        <p>{{ $t('自宅で安静に過ごす') }}</p>
      </div>
      <div :class="[$style.rect, $style.border]">
        <div :class="$style.icon">
          <Apartment />
        </div>
        <p>{{ $t('一般の医療機関を受診') }}</p>
      </div>
    </div>
    <div :class="$style.rectContainer">
      <div :class="[$style.rect, $style.wide, $style.border, $style.bdGreen]">
        <p>
          <i18n path="{getWorse}{advisory}に相談">
            <i18n place="getWorse" path="症状が良くならない場合は" />
            <strong :class="$style.advisory" place="advisory">
              {{ $t('新型コロナ受診相談窓口') }}
            </strong>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<!-- v-html で展開される場所の翻訳待ちは 空文字ではなく 0 にする  -->
<i18n>
{
  "ja": {
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "新型コロナ受診相談窓口",
    "新型コロナ外来 {advice} と判断された場合": "新型コロナ外来 {advice} と判断された場合",
    "受診が必要": "受診が必要",
    "新型コロナ外来（帰国者・接触者外来）": "新型コロナ外来（帰国者・接触者外来）",
    "医師による判断": "医師による判断",
    "検査の必要{ifRequired}": "検査の必要{ifRequired}",
    "あり": "あり",
    "なし": "なし",
    "PCR検査": "PCR検査",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究センター等",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施",
    "陰性": "陰性",
    "陽性": "陽性",
    "受診が不要": "受診が不要",
    "{getWorse}{advisory}に相談": "{getWorse}{advisory}に相談",
    "症状が良くならない場合は": "症状が良くならない場合は",
    "新型コロナ受診相談窓口": "新型コロナ受診相談窓口",
    "自宅で安静に過ごす": "自宅で安静に過ごす",
    "一般の医療機関を受診": "一般の医療機関を受診"
  },
  "en": {
    "{advisory}による相談結果": "According to call {advisory}",
    "新型コロナ受診相談窓口": "Combined telephone advice center",
    "新型コロナ外来 {advice} と判断された場合": "If you are {advice} for COVID-19",
    "受診が必要": "advised to be examined",
    "新型コロナ外来（帰国者・接触者外来）": "COVID-19 consultation for returnees and contactees",
    "医師による判断": "Diagnosis by doctors",
    "検査の必要{ifRequired}": "You are {ifRequired} to be tested",
    "あり": "required",
    "なし": "not required",
    "PCR検査": "PCR diagnostic test",
    "※": "*",
    "東京都健康安全研究センター等": "Tokyo Metropolitan Institute of Public Health or other facilities",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "* Until further notice, due to prevention of hospital infection, examinations covered by insurance is only avairable at medical institutions such as an outpatient for returnees and contactees.",
    "陰性": "Negative",
    "陽性": "Positive",
    "受診が不要": "not advised to be examined",
    "{getWorse}{advisory}に相談": "{getWorse} call the {advisory}",
    "症状が良くならない場合は": "If your symptoms get worse,",
    "新型コロナ受診相談窓口": "Combined telephone advice center (Support in Japanese only)",
    "自宅で安静に過ごす": "Stay at home",
    "一般の医療機関を受診": "See a general practitioner."
  },
  "zh-cn": {
    "{advisory}による相談結果": "根据{advisory}的判断",
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口",
    "新型コロナ外来 {advice} と判断された場合": "如果被诊断为 {advice} 到新冠肺炎专科就诊时",
    "受診が必要": "需要",
    "新型コロナ外来（帰国者・接触者外来）": "经新冠肺炎专科（海外返日者、接触者专科）",
    "医師による判断": "医生诊断",
    "検査の必要{ifRequired}": "{ifRequired}检测",
    "あり": "需要",
    "なし": "不需要",
    "PCR検査": "PCR检测",
    "※": "※",
    "東京都健康安全研究センター等": "东京都健康安全研究中心等",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※考虑到防止院内感染等因素，目前仅在开设有「海外返日者、接触者专科」的医疗机构施行可以使用保险的检查。",
    "陰性": "阴性",
    "陽性": "阳性",
    "受診が不要": "不需要",
    "{getWorse}{advisory}に相談": "{getWorse}请联系{advisory}",
    "症状が良くならない場合は": "如果症状未见好转，",
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口（仅限日语服务）",
    "自宅で安静に過ごす": "请于家中静养",
    "一般の医療機関を受診": "请到普通的医疗机构就诊"
  },
  "zh-tw": {
    "{advisory}による相談結果": "根據{advisory}的諮詢結果",
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口",
    "新型コロナ外来 {advice} と判断された場合": "經判斷 {advice} 至新型冠狀病毒門診就診",
    "受診が必要": "須要",
    "新型コロナ外来（帰国者・接触者外来）": "新型冠狀病毒肺炎門診（歸國者、接觸者門診）",
    "医師による判断": "經醫師判斷",
    "検査の必要{ifRequired}": "{ifRequired}檢驗",
    "あり": "需要",
    "なし": "不需要",
    "PCR検査": "PCR檢驗",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究中心等",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※目前，為防止院內感染等因素，適用保險的檢查僅在「歸國者、接觸者門診」等醫療機關實施。",
    "陰性": "陰性",
    "陽性": "陽性",
    "受診が不要": "不必",
    "{getWorse}{advisory}に相談": "{getWorse}請聯絡{advisory}",
    "症状が良くならない場合は": "若疑似症狀無好轉，",
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口（僅提供日語服務）",
    "自宅で安静に過ごす": "請在家中靜養",
    "一般の医療機関を受診": "至一般的醫療機構就診"
  },
  "ko": {
    "{advisory}による相談結果": "{advisory} 의한 상담 결과",
    "新型コロナ受診相談窓口": "코로나19진단 문의처",
    "新型コロナ外来 {advice} と判断された場合": "코로나19 외래  {advice} 로 판단될경우",
    "受診が必要": "진료필요",
    "新型コロナ外来（帰国者・接触者外来）": "귀국자 외래진료 (귀국자, 접촉자 외래진료)",
    "医師による判断": "의사에 의한 판단",
    "検査の必要{ifRequired}": "검사의 필요가 {ifRequired}",
    "あり": "있음",
    "なし": "없음",
    "PCR検査": "PCR 진단 검사",
    "※": "※",
    "東京都健康安全研究センター等": "도쿄도청 건강 안전연구 센터 등",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※보험적용 검사는 병원내 감염 방지등 관점에서 「귀국자・접촉자외래」등 의료기관에서 실시합니다",
    "陰性": "음성",
    "陽性": "양성",
    "受診が不要": "진료필요없음",
    "{getWorse}{advisory}に相談": "{getWorse} {advisory} 으로 상담하여주십시오",
    "症状が良くならない場合は": "증세가 완화되지 않으면",
    "新型コロナ受診相談窓口": "코로나19진단 문의처 (일본어에 한함)",
    "自宅で安静に過ごす": "자가 격리 합니다",
    "一般の医療機関を受診": "일반 의료기관 진찰을 받습니다."
  },
  "ja-basic": {
    "{advisory}による相談結果": "{advisory}で はなした けっか",
    "新型コロナ受診相談窓口": "あたらしい コロナを びょういんで みてもらうか について おはなし する ところ",
    "新型コロナ外来 {advice} と判断された場合": 0,
    "受診が必要": 0,
    "新型コロナ外来（帰国者・接触者外来）": "コロナに かかっているひとが おおい くに から にほん に かえってきたひと が かならず うけなければいけないけんさ",
    "医師による判断": "びょういんで みてもらった けっか",
    "検査の必要{ifRequired}": "あなたは けんさ を {ifRequired} といわれています",
    "あり": "うけてください",
    "なし": "うけなくてよい",
    "PCR検査": "（コロナか しらべる ための）PCRけんさ",
    "※": "※",
    "東京都健康安全研究センター等": "とうきょうと けんこうあんぜん けんきゅう せんたー など",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※保険適用（ほけんてきよう）となる検査（けんさ）は、しばらくの間（あいだ）、病院（びょういん）の中（なか）で コロナウイルスが 拡（ひろ）がらないようにするため、「帰国者・接触者外来（きこくしゃ・せっしょくしゃがいらい）」等（など）の特別（とくべつ）な 医療機関（いりょうきかん）で します",
    "陰性": "コロナに かんせん していません",
    "陽性": "コロナに かんせん しています",
    "受診が不要": 0,
    "{getWorse}{advisory}に相談": 0,
    "症状が良くならない場合は": 0,
    "新型コロナ受診相談窓口": "あたらしい コロナを びょういんで みてもらうか について おはなし する ところ",
    "自宅で安静に過ごす": "いえ で しずか に していてください",
    "一般の医療機関を受診": "ちかくの びょういん で みてもらってください"
  }
}
</i18n>

<script>
import Apartment from '../../static/flow/apartment-24px.svg'
import House from '../../static/flow/house-24px.svg'
import Arrow from '../../static/flow/arrow_downward.svg'
import GreenArrow from '../../static/flow/arrow_green.svg'

export default {
  components: {
    Apartment,
    House,
    Arrow,
    GreenArrow
  }
}
</script>

<style module lang="scss">
@function px2vw($px, $vw: 600) {
  @return $px / $vw * 100vw;
}

.container {
  color: $gray-2;
  font-size: px2vw(22);
  line-height: 1.15;
  // override default styles
  em {
    font-style: normal;
  }
  // override Vuetify styles
  p {
    margin-bottom: 0;
  }
}
.heading {
  color: $green-1;
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
  > span {
    display: block;
    font-size: px2vw(38);
  }
}
.diag {
  margin-top: px2vw(30);
  font-weight: bold;
  text-align: center;
  line-height: 1.35;
  &.hr {
    border-top: 1px solid $gray-4;
    padding-top: px2vw(30);
  }
  .large {
    font-size: px2vw(64);
  }
  .line {
    display: block;
  }
  .place {
    font-size: px2vw(30);
  }
  .note {
    margin-top: px2vw(10);
  }
}
.decision {
  margin-top: px2vw(20);
  padding: px2vw(25);
  background-color: $gray-2;
  border-radius: px2vw(5);
  color: $white;
  text-align: center;
  font-weight: bold;
  line-height: 1.65;
  > span {
    display: block;
    &.small {
      font-size: px2vw(18);
    }
  }
}
.rectContainer {
  margin-top: px2vw(25);
  display: flex;
  justify-content: space-between;
  a {
    color: inherit;
    text-decoration: none;
  }
}
.rect {
  width: 47%;
  min-height: px2vw(188);
  flex: 0 0 auto;
  display: block;
  border-radius: px2vw(5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: px2vw(24);
  text-decoration: none !important;
  color: inherit !important;
  text-align: center;
  font-weight: bold;
  &.shadow {
    padding-top: 12px;
    box-shadow: 0 px2vw(3) px2vw(6) $gray-3;
  }
  &.border {
    border: px2vw(3) solid $gray-4;
    padding: px2vw(20);
  }
  &.bdGreen {
    border-color: $green-1;
  }
  &.bgYellow {
    background-color: #ffe200;
  }
  &.wide {
    width: 100%;
  }
  .large {
    font-size: px2vw(42);
  }
  .advisory {
    font-size: px2vw(38);
    display: block;
    margin-top: px2vw(10);
    margin-bottom: px2vw(10);
  }
  .line {
    margin-top: px2vw(5);
    display: block;
  }
  .arrow {
    margin-top: px2vw(10);
    width: 100%;
    text-align: center;
    line-height: 0;
    vertical-align: bottom;
  }
  .icon {
    margin-bottom: px2vw(10);
    width: 100%;
    text-align: center;
    line-height: 0;
    vertical-align: bottom;
  }
}

// 601-768 (769以上はPC版)
@include largerThan($small) {
  .container {
    font-size: px2vw(20, 768);
  }
  .heading {
    > span {
      font-size: px2vw(32, 768);
    }
  }
  .diag {
    margin-top: px2vw(30, 768);
    &.hr {
      padding-top: px2vw(30, 768);
    }
    .large {
      font-size: px2vw(48, 768);
    }
    .place {
      font-size: px2vw(26, 768);
    }
    .note {
      margin-top: px2vw(10, 768);
    }
  }
  .decision {
    margin-top: px2vw(20, 768);
    padding: px2vw(25, 768);
    border-radius: px2vw(5, 768);
    > span {
      &.small {
        font-size: px2vw(18, 768);
      }
    }
  }
  .rectContainer {
    margin-top: px2vw(25, 768);
  }
  .rect {
    min-height: px2vw(188, 768);
    border-radius: px2vw(5, 768);
    font-size: px2vw(24, 768);
    &.shadow {
      box-shadow: 0 px2vw(3, 768) px2vw(6, 768) $gray-3;
    }
    &.border {
      border: px2vw(3, 768) solid $gray-4;
      padding: px2vw(10, 768);
    }
    &.bdGreen {
      padding: px2vw(20, 768);
    }
    .large {
      font-size: px2vw(36, 768);
    }
    .advisory {
      font-size: px2vw(32, 768);
      margin-top: px2vw(10, 768);
      margin-bottom: px2vw(10, 768);
    }
    .line {
      margin-top: px2vw(5, 768);
    }
    .arrow {
      margin-top: px2vw(10, 768);
    }
    .icon {
      margin-bottom: px2vw(10, 768);
    }
  }
}
</style>
