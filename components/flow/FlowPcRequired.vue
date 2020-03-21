<template>
  <div :class="$style.Container">
    <div :class="$style.Row">
      <i18n
        :class="$style.Catch"
        tag="p"
        path="新型コロナ外来 {advice} と判断された場合"
      >
        <span :class="$style.Emphasis" place="advice">
          {{ $t('受診が必要') }}
        </span>
      </i18n>
    </div>
    <div :class="$style.Row">
      <div :class="[$style.Card, $style.CardLarge, $style.CardGray]">
        <template v-if="!langsWithoutOutpatient.includes($i18n.locale)">
          <p :class="$style.Outpatient">
            {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
          </p>
          <p :class="$style.Judge">
            {{ $t('医師による判断') }}
          </p>
        </template>
        <template v-else>
          <p :class="$style.Judge">
            {{ $t('Diagnosis by a doctor at a COVID-19 outpatient facility') }}
          </p>
        </template>
      </div>
    </div>
    <div :class="$style.TwoRow">
      <div :class="[$style.Card, $style.CardGreen]">
        <p :class="$style.CardGreenText">
          <i18n path="検査の必要{ifRequired}">
            <span place="ifRequired">{{ $t('あり') }}</span>
          </i18n>
        </p>
      </div>
      <div :class="[$style.Card, $style.CardWhite]">
        <p :class="$style.CardWhiteText">
          <i18n path="検査の必要{ifRequired}">
            <span place="ifRequired">{{ $t('なし') }}</span>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    langsWithoutOutpatient() {
      return ['en']
    }
  }
}
</script>

<style module lang="scss">
.Container {
  @include card-container();

  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 30px !important;
  text-align: center;
}

.Row {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 15px;
}

.Row:last-of-type {
  margin: 0;
}

.TwoRow {
  flex-grow: 1;
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
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 10px;

  p {
    margin: 0 !important; // FIXME: IEだとv-applicationのmarginが優先される
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
