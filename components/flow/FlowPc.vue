<template>
  <div :class="$style.FlowCard">
    <h3>{{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}</h3>
    <div :class="[$style.Outer, $style.OuterUpper]">
      <div :class="[$style.CardBlock, $style.Past]">
        <flow-pc-past />
      </div>
      <div :class="[$style.CardBlock, $style.Days]">
        <flow-pc-days />
      </div>
      <div :class="[$style.CardBlock, $style.CardBlockCenter, $style.Suspect]">
        <flow-pc-suspect />
      </div>
      <div :class="$style.Advisory">
        <flow-pc-advisory />
      </div>
      <div :class="$style.Advisory2">
        <flow-pc-advisory2 />
      </div>
    </div>
    <h3>
      <i18n
        :class="$style.TitleSmall"
        tag="span"
        path="{advisory}による相談結果"
      >
        <span :class="$style.TitleLarge" place="advisory">
          {{ $t('新型コロナ受診相談窓口') }}
        </span>
      </i18n>
    </h3>
    <div :class="[$style.Outer, $style.OuterLower]">
      <div
        :class="[$style.CardBlock, $style.CardBlockRequired, $style.Required]"
      >
        <flow-pc-required />
      </div>
      <div :class="[$style.CardBlock, $style.CardBlockPcr, $style.Pcr]">
        <flow-pc-pcr />
      </div>
      <div :class="$style.NotRequired">
        <flow-pc-not-required />
      </div>
      <div :class="$style.Hospitalized">
        <flow-pc-hospitalized />
      </div>
    </div>
    <p :class="$style.Note">
      {{
        $t(
          '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
        )
      }}
    </p>
  </div>
</template>

<<<<<<< HEAD
<i18n src="./FlowPc.i18n.json"></i18n>
=======
<i18n>
{
  "ja": {
    "新型コロナウイルス感染症にかかる相談窓口について": "新型コロナウイルス感染症にかかる相談窓口について",
    "{advisory}による相談結果": "{advisory}による相談結果",
    "新型コロナ受診相談窓口": "新型コロナ受診相談窓口",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施"
  },
  "en": {
    "新型コロナウイルス感染症にかかる相談窓口について": "Regarding the COVID-19 Infection Telephone Advisory Center",
    "{advisory}による相談結果": "According to call {advisory}",
    "新型コロナ受診相談窓口": "advisory",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "Until further notice, due to prevention of hospital infection, examinations covered by insurance is only avairable at medical institutions such as an outpatient for returnees and contactees."
  },
  "zh-cn": {
    "新型コロナウイルス感染症にかかる相談窓口について": "关于新冠肺炎的咨询窗口",
    "{advisory}による相談結果": "根据{advisory}的判断",
    "新型コロナ受診相談窓口": "新冠肺炎就诊咨询窗口",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※目前，出于对防止院内感染的考量，仅在开设有「海外返日者、接触者专科」的医疗机构施行可以使用保险的检查。"
  },
  "zh-tw": {
    "新型コロナウイルス感染症にかかる相談窓口について": "關於新型冠狀病毒肺炎的諮詢窗口",
    "{advisory}による相談結果": "根據{advisory}的諮詢結果",
    "新型コロナ受診相談窓口": "新型冠狀病毒就診諮詢窗口",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※目前，為防止院內感染等因素，適用保險的檢查僅在「歸國者、接觸者門診」等醫療機關實施。"
  },
  "ko": {
    "新型コロナウイルス感染症にかかる相談窓口について": "코로나19에 대한 문의처에 대해서",
    "{advisory}による相談結果": "{advisory} 의한 상담 결과",
    "新型コロナ受診相談窓口": "코로나 19 콜센터 상담에",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※보험적용 검사는 병원내 감염 방지등 관점에서 「귀국자・접촉자외래」등 의료기관에서 실시합니다"
  },
  "ja-basic": {
    "新型コロナウイルス感染症にかかる相談窓口について": "新（あたら）しい コロナウイルス について 相談（そうだん）する ところ について",
    "{advisory}による相談結果": "{advisory}による相談（そうだん）結果（けっか）",
    "新型コロナ受診相談窓口": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）",
    "※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施": "※保険適用（ほけんてきよう）となる検査（けんさ）は、しばらくの間（あいだ）、病院（びょういん）の中（なか）で コロナウイルスが 拡（ひろ）がらないようにするため、「帰国者・接触者外来（きこくしゃ・せっしょくしゃがいらい）」等（など）の特別（とくべつ）な 医療機関（いりょうきかん）で します"
  }
}
</i18n>
>>>>>>> Fix components/flow/FlowPc.vue (ja-basic)

<script>
import FlowPcPast from './FlowPcPast.vue'
import FlowPcDays from './FlowPcDays.vue'
import FlowPcSuspect from './FlowPcSuspect.vue'
import FlowPcAdvisory from './FlowPcAdvisory.vue'
import FlowPcAdvisory2 from './FlowPcAdvisory2.vue'
import FlowPcRequired from './FlowPcRequired.vue'
import FlowPcPcr from './FlowPcPcr.vue'
import FlowPcNotRequired from './FlowPcNotRequired.vue'
import FlowPcHospitalized from './FlowPcHospitalized.vue'

export default {
  components: {
    FlowPcPast,
    FlowPcDays,
    FlowPcSuspect,
    FlowPcAdvisory,
    FlowPcAdvisory2,
    FlowPcRequired,
    FlowPcPcr,
    FlowPcNotRequired,
    FlowPcHospitalized
  }
}
</script>

<style module lang="scss">
.FlowCard {
  display: flex;
  flex-direction: column;
  @include card-container();
  padding: 20px;
  margin-bottom: 20px;
  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
    margin-bottom: 7px;
  }
  &GrayBg {
    background-color: $gray-5;
  }
}
.Outer {
  display: grid;
  grid-gap: 12px;
  &Upper {
    grid-template-columns: 70% 30%;
    -ms-grid-columns: 70% 12px 30%;
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }
    & > *:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }
    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(5) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
    margin-bottom: 36px;
  }
  &Lower {
    grid-template-columns: repeat(2, 1fr);
    -ms-grid-columns: 1fr 12px 1fr;
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }
    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(3) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }
    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
  }
}
.Title {
  @include font-size(28);
  color: $green-1;
  &Small {
    @include font-size(20);
  }
  &Large {
    @include font-size(28);
  }
}
.CardBlock {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
  &Center::after {
    bottom: 40%;
  }
  &Required::after {
    bottom: -30px;
    right: auto;
    left: 22%;
    transform: rotate(90deg);
  }
  &Required::before {
    content: '';
    position: absolute;
    bottom: 12%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
  &Pcr::after {
    bottom: auto;
    top: 15%;
    transform: rotateZ(-30deg);
  }
  &Pcr::before {
    content: '';
    position: absolute;
    bottom: 15%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
    transform: rotateZ(30deg);
  }
}
.Advisory {
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 23px);
    transform: rotate(-90deg);
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
}
.Past {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Days {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.Suspect {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}
.Advisory {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.Advisory2 {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.Required {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.Pcr {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}
.NotRequired {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}
.Hospitalized {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
.Note {
  margin: 16px 0;
}
</style>
