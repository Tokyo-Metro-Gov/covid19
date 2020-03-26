<template>
  <div :class="$style.FlowCard">
    <h3>{{ $t('相談・受診前に心がけていただきたいこと') }}</h3>
    <div :class="[$style.OuterUpper, $style.Knowledge]">
      <ul>
        <li>
          {{
            $t(
              '発熱等の風邪症状がみられるときには、学校や会社を休み外出を控える。'
            )
          }}
        </li>
        <li>
          {{ $t('発熱等の風邪症状がみられたら、毎日、体温を測定しておく。') }}
        </li>
      </ul>
    </div>
    <h3>{{ $t('帰国者・相談者相談センターにご相談いただく目安') }}</h3>
    <div :class="[$style.Outer]">
      <div :class="[$style.CardBlock, $style.Past]">
        <flow-pc-past />
      </div>
      <div :class="[$style.CardBlock, $style.Days]">
        <flow-pc-days />
      </div>
      <div :class="[$style.CardBlock, $style.CardBlockCenter, $style.Suspect]">
        <flow-pc-suspect />
      </div>
      <div :class="$style.Advisory">
        <flow-pc-advisory />
      </div>
      <div :class="$style.Suspect2">
        <flow-pc-suspect2 />
      </div>
    </div>
    <div :class="[$style.OuterUpper, $style.Annotations]">
      <p>
        {{
          $t(
            '＊妊婦の方については念のため、重症化しやすい方と同様に、早めに帰国者・接触者センターにご相談ください。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '＊小児については現時点で重症化しやすいとの報告はなく、新型コロナウイルス感染症については目安どおりの対応をお願いします。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'なお、現時点では新型コロナウイルス感染症以外の病気の方が圧倒的に多い状況です。'
          )
        }}
        <br />
        {{
          $t(
            'インフルエンザ等の心配があるときには、通常と同様に、かかりつけ医等にご相談ください。'
          )
        }}
      </p>
    </div>
    <h3>{{ $t('相談後、医療機関にかかる時のお願い') }}</h3>
    <div :class="[$style.OuterUpper, $style.Knowledge]">
      <ul>
        <li>
          {{
            $t(
              '帰国者・接触者センターから受診をすすめられた医療機関を受診してください。複数の医療機関を受診することはお控えください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '医療機関を受診する際には、マスクを着用するほか、手洗いや咳エチケット（咳やくしゃみをする際に、マスクやティッシュ・ハンカチ、袖を使って、口や鼻をおさえる）の徹底をお願いします。'
            )
          }}
        </li>
      </ul>
    </div>
    <h3>{{ $t('帰国者、接触者相談センター（各保健所）一覧') }}</h3>
    <div :class="[$style.OuterUpper, $style.HealthCenterList]">
      <ul class="mb-3">
        <li>
          {{
            $t(
              '帰国者・接触者センターは、感染が疑われる方について、医療機関の紹介や連絡方法をお伝えし、受診調整を行います。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '今後国内での感染を広げないためにも、上記のような症状がある場合には、医療機関を受診する前にまずは各保健所に設置している「帰国者・接触者相談センター」へご連絡ください。'
            )
          }}
        </li>
      </ul>
      <table :class="[$style.HealthCenterListTable, 'mt-4']">
        <thead>
          <tr>
            <th>{{ $t('保健所名') }}</th>
            <th>{{ $t('電話番号') }}</th>
            <th>{{ $t('管轄市区町村') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ $t('東地方保健所') }}</td>
            <td>
              <a href="tel:0177395421" :class="$style.TelLinkTextNormal">
                017-739-5421
              </a>
            </td>
            <td>{{ $t('平内町、今別町、蓬田村、外ヶ浜町') }}</td>
          </tr>
          <tr>
            <td>{{ $t('弘前保健所') }}</td>
            <td>
              <a href="tel:0172338521" :class="$style.TelLinkTextNormal">
                0172-33-8521
              </a>
            </td>
            <td>
              {{
                $t(
                  '弘前市、黒石市、平川市、西目屋村、藤原町、大鰐町、田舎館村、板柳町'
                )
              }}
            </td>
          </tr>
          <tr>
            <td>{{ $t('三戸地方保健所') }}</td>
            <td>
              <a href="tel:0178275111" :class="$style.TelLinkTextNormal">
                0178-27-5111
              </a>
            </td>
            <td>
              {{
                $t('三戸町、五戸町、田子町、南部町、階上町、新郷村、おいらせ町')
              }}
            </td>
          </tr>
          <tr>
            <td>{{ $t('五所川原保健所') }}</td>
            <td>
              <a href="tel:0173342108" :class="$style.TelLinkTextNormal">
                0173-34-2108
              </a>
            </td>
            <td>
              {{ $t('五所川原市、つがる市、鯵ヶ沢町、深浦町、鶴田町、中泊町') }}
            </td>
          </tr>
          <tr>
            <td>{{ $t('上十三保健所') }}</td>
            <td>
              <a href="tel:0176223510" :class="$style.TelLinkTextNormal">
                0176-22-3510
              </a>
            </td>
            <td>
              {{
                $t(
                  '十和田市、三沢町、野辺地町、七戸町、六戸町、横浜町、東北町、六ヶ所村'
                )
              }}
            </td>
          </tr>
          <tr>
            <td>{{ $t('むつ保健所') }}</td>
            <td>
              <a href="tel:0175311891" :class="$style.TelLinkTextNormal">
                0175-31-1891
              </a>
            </td>
            <td>{{ $t('むつ市、大間町、東通村、風間浦村、佐井村') }}</td>
          </tr>
          <tr>
            <td>{{ $t('青森市保健所') }}</td>
            <td>
              <a href="tel:0177655280" :class="$style.TelLinkTextNormal">
                017-765-5280
              </a>
            </td>
            <td>
              {{ $t('青森市') }}
              <a
                href="http://www.city.aomori.aomori.jp/"
                target="_blank"
                rel="noopener"
              >
                {{ $t('青森市ホームページへ') }}
                <v-icon
                  role="img"
                  aria-hidden="false"
                  :aria-label="$t('別タブで開く')"
                  class="MenuList-ExternalIcon"
                  size="14"
                >
                  mdi-open-in-new
                </v-icon>
              </a>
            </td>
          </tr>
          <tr>
            <td>{{ $t('八戸市保健所') }}</td>
            <td>
              <a href="tel:0178432291" :class="$style.TelLinkTextNormal">
                0178-43-2291
              </a>
            </td>
            <td>
              {{ $t('八戸市') }}
              <a
                href="https://www.city.hachinohe.aomori.jp/"
                target="_blank"
                rel="noopener"
              >
                {{ $t('八戸市ホームページへ') }}
                <v-icon
                  role="img"
                  aria-hidden="false"
                  :aria-label="$t('別タブで開く')"
                  class="MenuList-ExternalIcon"
                  size="14"
                >
                  mdi-open-in-new
                </v-icon>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h3>{{ $t('厚生労働省電話相談窓口（コールセンター）のご案内') }}</h3>
    <div :class="$style.CallCenter">
      <p>
        {{
          $t(
            '厚生労働省でも新型コロナウイルスに関する電話相談窓口を開設しています。'
          )
        }}
      </p>
      <p>
        {{ $t('電話番号') }}
        <a href="tel:0120565653" :class="$style.TelLinkTextBolder">
          0120-565-653
        </a>
        {{ $t('（フリーダイヤル）') }}
      </p>
      <p>{{ $t('受付時間 9時00分〜21時00分（土日・祝日も実施）') }}</p>
      <p>
        {{
          $t(
            '聴覚に障害のある方をはじめ、電話でのご相談が難しい方 FAX 03-3595-2756'
          )
        }}
      </p>
    </div>
  </div>
