<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <div :class="$style.RowItems">
        <div>
          <img
            src="/flow/sentiment_very_dissatisfied-24px.svg"
            alt="dissatisfied face icon"
          />
        </div>
        <div :class="$style.SmallerText">
          不安に思う方
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          微熱
        </div>
        <div :class="$style.CheckBox">
          軽い咳
        </div>
        <div :class="$style.CheckBox">
          感染の不安
        </div>
      </div>
    </div>

    <div :class="$style.FlowArrow">
      <img src="/flow/flow_arrow.svg" alt="→" />
    </div>

    <div :class="[$style.SubtleBox, $style.Box2]">
      <div :class="$style.LargerText">
        新型コロナコールセンター
      </div>

      <div :class="$style.SmallerText">
        午前9時から午後9時<br />
        （土日祝含む）
      </div>

      <div :class="$style.TelLink">
        <a href="tel:0570550571">
          <img src="/flow/phone-24px.svg" alt="Phone" />
          0570-550571
        </a>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  font-family: 'Roboto', sans-serif;
  margin: 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.TelLink {
  font-family: 'Roboto', sans-serif;
  @include largerThan($medium) {
    font-size: larger;
  }
  a {
    color: $gray-2;
    text-decoration: none;
    font-weight: bold;
  }
}

.CheckBox {
  position: relative;
  font-size: normal;
  font-family: HiraginoSans-W6, Hiragino Sans;
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px;
  padding: 4px 0;
  max-width: 200px;
  @include largerThan($medium) {
    font-size: larger;
  }

  &:after {
    position: absolute;
    left: -8px;
    top: -8px;
    content: url(/flow/check_circle-24px.svg);
  }

  &:before {
    position: absolute;
    left: -4px;
    top: -4px;
    width: 20px;
    height: 20px;
    background-color: white;
    content: '';
  }
}

.SubtleBox {
  @include card-container();
  margin: 0 4px;
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.Box1 {
  flex-grow: 2;
}

.Box2 {
  flex-grow: 1;
  flex-direction: column;
  div {
    margin: 0.5em;
  }
}

.RowItems {
  flex-grow: 1;
  margin: 0 4px;
  @include largerThan($large) {
    margin: 0 2em;
  }
}

.FlowArrow {
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: larger;
  font-weight: bold;
}

.SmallerText {
  font-size: smaller;
}
</style>
