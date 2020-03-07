<template>
  <section :class="$style.Flow">
    <h2 :class="$style.FlowHeading">
      <span>発症前<span>2</span>週間以内の</span>
      <span>出来ごとと症状</span>
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
  padding: 10px 10px 0;
  border: 1px solid $gray-4;
  border-radius: 3px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  background-color: $white;
  &Heading {
    text-align: center;
  }
  &Inner {
    position: relative;
    display: flex;
    flex-flow: row;
    border-top: 1px solid $gray-4;
  }
  &Item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 50%;
    padding-top: 20px;
    padding-bottom: 80px;
    &:not(:first-child) {
      border-left: 1px solid $gray-4;
    }
  }
  &Title {
    color: $green-1;
    font-size: 16px;
    font-weight: bold;
  }
  &Person {
    font-weight: bold;
    font-size: 22px;
  }
  &Line {
    border-bottom: 3px solid $green-1;
  }
  &Condition {
    position: absolute;
    bottom: 20px;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100% - 40px);
    text-align: center;
  }
  &Symptom {
    display: block;
    width: 150px;
    padding: 8px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-weight: bold;
    font-style: normal;
  }
  &Text {
    width: 80px;
  }
}
</style>
