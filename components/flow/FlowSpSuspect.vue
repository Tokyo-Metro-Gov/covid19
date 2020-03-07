<template>
  <div :class="$style.Suspect">
    <div :class="$style.Targets">
      <div :class="$style.TargetsItem">
        <img
          src="/flow/sentiment_very_dissatisfied-24px.svg"
          alt="不安に思う方"
        />
        <div>
          不安に思う方
        </div>
      </div>
    </div>

    <ul :class="$style.Conditions">
      <li :class="$style.ConditionsItem">
        微熱
      </li>
      <li :class="$style.ConditionsItem">
        軽い咳
      </li>
      <li :class="[$style.ConditionsItem, $style.ConditionsItemLarge]">
        感染の不安
      </li>
    </ul>

    <div :class="$style.CallCenter">
      <div :class="$style.CallCenterName">
        新型コロナコールセンター
      </div>
      <div :class="$style.CallCenterTime">
        午前９時から午後９時（土日祝含む）
      </div>
    </div>

    <div :class="$style.Phone">
      <div :class="$style.PhoneItem">
        <img src="/flow/phone-24px.svg" alt="phone-24px" />
        <a href="tel:0570550571">
          0570-550571
        </a>
      </div>
    </div>

    <a :class="$style.Link" href="#consult">
      専門的な助言が必要な場合
    </a>
  </div>
</template>

<style module lang="scss">
.Suspect {
  @include card-container();
  padding: 30px 20px;
  margin-bottom: 20px;
  font-weight: 600;
  color: $gray-2;
  text-align: center;
}
.Targets {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 4px !important;
  list-style: none;
  &Item {
    $imgSize: 40px;
    @include font-size(14);
    margin-bottom: 14px;
    font-weight: 700;
    line-height: $imgSize;
    & img {
      margin-right: 4px;
      width: $imgSize;
    }
  }
}
.Conditions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 4px !important;
  &Item {
    @include font-size(14);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 26%;
    height: 46px;
    margin: 4px 0 13px;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;
    &::before {
      $imgSize: 20px;
      content: '';
      position: absolute;
      top: -13px;
      right: 0;
      left: 0;
      margin: 0 auto;
      width: $imgSize;
      height: $imgSize;
      background: #fff url(/flow/check_circle-24px.svg) no-repeat center;
      background-size: $imgSize;
    }
    &Large {
      flex-basis: 36%;
    }
  }
}
.CallCenter {
  &Name {
    margin-top: 16px;
    @include font-size(18);
  }
  &Time {
    margin-bottom: 16px;
    @include font-size(14);
  }
}
.Phone {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 4px !important;
  list-style: none;
  &Item {
    $imgSize: 36px;
    @include font-size(28);
    margin-bottom: 14px;
    font-weight: 700;
    line-height: $imgSize;
    & img {
      margin-right: 2px;
      width: $imgSize;
    }
  }
}
.Link {
  @include font-size(14);
  position: relative;
  display: block;
  margin: 23px 4px 5px;
  padding: 16px 20px;
  border-radius: 4px;
  background-color: #ffe200;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  color: inherit !important;
  text-align: left;
  text-decoration: none;
  &::after {
    $imgSize: 35px;
    content: '';
    position: absolute;
    top: 0;
    right: 12px;
    bottom: 0;
    margin: auto 0;
    width: $imgSize;
    height: $imgSize;
    background: url(/flow/arrow_forward-24px.svg) no-repeat;
    background-size: $imgSize;
    transform: rotate(90deg);
  }
}
</style>
