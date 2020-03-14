<template>
  <div :class="[$style.container, $style.according]">
    <i18n tag="div" :class="$style.heading" path="{advisory}による相談結果">
      <span :class="[$style.fzLarge, $style.break]" place="advisory">
        {{ $t('新型コロナ受診相談窓口') }}
      </span>
    </i18n>
    <i18n
      tag="p"
      :class="$style.diag"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <span :class="[$style.fzXLLarge, $style.break]" place="advice">
        {{ $t('受診が必要') }}
      </span>
    </i18n>
    <p :class="$style.decision">
      <span :class="$style.fzSmall">
        {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
      </span>
      <span :class="[$style.fzLarge, $style.break]">{{
        $t('医師による判断')
      }}</span>
    </p>
    <div :class="[$style.rectContainer, $style.double]">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.result, $style.clickable]"
        href="#not_required"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.fzXLarge, $style.break]" place="ifRequired">
              {{ $t('なし') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#pcr'"
        :class="[$style.rect, $style.result, $style.clickable, $style.bgYellow]"
        href="#pcr"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <span :class="[$style.fzXLarge, $style.break]" place="ifRequired">
              {{ $t('あり') }}
            </span>
          </i18n>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <Arrow />
        </div>
      </a>
    </div>
    <p id="pcr" :class="[$style.diag, $style.hr]">
      <span :class="$style.break">
        <!-- 改行によって空白が入らないように-->
        <!-- eslint-disable -->
        <span :class="$style.fzXLLarge">{{ $t('PCR検査') }}</span>{{ $t('※') }}
        <!-- eslint-enable -->
      </span>
      <span :class="$style.break">
        {{ $t('東京都健康安全研究センター等') }}
      </span>
      <small :class="[$style.note, $style.fzSmall, $style.break]">
        {{
          $t(
            '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
          )
        }}
      </small>
    </p>
    <div :class="[$style.rectContainer, $style.double]">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.result, $style.clickable]"
        href="#not_required"
      >
        <p>
          <span :class="$style.fzXLarge">{{ $t('陰性') }}</span>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <GreenArrow />
        </div>
      </a>
      <a
        v-scroll-to="'#hospitalized'"
        :class="[$style.rect, $style.result, $style.clickable, $style.bgYellow]"
        href="#hospitalized"
      >
        <p>
          <span :class="$style.fzXLarge">{{ $t('陽性') }}</span>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
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
      <span :class="[$style.break, $style.fzXLLarge]" place="advice">
        {{ $t('受診が不要') }}
      </span>
    </i18n>
    <div :class="[$style.rectContainer, $style.double]">
      <div :class="[$style.rect, $style.solution]">
        <div :class="$style.icon" aria-hidden="true">
          <House />
        </div>
        <p>{{ $t('自宅で安静に過ごす') }}</p>
      </div>
      <div :class="[$style.rect, $style.solution]">
        <div :class="$style.icon" aria-hidden="true">
          <Apartment />
        </div>
        <p>{{ $t('一般の医療機関を受診') }}</p>
      </div>
      <div :class="[$style.rect, $style.consult]">
        <p>
          <i18n path="{getWorse}{advisory}に相談">
            <i18n place="getWorse" path="症状が良くならない場合は" />
            <strong :class="$style.advisory" place="advisory">
              {{ $t('新型コロナ受診相談窓口（日本語のみ）') }}
            </strong>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<<<<<<< HEAD
<i18n src="./FlowSpAccording.i18n.json"></i18n>
=======
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
    "{advisory}による相談結果": "{advisory}による 相談（そうだん）結果（けっか）",
    "新型コロナ受診相談窓口": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）",
    "新型コロナ外来 {advice} と判断された場合": "病院（びょういん）の 新（あたら）しい コロナ外来（がいらい）{advice}と 判断（はんだん）された とき",
    "受診が必要": "必（かなら）ず 受（う）けてください",
    "新型コロナ外来（帰国者・接触者外来）": "新（あたら）しい コロナウイルス に 対応（たいおう）する 病院 （帰国者・接触者外来（きこくしゃ・せっしょくしゃ がいらい））",
    "医師による判断": "医者（いしゃ）による 判断（はんだん）",
    "検査の必要{ifRequired}": "検査（けんさ）の 必要（ひつよう）{ifRequired}",
    "あり": "あり",
    "なし": "なし",
    "PCR検査": "PCR検査（けんさ）",
    "※": "※",
    "東京都健康安全研究センター等": "東京都健康安全研究センター等（とうきょうと けんこう あんぜん けんきゅう センター など）",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※保険適用（ほけんてきよう）となる検査（けんさ）は、しばらくの間（あいだ）、病院（びょういん）の中（なか）で コロナウイルスが 拡（ひろ）がらないようにするため、「帰国者・接触者外来（きこくしゃ・せっしょくしゃがいらい）」等（など）の特別（とくべつ）な 医療機関（いりょうきかん）で します",
    "陰性": "陰性（いんせい）※コロナウイルス に かかっていません",
    "陽性": "陽性（ようせい）※コロナウイルス に かかっています",
    "受診が不要": "受（う）けなくてよい",
    "{getWorse}{advisory}に相談": "{getWorse}{advisory}に 相談（そうだん）",
    "症状が良くならない場合は": "体（からだ）の具合（ぐあい）が 良（よ）くならないとき は",
    "新型コロナ受診相談窓口": "新（あたら）しい コロナ受診相談窓口（じゅしん そうだんまどぐち）※受診相談窓口： 病院（びょういん）で 見（み）てもらうか について 相談（そうだん） するところ",
    "自宅で安静に過ごす": "家（いえ）で 静（しず）か に していて ください",
    "一般の医療機関を受診": "普通（ふつう）の 病院（びょういん）で みてもらって ください"
  }
}
</i18n>
>>>>>>> [i18n] fix components/flow According

