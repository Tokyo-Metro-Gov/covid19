<template>
  <div class="Flow-PC-Days Flow-Card-Parts">
    <div class="Flow-PC-Days-Row">
      <div class="Flow-PC-Days-Row-3">
        <img src="/flow/accessibility-24px.svg" />
        <p>一般の方</p>
      </div>
      <div>
        <p>
          <span class="Flow-PC-Days-Emphasis">
            <span class="Flow-PC-Days-Emphasis-Day">４</span>
            日程度
          </span>
          続いている
        </p>
      </div>
    </div>
    <div class="Flow-PC-Days-Row">
      <div class="Flow-PC-Days-Condition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          <span>風邪 </span>
          のような症状
        </p>
      </div>
      <div class="Flow-PC-Days-Condition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>
          発熱
          <span> 37.5℃ </span>
          以上
        </p>
      </div>
      <div class="Flow-PC-Days-Condition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>強いだるさ</p>
      </div>
      <div class="Flow-PC-Days-Condition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>息苦しさ</p>
      </div>
    </div>
    <div class="Flow-PC-Days-Row">
      <div class="Flow-PC-Days-Row-3">
        <div class="Flow-PC-Days-Care-Target-List">
          <p>
            <img src="/flow/directions_walk-24px.svg" />ご高齢な方<br />
            <img src="/flow/accessible-24px.svg" />基礎疾患のある方<br />
            <img src="/flow/pregnant_woman-24px.svg" />妊娠中の方<br />
          </p>
        </div>
      </div>
      <div>
        <p>
          <span class="Flow-PC-Days-Emphasis">
            <span class="Flow-PC-Days-Emphasis-Day">２</span>
            日程度
          </span>
          続いている
        </p>
      </div>
    </div>
    <i class="Flow-PC-Days-Arrow">
      <img src="/flow/flow_arrow.svg" />
    </i>
  </div>
</template>

<style lang="scss">
.Flow-PC-Days {
  display: flex;
  flex-direction: row;
  height: 256px;
  padding: 20px 20px !important;
  position: relative;
  .Flow-PC-Days-Row {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .Flow-PC-Days-Row-3 {
      flex: 3;
      margin-top: 20px;
      .Flow-PC-Days-Care-Target-List {
        margin: 16px auto;
        text-align: center;
        display: block;
        p {
          text-align: left;
          display: inline-block;
        }
      }
    }
    .Flow-PC-Days-Condition {
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
    .Flow-PC-Days-Emphasis {
      font-size: 24px;
      border-bottom: solid 3px $green-1;
      .Flow-PC-Days-Emphasis-Day {
        font-size: 41px;
      }
    }
  }
  .Flow-PC-Days-Arrow {
    position: absolute;
    right: -20px;
    bottom: 20px;
  }
}
</style>

<script>
export default {}
</script>
