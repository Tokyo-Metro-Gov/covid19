<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <div>
          <img src="/flow/accessibility-24px.svg" />
          <p>{{ $t('一般の方') }}</p>
        </div>
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
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
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
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
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
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>{{ $t('強いだるさ') }}</p>
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p>{{ $t('息苦しさ') }}</p>
      </div>
    </div>
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <ul :class="$style.FlowRowRowThreeCareTargetList">
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img src="/flow/directions_walk-24px.svg" />{{ $t('ご高齢な方') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img src="/flow/accessible-24px.svg" />{{ $t('基礎疾患のある方') }}
          </li>
          <li :class="$style.FlowRowRowThreeCareTargetListItem">
            <img src="/flow/pregnant_woman-24px.svg" />{{ $t('妊娠中の方') }}
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

<<<<<<< HEAD
<i18n src="./FlowPcDays.i18n.json"></i18n>
=======
<i18n>
{
  "ja": {
    "一般の方": "一般の方",
    "{duration}続いている": "{duration}続いている",
    "{day}日以上": "{day}日以上",
    "{day}日程度": "{day}日程度",
    "{cold}のような症状": "{cold}のような症状",
    "風邪": "風邪",
    "発熱{temperature}": "発熱{temperature}",
    "{tempNum}以上": "{tempNum}以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "強いだるさ",
    "息苦しさ": "息苦しさ",
    "ご高齢な方": "ご高齢な方",
    "基礎疾患のある方": "基礎疾患のある方",
    "妊娠中の方": "妊娠中の方"
  },
  "en": {
    "一般の方": "People without any specific health conditions",
    "{duration}続いている": "Having these symptoms for {duration}",
    "{day}日以上": "{day} consecutive days or more",
    "{day}日程度": "{day} consecutive days",
    "{cold}のような症状": "Having {cold} symptoms",
    "風邪": "cold/flu",
    "発熱{temperature}": "body temperature {temperature}",
    "{tempNum}以上": "above {tempNum}",
    "37.5℃": "37.5℃",
    "強いだるさ": "Extreme fatigue",
    "息苦しさ": "Having difficulty when breathing",
    "ご高齢な方": "The elderly",
    "基礎疾患のある方": "People with chronic illnesses",
    "妊娠中の方": "Pregnant women"
  },
  "zh-cn": {
    "一般の方": "普通人",
    "{duration}続いている": "症状持续{duration}",
    "{day}日以上": "{day}天以上",
    "{day}日程度": "约{day}天",
    "{cold}のような症状": "有疑似{cold}的症状",
    "風邪": "感冒",
    "発熱{temperature}": "发烧 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有强烈倦怠感",
    "息苦しさ": "感到呼吸困难",
    "ご高齢な方": "老年人",
    "基礎疾患のある方": "患有基础疾病的人",
    "妊娠中の方": "孕妇"
  },
  "zh-tw": {
    "一般の方": "一般人士",
    "{duration}続いている": "症狀持續{duration}",
    "{day}日以上": "{day}天以上",
    "{day}日程度": "約{day}天",
    "{cold}のような症状": "疑似{cold}症狀",
    "風邪": "感冒",
    "発熱{temperature}": "發燒 {temperature}",
    "{tempNum}以上": "{tempNum} 以上",
    "37.5℃": "37.5℃",
    "強いだるさ": "有強烈疲倦感",
    "息苦しさ": "呼吸不順暢",
    "ご高齢な方": "老年人",
    "基礎疾患のある方": "具有潛在疾病者",
    "妊娠中の方": "孕婦"
  },
  "ko": {
    "一般の方": "일반인",
    "{duration}続いている": "이러한 증상이 {duration} 지속될 경우",
    "{day}日以上": "{day}일 이상",
    "{day}日程度": "{day}일 동안",
    "{cold}のような症状": "{cold} 비슷한 증상",
    "風邪": "감기와",
    "発熱{temperature}": "{temperature} 발열",
    "{tempNum}以上": "{tempNum} 이상의",
    "37.5℃": "37.5도",
    "強いだるさ": "극도의 피로감",
    "息苦しさ": "호흡이 어려운 경우",
    "ご高齢な方": "노인",
    "基礎疾患のある方": "기저질환이 있는 사람",
    "妊娠中の方": "임산부"
  },
  "ja-basic": {
    "一般の方": "一般（ふつう）の人（ひと）",
    "{duration}続いている": "{duration} 続（つづ）いている",
    "{day}日以上": "{day}日（にち）より 長（なが）く",
    "{day}日程度": "{day}日（にち）くらい",
    "{cold}のような症状": "{cold}のような 様子（ようす）がある",
    "風邪": "風邪（かぜ） ",
    "発熱{temperature}以上": "{temperature}より 高（たか）い熱（ねつ）が ある",
    "{tempNum}以上": "{tempNum}より",
    "37.5℃": "37.5℃",
    "強いだるさ": "体（からだ）が 苦（くる）しい",
    "息苦しさ": "息（いき）が 苦（くる）しい",
    "ご高齢な方": "おじいさん、おばあさん の人（ひと）",
    "基礎疾患のある方": "普段（ふだん）から なにか 病気（びょうき）が ある人（ひと）",
    "妊娠中の方": "お腹（なか）に 子供（こども）が いる人（ひと）"
  }
}
</i18n>
>>>>>>> Fix components/flow/FlowPcDays.vue (dictionary of ja-basic)

<style module lang="scss">
.Flow {
  @include card-container($withDivider: true);
  display: flex;
  flex-direction: row;
  padding: 20px 20px !important;
  position: relative;
  color: $gray-2;
  &Row {
    flex: 1 0 36%;
    display: flex;
    flex-direction: column;
    text-align: center;
    &RowCheck {
      flex-basis: calc(28% - 20px);
      margin: 0 10px;
    }
    &RowThree {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
      &CareTargetList {
        margin: 16px auto;
        text-align: left;
        list-style: none;
        &Item + &Item {
          margin-top: 14px;
        }
      }
    }
    &Condition {
      flex: 1;
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
        margin: 0;
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
      i {
        position: absolute;
        top: -12px;
        left: -12px;
        background-color: $white;
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
