<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <p :class="$style.FlowRowRowThreeGeneral">
          {{ $t('一般の方') }}
        </p>
      </div>
      <div>
        <p>
          <i18n path="{duration}続いている">
            <i18n
              tag="span"
              place="duration"
              path="{day}日以上"
              :class="$style.FlowRowEmphasis"
            >
              <span :class="$style.FlowRowEmphasisDay" place="day">4</span>
            </i18n>
          </i18n>
        </p>
      </div>
    </div>
    <div :class="[$style.FlowRow, $style.FlowRowRowCheck]">
      <div :class="$style.FlowRowCondition">
        <p>
          <i18n
            tag="span"
            path="{cold}のような症状"
            :class="$style.FlowRowConditionSmall"
          >
            <span :class="$style.FlowRowConditionLarge" place="cold">
              {{ $t('風邪') }}
            </span>
          </i18n>
        </p>
      </div>
      <div :class="$style.FlowRowCondition">
        <p>
          <i18n
            tag="span"
            :class="$style.FlowRowConditionSmall"
            path="発熱{temperature}"
          >
            <i18n tag="span" place="temperature" path="{tempNum}以上">
              <span :class="$style.FlowRowConditionLarge" place="tempNum">
                {{ $t('37.5℃') }}
              </span>
            </i18n>
          </i18n>
        </p>
      </div>
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('強いだるさ') }}</p>
      </div>
      <div :class="$style.FlowRowCondition">
        <p>{{ $t('息苦しさ') }}</p>
      </div>
    </div>
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <ul :class="$style.FlowRowRowThreeCareTargetList">
          <li
            :class="[
              $style.FlowRowRowThreeCareTargetListItem,
              $style.FlowRowRowThreeCareTargetListItemDirectionsWalk
            ]"
          >
            {{ $t('ご高齢な方') }}
          </li>
          <li
            :class="[
              $style.FlowRowRowThreeCareTargetListItem,
              $style.FlowRowRowThreeCareTargetListItemAccessible
            ]"
          >
            {{ $t('基礎疾患のある方') }}
          </li>
          <li
            :class="[
              $style.FlowRowRowThreeCareTargetListItem,
              $style.FlowRowRowThreeCareTargetListItemPregnantWoman
            ]"
          >
            {{ $t('妊娠中の方') }}
          </li>
        </ul>
      </div>
      <div>
        <p>
          <i18n path="{duration}続いている">
            <i18n
              tag="span"
              place="duration"
              path="{day}日程度"
              :class="$style.FlowRowEmphasis"
            >
              <span :class="$style.FlowRowEmphasisDay" place="day">2</span>
            </i18n>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<i18n src="./FlowPcDays.i18n.json"></i18n>

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);
  display: flex;
  flex-direction: row;
  padding: 20px 20px !important;
  position: relative;
  color: $gray-2;
  &Row {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 36%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &RowCheck {
      flex-basis: calc(28% - 20px);
      margin: 0 10px;
    }
    &RowThree {
      flex-grow: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      &General::before {
        content: '';
        display: block;
        margin: auto;
        width: 44px;
        height: 44px;
        background-image: url(/flow/accessibility-24px.svg);
        background-repeat: no-repeat;
        background-size: contain;
      }
      &CareTargetList {
        margin: 16px 0;
        text-align: left;
        list-style: none;
        &Item + &Item {
          margin-top: 14px;
        }
        &Item {
          display: flex;
          align-items: center;
          &::before {
            content: '';
            display: inline-block;
            width: 30px;
            height: 30px;
            background-repeat: no-repeat;
            background-size: contain;
          }
          &DirectionsWalk::before {
            background-image: url(/flow/directions_walk-24px.svg);
          }
          &Accessible::before {
            background-image: url(/flow/accessible-24px.svg);
          }
          &PregnantWoman::before {
            background-image: url(/flow/pregnant_woman-24px.svg);
          }
        }
      }
    }
    &Condition {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 10px;
      padding: 10px;
      position: relative;
      border: 2px solid $green-1 !important;
      border-radius: 2px;
      background-color: $white;
      p {
        text-align: center;
        display: inline-block;
        margin: 0 !important; // FIXME: IEだとv-applicationのmarginが優先される
        font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        font-weight: bold;
        @include largerThan($large) {
          font-size: 20px;
        }
      }
      &Large {
        font-size: calc(1rem + ((1vw - 7.68px) * 2.4876));
        @include largerThan($large) {
          font-size: 25px;
        }
      }
      &Small {
        font-size: 15px;
      }

      &::after {
        position: absolute;
        left: -8px;
        top: -8px;
        width: 24px;
        height: 24px;
        background-image: url(/flow/check_circle-24px.svg);
        background-size: contain;
        content: '';
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
    &Emphasis {
      font-size: 24px;
      font-weight: bold;
      border-bottom: solid 3px $green-1;
      &Day {
        font-size: 41px;
      }
    }
  }
}
</style>
