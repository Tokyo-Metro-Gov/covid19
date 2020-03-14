<template>
<<<<<<< HEAD
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
<<<<<<< HEAD
      {{ $t('新型コロナ受診相談窓口') }}
<<<<<<< HEAD
=======
      {{ $t('新型コロナ受診相談窓口（日本語のみ）') }}
>>>>>>> Fix component FlowSpAdvisory and its dictionary
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">{{
        $t('帰国者・接触者電話相談センター')
      }}</small>
=======
      <small>{{ $t('帰国者・接触者 電話相談センター') }}</small>
>>>>>>> Fix components/flow/FlowSpAdvisory.vue (properties of i18n settings)
=======
  <div :class="$style.SpAdvisory">
    <h4 id="consult" :class="['mb-4 mt-n6', $style.Heading]">
      {{ $t('新型コロナ受診相談窓口') }}
      <small>{{ $t('帰国者・接触者電話相談センター') }}</small>
>>>>>>> Revert "Merge remote-tracking branch 'upstream/dev-i18n' into fix/1323"
    </h4>
    <div :class="['px-6 py-2 mb-4', $style.ConsultationChip]">
      {{ $t('24時間対応') }}
    </div>
    <dl>
      <div :class="['py-3', $style.ConsultationDaytime]">
        <dt :class="$style.ConsultationDaytimeTitle">
          {{ $t('平日（日中）') }}
        </dt>
        <dd :class="$style.ConsultationDaytimeLink">
          <a
            :class="$style.Link"
            href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            target="_blank"
            rel="noopener"
          >
            {{ $t('各保健所の電話番号は福祉保健局HPへ') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
      <div :class="['pt-3', $style.ConsultationWeekend]">
        <dt :class="['mb-3', $style.ConsultationWeekendDescription]">
          <span :class="$style.ConsultationWeekendTitle">
            {{ $t('平日（夜間）') }}
          </span>
          {{ $t('午後5時から翌朝午前9時') }}
          <span :class="$style.ConsultationWeekendTitle">
            {{ $t('土日祝 終日') }}
          </span>
        </dt>
        <dd :class="$style.TelLink">
          <PhoneIcon :class="$style.TelLinkImg" alt="Phone" />
          <a href="tel:0353204592">
            03-5320-4592
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<<<<<<< HEAD
<i18n src="./FlowSpAdvisory.i18n.json"></i18n>
=======
<i18n>
{
  "ja": {
    "新型コロナ受診相談窓口": "新型コロナ受診相談窓口",
    "帰国者・接触者 電話相談センター": "帰国者・接触者 電話相談センター",
    "24時間対応": "24時間対応",
    "平日（日中）": "平日（日中）",
    "各保健所の電話番号は福祉保健局HPへ": "各保健所の電話番号は福祉保健局HPへ",
    "平日（夜間）": "平日（夜間）",
    "午後5時から翌朝午前9時": "午後5時から翌朝午前9時",
    "土日祝 終日": "土日祝 終日"
  },
  "ja-basic": {
    "新型コロナ受診相談窓口": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）",
    "帰国者・接触者 電話相談センター": "帰国者・接触者 電話相談 センター（きこくしゃ・せっしょくしゃ でんわそうだん センター）（帰国者・接触者電話相談センター：日本（にほん）に 帰（かえ）ってきた人（ひと）、コロナウイルス に かかっている 人（ひと） と 会（あ）った人（ひと） が 電話（でんわ） 相談（そうだん）するところ）",
    "24時間対応": "24時間（じかん）いつでも 対応（たいおう）",
    "平日（日中）": "月曜日（げつようび）から 金曜日（きんようび）の 昼間（ひるま）",
    "各保健所の電話番号は福祉保健局HPへ": "それぞれの 保健所（ほけんじょ）の 電話番号（でんわばんごう）は、 福祉保健局（ふくしほけんきょく）の インターネットページへ （保健所（ほけんじょ）：みなさんが 元気（げんき）で いること を 助（たす）ける 役所（やくしょ） です）",
    "平日（夜間）": "月曜日（げつようび） から 金曜日（きんようび）の 夜（よる）",
    "午後5時から翌朝午前9時": "夕方（ゆうがた）の 午後（ごご）5時（じ）から 朝（あさ）の 午前（ごぜん）9時（じ）まで",
    "土日祝 終日": "土曜日（どようび）、日曜日（にちようび）、休（やす）みの日（ひ）の 1日中（いちにちじゅう）"
  }

}
</i18n>

<!--
  "en": {
    "新型コロナ受診相談窓口": "Combined telephone advice center (Support in Japanese only)",
    "帰国者・接触者 電話相談センター": "telephone advisory center for returnees and contactees",
    "24時間対応": "open 24h",
    "平日（日中）": "on weekdays (daytime)",
    "各保健所の電話番号は福祉保健局HPへ": "Check phone numbers of public health centers at Bureau of Social Welfare and Public Health website",
    "平日（夜間）": "on weekdays (night)",
    "午後5時から翌朝午前9時": "5:00 pm - 9:00 am",
    "土日祝 終日": "Weekends, public holidays (all day)"
  },
  "zh-cn": {
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口（仅限日语服务）",
    "帰国者・接触者 電話相談センター": "海外返日者、接触者 电话咨询中心",
    "24時間対応": "24 小时服务",
    "平日（日中）": "周一至周五（白天）",
    "各保健所の電話番号は福祉保健局HPへ": "各保健所的电话请参见福祉保健局的官方网站",
    "平日（夜間）": "周一至周五（夜间）",
    "午後5時から翌朝午前9時": "下午 5 点至次日上午 9 点",
    "土日祝 終日": "周六日及节假日（全天）"
  },
  "zh-tw": {
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口（僅提供日語服務）",
    "帰国者・接触者 電話相談センター": "歸國者、接觸者 電話諮詢中心",
    "24時間対応": "24 小時服務",
    "平日（日中）": "週一至週五（白天）",
    "各保健所の電話番号は福祉保健局HPへ": "請由福祉保健局官網取得各保健中心的電話",
    "平日（夜間）": "週一至週五（晚上）",
    "午後5時から翌朝午前9時": "下午 5 點到翌日早上 9 點",
    "土日祝 終日": "週六、週日、例假日（全天）"
  },
  "ko": {
    "新型コロナ受診相談窓口": "코로나19 진단 문의처 (일본어에 한함)",
    "帰国者・接触者 電話相談センター": "귀국자 또는 접촉자를 위한 콜 센터",
    "24時間対応": "24시간대응",
    "平日（日中）": "평일 (낮)",
    "各保健所の電話番号は福祉保健局HPへ": "각 보건소의 전화번호는 보건복지국 홈페이지에서 확인할 수 있습니다",
    "平日（夜間）": "평일 (야간)",
    "午後5時から翌朝午前9時": "오후 5:00 - 오전 9:00",
    "土日祝 終日": "주말, 공휴일 (종일)"
  },
  "ja-basic": {
    "新型コロナ受診相談窓口": "新（あたら）しい コロナ受診相談窓口（じゅしんそうだんまどぐち）",
    "帰国者・接触者 電話相談センター": "帰国者・接触者 電話相談 センター（きこくしゃ・せっしょくしゃ でんわそうだん センター）（帰国者・接触者電話相談センター：日本（にほん）に 帰（かえ）ってきた人（ひと）、コロナウイルス に かかっている 人（ひと） と 会（あ）った人（ひと） が 電話（でんわ） 相談（そうだん）するところ）",
    "24時間対応": "24時間（じかん）いつでも 対応（たいおう）",
    "平日（日中）": "月曜日（げつようび）から 金曜日（きんようび）の 昼間（ひるま）",
    "各保健所の電話番号は福祉保健局HPへ": "それぞれの 保健所（ほけんじょ）の 電話番号（でんわばんごう）は、 福祉保健局（ふくしほけんきょく）の インターネットページへ （保健所（ほけんじょ）：みなさんが 元気（げんき）で いること を 助（たす）ける 役所（やくしょ） です）",
    "平日（夜間）": "月曜日（げつようび） から 金曜日（きんようび）の 夜（よる）",
    "午後5時から翌朝午前9時": "夕方（ゆうがた）の 午後（ごご）5時（じ）から 朝（あさ）の 午前（ごぜん）9時（じ）まで",
    "土日祝 終日": "土曜日（どようび）、日曜日（にちようび）、休（やす）み の 日（ひ）の 1日中（いちにちじゅう）"
  }
-->
>>>>>>> Fix components/flow/FlowSpAdvisory.vue

<script lang="ts">
import PhoneIcon from '@/static/flow/phone-24px.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
.SpAdvisory {
  color: $gray-2;
  text-align: center;
}
.Heading {
  @include lessThan($small) {
    @include font-size(22);
  }
  @include largerThan($small) {
    @include font-size(24);
  }
  line-height: 1.5rem;
  white-space: pre-line;
  small {
    @include font-size(16);
  }
}
.Consultation {
  &Chip {
    display: inline-block;
    background-color: $white;
    border-radius: 4px;
    color: $green-1;
    font-weight: bold;
  }
  &Daytime {
    display: flex;
    align-items: center;
    border-width: 0.5px 0;
    border-style: solid;
    border-color: $gray-4;
    font-weight: bold;
    justify-content: space-around;
    &Title {
      flex-basis: 40%;
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(18);
      }
    }
    &Link {
      flex-basis: 55%;
      a {
        color: $gray-2;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &Weekend {
    font-weight: bold;
    &Description {
      white-space: pre-line;
    }
    &Title {
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(18);
      }
    }
  }
}

.TelLink {
  @include font-size(24);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  &Img {
    width: 2rem;
  }
  a {
    color: $gray-2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
