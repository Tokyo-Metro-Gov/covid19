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

<i18n src="./FlowPcAdvisory.i18n.json"></i18n>

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
