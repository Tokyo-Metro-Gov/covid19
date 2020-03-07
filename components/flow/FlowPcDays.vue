<template>
  <div class="Flow-Card-Parts Flow-PC-Days">
    <div class="row">
      <div>
        <img src="/flow/accessibility-24px.svg" />
        <p>一般の方</p>
      </div>
      <div>
        <p>
          <span class="emphasis">
            <span class="day">４</span>
            日程度
          </span>
          続いている
        </p>
      </div>
    </div>
    <div class="row">
      <div class="condition">
        <p>風邪 のような症状</p>
      </div>
      <div class="condition">
        <p>発熱 37.5℃ 以上</p>
      </div>
      <div class="condition">
        <p>強いだるさ</p>
      </div>
      <div class="condition">
        <p>息苦しさ</p>
      </div>
    </div>
    <div class="row">
      <div>
        <p><img src="/flow/directions_walk-24px.svg" />ご高齢な方</p>
        <p><img src="/flow/accessible-24px.svg" />基礎疾患のある方</p>
        <p><img src="/flow/pregnant_woman-24px.svg" />妊娠中の方</p>
      </div>
      <div>
        <p>
          <span class="emphasis">
            <span class="day">２</span>
            日程度
          </span>
          続いている
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Flow-PC-Days {
  display: flex;
  flex-direction: row;
  height: 256px;
  .row {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
.emphasis {
  font-size: 24px;
  border-bottom: solid 3px $green-1;
  .day {
    font-size: 41px;
  }
}
.condition {
  border: 2px solid $green-1 !important;
  border-radius: 2px;
  width: 170px;
  height: 50px;
}
</style>

<script>
export default {}
</script>
