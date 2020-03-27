<template>
  <div :class="$style.FlowCard">
    <h3 :class="['mb-3', $style.FlowCardHeading]">
      {{ $t('相談・受診前に心がけていただきたいこと') }}
    </h3>
    <div :class="$style.Knowledge">
      <ul :class="$style.fzRegular">
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

    <h3 :class="['mb-4', $style.FlowCardHeading]">
      {{ $t('帰国者・相談者相談センターにご相談いただく目安') }}
    </h3>
    <div :class="$style.FlowCard">
      <flow-sp-past />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-general />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-elder />
    </div>
    <div :class="$style.FlowCard">
      <flow-sp-suspect />
    </div>
    <div
      :class="[
        $style.FlowCard,
        $style.FlowCardGrayBg,
        $style.ResetMarginBottom
      ]"
    >
      <flow-sp-advisory />
    </div>
    <div :class="[$style.Annotations]">
      <p :class="$style.fzSmall">
        {{
          $t(
            '＊妊婦の方については念のため、重症化しやすい方と同様に、早めに帰国者・接触者センターにご相談ください。'
          )
        }}
      </p>
      <p :class="$style.fzSmall">
        {{
          $t(
            '＊小児については現時点で重症化しやすいとの報告はなく、新型コロナウイルス感染症については目安どおりの対応をお願いします。'
          )
        }}
      </p>
      <p :class="$style.fzRegular">
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

    <h3 :class="['mb-3', $style.FlowCardHeading]">
      {{ $t('相談後、医療機関にかかる時のお願い') }}
    </h3>
    <div :class="$style.Knowledge">
      <ul :class="$style.fzRegular">
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

    <h3 :class="['mb-3', $style.FlowCardHeading]">
      {{ $t('帰国者、接触者センター（各保健所）一覧') }}
    </h3>
    <div :class="[$style.OuterUpper, $style.HealthCenterList]">
      <ul :class="$style.fzRegular">
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

      <div class="scroll-table-container">
        <table :class="[$style.fzNormal, $style.HealthCenterListTable, 'mt-4']">
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
                <a href="tel:0177395421" :class="$style.TelLink">
                  017-739-5421
                </a>
              </td>
              <td>{{ $t('平内町、今別町、蓬田村、外ヶ浜町') }}</td>
            </tr>
            <tr>
              <td>{{ $t('弘前保健所') }}</td>
              <td>
                <a href="tel:0172338521" :class="$style.TelLink">
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
                <a href="tel:0178275111" :class="$style.TelLink">
                  0178-27-5111
                </a>
              </td>
              <td>
                {{
                  $t(
                    '三戸町、五戸町、田子町、南部町、階上町、新郷村、おいらせ町'
                  )
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('五所川原保健所') }}</td>
              <td>
                <a href="tel:0173342108" :class="$style.TelLink">
                  0173-34-2108
                </a>
              </td>
              <td>
                {{
                  $t('五所川原市、つがる市、鯵ヶ沢町、深浦町、鶴田町、中泊町')
                }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('上十三保健所') }}</td>
              <td>
                <a href="tel:0176223510" :class="$style.TelLink">
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
                <a href="tel:0175311891" :class="$style.TelLink">
                  0175-31-1891
                </a>
              </td>
              <td>{{ $t('むつ市、大間町、東通村、風間浦村、佐井村') }}</td>
            </tr>
            <tr>
              <td>{{ $t('青森市保健所') }}</td>
              <td>
                <a href="tel:0177655280" :class="$style.TelLink">
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
                <a href="tel:0178432291" :class="$style.TelLink">
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
    </div>

    <h3 :class="['mb-3', $style.FlowCardHeading]">
      {{ $t('厚生労働省電話相談窓口（コールセンター）のご案内') }}
    </h3>
    <p :class="$style.fzRegular">
      {{
        $t(
          '厚生労働省でも新型コロナウイルスに関する電話相談窓口を開設しています。'
        )
      }}
    </p>
    <div
      :class="[
        $style.FlowCard,
        $style.FlowCardGrayBg,
        $style.ResetMarginBottom
      ]"
    >
      <flow-sp-advisory2 />
    </div>
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

import FlowSpPast from './FlowSpPast.vue'
import FlowSpGeneral from './FlowSpGeneral.vue'
import FlowSpElder from './FlowSpElder.vue'
import FlowSpSuspect from './FlowSpSuspect.vue'
import FlowSpAdvisory from './FlowSpAdvisory.vue'
import FlowSpAdvisory2 from './FlowSpAdvisory2.vue'

export default {
  components: {
    FlowSpPast,
    FlowSpGeneral,
    FlowSpElder,
    FlowSpSuspect,
    FlowSpAdvisory,
    FlowSpAdvisory2
  },
  mounted() {
    // ハッシュつきのURLにアクセスされたらすぐに遷移する
    const hash = this.$route.hash
    if (hash !== '') {
      VueScrollTo.scrollTo(hash, 1000, { offset: -72 }) // NOTE: nuxt.config.tsと同じoffset
    }
  }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

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
  }

  &GrayBg {
    background-color: $gray-5;
    box-shadow: none;
    border: none !important; // FIXME: card-containerにてimportantが指定されている
  }
}

.ResetMarginBottom {
  margin-bottom: 0;
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

@mixin spListStyle {
  li {
    margin-bottom: 1em;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.Knowledge {
  margin-bottom: 24px !important;

  ul {
    @include flowText($green-1, bolder);

    list-style: none;
    margin-left: 1em;
    padding: 0;
    text-indent: -1.15em;

    @include spListStyle;

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

.Annotations {
  margin-bottom: 24px !important;

  p {
    @include flowText($gray-1, normal);

    &:first-of-type {
      margin: 16px 0;
    }

    &:last-of-type {
      color: $green-1 !important;
      font-weight: bolder;
      margin-bottom: 0;
    }
  }
}

.HealthCenterList {
  margin-bottom: 24px !important;

  ul {
    @include flowText($gray-1, normal);
    @include spListStyle;
  }

  &Table {
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

.TelLink {
  margin-left: 0 !important;
  text-decoration: none;
}
</style>

<style lang="scss" scoped>
.scroll-table-container {
  overflow: scroll;
  white-space: nowrap;
}
</style>
