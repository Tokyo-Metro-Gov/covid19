<template>
  <div :class="$style.SpPast">
    <h3>
      発症前<strong>２</strong>週間以内
      <span :class="$style.small">&nbsp;の出来ごとと症状</span>
    </h3>
    <p>
      <span :class="$style.small">「新型コロナウイルス感染者」と</span><br />
      <span :class="$style.underline">
        濃厚接触
      </span>
      をした方<br />
    </p>
    <div :class="[$style.flexContainer]">
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
    <p :class="$style.hr">
      <span :class="$style.small">流行地域への渡航・居住歴がある方</span><br />
      <span :class="$style.underline">
        ご本人
      </span>
      か
      <span :class="$style.underline">
        濃厚接触
      </span>
      をした方
    </p>
    <div :class="$style.flexContainer">
      <div :class="$style.item">
        <div>
          呼吸器症状
        </div>
      </div>
      <div :class="$style.item">
        かつ
      </div>
      <div :class="$style.item">
        <div :class="$style.block">
          <span :class="$style.small">発熱</span>
          <div>
            37.5℃以上
          </div>
        </div>
      </div>
    </div>
    <a v-scroll-to="'#consult'" href="#consult" :class="$style.counter">
      新型コロナ受診相談窓口へ
    </a>
  </div>
</template>

<style module lang="scss">
.SpPast {
  color: $gray-2;
  h3 {
    text-align: center;
    margin-bottom: 0.5em;
    font-size: 5vw;
    strong {
      font-size: 9vw;
    }
    .small {
      font-size: 2vw;
    }
  }
  p {
    text-align: center;
    font-weight: bold;
    font-size: 120%;
    .small {
      color: green;
      font-size: 70%;
    }
    .underline {
      display: inline-block;
      border-bottom: $green-1 4px solid;
    }
  }
  .flexContainer {
    display: flex;
    font-weight: bold;
    font-size: 90%;
    margin-top: 0.5em;
    .item {
      text-align: center;
      &:nth-child(1),
      &:nth-child(3) {
        width: 35%;
        > div {
          height: 50px;
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
            padding-top: 6px;
          }
        }
      }
      &:nth-child(2) {
        width: 25%;
        // 上下中央寄せ
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .small {
        font-size: 50%;
      }
    }
  }
  .hr {
    &::before {
      border-bottom: 1px $gray-4 solid;
      margin-top: 1.2em;
      margin-bottom: 1.2em;
      height: 1px;
      width: 100%;
      display: block;
      content: '';
      display: block;
    }
  }
  .counter {
    margin-top: 17px;
    background-color: #ffe200;
    padding: 20px;
    border-radius: 5px;
    box-shadow: -1px 2px 5px $gray-3;
    display: block;
    position: relative;
    text-decoration: none;
    color: $gray-2;
    font-weight: bold;
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
