<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <img src="/flow/accessibility-24px.svg" />
        <p>一般の方</p>
      </div>
      <div>
        <p>
          <span :class="$style.FlowRowEmphasis">
            <span :class="$style.FlowRowEmphasisDay">4</span>
            日以上
          </span>
          続いている
        </p>
      </div>
    </div>
    <div :class="[$style.FlowRow, $style.FlowRowRowCheck]">
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          風邪
          <span>のような症状</span>
        </p>
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          <span>発熱</span>
          37.5℃
          <span>以上</span>
        </p>
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>強いだるさ</p>
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>息苦しさ</p>
      </div>
    </div>
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <div :class="$style.FlowRowRowThreeCareTargetList">
          <p>
            <img src="/flow/directions_walk-24px.svg" />ご高齢な方<br />
            <img src="/flow/accessible-24px.svg" />基礎疾患のある方<br />
            <img src="/flow/pregnant_woman-24px.svg" />妊娠中の方<br />
          </p>
        </div>
      </div>
      <div>
        <p>
          <span :class="$style.FlowRowEmphasis">
            <span :class="$style.FlowRowEmphasisDay">2</span>
            日程度
          </span>
          続いている
        </p>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Flow {
  display: flex;
  flex-direction: row;
  padding: 20px 20px !important;
  @include card-container();
  position: relative;
  color: $gray-2;
  &Row {
    flex: 1 0 37%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &RowCheck {
      flex-basis: 26%;
    }
    &RowThree {
      flex: 3;
      margin-top: 20px;
      &CareTargetList {
        margin: 16px auto;
        display: block;
        p {
          text-align: left;
          display: inline-block;
        }
      }
    }
    &Condition {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      position: relative;
      border: 2px solid $green-1 !important;
      border-radius: 2px;
      p {
        margin: auto;
        text-align: center;
        display: inline-block;
        font-weight: bold;
        font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        @include largerThan($large) {
          font-size: 20px;
        }
        span {
          font-size: 15px;
        }
      }
      i {
        position: absolute;
        top: -12px;
        left: -12px;
        background-color: $white;
      }
    }
    &Emphasis {
      font-size: 24px;
      font-weight: bold;
      border-bottom: solid 3px $green-1;
      &Day {
        font-size: 41px;
      }
    }
  }
}
</style>
