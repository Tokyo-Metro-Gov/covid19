<template>
  <div :class="$style.Container">
    <div :class="$style.Row">
      <p :class="$style.Catch">
        新型コロナ外来
        <span :class="$style.Emphasis">受診が必要</span>
        と判断された場合
      </p>
    </div>
    <div :class="$style.Row">
      <div :class="[$style.Card, $style.CardLarge, $style.CardGray]">
        <p :class="$style.Outpatient">
          新型コロナ外来（帰国者・接触者外来）
        </p>
        <p :class="$style.Judge">
          医師による判断
        </p>
      </div>
    </div>
    <div :class="$style.TwoRow">
      <div :class="[$style.Card, $style.CardGreen]">
        <p :class="$style.CardGreenText">
          検査の必要あり
        </p>
      </div>
      <div :class="[$style.Card, $style.CardWhite]">
        <p :class="$style.CardWhiteText">
          検査の必要なし
        </p>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.Container {
  @include card-container();
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 30px !important;
}
.Row {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
}
.Row:last-of-type {
  margin: 0;
}
.TwoRow {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.Catch {
  color: $gray-2;
  font-weight: bold;
  margin: 0 !important;
}
.Card {
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  p {
    margin: 0;
  }
}
.CardLarge {
  flex-basis: 100%;
}
.CardGray {
  color: $white;
  background-color: $gray-2;
  border: 0.5px solid $gray-4 !important;
}
.CardWhite {
  background-color: $white;
  border: 2px solid $green-1 !important;
  &Text {
    font-size: 22px;
    color: $gray-2;
  }
}
.CardGreen {
  background-color: $green-1;
  &Text {
    color: $white;
    font-size: 22px;
  }
}
.Outpatient {
  font-size: 18px;
}
.Judge {
  font-size: 20px;
}
.Emphasis {
  font-size: 28px;
}
</style>
