<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle" v-html="$t('Advisory')" />
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, $style.mt16]">
          <span v-html="$t('Advisory Center')" />
        </div>
        <div :class="[$style.AdvisoryBlockCentering, $style.mt20]">
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span
              :class="$style.AdvisoryWhiteBoxSentense"
              v-html="$t('Support')"
            />
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div
            :class="$style.AdvisoryContentsTitle2"
            v-html="$t('Weekday Daytime')"
          />
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              $style.mt16
            ]"
          >
            <a
              href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
              target="_blank"
              rel="noopener"
            >
              <span v-html="$t('Bureau HP')" />
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div
            :class="$style.AdvisoryContentsTitle2"
            v-html="$t('Weekday Night')"
          />
          <span v-html="$t('Support Hours')" />
        </div>
        <div :class="$style.mt4">
          <span
            :class="$style.AdvisoryContentsSubTitle"
            v-html="$t('Holiday All Day')"
          />
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering,
            $style.mt4
          ]"
        >
          <img src="/flow/phone-24px.svg" />
          <span :class="$style.AdvisoryTelephone">03-5320-4592</span>
        </div>
      </div>
    </div>

    <div :class="[$style.AdvisoryBlockCentering, $style.mt8]">
      <img src="/flow/flow_arrow.svg" :class="$style.rotate" />
    </div>

    <div :class="[$style.AdvisoryBlockCentering, $style.mt8]">
      <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryBlackBox]">
        <span
          :class="$style.AdvisoryBlackBoxSentense"
          v-html="$t('Necessary')"
        />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "Advisory": "新型コロナ<br />受診相談窓口",
    "Advisory Center": "帰国者・接触者<br />電話相談センター",
    "Support": "24時間対応",
    "Weekday Daytime": "平日（日中）",
    "Bureau HP": "各保健所の電話番号は<br />福祉保健局ＨＰへ",
    "Weekday Night": "平日（夜間）",
    "Support Hours": "午後5時から翌朝午前9時",
    "Holiday All Day": "土日祝 終日",
    "Necessary": "専門的な助言が<br />必要な場合"
  }
}
</i18n>

<style module lang="scss">
.Advisory {
  min-width: 248px;
  min-height: 642px;
  font-family: HiraginoSans-W6, Hiragino Sans;
  &Container {
    background-color: $gray-5;
    border-radius: 4px;
    padding: 30px 20px 20px 20px;
    text-align: center;
  }
  &Contents {
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
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin-left: 4px;
  }
  &BoxContainer {
    border-radius: 4px;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  &WhiteBox {
    background-color: $white;
    width: 160px;
    height: 40px;
    &Sentense {
      color: $green-1;
      font-size: 18px;
    }
  }
  &BlackBox {
    background-color: $gray-2;
    width: 200px;
    height: 88px;
    &Sentense {
      color: $white;
      font-size: 20px;
      text-align: center;
      line-height: 26px;
    }
  }
  .mt4 {
    margin-top: 4px !important; // MEMO: .v-application .mt-4の!importantより優先させる
  }
}
.rotate {
  transform: rotate(-90deg);
}
.mt4 {
  margin-top: 4px;
}
.mt8 {
  margin-top: 8px;
}
.mt16 {
  margin-top: 16px;
}
.mt20 {
  margin-top: 20px;
}
</style>

<script></script>
