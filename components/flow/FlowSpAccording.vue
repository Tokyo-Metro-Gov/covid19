<template>
  <div :class="$style.Waku">
    <div :class="$style.Border">
      <p :class="$style.Title">
        新型コロナ受診相談窓口
        <br />
        <span :class="$style.Title2">
          による相談結果
        </span>
      </p>
      <p :class="$style.NewCorona">
        新型コロナ外来
        <br />
        <span :class="$style.NeedConsultation">
          受診が必要
        </span>
        <br />
        <span :class="$style.Tohandan">
          と判断された場合
        </span>
      </p>
      <div :class="$style.Square">
        <p :class="$style.InSquare">
          新型コロナ外来(帰国者・接触者外来)
          <br />
          医師による判断
        </p>
      </div>
      <a href="#not_required">
        <div :class="$style.RectWrap">
          <div :class="$style.Rect1">
            <p :class="$style.NeedKensa">
              検査の必要
            </p>
            <p :class="$style.Nashi">
              なし
            </p>
            <p :class="$style.Arrow">
              <GreenArrow />
            </p>
          </div>
        </div>
      </a>
      <a href="#pcr">
        <div :class="$style.RectWrap">
          <div :class="$style.Rect2">
            <p :class="$style.NeedKensa">
              検査の必要
            </p>
            <p :class="$style.Nashi">
              あり
            </p>
            <p :class="$style.Arrow">
              <Arrow />
            </p>
          </div>
        </div>
      </a>
      <hr :class="$style.BorderLine" />
      <p id="pcr" :class="$style.Pcr">
        PCR検査
      </p>
      <p :class="$style.TokyoHealth">
        東京都健康安全
        <br />
        研究センター等
      </p>
      <a href="#not_required">
        <div :class="$style.RectWrap">
          <div :class="$style.Rect1">
            <p :class="$style.Negative">
              陰性
            </p>
            <p :class="$style.Arrow">
              <GreenArrow />
            </p>
          </div>
        </div>
      </a>
      <a href="#hospitalized">
        <div :class="$style.RectWrap">
          <div :class="$style.Rect2">
            <p :class="$style.Negative">
              陽性
            </p>
            <p :class="$style.Arrow">
              <Arrow />
            </p>
          </div>
        </div>
      </a>
      <hr :class="$style.BorderLine" />
      <p id="not_required" :class="$style.NewCorona">
        新型コロナ外来
        <br />
        <span :class="$style.NeedConsultation">
          受診が不要
        </span>
        <br />
        <span :class="$style.Tohandan">
          と判断された場合
        </span>
      </p>
      <div>
        <div :class="$style.RectWrap">
          <div :class="$style.Rect3">
            <p :class="$style.House">
              <House />
            </p>
            <p :class="$style.In">
              自宅で
              <br />
              安静に過ごす
            </p>
          </div>
        </div>
        <div :class="$style.RectWrap">
          <div :class="$style.Rect3">
            <p :class="$style.House">
              <Apartment />
            </p>
            <p :class="$style.In">
              一般の
              <br />
              医療機関を受診
            </p>
          </div>
        </div>
      </div>
      <div :class="$style.RectWrapSoudan">
        <div :class="$style.RectSoudan">
          <p :class="$style.inFinalRect">
            症状が良くならない場合は
            <br />
            <span :class="$style.SecondInFinalRect">
              新型コロナ受診相談窓口
            </span>
            <br />
            <span :class="$style.LastInFinalRect">
              に相談
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Apartment from '../../static/flow/apartment-24px.svg'
import House from '../../static/flow/house-24px.svg'
import Arrow from '../../static/flow/arrow_downward.svg'
import GreenArrow from '../../static/flow/arrow_green.svg'

export default {
  components: {
    Apartment,
    House,
    Arrow,
    GreenArrow
  }
}
</script>