</template>

<script>
import FlowPcPast from './FlowPcPast.vue'
import FlowPcDays from './FlowPcDays.vue'
import FlowPcSuspect from './FlowPcSuspect.vue'
import FlowPcSuspect2 from './FlowPcSuspect2.vue'
import FlowPcAdvisory from './FlowPcAdvisory.vue'
// import FlowPcAdvisory2 from './FlowPcAdvisory2.vue'
// import FlowPcRequired from './FlowPcRequired.vue'
// import FlowPcPcr from './FlowPcPcr.vue'
// import FlowPcNotRequired from './FlowPcNotRequired.vue'
// import FlowPcHospitalized from './FlowPcHospitalized.vue'

export default {
  components: {
    FlowPcPast,
    FlowPcDays,
    FlowPcSuspect,
    FlowPcAdvisory,
    FlowPcSuspect2
    // FlowPcRequired,
    // FlowPcPcr,
    // FlowPcNotRequired,
    // FlowPcHospitalized
  }
}
</script>

<style module lang="scss">
.FlowCard {
  display: flex;
  flex-direction: column;

  @include card-container();

  padding: 20px;
  margin-bottom: 20px;
  word-break: break-word;
  hyphens: auto;

  > h3 {
    color: $gray-2;
    font-size: 1.5rem;
    margin-bottom: 7px;
  }

  &GrayBg {
    background-color: $gray-5;
  }
}

