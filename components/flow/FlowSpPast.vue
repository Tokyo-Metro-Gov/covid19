<template>
  <div :class="$style.SpPast">
    <h4 :class="['mb-2', $style.Heading]">
      発症前<strong>2</strong>週間以内<!--
   --><span :class="$style.small">の出来ごとと症状</span>
    </h4>
    <p class="mb-5">
      <span :class="$style.small">「新型コロナウイルス感染者」と</span><br />
      <span :class="$style.underline">濃厚接触</span>をした方<br />
    </p>
    <div :class="['mb-4', $style.flexContainer]">
      <div :class="$style.item">
        <div>
          発熱
        </div>
      </div>
      <div :class="$style.item">
        または
      </div>
      <div :class="$style.item">
        <div>
          呼吸器症状
        </div>
      </div>
    </div>
    <div :class="['mb-5', $style.hr]" />
    <p class="mb-5">
      <span :class="$style.small">流行地域への渡航・居住歴がある方</span><br />
      <span :class="$style.underline">ご本人</span>か<!--
   --><span :class="$style.underline">濃厚接触</span>をした方
    </p>
    <div :class="['mb-4', $style.flexContainer]">
      <div :class="$style.item">
        <div>
          呼吸器症状
        </div>
      </div>
      <div :class="$style.item">
        かつ
      </div>
      <div :class="$style.item">
        <div :class="['pa-2', $style.block]">
          <span :class="$style.small">発熱</span>
          <div>
            37.5℃以上
          </div>
        </div>
      </div>
    </div>
    <a
      v-scroll-to="'#consult'"
      href="#consult"
      :class="['pa-5', $style.counter]"
    >
      新型コロナ受診相談窓口へ
    </a>
  </div>
</template>

<style module lang="scss">
.SpPast {
  color: $gray-2;
  .Heading {
    @include font-size(20);
    text-align: center;
    margin-bottom: 0.5em;
    strong {
      @include font-size(32);
    }
    .small {
      @include font-size(16);
    }
  }
  p {
    @include font-size(20);
    text-align: center;
    font-weight: bold;
    .small {
      @include font-size(16);
      color: $green-1;
    }
    .underline {
      display: inline-block;
      border-bottom: $green-1 4px solid;
    }
  }
  .flexContainer {
    display: flex;
    font-weight: bold;
    @include font-size(18);
    justify-content: space-between;
    .item {
      @include font-size(18);
      line-height: 1rem;
      text-align: center;
      &:nth-child(1),
      &:nth-child(3) {
        width: 7rem;
        > div {
          height: 3.5rem;
          border: $green-1 2px solid;
          border-radius: 5px;

          // 上下中央寄せ
          display: flex;
          justify-content: center;
          align-items: center;

          // before要素の親要素
          position: relative;
          &::before {
            width: 24px;
            height: 24px;
            content: '';
            background-color: $white;
            background-image: url(/flow/check_circle-24px.svg);
            position: absolute;
            top: -12px;
            left: 0;
            right: 0;
            margin: auto;
          }
          &.block {
            display: block;
          }
        }
      }
      &:nth-child(2) {
        // 上下中央寄せ
        display: flex;
        align-items: center;
      }
      .small {
        @include font-size(12);
      }
    }
  }
  .hr {
    border-bottom: 1px $gray-4 solid;
    height: 1px;
    width: 100%;
    display: block;
  }
  .counter {
    background-color: #ffe200;
    border-radius: 5px;
    box-shadow: -1px 2px 5px $gray-3;
    display: block;
    position: relative;
    text-decoration: none;
    color: $gray-2;
    font-weight: bold;
    @include font-size(18);
    &::after {
      z-index: 99;
      width: 45px;
      height: 45px;
      background-image: url(/flow/arrow_forward-24px.svg);
      background-position: right center;
      background-repeat: no-repeat;
      transform: rotateZ(90deg);
      content: '';
      display: block;
      position: absolute;
      right: 8px;
      top: 4px;
    }
  }
}
</style>
