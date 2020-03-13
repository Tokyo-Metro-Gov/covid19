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
          {{ $t('不安に思う方') }}
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          {{ $t('微熱') }}
        </div>
        <div :class="$style.CheckBox">
          {{ $t('軽い咳') }}
        </div>
        <div :class="$style.CheckBox">
          {{ $t('感染の不安') }}
        </div>
      </div>
    </div>

    <div :class="[$style.SubtleBox, $style.Box2, $style.Center]">
      <div :class="$style.LargerText">
        {{ $t('新型コロナコールセンター') }}
      </div>
      <div :class="$style.SmallerText">
        {{ $t('午前9時から午後9時（土日祝含む）') }}
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

<i18n src="./FlowPcSuspect.i18n.json"></i18n>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.TelLink {
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
  border: 2px solid $green-1;
  border-radius: 4px;
  margin: 8px 0;
  padding: 10px;
  max-width: 200px;
  text-align: center;
  font-weight: bold;
  font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
  @include largerThan($large) {
    font-size: 20px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5em;
}

.Box1 {
  position: relative;
  flex-grow: 0;
  flex-shrink: 0;
  width: 60%;
  flex-direction: row;
  &::after {
    content: '';
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    background: url('/flow/flow_arrow.svg') no-repeat;
  }
}

.Box2 {
  flex-grow: 0;
  flex-shrink: 0;
  width: 38%;
  flex-direction: column;
  justify-content: center;
  div {
    margin: 0.5em;
  }
}

.RowItems {
  flex-grow: 1;
  text-align: center;
  margin: 0 4px;
  @include largerThan($large) {
    margin: 0 2em;
  }
}

.FlowArrow {
  position: absolute;
  margin: 0 -20px;
  z-index: 1;
}

.LargerText {
  font-size: larger;
  font-weight: bold;
}

.Center {
  text-align: center;
}

.SmallerText {
  font-size: smaller;
}
</style>
