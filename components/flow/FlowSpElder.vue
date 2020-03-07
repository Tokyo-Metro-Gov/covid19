<template>
  <div :class="$style.Elder">
    <ul :class="$style.Targets">
      <li :class="$style.TargetsItem">
        <img src="/flow/directions_walk-24px.svg" />ご高齢な方
      </li>
      <li :class="$style.TargetsItem">
        <img src="/flow/accessible-24px.svg" />基礎疾患のある方
      </li>
      <li :class="$style.TargetsItem">
        <img src="/flow/pregnant_woman-24px.svg" />妊娠中の方
      </li>
    </ul>

    <ul :class="$style.Conditions">
      <li :class="$style.ConditionsItem">
        <div>風邪<small>のような症状</small></div>
      </li>
      <li :class="[$style.ConditionsItem, $style.ConditionsItemFever]">
        <div>
          <small>発熱</small><br />
          <span :class="$style.ConditionsItemFeverNum">37.5</span>℃ 以上
        </div>
      </li>
      <li :class="$style.ConditionsItem">
        <div>強いだるさ</div>
      </li>
      <li :class="$style.ConditionsItem">
        <div>息苦しさ</div>
      </li>
    </ul>

    <p :class="$style.Lasting">
      <span :class="$style.LastingDays"><strong>2</strong>日程度</span>
      続いている
    </p>

    <a :class="$style.Link" href="#consult">新型コロナ受診相談窓口へ</a>
  </div>
</template>
<style module lang="scss">
.Elder {
  // Flow-Card-Parts
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
    $imgSize: 24px;

    @include font-size(12);
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
    flex-basis: 46.5%;
    height: 46px;
    margin: 4px 0 13px;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;

    & small {
      @include font-size(10);
    }

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

    &Fever {
      padding-top: 2px;

      &Num {
        font-size: 115%;
      }
    }
  }
}

.Lasting {
  @include font-size(12);
  margin-top: -1px;
  padding-left: 14px;
  line-height: 0.9;

  &Days {
    display: inline-block;
    padding: 0 4px;
    border-bottom: 3px solid $green-1;
    font-size: 20px;
    font-weight: 700;

    & > strong {
      font-size: 40px;
      font-weight: 600;
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
