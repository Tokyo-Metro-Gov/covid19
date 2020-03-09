<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon />
      <h2 class="Flow-Heading-Title">
        新型コロナウイルス感染症が心配なときに
      </h2>
      <PrinterButton :wrapper-class="'Flow-PullRight'" />
    </div>
    <div class="Flow-Card">
      <h2>
        新型コロナウイルス感染症にかかる相談窓口について
      </h2>
      <div class="Flow-Card-Images only-pc">
        <DesktopFlowSvg />
      </div>
      <div class="only-sp">
        <div class="Flow-Card-Parts">
          <div class="mb-5">
            <img
              src="/flow/sp/sp_flow_01_01@2x.png"
              alt="発症前２週間以内の出来ごとと症状／「新型コロナウイルス感染者」と濃厚接触をした方／発熱または呼吸器症状"
            />
          </div>
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_01_02@2x.png"
              alt="流行地域への渡航・居住歴がある方 ご本人か濃厚接触をした方／呼吸器症状かつ発熱37.5℃以上"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_02@2x.png"
              alt="一般の方／風邪のような症状・発熱37.5℃以上・強いだるさ・息苦しさ／４日以上続いている"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_03@2x.png"
              alt="ご高齢な方・基礎疾患のある方・妊娠中の方／風邪のような症状・発熱37.5℃以上・強いだるさ・息苦しさ／２日以上続いている"
            />
          </div>
          <div>
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_01_02_03_nav@2x.png"
                alt="新型コロナ受診相談窓口へ"
              />
            </a>
          </div>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_04@2x.png"
              alt="不安に思う方／微熱・軽い咳・感染の不安／新型コロナコールセンター 午前９時から午後９時（土日祝含む）"
            />
          </div>
          <div class="TelLink">
            <a href="tel:0570550571"
              ><img src="/flow/sp/sp_flow_tel_01@2x.png" alt="0570-550571"
            /></a>
          </div>
          <div class="mt-4">
            <a v-scroll-to="'#consult'" href="#consult">
              <img
                src="/flow/sp/sp_flow_04_nav@2x.png"
                alt="専門的な助言が必要な場合"
              />
            </a>
          </div>
        </div>
        <div id="consult" class="Flow-Card-Parts Flat">
          <h3 class="SodanHeader Title">
            新型コロナ受診相談窓口
          </h3>
          <p class="SodanHeader">
            帰国者・接触者電話相談センター
          </p>
          <div class="SodanHeader">
            <div class="SodanChip">
              24時間対応
            </div>
          </div>
          <dl>
            <div class="SodanHeijitsu">
              <dt class="Heijitsu">
                平日（日中）
              </dt>
              <dd>
                <a
                  class="Link"
                  href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
                  target="_blank"
                  rel="noopener"
                >
                  各保健所の電話番号は福祉保健局HPへ
                  <v-icon size="16">
                    mdi-open-in-new
                  </v-icon>
                </a>
              </dd>
            </div>
            <div class="SodanYakan">
              <dt class="Yakan">
                平日（夜間）
                <br />
                <span class="SodanTime">午後５時から翌朝午前９時</span>
                <br />
                土日祝 終日
              </dt>
              <dd class="TelLink">
                <a href="tel:0353204592">
                  <img
                    src="/flow/sp/sp_flow_tel_03@2x.png"
                    alt="03-5320-4592"
                  />
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <div class="Flow-Card-Parts">
          <div class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_06_01@2x.png"
              alt="新型コロナ受診相談窓口による相談結果／新型コロナ外来受診が必要と判断された場合／新型コロナ外来（帰国者・接触者外来）医師による判断"
            />
          </div>
          <div class="Col2Btn">
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#not_required'" href="#not_required">
                <img
                  src="/flow/sp/sp_flow_06_nav_01@2x.png"
                  alt="検査の必要なし"
                />
              </a>
            </div>
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#pcr'" href="#pcr">
                <img
                  src="/flow/sp/sp_flow_06_nav_02@2x.png"
                  alt="検査の必要あり"
                />
              </a>
            </div>
          </div>
          <div id="pcr" class="mx-2 mb-5">
            <img
              src="/flow/sp/sp_flow_06_02@2x.png"
              alt="PCR検査 東京都健康安全研究センター等"
            />
          </div>
          <div class="Col2Btn">
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#not_required'" href="#not_required">
                <img src="/flow/sp/sp_flow_06_nav_03@2x.png" alt="陰性" />
              </a>
            </div>
            <div class="mx-1 mb-5">
              <a v-scroll-to="'#hospitalized'" href="#hospitalized">
                <img src="/flow/sp/sp_flow_06_nav_04@2x.png" alt="陽性" />
              </a>
            </div>
          </div>
          <div id="not_required" class="mx-2">
            <img
              src="/flow/sp/sp_flow_06_03@2x.png"
              alt="新型コロナ外来受診が不要と判断された場合／自宅で安静に過ごす・一般の医療機関を受診／症状が良くならない場合は新型コロナ受診相談窓口に相談"
            />
          </div>
        </div>
        <div id="hospitalized" class="Flow-Card-Parts">
          <div class="Smaller">
            <img
              src="/flow/sp/sp_flow_06@2x.png"
              alt="入院となります／感染症指定医療機関等"
            />
          </div>
        </div>
      </div>
      <a
        href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
        target="_blank"
        rel="noopener"
        class="Flow-Card-Button"
      >
        詳細を見る(東京都福祉保健局)
        <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="20">
          mdi-open-in-new
        </v-icon>
      </a>
    </div>
  </div>
