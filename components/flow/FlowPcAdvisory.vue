<template>
  <div :class="$style.Advisory">
    <div :class="$style.AdvisoryContainer">
      <div :class="$style.AdvisoryContents">
        <div>
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('帰国者・接触者')
          }}</span>
          <br />
          <span :class="$style.AdvisoryContentsTitle">{{
            $t('相談センター')
          }}</span>
        </div>
        <div :class="[$style.AdvisoryContentsHealthCenter, 'mt-4']">
          {{ $t('各保健所') }}
        </div>
        <div :class="[$style.AdvisoryContentsColsSentense, 'mt-4']">
          <p class="mt-4 mb-3">{{ $t('各地域の保健所の電話番号は') }}</p>
          <p class="mb-3">{{ $t('青森県庁HPまたは、') }}</p>
          <p class="mb-3">{{ $t('下記表をご参照ください。') }}</p>
        </div>
        <a
          href="https://www.pref.aomori.lg.jp/index.html"
          target="_blank"
          rel="noopener"
          class="mt-4"
        >
          <span>{{ $t('青森県庁HPはこちらから') }}</span>
        </a>
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    height: 100%;

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

    &HealthCenter {
      font-size: 22px;
      line-height: 24px;
    }

    &ColsSentense {
      line-height: 18px;

      p {
        margin-bottom: 0;
      }
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
    width: 160px;
    padding: 10px;

    &Sentense {
      color: $green-1;
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
