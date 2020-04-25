<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('感染が疑われる方の電話相談窓口')
          }}</span>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <!-- <div :class="[$style.AdvisoryContentsTitle2, 'mt-4']"> -->
        <div :class="[$style.AdvisoryContentsTitle2]">
          {{ $t('コールセンター') }}
        </div>

        <div
          :class="[
            $style.AdvisoryWhiteBox,
            $style.AdvisoryBoxContainer,
            $style.AdvisoryLink,
            $style.AdvisoryBlockCentering,
            'mt-4'
          ]"
        >
            <img
              :class="$style.AdvisoryTelephoneIcon"
              src="/flow/phone-24px.svg"
              aria-hidden="true"
            />
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('0570-052-092') }}
            </span>
        </div>

        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          {{ $t('24時間（土日、祝日を含む)') }}
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <!-- <div :class="[$style.AdvisoryContentsTitle2, 'mt-4']"> -->
        <div :class="[$style.AdvisoryContentsTitle2]">
          {{ $t('日本語以外での相談を希望される方') }}
        </div>

        <div
          :class="[
            $style.AdvisoryWhiteBox,
            $style.AdvisoryBoxContainer,
            $style.AdvisoryLink,
            $style.AdvisoryBlockCentering,
            'mt-4'
          ]"
        >
        <a
          href="http://tia21.or.jp/hello.html"
          target="_blank"
          rel="noopener"
        >
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('とちぎ外国人相談サポートセンター') }}
            </span>
        </a>
        </div>
      </div>

      <div :class="$style.AdvisoryContents">
        <!-- <div :class="[$style.AdvisoryContentsTitle2, 'mt-4']"> -->
        <div :class="[$style.AdvisoryContentsTitle2]">
          {{ $t('聴覚等に障害のある方') }}
        </div>

        <div
          :class="[
            $style.AdvisoryWhiteBox,
            $style.AdvisoryBoxContainer,
            $style.AdvisoryLink,
            $style.AdvisoryBlockCentering,
            'mt-4'
          ]"
        >
        <a
          href="http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/shingatakoronavirussoudannmadoguti.html#tyoukaku"
          target="_blank"
          rel="noopener"
        >
            <span :class="$style.AdvisoryWhiteBoxSentense">
              {{ $t('聴覚障害等のある方の相談窓口') }}
            </span>
        </a>
        </div>
      </div>


      <div :class="$style.AdvisoryContents">
        <!-- <div class="py-8"> -->
        <div>
          <div
            :class="[
              $style.AdvisoryWhiteBox,
              $style.AdvisoryBoxContainer,
              $style.AdvisoryLink,
              $style.AdvisoryBlockCentering,
              'mt-4'
            ]"
          >
            <a
              href="http://www.pref.tochigi.lg.jp/e04/welfare/hoken-eisei/kansen/hp/shingatakoronavirussoudannmadoguti.html#utagai"
              target="_blank"
              rel="noopener"
            >
              <img
                :class="$style.AdvisoryTelephoneIcon"
                src="/flow/phone-24px.svg"
                aria-hidden="true"
              />
              <span :class="$style.AdvisoryWhiteBoxSentense">
                {{ $t('管轄ごとの連絡先はこちら') }}
              </span>
              <v-icon size="18">
                mdi-open-in-new
              </v-icon>
            </a>
          </div>
          <!-- <span>{{ $t('平日夜間、休日については折り返し等の対応') }}</span> -->
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
    padding: 90px 20px 20px 20px;
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
    padding: 10px;
    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