</template>

<script>
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton'
import DesktopFlowSvg from '@/components/DesktopFlowSvg.vue'
export default {
  components: { CovidIcon, PrinterButton, DesktopFlowSvg },
  head() {
    return {
      title: '新型コロナウイルス感染症が心配なときに'
    }
  }
}
</script>

<style lang="scss">
.Flow {
  margin-bottom: 20px;
  &-Heading {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    > svg {
      width: 30px;
      height: 30px;
      > path:not(:first-of-type) {
        fill: $gray-2;
      }
    }
    &-Title {
      @include font-size(30);
      font-weight: normal;
      color: $gray-2;
      margin-left: 8px;
    }
  }
  &-Card {
    display: flex;
    flex-direction: column;
    @include card-container();
    padding: 20px;
    margin-bottom: 20px;
    > h2 {
      @include card-h1();
      margin-bottom: 12px;
    }
    &-Images {
      text-align: center;
      > img {
        margin: 18px 0;
      }
    }
    &-Parts {
      @include card-container();
      padding: 30px 20px;
      margin-bottom: 20px;
      &.Flat {
        background-color: $gray-5;
      }
      .TelLink {
        width: 80%;
        margin: 0 auto;
      }
      .Link {
        @include text-link();
      }
      .SodanHeader {
        text-align: center;
        &.Title {
          @include font-size(24);
        }
      }
      .SodanChip {
        display: inline-block;
        background-color: $white;
        border-radius: 4px;
        padding: 8px 24px;
        margin: 0 auto 12px;
        color: $green-1;
        font-weight: bold;
      }
      .SodanHeijitsu {
        display: flex;
        align-items: center;
        padding: 12px 0;
        border-width: 0.5px 0;
        border-style: solid;
        border-color: $gray-4;
        .Heijitsu {
          width: 70%;
          margin-right: 5px;
        }
      }
      .SodanYakan {
        padding-top: 12px;
        .Yakan {
          text-align: center;
          .SodanTime {
            @include font-size(14);
          }
        }
      }
      .Col2Btn {
        display: flex;
      }
      .Smaller {
        width: 70%;
        margin: 0 auto;
      }
    }
    &-Button {
      @include button-text('md');
      margin: 12px auto 0;
      @include font-size(20);
      font-weight: 600;
      text-decoration: none;
      color: $green-1 !important;
      &:hover {
        color: $white !important;
      }
      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $green-1 !important;
      }
    }
  }
  &-PullRight {
    margin: 0 0 0 auto;
  }
}
@include largerThan($medium) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
@include lessThan($medium) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}
</style>
