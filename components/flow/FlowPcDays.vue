<template>
  <div :class="$style.Flow">
    <div :class="$style.FlowRow">
      <div :class="$style.FlowRowRowThree">
        <div>
          <img src="/flow/accessibility-24px.svg" />
          <p>{{ $t('一般の方') }}</p>
        </div>
      </div>
      <div :class="$style.FlowRowCase">
        <p v-html="$t('4日以上続いている')" />
      </div>
    </div>
    <div :class="[$style.FlowRow, $style.FlowRowRowCheck]">
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p v-html="$t('風邪のような症状')" />
      </div>
      <div :class="$style.FlowRowCondition">
        <i>
          <img src="/flow/check_circle-24px.svg" />
        </i>
        <p v-html="$t('発熱37.5℃以上')" />
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
          <li>
            <img src="/flow/directions_walk-24px.svg" />{{ $t('ご高齢の方') }}
          </li>
          <li>
            <img src="/flow/accessible-24px.svg" />{{ $t('基礎疾患のある方') }}
          </li>
          <li>
            <img src="/flow/pregnant_woman-24px.svg" />{{ $t('妊娠中の方') }}
          </li>
        </ul>
      </div>
      <div :class="$style.FlowRowCase">
        <p v-html="$t('2日程度続いている')" />
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "ja": {
    "一般の方": "一般の方",
    "4日以上続いている": "<span><span>4</span>日以上</span>続いている",
    "風邪のような症状": "<span>風邪</span>のような症状",
    "発熱37.5℃以上": "発熱<span>37.5℃</span>以上",
    "強いだるさ": "強いだるさ",
    "息苦しさ": "息苦しさ",
    "ご高齢の方": "ご高齢の方",
    "基礎疾患のある方": "基礎疾患のある方",
    "妊娠中の方": "妊娠中の方",
    "2日程度続いている": "<span><span>2</span>日程度</span>続いている"
  },
  "en": {
    "一般の方": "People without any specific health conditions",
    "4日以上続いている": "Having these symptoms for <span><span>4 </span>consecutive days or more</span>",
    "風邪のような症状": "Having <span>cold/flu</span> symptoms",
    "発熱37.5℃以上": "body temperature above <span>37.5℃</span>",
    "強いだるさ": "Extreme fatigue",
    "息苦しさ": "Having difficulty when breathing",
    "ご高齢の方": "The elderly",
    "基礎疾患のある方": "People with chronic illnesses",
    "妊娠中の方": "Pregnant women",
    "2日程度続いている": "Having these symptoms for <span><span>2</span> consecutive days</span>"
  },
  "zh-cn": {
    "一般の方": "普通人",
    "4日以上続いている": "症状持续<span><span>4</span>天以上</span>",
    "風邪のような症状": "有疑似感冒的症状",
    "発熱37.5℃以上": "发烧<span>37.5℃</span>以上",
    "強いだるさ": "有强烈倦怠感",
    "息苦しさ": "感到呼吸困难",
    "ご高齢の方": "老年人",
    "基礎疾患のある方": "患有基础疾病的人",
    "妊娠中の方": "孕妇",
    "2日程度続いている": "症状持续<span>约<span>2</span>天</span>"
  },
  "zh-tw": {
    "一般の方": "一般人士",
    "4日以上続いている": "症狀持續<span><span>4</span>天以上</span>",
    "風邪のような症状": "疑似感冒症狀",
    "発熱37.5℃以上": "發燒<span>37.5℃</span>以上",
    "強いだるさ": "有強烈疲倦感",
    "息苦しさ": "呼吸不順暢",
    "ご高齢の方": "老年人",
    "基礎疾患のある方": "具有潛在疾病者",
    "妊娠中の方": "孕婦",
    "2日程度続いている": "症狀持續<span>約<span>2</span>天</span>"
  },
  "ko": {
    "一般の方": "일반인",
    "4日以上続いている": "이러한 증상이 4일 이상 지속될 경우",
    "風邪のような症状": "감기와 비슷한 증상",
    "発熱37.5℃以上": "<span>37.5도</span> 이상의 발열",
    "強いだるさ": "극도의 피로감",
    "息苦しさ": "호흡이 어려운 경우",
    "ご高齢の方": "노인",
    "基礎疾患のある方": "기저질환이 있는 사람",
    "妊娠中の方": "임산부",
    "2日程度続いている": "이러한 증상이 2일 동안 지속된 경우"
  },
  "pt-BR": {
    "一般の方": "",
    "4日以上続いている": "",
    "風邪のような症状": "",
    "発熱37.5℃以上": "",
    "強いだるさ": "",
    "息苦しさ": "",
    "ご高齢の方": "",
    "基礎疾患のある方": "",
    "妊娠中の方": "",
    "2日程度続いている": ""
  },
  "ja-basic": {
    "一般の方": "ねつが ないひと",
    "4日以上続いている": "<span><span>４</span>にちより ながく</span> つづいている",
    "風邪のような症状": "<span>かぜ</span>が あるひと",
    "発熱37.5℃以上": "<span>37.5℃</span>より たかいねつが あるひと",
    "強いだるさ": "からだが くるしい",
    "息苦しさ": "いきが くるしい",
    "ご高齢の方": "おじいさん おばあさん",
    "基礎疾患のある方": "ふだんから びょうきが あるひと",
    "妊娠中の方": "おなかに こどもが いるひと",
    "2日程度続いている": "<span><span>２</span>にち くらい</span> つづいている"
  }
}
</i18n>

<style module lang="scss">
.Flow {
  display: flex;
  flex-direction: row;
  padding: 20px 20px !important;
  @include card-container();
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
      }
    }
    &Case span:nth-child(1) {
      font-size: 24px;
      font-weight: bold;
      border-bottom: solid 3px $green-1;
    }
    &Case span:nth-child(1) > span:nth-child(1) {
      font-size: 41px;
      border-bottom: none;
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
      p {
        // TODO: この中のフォントの調整をしてほしい
        text-align: center;
        display: inline-block;
        margin: 0;
        font-weight: bold;
        font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        @include largerThan($large) {
          font-size: 20px;
        }
        span {
          font-size: calc(0.875rem + ((1vw - 7.68px) * 0.8929));
        }
      }
      i {
        position: absolute;
        top: -12px;
        left: -12px;
        background-color: $white;
      }
    }
  }
}
</style>
