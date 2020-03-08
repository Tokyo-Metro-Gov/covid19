<template>
  <section :class="$style.Flow">
    <h2 :class="$style.FlowHeading">
      <span>発症前<span :class="$style.FlowNum">2</span>週間以内</span>
      <span :class="$style.FlowSText">の出来ごとと症状</span>
    </h2>
    <div :class="$style.FlowInner">
      <div :class="$style.FlowItem">
        <strong :class="$style.FlowTitle">
          「新型コロナウイルス感染者」と
        </strong>
        <span :class="$style.FlowPerson">
          <em :class="$style.FlowLine">濃厚接触</em>をした方
        </span>
      </div>
      <div :class="$style.FlowItem">
        <strong :class="$style.FlowTitle">
          流行地域への渡航・居住歴がある方
        </strong>
        <span :class="$style.FlowPerson">
          <em :class="$style.FlowLine">ご本人</em>か<em :class="$style.FlowLine"
            >濃厚接触</em
          >をした方
        </span>
      </div>
      <div :class="$style.FlowCondition">
        <em :class="$style.FlowSymptom">発熱</em>
        <span :class="$style.FlowText">または</span>
        <em :class="$style.FlowSymptom">呼吸器症状</em>
        <span :class="$style.FlowText">かつ</span>
        <em :class="$style.FlowSymptom">
          <span :class="$style.FlowTextSm">発熱</span>
          <span :class="$style.FlowTemperature">37.5℃</span>
          <span :class="$style.FlowTextSm">以上</span>
        </em>
      </div>
    </div>
  </section>
</template>

<style module lang="scss">
.Flow {
  position: relative;
  padding-bottom: 20px;
  border: 1px solid $gray-4;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  background-color: $white;
  color: $gray-2;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: $gray-4;
  }
  &Heading {
    position: relative;
    background-color: $white;
    margin: 0;
    padding: 5px;
    text-align: center;
    font-size: calc(1.25rem + ((1vw - 7.68px) * 0.744));
    @include largerThan($large) {
      font-size: 25px;
    }
  }
  &Num {
    display: inline-block;
    padding: 0 5px;
    font-size: calc(1.875rem + ((1vw - 7.68px) * 1.7857));
    @include largerThan($large) {
      font-size: 42px;
      padding: 0 10px;
    }
  }
  &Inner {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    border-top: 1px solid $gray-4;
  }
  &Item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 50%;
    padding: 10px 5px;
    @include largerThan($large) {
      padding: 20px;
    }
  }
  &Title {
    margin-bottom: 4px;
    color: $green-1;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 0.4464));
    font-weight: bold;
    @include largerThan($large) {
      font-size: 15px;
    }
  }
  &Person {
    font-weight: bold;
    font-size: calc(0.6875rem + ((1vw - 7.68px) * 0.5952));
    line-height: 1.8;
    text-align: center;
    @include largerThan($large) {
      font-size: 23px;
    }
  }
  &Line {
    border-bottom: 4px solid $green-1;
    font-style: inherit;
  }
  &Condition {
    display: flex;
    width: 100%;
    padding: 0 15px;
    margin-top: 15px;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    @include largerThan($large) {
      padding: 0 20px;
    }
  }
  &Symptom {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 10px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
    font-weight: bold;
    font-style: normal;
    &::before {
      $icon-size: 27px;
      content: url('/flow/check_circle-24px.svg');
      position: absolute;
      top: $icon-size / 2 * -1;
      left: $icon-size / 2 * -1;
      width: $icon-size;
      height: $icon-size;
      background-color: $white;
      z-index: 1;
    }
    @include largerThan($large) {
      max-width: 190px;
      font-size: 20px;
    }
  }
  &Text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 12.5%;
    padding: 10px;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 1.4881));
    white-space: nowrap;
    @include largerThan($large) {
      max-width: 190px;
      font-size: 21px;
    }
  }
  &SText {
    font-size: 16px;
  }
  &Temperature {
    font-size: calc(1rem + ((1vw - 7.68px) * 0.5952));
    padding-left: 2px;
    padding-right: 2px;
    @include largerThan($large) {
      font-size: 20px;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  &TextSm {
    font-size: 14px;
  }
}
</style>