<script>
import Apartment from '@/static/flow/responsive/apartment.svg'
import House from '@/static/flow/responsive/house.svg'
import Arrow from '@/static/flow/responsive/arrow_downward.svg'
import GreenArrow from '@/static/flow/responsive/arrow_green.svg'

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
@import '@/components/flow/flow_sp.scss';

.according {
  .heading {
    color: $green-1;
  }
  .diag {
    margin-top: px2vw(30);
    text-align: center;
    line-height: 1.5;
    &.hr {
      border-top: 1px solid $gray-4;
      padding-top: px2vw(30);
    }
  }
  .decision {
    margin-top: px2vw(20);
    padding: px2vw(20);
    background-color: $gray-2;
    border-radius: px2vw(6);
    color: $white;
    text-align: center;
    line-height: 1.65;
  }
  .note {
    margin-top: px2vw(10);
  }
  .fzXLLarge {
    font-size: px2vw(56);
  }
}
.rectContainer {
  .rect {
    min-height: px2vw(188);
    padding: px2vw(20) px2vw(10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex: 0 0 48%;
    border-radius: px2vw(6);
    font-size: px2vw(24);
    text-decoration: none !important;
    color: inherit !important;
    text-align: center;
    font-weight: bold;
    &.result {
      // icon
      padding-bottom: px2vw((56 + 20 * 2));
      position: relative;
    }
    &.solution {
      border: px2vw(3) solid $gray-4;
      // icon
      padding-top: px2vw((46 + 20 * 2));
      position: relative;
    }
    &.consult {
      border: px2vw(3) solid $green-1;
      flex-basis: 100%;
    }
    &.bgYellow {
      background-color: #ffe200;
    }
    &:nth-child(n + 3) {
      margin-top: px2vw((486 - 233 - 233));
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
    .arrow,
    .icon {
      margin: 0 auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .arrow {
      width: px2vw(56);
      height: px2vw(56);
      bottom: px2vw(20);
    }
    .icon {
      width: px2vw(46);
      height: px2vw(46);
      top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;
  .according {
    .diag {
      margin-top: px2vw(30, $vw);
      &.hr {
        padding-top: px2vw(30, $vw);
      }
    }
    .decision {
      margin-top: px2vw(20, $vw);
      padding: px2vw(20, $vw);
      border-radius: px2vw(6, $vw);
    }
    .note {
      text-align: left;
      margin-top: px2vw(10, $vw);
    }
    .fzXLLarge {
      font-size: px2vw(56, $vw);
    }
  }
  .rectContainer {
    .rect {
      min-height: px2vw(188, $vw);
      padding: px2vw(20, $vw) px2vw(10, $vw);
      border-radius: px2vw(6, $vw);
      font-size: px2vw(24, $vw);
      &.result {
        padding-bottom: px2vw((56 + 20 * 2), $vw);
      }
      &.solution {
        border: px2vw(3, $vw) solid $gray-4;
        padding-top: px2vw((46 + 20 * 2), $vw);
      }
      &.consult {
        border: px2vw(3, $vw) solid $green-1;
      }
      &:nth-child(n + 3) {
        margin-top: px2vw((486 - 233 - 233), $vw);
      }
      .large {
        font-size: px2vw(42, $vw);
      }
      .advisory {
        font-size: px2vw(38, $vw);
        margin-top: px2vw(10, $vw);
        margin-bottom: px2vw(10, $vw);
      }
      .line {
        margin-top: px2vw(5, $vw);
      }
      .arrow {
        width: px2vw(56, $vw);
        height: px2vw(56, $vw);
        bottom: px2vw(20, $vw);
      }
      .icon {
        width: px2vw(46, $vw);
        height: px2vw(46, $vw);
        top: px2vw(20, $vw);
      }
    }
  }
}
</style>
