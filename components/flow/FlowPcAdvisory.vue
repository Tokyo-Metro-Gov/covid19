<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('新型コロナ受診相談窓口')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, $style.Mt16]">
          {{ $t('帰国者・接触者 電話相談センター') }}
        </div>
        <div :class="[$style.AdvisoryBlockCentering, $style.Mt20]">
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（日中）') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              $style.Mt16
            ]"
          >
            <a
              href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
              target="_blank"
              rel="noopener"
            >
              <span>{{ $t('各保健所の電話番号は福祉保健局HPへ') }}</span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（夜間）') }}
          </div>
          <span>{{ $t('午後5時から翌朝午前9時') }}</span>
        </div>
        <div :class="$style.Mt4">
          <span :class="$style.AdvisoryContentsSubTitle">
            {{ $t('土日祝 終日') }}
          </span>
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering,
            $style.Mt4
          ]"
        >
          <img src="/flow/phone-24px.svg" />
          <span :class="$style.AdvisoryTelephone">03-5320-4592</span>
        </div>
      </div>
    </div>

    <div :class="$style.AdvisoryBlockCentering">
      <img src="/flow/flow_arrow.svg" :class="$style.Rotate" />
    </div>

    <div :class="$style.AdvisoryBlockCentering">
      <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryBlackBox]">
        <span :class="$style.AdvisoryBlackBoxSentense">{{
          $t('専門的な助言が必要な場合')
        }}</span>
      </div>
    </div>
  </div>
</template>

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
    "土日祝 終日": "土日祝 終日",
    "専門的な助言が必要な場合": "専門的な助言が必要な場合"
  },
  "en": {
    "新型コロナ受診相談窓口": "Combined telephone advice center (Support in Japanese only)",
    "帰国者・接触者 電話相談センター": "telephone advisory center for returnees and contactees",
    "24時間対応": "open 24h",
    "平日（日中）": "on weekdays (daytime)",
    "各保健所の電話番号は福祉保健局HPへ": "Check phone numbers of public health centers at Bureau of Social Welfare and Public Health website",
    "平日（夜間）": "on weekdays (night)",
    "午後5時から翌朝午前9時": "5:00 pm - 9:00 am",
    "土日祝 終日": "Weekends, public holidays (all day)",
    "専門的な助言が必要な場合": "If you need advice from an expert"
  },
  "zh-cn": {
    "新型コロナ受診相談窓口": "请到新冠肺炎就诊咨询窗口（仅限日语服务）",
    "帰国者・接触者 電話相談センター": "海外返日者、接触者 电话咨询中心",
    "24時間対応": "24 小时服务",
    "平日（日中）": "周一至周五（白天）",
    "各保健所の電話番号は福祉保健局HPへ": "各保健所的电话请参见福祉保健局的官方网站",
    "平日（夜間）": "周一至周五（夜间）",
    "午後5時から翌朝午前9時": "下午 5 点至次日上午 9 点",
    "土日祝 終日": "周六日及节假日（全天）",
    "専門的な助言が必要な場合": "如果您需要专业的建议"
  },
  "zh-tw": {
    "新型コロナ受診相談窓口": "請至新型冠狀病毒就診諮詢窗口（僅提供日語服務）",
    "帰国者・接触者 電話相談センター": "歸國者、接觸者 電話諮詢中心",
    "24時間対応": "24 小時服務",
    "平日（日中）": "週一至週五（白天）",
    "各保健所の電話番号は福祉保健局HPへ": "請由福祉保健局官網取得各保健中心的電話",
    "平日（夜間）": "週一至週五（晚上）",
    "午後5時から翌朝午前9時": "下午 5 點到翌日早上 9 點",
    "土日祝 終日": "週六、週日、例假日（全天）",
    "専門的な助言が必要な場合": "若您需要專業建議"
  },
  "ko": {
    "新型コロナ受診相談窓口": "코로나19 진단 문의처 (일본어에 한함)",
    "帰国者・接触者 電話相談センター": "귀국자 또는 접촉자를 위한 콜 센터",
    "24時間対応": "24시간대응",
    "平日（日中）": "평일 (낮)",
    "各保健所の電話番号は福祉保健局HPへ": "각 보건소의 전화번호는 보건복지국 홈페이지에서 확인할 수 있습니다",
    "平日（夜間）": "평일 (야간)",
    "午後5時から翌朝午前9時": "오후 5:00 - 오전 9:00",
    "土日祝 終日": "주말, 공휴일 (종일)",
    "専門的な助言が必要な場合": "전문적 상담이 필요할 경우"
  },
  "ja-basic": {
    "新型コロナ受診相談窓口": "あたらしい コロナを びょういんで みてもらうか について おはなし する ところ",
    "帰国者・接触者 電話相談センター": "にほんにかえってきたひと、あったひと でんわでおはなしするところ",
    "24時間対応": "まいにち いつでも あいています。",
    "平日（日中）": "へいじつ（ひるま） （げつようびからきんようびのひるま）",
    "各保健所の電話番号は福祉保健局HPへ": "ほけんじょ のでんわばんごうは ふくししょけんきょくの ウェブサイト をみてください",
    "平日（夜間）": "へいじつ（よる）",
    "午後5時から翌朝午前9時": "ごご５じからごぜん９じまで",
    "土日祝 終日": "やすみのひ いちにちじゅう",
    "専門的な助言が必要な場合": "コロナをよくしっているひとから くわしい はなし を ききたい とき"
  }
}
</i18n>

<style module lang="scss">
.Advisory {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: $gray-2;
  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    padding: 30px 20px 20px 20px;
    margin-bottom: 10px;
    text-align: center;
  }
  &Contents {
    font-weight: bold;
    &:not(:first-child) {
      border-top: 0.5px solid $gray-4;
      padding-top: 12px;
    }
    &:not(:last-child) {
      padding-bottom: 16px;
    }
    &Title {
      font-size: 26px;
      line-height: 28px;
    }
    &Title2 {
      font-size: 18px;
    }
    &SubTitle {
      font-size: 18px;
    }
    &ColsSentense {
      line-height: 18px;
    }
  }
  &BlockCentering {
    display: flex;
    justify-content: center;
  }
  &Link {
    line-height: 22px;
    text-align: left;
    a {
      color: rgba(0, 0, 0, 0.87);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &TelephoneArea {
    display: inline-flex;
  }
  &Telephone {
    font-size: 27px;
    font-weight: bold;
    margin-left: 4px;
  }
  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 20px auto 40px;
  }
  &WhiteBox {
    background-color: $white;
    width: 160px;
    padding: 10px;
    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
  &BlackBox {
    background-color: $gray-2;
    width: 200px;
    height: 200px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    &Sentense {
      color: $white;
      font-size: 20px;
      line-height: 26px;
    }
  }
}
.Rotate {
  transform: rotate(-90deg);
}
.Mt4 {
  margin-top: 4px;
}
.Mt16 {
  margin-top: 16px;
}
.Mt20 {
  margin-top: 20px;
}
</style>
