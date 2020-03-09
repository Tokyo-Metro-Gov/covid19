<template>
  <div :class="$style.Elder">
    <ul :class="['mb-1', $style.Targets]">
      <li :class="['mb-3', $style.TargetsItem]">
        <img
          src="/flow/directions_walk-24px.svg"
          aria-hidden="true"
        />ご高齢な方
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <img
          src="/flow/accessible-24px.svg"
          aria-hidden="true"
        />基礎疾患のある方
      </li>
      <li :class="['mb-3', $style.TargetsItem]">
        <img src="/flow/pregnant_woman-24px.svg" aria-hidden="true" />妊娠中の方
      </li>
    </ul>

    <ul :class="$style.Conditions">
      <li :class="$style.ConditionsItem">
        <div>風邪<small>のような症状</small></div>
      </li>
      <li :class="[$style.ConditionsItem, $style.ConditionsItemFever]">
        <div>
          <small>発熱</small><br />
          37.5℃以上
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
      <span><strong>2</strong>日程度</span>続いている
    </p>

    <a v-scroll-to="'#consult'" :class="['pa-5', $style.Link]" href="#consult">
      新型コロナ受診相談窓口へ
    </a>
  </div>
</template>
<style module lang="scss">
.Elder {
  font-weight: bold;
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
    $imgSize: 2rem;

    @include font-size(16);
    font-weight: bold;
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
  justify-content: space-between;
  padding: 0 4px !important;

  &Item {
    @include font-size(18);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 47.5%;
    height: 3.5rem;
    margin: 4% 0;
    border: 2px solid $green-1 !important;
    border-radius: 4px;
    line-height: 1;

    & small {
      @include font-size(12);
    }

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

    &Fever {
      padding-top: 2px;
    }
  }
}

.Lasting {
  @include font-size(16);
  color: $gray-2;
  font-weight: bold;
  span {
    border-bottom: 4px solid $green-1;
    @include font-size(20);
    font-weight: bold;
    margin-right: 0.25rem;
    strong {
      @include font-size(32);
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