<style module lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.Title {
  font-family: 'Roboto', sans-serif;
  color: $green-1;
  font-size: 5.8vw;
  font-weight: bold;
}
.Title2 {
  display: block;
  color: $green-1;
  font-size: 3.7vw;
  font-weight: bold;
}
.Border {
  padding: 30px 20px;
  border: solid #d9d9d9;
  border-radius: 3px;
}
.Waku {
  width: 100%;
  padding: 30px 20px;
  text-align: center;
  background-color: $gray-5;
}
.NewCorona {
  font-weight: bold;
  display: block;
  color: $gray-2;
  padding-top: 8px;
  font-size: 3.2vw;
}
.NeedConsultation {
  font-weight: bold;
  display: inline;
  line-height: 1.2em;
  color: $gray-2;
  font-size: 9.3vw;
}
.Tohandan {
  font-weight: bold;
  line-height: 1.5em;
  font-size: 3.7vw;
  padding-bottom: 10px;
  color: $gray-2;
}
.Square {
  width: 95%;
  height: 16vw;
  margin: 0 auto;
  background-color: $gray-2;
  border-radius: 3px;
}
.InSquare {
  color: White;
  font-size: 3.5vw;
  padding-top: 5%;
  text-align: center;
  margin-bottom: 0px;
}
.RectWrap {
  width: 50%;
  float: left;
}
.Rect2 {
  width: 90%;
  padding-top: 87%;
  border-radius: 3px;
  background-color: #ffe200;
  box-shadow: 1px 0 4px gray;
  margin-top: 20%;
  position: relative;
}
.Rect1 {
  width: 90%;
  padding-top: 87%;
  border-radius: 3px;
  position: relative;
  background-color: white;
  margin-top: 20%;
  box-shadow: 1px 0 4px gray;
}
.Rect3 {
  width: 95%;
  padding-top: 80%;
  border-radius: 3px;
  position: relative;
  border: solid $gray-4;
  margin-top: 20%;
}
.No {
  position: absolute;
  width: 100%;
  top: 27%;
  font-size: 6.4vw;
  color: $gray-2;
}
.Arrow {
  position: absolute;
  width: 100%;
  top: 50%;
}
.BorderLine {
  display: inline-block;
  width: 100%;
  height: 2px;
  opacity: 0.3;
}
.Pcr {
  font-weight: bold;
  padding-top: 10px;
  font-size: 9.3vw;
  color: $gray-2;
}
.TokyoHealth {
  font-weight: bold;
  font-size: 4.5vw;
  color: $gray-2;
}
.Negative {
  font-weight: bold;
  position: absolute;
  width: 100%;
  top: 20%;
  font-size: 6.4vw;
  color: $gray-2;
}
.NeedKensa {
  position: absolute;
  width: 100%;
  top: 9%;
  font-weight: bold;
  font-size: 4vw;
  color: $gray-2;
}
.Nashi {
  position: absolute;
  width: 100%;
  top: 27%;
  font-weight: bold;
  font-size: 6.4vw;
  color: $gray-2;
}
.House {
  position: absolute;
  width: 100%;
  top: 10%;
}
.In {
  position: absolute;
  font-weight: bold;
  width: 100%;
  top: 45%;
  font-size: 3.3vw;
  color: $gray-2;
}
.RectWrapSoudan {
  width: 100%;
  position: relative;
}
.RectSoudan {
  border: solid $green-1;
  width: 98%;
  position: relative;
  border-radius: 3px;
  padding-top: 33%;
  margin-left: 0vw;
  margin-right: 2vw;
  margin-top: 64%;
}
.inFinalRect {
  display:block;
  position: absolute;
  width: 100%;
  top: 10%;
  font-size: 4vw;
  font-weight: bold;
}
.SecondInFinalRect {
  display:block;
  position: absolute;
  width: 100%;
  top: 40%;
  font-size: 5.5vw;
  font-weight: bold;
}
.LastInFinalRect {
  display:block;
  position: absolute;
  width: 100%;
  top: 95%;
  font-size: 4vw;
  font-weight: bold;
}
</style>
