<template>
  <div :class="$style.FlowComponent">
    <div :class="[$style.SubtleBox, $style.Box1]">
      <img
        :class="$style.Box1Icon"
        src="/flow/flow_arrow.svg"
        aria-hidden="true"
        alt=" "
      />
      <div :class="$style.RowItems">
        <div :class="$style.RowItemsHeader">
          <img
            :class="$style.RowItemsHeaderIcon"
            src="/flow/sentiment_very_dissatisfied-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('不安に思う方') }}
        </div>
      </div>
      <div :class="$style.RowItems">
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('微熱') }}
        </div>
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
          {{ $t('軽い咳') }}
        </div>
        <div :class="$style.CheckBox">
          <img
            :class="$style.CheckBoxIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
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

      <div :class="$style.Tel">
        <a :class="$style.TelLink" href="tel:0570550571">
          <img
            :class="$style.TelLinkIcon"
            src="/flow/phone-24px.svg"
            aria-hidden="true"
            :alt="$t('電話番号')"
          />
          0570-550571
        </a>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.FlowComponent {
  color: $gray-2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.Tel {
  @include largerThan($medium) {
    font-size: larger;
  }
}

.TelLink {
  display: flex;
  align-items: center;
  font-weight: bold;

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
    outline: 1px dotted $gray-3;
  }

  &Icon {
    display: inline-block;
    margin-right: 5px;
    width: 26px;
    height: 26px;
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

  &Icon {
    position: absolute;
    left: -8px;
    top: -8px;
    width: 24px;
    height: 24px;
  }

  &::before {
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

  &Icon {
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
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

.RowItemsHeader {
  font-size: smaller;

  &Icon {
    display: block;
    margin: auto;
    width: 45px;
    height: 45px;
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
