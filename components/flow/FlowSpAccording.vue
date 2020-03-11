<template>
  <div :class="$style.Waku">
    <h4 :class="['mb-5', $style.Title]">
      新型コロナ受診相談窓口<br />
      <small>による相談結果</small>
    </h4>
    <p :class="['mb-4', $style.NewCorona]">
      新型コロナ外来
      <br />
      <span :class="$style.NeedConsultation">
        受診が必要
      </span>
      <br />
      と判断された場合
    </p>
    <div :class="['mb-4 py-4', $style.Square]">
      <p :class="['mb-0', $style.InSquare]">
        新型コロナ外来（帰国者・接触者外来）
        <br />
        医師による判断
      </p>
    </div>
    <div :class="['pb-4', $style.RectContainer]">
      <a
        v-scroll-to="'#not_required'"
        href="#not_required"
        :class="$style.RectContent"
      >
        <div :class="$style.Rect1">
          <p :class="['mb-0 pt-2', $style.NeedKensa]">
            検査の必要<br />
            <span :class="$style.Nashi">
              なし
            </span>
          </p>
          <GreenArrow class="mb-0" />
        </div>
      </a>
      <a v-scroll-to="'#pcr'" href="#pcr" :class="$style.RectContent">
        <div :class="$style.Rect2">
          <p :class="['mb-0 pt-2', $style.NeedKensa]">
            検査の必要<br />
            <span :class="$style.Nashi">
              あり
            </span>
          </p>
          <Arrow class="mb-0" />
        </div>
      </a>
    </div>
    <p id="pcr" :class="['my-4', $style.NewCorona]">
      <span :class="$style.NeedConsultation">PCR検査</span>※<br />
      東京都健康安全
      <br />
      研究センター等<br />
      <small>
        ※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施
      </small>
    </p>
    <div :class="['pb-4', $style.RectContainer]">
      <a
        v-scroll-to="'#not_required'"
        href="#not_required"
        :class="$style.RectContent"
      >
        <div :class="['py-2', $style.Rect1]">
          <p :class="['mb-0 pt-2', $style.NeedKensa]">
            <span :class="$style.Nashi">
              {{ $t('陰性') }}
            </span>
          </p>
          <GreenArrow class="mb-0" />
        </div>
      </a>
      <a
        v-scroll-to="'#hospitalized'"
        href="#hospitalized"
        :class="$style.RectContent"
      >
        <div :class="['py-2', $style.Rect2]">
          <p :class="['mb-0 pt-2', $style.NeedKensa]">
            <span :class="$style.Nashi">
              {{ $t('陽性') }}
            </span>
          </p>
          <Arrow class="mb-0" />
        </div>
      </a>
    </div>
    <p id="not_required" :class="['my-4', $style.NewCorona]">
      新型コロナ外来
      <br />
      <span :class="$style.NeedConsultation">
        受診が不要
      </span>
      <br />
      と判断された場合
    </p>
    <div :class="['pb-4', $style.RectContainer]">
      <div :class="$style.RectContent">
        <div :class="['py-3', $style.Rect3]">
          <p class="mb-0">
            <House :class="$style.Icon" />
            自宅で
            <br />
            安静に過ごす
          </p>
        </div>
      </div>
      <div :class="$style.RectContent">
        <div :class="['py-3', $style.Rect3]">
          <p class="mb-0">
            <Apartment :class="$style.Icon" />
            一般の
            <br />
            医療機関を受診
          </p>
        </div>
      </div>
    </div>
    <div :class="$style.RectWrapSoudan">
      <div :class="$style.RectSoudan">
        <p :class="['mb-0 py-4', $style.inFinalRect]">
          症状が良くならない場合は
          <br />
          <strong>新型コロナ受診相談窓口</strong>
          <br />
          に相談
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
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "Combined telephone advice center",
    "新型コロナ外来 {advice} と判断された場合": "If you are {advice} for COVID-19",
    "受診が必要": "not advised to be examined",
    "新型コロナ外来（帰国者・接触者外来）": "COVID-19 consultation for returnees and contactees",
    "医師による判断": "Diagnosis by doctors",
    "検査の必要{ifRequired}": "You are {ifRequired} to be tested",
    "あり": "required",
    "なし": "not required",
    "PCR検査": "PCR diagnostic test",
    "※": "*",
    "東京都健康安全研究センター等": "Tokyo Metropolitan Institute of Public Health or other facilities",
    "陰性": "Negative",
    "陽性": "Positive",
    "受診が不要": "not advised to be examined",
    "{getWorse}{advisory}に相談": "{getWorse}call the {advisory}",
    "症状が良くならない場合は": "If your symptoms get worse,",
    "新型コロナ受診相談窓口": "Combined telephone advice center (Support in Japanese only)",
    "自宅で安静に過ごす": "Stay at home",
    "一般の医療機関を受診": "See a general practitioner."
  },
  "zh-cn": {
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口",
    "新型コロナ外来 {advice} と判断された場合": "如果被诊断为 {advice} 到新冠肺炎专科就诊时",
    "受診が必要": "不需要",
    "新型コロナ外来（帰国者・接触者外来）": "经新冠肺炎专科（海外返日者、接触者专科）",
    "医師による判断": "医生诊断",
    "検査の必要{ifRequired}": "{ifRequired}检测",
    "あり": "需要",
    "なし": "不需要",
    "PCR検査": "PCR检测",
    "※": "※",
    "東京都健康安全研究センター等": "东京都健康安全研究中心等",
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
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口",
    "新型コロナ外来 {advice} と判断された場合": "經判斷 {advice} 至新型冠狀病毒門診就診",
    "受診が必要": "不必",
    "新型コロナ外来（帰国者・接触者外来）": "新型冠狀病毒肺炎門診（歸國者、接觸者門診）",
    "医師による判断": "經醫師判斷",
    "検査の必要{ifRequired}": "{ifRequired}檢驗",
    "あり": "需要",
    "なし": "不需要",
    "PCR検査": "PCR檢驗",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究中心等",
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
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "코로나19진단 문의처",
    "新型コロナ外来 {advice} と判断された場合": 0,
    "受診が必要": 0,
    "新型コロナ外来（帰国者・接触者外来）": "귀국자 외래진료 (귀국자, 접촉자 외래진료)",
    "医師による判断": "의사에 의한 판단",
    "検査の必要{ifRequired}": "검사의 필요가 {ifRequired}",
    "あり": "있음",
    "なし": "없음",
    "PCR検査": "PCR 진단 검사",
    "※": "※",
    "東京都健康安全研究センター等": "도쿄도청 건강 안전연구 센터 등",
    "陰性": "음성",
    "陽性": "양성",
    "受診が不要": 0,
    "{getWorse}{advisory}に相談": 0,
    "症状が良くならない場合は": 0,
    "新型コロナ受診相談窓口": "코로나19진단 문의처 (일본어에 한함)",
    "自宅で安静に過ごす": "至一般的醫療機構就診",
    "一般の医療機関を受診": "일반 의료기관 진찰을 받습니다."
  },
  "ja-basic": {
    "{advisory}による相談結果": "{advisory}による相談結果",
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
.Title {
  @include lessThan($small) {
    @include font-size(22);
  }
  @include largerThan($small) {
    @include font-size(24);
  }
  color: $green-1;
  line-height: 1.5rem;
  small {
    @include font-size(16);
  }
}
.Waku {
  color: $gray-2;
  text-align: center;
}
.NewCorona {
  @include font-size(16);
  font-weight: bold;
  small {
    @include font-size(14);
    line-height: 0;
    font-weight: normal;
  }
}
.NeedConsultation {
  line-height: 1.2em;
  @include font-size(32);
}
.Square {
  margin: 0 auto;
  background-color: $gray-2;
  border-radius: 3px;
}
.InSquare {
  @include lessThan($small) {
    @include font-size(14);
  }
  @include largerThan($small) {
    @include font-size(16);
  }
  color: white;
  text-align: center;
  font-weight: bold;
}
.Rect {
  &Container {
    display: flex;
    justify-content: space-between;
    border-color: $gray-4;
    border-width: 0 0 1px;
    border-style: solid;
  }
  &Content {
    display: block;
    flex-basis: 47.5%;
    font-weight: bold;
    text-decoration: none;
  }
}
.Rect2 {
  border-radius: 3px;
  background-color: #ffe200;
  box-shadow: -1px 2px 5px $gray-3;
}
.Rect1 {
  border-radius: 3px;
  background-color: white;
  box-shadow: -1px 2px 5px $gray-3;
}
.Rect3 {
  border-radius: 3px;
  border: 1px solid $gray-4;
}
.Icon {
  display: block;
  margin: 0 auto 0.5rem;
  width: 24px;
}
.BorderLine {
  display: inline-block;
  width: 100%;
  height: 1px;
  opacity: 0.3;
}
.NeedKensa {
  width: 100%;
  @include lessThan($small) {
    @include font-size(16);
  }
  @include largerThan($small) {
    @include font-size(20);
  }
  line-height: 1.5rem;
  color: $gray-2;
}
.Nashi {
  @include lessThan($small) {
    @include font-size(24);
  }
  @include largerThan($small) {
    @include font-size(28);
  }
  color: $gray-2;
}
.RectWrapSoudan {
  width: 100%;
}
.RectSoudan {
  border: solid $green-1;
  border-radius: 3px;
  font-weight: bold;
}
.inFinalRect {
  @include font-size(18);
  strong {
    @include lessThan($small) {
      @include font-size(22);
    }
    @include largerThan($small) {
      @include font-size(24);
    }
  }
}
</style>