.Outer {
  display: grid;
  grid-gap: 12px;

  &Upper {
    grid-template-columns: 70% 30%;
    -ms-grid-columns: 70% 12px 30%;
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }

    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
    }

    & > *:nth-child(3) {
      -ms-grid-column: 1;
      -ms-grid-row: 5;
    }

    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }

    & > *:nth-child(5) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }

    margin-bottom: 36px;
  }

  &Lower {
    grid-template-columns: repeat(2, calc(50% - 6px));
    -ms-grid-columns: calc(50% - 6px) 12px calc(50% - 6px);
    grid-template-rows: repeat(3, auto);
    -ms-grid-rows: auto 12px auto 12px auto;
    // HACK: IEでGridの順番がうまくいかない対応
    // https://github.com/tokyo-metropolitan-gov/covid19/issues/1313
    & > *:nth-child(1) {
      -ms-grid-column: 1;
      -ms-grid-row: 1;
    }

    & > *:nth-child(2) {
      -ms-grid-column: 1;
      -ms-grid-row: 3;
      -ms-grid-row-span: 3;
    }

    & > *:nth-child(3) {
      -ms-grid-column: 3;
      -ms-grid-row: 1;
      -ms-grid-row-span: 3;
    }

    & > *:nth-child(4) {
      -ms-grid-column: 3;
      -ms-grid-row: 5;
    }
  }
}

.Title {
  @include font-size(28);

  color: $green-1;

  &Small {
    @include font-size(20);
  }

  &Large {
    @include font-size(28);
  }
}

.CardBlock {
  position: relative;

  &::after {
    content: url('/flow/flow_arrow.svg');
    position: absolute;
    bottom: 40%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
  }

  &Center::after {
    bottom: 40%;
  }

  &Required::after {
    bottom: -30px;
    right: auto;
    left: 22%;
    transform: rotate(90deg);
  }

  &Required::before {
    content: url('/flow/flow_arrow.svg');
    position: absolute;
    bottom: 12%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
  }

  &Pcr::after {
    bottom: auto;
    top: 15%;
    transform: rotateZ(-30deg);
  }

  &Pcr::before {
    content: url('/flow/flow_arrow.svg');
    position: absolute;
    bottom: 15%;
    right: -30px;
    z-index: 1;
    display: block;
    width: 46px;
    height: 46px;
    transform: rotateZ(30deg);
  }
}

.Past {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.Days {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.Suspect {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.Suspect2 {
  // grid-column: 2 / 3;
  width: 100% !important;
  grid-row: 3 / 4;
  position: relative;
}

.Advisory {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  position: relative;
}

.Advisory2 {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.Required {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.Pcr {
  grid-column: 1 / 2;
  grid-row: 2 / 4;
}

.NotRequired {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
}

.Hospitalized {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}

.Note {
  margin: 16px 0;
}

@mixin flowText($color: $gray-1, $font-weight: normal) {
  color: $color !important;
  font-weight: $font-weight;
}

@mixin tableCellStyle($font-weight: normal) {
  border: solid 1px #e5e5e5;
  padding: 0.5em 1em;
  @include flowText($gray-1, $font-weight);
}

@mixin telLink {
  margin-left: 0 !important;
  text-decoration: none;
  outline: 1px dotted #707070;
}

.Knowledge {
  ul {
    @include flowText($green-1, bolder);

    list-style: none;
    margin: 0;
    padding: 0;

    > li::before {
      content: '';
      top: -2px;
      width: 12px;
      height: 12px;
      display: inline-block;
      background-color: $green-1;
      border-radius: 50%;
    }
  }
}

.HealthCenterList {
  ul {
    @include flowText($gray-1, normal);

    font-size: 0.9em;
  }

  &Table {
    margin-left: 1em;
    border-collapse: collapse;
    border-spacing: 0;
    border: solid 1px #e5e5e5;

    thead {
      background-color: #efefef;

      > tr > th {
        @include tableCellStyle(bolder);
      }
    }

    tbody > tr > td {
      @include tableCellStyle(normal);

      a {
        margin-left: 1em;
      }
    }
  }
}

.Annotations {
  p {
    @include flowText($gray-1, normal);

    &:first-of-type {
      margin: 16px 0 0;
    }

    &:not(:last-of-type) {
      font-size: 0.9em;
    }

    &:last-of-type {
      color: $green-1 !important;
      font-weight: bolder;
      margin-bottom: 0;
    }
  }
}

.CallCenter {
  @include flowText($gray-1, bolder);

  font-size: 0.9em;

  p:first-of-type {
    font-weight: normal;
  }

  p:not(:last-of-type) {
    &:nth-of-type(n + 2) {
      margin: 0;
    }
  }
}

.TelLink {
  &TextNormal {
    @include telLink;
    @include flowText($gray-1, normal);
  }

  &TextBolder {
    @include telLink;
    @include flowText($gray-1, bolder);
  }
}
</style>
