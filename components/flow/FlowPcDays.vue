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
            <span :class="$style.FlowRowEmphasisDay">４</span>
            日以上
          </span>
          続いている
        </p>
      </div>
    </div>
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          <span>風邪 </span>
          のような症状
        </p>
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          発熱
          <span> 37.5℃ </span>
          以上
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
            <span :class="$style.FlowRowEmphasisDay">２</span>
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
  height: 256px;
  width: 743px;
  padding: 20px 20px !important;
  border: 2px solid $gray-4;
  border-radius: 4px;
  box-shadow: 0px 0px 4px $gray-4;
  position: relative;
  &Row {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &RowThree {
      flex: 3;
      margin-top: 20px;
      &CareTargetList {
        margin: 16px auto;
        text-align: center;
        display: block;
        p {
          text-align: left;
          display: inline-block;
        }
      }
    }
    &Condition {
      flex: 1;
      width: 170px;
      height: 50px;
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
        font-size: 14px;
        span {
          font-size: 20px;
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
      border-bottom: solid 3px $green-1;
      &Day {
        font-size: 41px;
      }
    }
  }
}
</style>

<script>
export default {}
</script>
