<template>
  <div :class="$style.FlowComponent2">
    <div :class="[$style.SubtleBox, $style.Box3, $style.Center]">
      <div :class="$style.LargerText">
        {{ $t('新型コロナウイルス感染症') }}
        <br />
        {{ $t('コールセンター') }}
      </div>
      <div :class="$style.SmallerText">
        {{ $t('24時間対応（土日祝含む）') }}
      </div>

      <div :class="$style.Tel">
        <a :class="$style.TelLink" href="tel:0120123801">
          <img
            :class="$style.TelLinkIcon"
            src="/flow/phone-24px.svg"
            aria-hidden="true"
          />
          0120-123-801
        </a>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
// .FlowComponent {
//  color: $gray-2;
//  display: flex;
//  flex-direction: row;
//  justify-content: space-between;
// }

.FlowComponent2 {
  height: 100%;
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
  background-color: white;
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

.Box3 {
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
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
