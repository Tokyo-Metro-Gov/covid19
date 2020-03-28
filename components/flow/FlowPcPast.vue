<template>
  <section :class="$style.Flow">
    <div :class="$style.FlowHeading">
      <i18n path="{past}の出来ごとと症状" tag="span">
        <i18n
          :class="$style.FlowLText"
          tag="span"
          path="発症前{two}週間以内"
          place="past"
        >
          <span :class="$style.FlowNum" place="two">2</span>
        </i18n>
      </i18n>
    </div>
    <div :class="$style.FlowInner">
      <div :class="$style.FlowItem">
        <template v-if="!langsNeedReversedOrder.includes($i18n.locale)">
          <strong :class="$style.FlowTitle">
            {{ $t('「新型コロナウイルス感染者」と') }}
          </strong>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="$style.FlowPerson"
          >
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
        </template>
        <template v-else>
          <i18n
            tag="span"
            path="{closeContact}をした方"
            :class="$style.FlowPerson"
          >
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
          <span :class="$style.FlowTitle">
            {{ $t('「新型コロナウイルス感染者」と') }}
          </span>
        </template>
      </div>
      <div :class="$style.FlowItem">
        <template v-if="!langsWithoutFlowTitle.includes($i18n.locale)">
          <strong :class="$style.FlowTitle">
            {{ $t('流行地域への渡航・居住歴がある方') }}
          </strong>
          <i18n
            tag="span"
            :class="$style.FlowPerson"
            path="{you} か {closeContact}をした方"
          >
            <em :class="$style.FlowLine" place="you">
              {{ $t('ご本人') }}
            </em>
            <em :class="$style.FlowLine" place="closeContact">
              {{ $t('濃厚接触') }}
            </em>
          </i18n>
        </template>
        <template v-else>
          <i18n
            tag="span"
            :class="[$style.FlowPerson, $style.FlowPersonS]"
            path="travel history from {area}"
          >
            <em :class="$style.FlowLine" place="area">
              {{ $t('COVID-19 prevalent area') }}
            </em>
          </i18n>
          <i18n
            tag="span"
            :class="[$style.FlowPerson, $style.FlowPersonS]"
            path="been {inCloseContact} with returnees"
          >
            <em :class="$style.FlowLine" place="inCloseContact">
              {{ $t('in close contact') }}
            </em>
          </i18n>
        </template>
      </div>
      <div :class="$style.FlowCondition">
        <em :class="$style.FlowSymptom">
          {{ $t('発熱') }}
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
        <span :class="$style.FlowText">{{ $t('または') }}</span>
        <em :class="$style.FlowSymptom">
          {{ $t('呼吸器症状') }}
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
        <span :class="$style.FlowText">{{ $t('かつ') }}</span>
        <em :class="$style.FlowSymptom">
          <i18n tag="span" :class="$style.FlowTextSm" path="発熱{temperature}">
            <i18n tag="span" path="{tempNum}以上" place="temperature">
              <span :class="$style.FlowTemperature" place="tempNum">
                {{ $t('37.5℃') }}
              </span>
            </i18n>
          </i18n>
          <img
            :class="$style.FlowSymptomIcon"
            src="/flow/check_circle-24px.svg"
            aria-hidden="true"
            alt=" "
          />
        </em>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    langsNeedReversedOrder() {
      return ['en']
    },
    langsWithoutFlowTitle() {
      return ['en', 'zh-cn', 'zh-tw']
    }
  }
}
</script>

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);

  position: relative;
  padding-bottom: 20px;
  color: $gray-2;
  text-align: center;

  &Heading {
    position: relative;
    width: calc(100% - 2px);
    margin: 0 0 0 1px;
    background-color: $white;
    padding: 5px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
  }

  &Num {
    display: inline-block;
    padding: 0 5px;
    font-size: calc(1.5rem + ((1vw - 7.68px) * 5.4726));

    @include largerThan($large) {
      font-size: 42px;
      padding: 0 10px;
    }
  }

  &Inner {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    border-top: 1px solid $gray-4;
  }

  &Item {
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 50%;
    padding: 10px 5px;

    @include largerThan($large) {
      padding: 20px;
    }
  }

  &Title {
    margin-bottom: 4px;
    color: $green-1;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 0.4464));
    font-weight: bold;
    display: block;

    @include largerThan($large) {
      font-size: 15px;
    }
  }

  &Person {
    font-weight: bold;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 1.1905));
    line-height: 1.8;
    text-align: center;

    @include largerThan($large) {
      font-size: 23px;
    }

    &S {
      @include largerThan($large) {
        font-size: 20px;
      }
    }
  }

  &Line {
    border-bottom: 2px solid $green-1;
    font-style: inherit;

    @include largerThan($large) {
      border-width: 4px;
    }
  }

  &Condition {
    display: flex;
    width: 100%;
    padding: 0 15px;
    margin-top: 15px;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    font-weight: bold;
    font-size: 22px;

    @include largerThan($large) {
      padding: 0 20px;
    }
  }

  &Symptom {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 25%;
    padding: 10px;
    border: 2px solid $green-1;
    border-radius: 3px;
    background-color: $white;
    font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
    font-weight: bold;
    font-style: normal;

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

    @include largerThan($large) {
      max-width: 190px;
      font-size: 20px;
    }
  }

  &Text {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 12.5%;
    padding: 10px;
    font-size: calc(0.75rem + ((1vw - 7.68px) * 1.4881));
    white-space: nowrap;

    @include largerThan($large) {
      max-width: 190px;
      font-size: 21px;
    }
  }

  &LText {
    font-size: calc(1.25rem + ((1vw - 7.68px) * 0.744));

    @include largerThan($large) {
      font-size: 25px;
    }
  }

  &Temperature {
    font-size: calc(1rem + ((1vw - 7.68px) * 2.4876));
    padding-left: 2px;
    padding-right: 2px;

    @include largerThan($large) {
      font-size: 20px;
      padding-left: 5px;
      padding-right: 5px;
      margin-top: -5px;
    }
  }

  &TextSm {
    font-size: 15px;
  }
}
</style>
