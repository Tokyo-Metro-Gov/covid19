<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">
            {{ $t('COVID-19') }}<br />{{ $t('Advisory Support') }}
          </span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, $style.Mt16]">
          {{ $t('Advisory Target') }}<br />{{ $t('Advisory Center') }}
        </div>
        <div :class="[$style.AdvisoryBlockCentering, $style.Mt20]">
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">{{
              $t('Support Range')
            }}</span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div>
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('Weekday Daytime') }}
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
              {{ $t('Bureau TEL') }}<br />{{ $t('Bureau HP') }}
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
            {{ $t('Weekday Night') }}
          </div>
          <span>{{ $t('Support Hours') }}</span>
        </div>
        <div :class="$style.Mt4">
          <span :class="$style.AdvisoryContentsSubTitle">
            {{ $t('Holiday All Day') }}
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

    <div :class="[$style.AdvisoryBlockCentering, $style.Mt8]">
      <img src="/flow/flow_arrow.svg" :class="$style.Rotate" />
    </div>

    <div :class="[$style.AdvisoryBlockCentering, $style.Mt8]">
      <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryBlackBox]">
        <span :class="$style.AdvisoryBlackBoxSentense">
          {{ $t('Necessary Help') }}<br />{{ $t('Necessary Then') }}
        </span>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "COVID-19": "新型コロナ",
    "Advisory Support": "受診相談窓口",
    "Advisory Target": "帰国者・接触者",
    "Advisory Center": "電話相談センター",
    "Support Range": "24時間対応",
    "Weekday Daytime": "平日（日中）",
    "Bureau TEL": "各保健所の電話番号は",
    "Bureau HP": "福祉保健局ＨＰへ",
    "Weekday Night": "平日（夜間）",
    "Support Hours": "午後5時から翌朝午前9時",
    "Holiday All Day": "土日祝 終日",
    "Necessary Help": "専門的な助言が",
    "Necessary Then": "必要な場合"
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
}
.Rotate {
  transform: rotate(-90deg);
}
.Mt4 {
  margin-top: 4px;
}
.Mt8 {
  margin-top: 8px;
}
.Mt16 {
  margin-top: 16px;
}
.Mt20 {
  margin-top: 20px;
}
</style>

<script>
export default {}
</script>
