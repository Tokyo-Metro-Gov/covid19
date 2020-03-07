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
          <em :class="$style.FlowLine">ご本人</em>
          か
          <em :class="$style.FlowLine">濃厚接触</em>
          をした方
        </span>
      </div>
      <div :class="$style.FlowCondition">
        <em :class="$style.FlowSymptom">発熱</em>
        <span :class="$style.FlowText">または</span>
        <em :class="$style.FlowSymptom">呼吸器症状</em>
        <span :class="$style.FlowText">かつ</span>
        <em :class="$style.FlowSymptom">
          発熱
          <span>37.5℃</span>
          以上
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
    text-align: center;
    font-size: 25px;
  }
  &Num {
    display: inline-block;
    padding: 0 10px;
    font-size: 42px;
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
    padding: 20px;
  }
  &Title {
    margin-bottom: 8px;
    color: $green-1;
    font-size: 16px;
    font-weight: bold;
  }
  &Person {
    font-weight: bold;
    font-size: 23px;
    text-align: center;
  }
  &Line {
    border-bottom: 4px solid $green-1;
    font-style: inherit;
  }
  &Condition {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
  }
  &Symptom {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-size: 21px;
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
  }
  &Text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
  }
  &SText {
    font-size: 16px;
  }
}
</style>
