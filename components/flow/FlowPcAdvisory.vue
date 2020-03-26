<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('新型コロナ受診相談窓口（日本語のみ）')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          {{ $t('帰国者・接触者 電話相談センター') }}
        </div>
        <div>
          <div :class="[$style.AdvisoryBoxContainer, $style.AdvisoryWhiteBox]">
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('24時間対応') }}
            </span>
          </div>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <div class="py-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（日中）') }}
          </div>
          <div
            :class="[
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
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
        <div class="pt-8">
          <div :class="$style.AdvisoryContentsTitle2">
            {{ $t('平日（夜間）') }}
          </div>
          <span>{{ $t('午後5時から翌朝午前9時') }}</span>
        </div>
        <div class="mt-1">
          <span :class="$style.AdvisoryContentsSubTitle">
            {{ $t('土日祝 終日') }}
          </span>
        </div>
        <div
          :class="[
            $style.AdvisoryTelephoneArea,
            $style.AdvisoryBlockCentering,
            'mt-1'
          ]"
        >
          <a :class="$style.AdvisoryTelephone" href="tel:0353204592">
            <img
              :class="$style.AdvisoryTelephoneIcon"
              src="/flow/phone-24px.svg"
              aria-hidden="true"
              :alt="$t('電話番号')"
            />
            03-5320-4592
          </a>
        </div>
        <div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="pt-8">
          <span>{{ $t('ひまわり') }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

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
    height: 100%;
    padding: 30px 20px 20px 20px;
    margin-bottom: 10px;
    text-align: center;
  }

  &Contents {
    font-weight: bold;

    &:not(:first-child) {
      border-top: 0.5px solid $gray-4;
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
    display: flex;
    align-items: center;
    font-size: 27px;
    font-weight: bold;

    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: inherit;
      text-decoration: none;
      outline: 1px dotted $gray-3;
    }

    &Icon {
      display: inline-block;
      margin-right: 5px;
      width: 26px;
      height: 26px;
    }
  }

  &BoxContainer {
    border-radius: 4px;
    text-align: center;
    padding: 20px 10px;
    margin: 24px auto;
  }

  &WhiteBox {
    background-color: $white;
    max-width: 160px;
    padding: 10px;

    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
