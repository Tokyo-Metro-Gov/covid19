<template>
  <div :class="$style.Suspect">
    <div :class="['mb-5', $style.Targets]">
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

    <ul :class="['mb-5', $style.Conditions]">
      <li :class="['py-4', $style.ConditionsItem]">
        微熱
      </li>
      <li :class="['py-4', $style.ConditionsItem]">
        軽い咳
      </li>
      <li :class="['py-4', $style.ConditionsItem, $style.ConditionsItemLarge]">
        感染の不安
      </li>
    </ul>

    <div :class="['mb-3', $style.CallCenter]">
      <div :class="$style.CallCenterName">
        新型コロナコールセンター
      </div>
      <div :class="$style.CallCenterTime">
        午前9時から午後9時（土日祝含む）
      </div>
    </div>

    <div :class="['mb-4', $style.Phone]">
      <div :class="$style.PhoneItem">
        <img class="mr-n1" src="/flow/phone-24px.svg" alt="tel" />
        <a href="tel:0570550571">
          0570-550571
        </a>
      </div>
    </div>

    <a :class="['pa-5', $style.Link]" href="#consult">
      専門的な助言が必要な場合
    </a>
  </div>
</template>

<style module lang="scss">
.Suspect {
  font-weight: bold;
  color: $gray-2;
  text-align: center;
}
.Targets {
  &Item {
    $imgSize: 2rem;
    @include font-size(16);
    font-weight: bold;
    line-height: $imgSize;
    & img {
      width: $imgSize;
    }
  }
}
.Conditions {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 0 !important; // FIXME: ulを使用している関係で、paddingを打ち消す必要がある
  &Item {
    @include font-size(18);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;
    flex-basis: 28%;
    &::before {
      $imgSize: 24px;
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
    @include font-size(22);
  }
  &Time {
    @include font-size(16);
  }
}
.Phone {
  &Item {
    $imgSize: 2rem;
    @include font-size(24);
    font-weight: bold;
    line-height: $imgSize;
    & img {
      width: $imgSize;
    }
    a {
      color: $gray-2;
      text-decoration: none;
    }
  }
}
.Link {
  @include font-size(18);
  position: relative;
  display: block;
  border-radius: 4px;
  background-color: #ffe200;
  box-shadow: -1px 2px 5px $gray-3;
  color: $gray-2 !important;
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
