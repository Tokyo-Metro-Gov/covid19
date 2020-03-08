<template>
  <div class="waku">
    <div class="border">
      <h3 class="title">新型コロナ受診相談窓口</h3>
      <h3 class="title2">による相談結果</h3>
      <h3 class="new_corona">新型コロナ外来</h3>
      <h3 class="need_consultation">受診が必要</h3>
      <h3 class="tohandan">と判断された場合</h3>
      <div class="square">
        <p class="inSquare">新型コロナ外来(帰国者・接触者外来)</p>
        <p class="inSquare">医師による判断</p>
      </div>
      <a href="#fuyou">
        <div class="rect-wrap">
          <div class="rect rect1">
            <h2 class="result">検査の必要</h2>
            <h2 class="no">なし</h2>
            <p class="arrow"><img src="../static/flow/arrow_green.svg"/></p>
          </div>
        </div>
      </a>
      <a href="#pcr">
        <div class="rect-wrap">
          <div class="rect rect2" >
            <h2 class="result">検査の必要</h2>
            <h2 class="no">あり</h2>
            <p class="arrow"><img src="../static/flow/arrow.svg"/> </p>
          </div>
        </div>
      </a>
      <hr class="border_line">
      <h2 class="pcr" id="pcr">PCR検査</h2>
      <h3 class="tokyo_health">東京都健康安全<br>研究センター等</h3>
      <a href="#fuyou">
        <div class="rect-wrap">
          <div class="rect rect1">
            <h2 class="negative">陰性</h2>
            <p class="arrow"><img src="../static/flow/arrow_green.svg"/> </p>
          </div>
        </div>
      </a>
      <a href="#nyuuin">
        <div class="rect-wrap">
          <div class="rect rect2">
            <h2 class="negative">陽性</h2>
            <p class="arrow"><img src="../static/flow/arrow.svg"/></p>
          </div>
        </div>
      </a>
      <hr class="border_line">
      <h3 class="new_corona" id="fuyou">新型コロナ外来</h3>
      <h3 class="need_consultation">受診が不要</h3>
      <h3 class="tohandan">と判断された場合</h3>
      <div>
        <div class="rect-wrap2">
          <div class="rect rect_border">
            <p class="house"><img src="../static/flow/house-24px.svg"></p>
            <h3 class="in">自宅で<br>安静に過ごす</h3>
          </div>
        </div>
        <div class="rect-wrap2">
          <div class="rect rect_border">
            <p class="house"><img src="../static/flow/apartment-24px.svg"></p>
            <h3 class="in">一般の<br>医療機関を受診</h3>
          </div>
        </div>
      </div>
      <div class="rect_wrap_soudan">
        <h5 class="in_final_rect">症状が良くならない場合は</h5>
        <h3 class="big_in_final_rect">新型コロナ受診相談窓口</h3>
        <h5 class="normal_in_final_rect">に相談</h5>
        <div class="rect_soudan">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FlowSpAccording"
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  .title {
    font-family: 'Roboto', sans-serif;
    color: #00A040;
    font-size: 5.8vw;
  }
  h3{
    font-family: 'Roboto', sans-serif;
  }
  h2{
    font-family: 'Roboto', sans-serif;
  }
  p{
    font-family: 'Roboto', sans-serif;
  }

  h3.title2 {
    color: #00A040;
    font-size: 3.7vw;
  }
  .border{
    padding:30px 20px;
    border:solid #D9D9D9;
    border-radius: 3px;
  }

  .waku {
    width:100%;
    padding: 30px 20px;
    text-align: center;
    background-color: #F8F9FA;
  }

  .new_corona {
    display:block;
    color: #4D4D4D;
    padding-top: 20px;
    font-size: 3.2vw;
  }

  .need_consultation {
    display: inline;
    line-height: 1.2em;
    color: #4D4D4D;
    font-size: 9.3vw;
  }

  .tohandan {
    line-height: 1.5em;
    font-size: 3.7vw;
    padding-bottom: 10px;
    color:#4D4D4D;
  }

  .square {
    width: 83%;
    height: 68%;
    margin: 0 auto;
    background-color: #4D4D4D;
    padding: 10px;
    border-radius: 3px;
  }

  .inSquare {
    color: White;
    font-size: 3.5vw;
    text-align: center;
  }
  .rect-wrap {
    width: 36% ;
    float:left;
    margin-left:7vw;
    margin-top:35px;
    margin-bottom:30px;
    margin-right:10px;
  }
  .rect2 {
    background-color: #FFE200;
    box-shadow: 1px 0 4px gray;
    position:relative;
  }
  .rect{
    width: 100%;
    padding-top: 100%;
    border-radius: 3px;
  }
  .rect1{
    position:relative;
    background-color: white;
    box-shadow: 1px 0 4px gray;
  }
  .result{
    position:absolute;
    font-size:3.9vw;
    top:10%;
    width:100%;
    color:#4D4D4D;
  }
  .no{
    position:absolute;
    width:100%;
    top:27%;
    font-size:6.4vw;
    color:#4D4D4D;
  }
  .arrow{
    position:absolute;
    width:100%;
    top:55%;
  }
  .border_line{
    display: inline-block;
    width:100%;
    height: 2px;
    opacity: 0.3;
  }
  .pcr{
    padding-top:10px;
    font-size: 9.3vw;
    color:#4D4D4D;
  }
  .tokyo_health{
    font-size:4.5vw;
    color:#4D4D4D;
  }
  .negative{
    position:absolute;
    width:100%;
    top:22%;
    font-size:6.4vw;
    color:#4D4D4D;
  }
  .rect_border{
    position:relative;
    border:solid #D9D9D9;
  }
  .house{
    position:absolute;
    width:100%;
    top:10%;
  }
  .in{
    position:absolute;
    width:100%;
    top:45%;
    font-size:3.5vw;
    color:#4D4D4D;
  }
  .rect_wrap_soudan{
    width:100%;
    position:relative;
  }
  .rect_soudan{
    border:solid #00A040;
    border-radius: 3px;
    padding-top: 33%;
    margin-left: 7.1vw;
    margin-right:7vw;
    margin-top:45%;
  }
  .in_final_rect{
    position:absolute;
    width:100%;
    top:20%;
    font-size:4.2vw;
    color:#4D4D4D;
  }
  .big_in_final_rect{
    position: absolute;
    width:100%;
    top:40%;
    font-size:5.3vw;
    color:#4D4D4D;
  }
  .normal_in_final_rect{
    position: absolute;
    width: 100%;
    top:65%;
    font-size:4.2vw;
    color:#4D4D4D;
  }
  .rect-wrap2 {
    width: 36% ;
    float:left;
    margin-left:7vw;
    margin-top:5px;
    margin-bottom:30px;
    margin-right:10px;
  }
</style>
