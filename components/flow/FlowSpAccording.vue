<template>
  <div :class="[$style.container, $style.according]">
    <i18n tag="h4" :class="$style.heading" path="{advisory}による相談結果">
      <template v-slot:advisory>
        <span :class="[$style.fzLarge, $style.break]">
          {{ $t('新型コロナ受診相談窓口') }}
        </span>
      </template>
    </i18n>
    <i18n
      tag="p"
      :class="$style.diag"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <template v-slot:advice>
        <span :class="[$style.fzXLLarge, $style.break]">
          {{ $t('受診が必要') }}
        </span>
      </template>
    </i18n>
    <p :class="$style.decision">
      <template v-if="!langsWithoutOutpatient.includes($i18n.locale)">
        <span :class="$style.fzSmall">
          {{ $t('新型コロナ外来（帰国者・接触者外来）') }}
        </span>
        <span :class="[$style.fzLarge, $style.break]">{{
          $t('医師による判断')
        }}</span>
      </template>
      <template v-else>
        <span :class="[$style.fzLarge, $style.break]">
          {{ $t('Diagnosis by a doctor at a COVID-19 outpatient facility') }}
        </span>
      </template>
    </p>
    <div :class="[$style.rectContainer, $style.double]">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.result, $style.clickable]"
        href="#not_required"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <template v-slot:ifRequired>
              <span :class="[$style.fzXLarge, $style.break]">
                {{ $t('なし') }}
              </span>
            </template>
          </i18n>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <green-arrow-icon />
        </div>
      </a>
      <a
        v-scroll-to="'#pcr'"
        :class="[$style.rect, $style.result, $style.clickable, $style.bgYellow]"
        href="#pcr"
      >
        <p>
          <i18n path="検査の必要{ifRequired}">
            <template v-slot:ifRequired>
              <span :class="[$style.fzXLarge, $style.break]">
                {{ $t('あり') }}
              </span>
            </template>
          </i18n>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <arrow-downward-icon />
        </div>
      </a>
    </div>
    <p id="pcr" :class="[$style.diag, $style.hr]">
      <span :class="$style.break">
        <!-- 改行によって空白が入らないように-->
        <!-- eslint-disable -->
        <span :class="$style.fzXLLarge">{{ $t('PCR検査') }}</span>{{ $t('※') }}
        <!-- eslint-enable -->
      </span>
      <span :class="$style.break">
        {{ $t('東京都健康安全研究センター等') }}
      </span>
      <small :class="[$style.note, $style.fzSmall, $style.break]">
        {{
          $t(
            '※保険適用となる検査は、当面の間、院内感染防止等の観点から、「帰国者・接触者外来」等の医療機関で実施'
          )
        }}
      </small>
    </p>
    <div :class="[$style.rectContainer, $style.double]">
      <a
        v-scroll-to="'#not_required'"
        :class="[$style.rect, $style.result, $style.clickable]"
        href="#not_required"
      >
        <p>
          <span :class="$style.fzXLarge">{{ $t('陰性') }}</span>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <green-arrow-icon />
        </div>
      </a>
      <a
        v-scroll-to="'#hospitalized'"
        :class="[$style.rect, $style.result, $style.clickable, $style.bgYellow]"
        href="#hospitalized"
      >
        <p>
          <span :class="$style.fzXLarge">{{ $t('陽性') }}</span>
        </p>
        <div :class="$style.arrow" aria-hidden="true">
          <arrow-downward-icon />
        </div>
      </a>
    </div>
    <i18n
      id="not_required"
      tag="p"
      :class="[$style.diag, $style.hr]"
      path="新型コロナ外来 {advice} と判断された場合"
    >
      <template v-slot:advice>
        <span :class="[$style.break, $style.fzXLLarge]">
          {{ $t('受診が不要') }}
        </span>
      </template>
    </i18n>
    <div :class="[$style.rectContainer, $style.double]">
      <div :class="[$style.rect, $style.solution]">
        <div :class="$style.icon" aria-hidden="true">
          <house-icon />
        </div>
        <p>{{ $t('自宅で安静に過ごす') }}</p>
      </div>
      <div :class="[$style.rect, $style.solution]">
        <div :class="$style.icon" aria-hidden="true">
          <apartment-icon />
        </div>
        <p>{{ $t('一般の医療機関を受診') }}</p>
      </div>
      <div :class="[$style.rect, $style.consult]">
        <p>
          <i18n path="{getWorse}{advisory}に相談">
            <template v-slot:getWorse>
              <i18n path="症状が良くならない場合は">
                <span>{{ $t('症状が良くならない場合は') }}</span>
              </i18n>
            </template>
            <template v-slot:advisory>
              <strong :class="$style.advisory">
                {{ $t('新型コロナ受診相談窓口（日本語のみ）') }}
              </strong>
            </template>
          </i18n>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import ApartmentIcon from '@/static/flow/responsive/apartment.svg'
import HouseIcon from '@/static/flow/responsive/house.svg'
import ArrowDownwardIcon from '@/static/flow/responsive/arrow_downward.svg'
import GreenArrowIcon from '@/static/flow/responsive/arrow_green.svg'

export default {
  components: {
    ApartmentIcon,
    HouseIcon,
    ArrowDownwardIcon,
    GreenArrowIcon
  },
  computed: {
    langsWithoutOutpatient() {
      return ['en']
    }
  }
}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

.according {
  .heading {
    color: $green-1;
  }

  .diag {
    margin-top: px2vw(30);
    text-align: center;
    line-height: 1.5;

    &.hr {
      border-top: 1px solid $gray-4;
      padding-top: px2vw(30);
    }
  }

  .decision {
    margin-top: px2vw(20);
    padding: px2vw(20);
    background-color: $gray-2;
    border-radius: px2vw(6);
    color: $white;
    text-align: center;
    line-height: 1.65;
  }

  .note {
    margin-top: px2vw(10);
  }

  .fzXLLarge {
    font-size: px2vw(56);
  }
}

.rectContainer {
  .rect {
    min-height: px2vw(188);
    padding: px2vw(20) px2vw(10);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    flex: 0 0 48%;
    border-radius: px2vw(6);
    font-size: px2vw(24);
    text-decoration: none !important;
    color: inherit !important;
    text-align: center;
    font-weight: bold;

    &.result {
      // icon
      padding-bottom: px2vw((56 + 20 * 2));
      position: relative;
    }

    &.solution {
      border: px2vw(3) solid $gray-4;
      // icon
      padding-top: px2vw((46 + 20 * 2));
      position: relative;
    }

    &.consult {
      border: px2vw(3) solid $green-1;
      flex-basis: 100%;
    }

    &.bgYellow {
      background-color: #ffe200;
    }

    &:nth-child(n + 3) {
      margin-top: px2vw((486 - 233 - 233));
    }

    .large {
      font-size: px2vw(42);
    }

    .advisory {
      font-size: px2vw(38);
      display: block;
      margin-top: px2vw(10);
      margin-bottom: px2vw(10);
    }

    .line {
      margin-top: px2vw(5);
      display: block;
    }

    .arrow,
    .icon {
      margin: 0 auto;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .arrow {
      width: px2vw(56);
      height: px2vw(56);
      bottom: px2vw(20);
    }

    .icon {
      width: px2vw(46);
      height: px2vw(46);
      top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .according {
    .diag {
      margin-top: px2vw(30, $vw);

      &.hr {
        padding-top: px2vw(30, $vw);
      }
    }

    .decision {
      margin-top: px2vw(20, $vw);
      padding: px2vw(20, $vw);
      border-radius: px2vw(6, $vw);
    }

    .note {
      text-align: left;
      margin-top: px2vw(10, $vw);
    }

    .fzXLLarge {
      font-size: px2vw(56, $vw);
    }
  }

  .rectContainer {
    .rect {
      min-height: px2vw(188, $vw);
      padding: px2vw(20, $vw) px2vw(10, $vw);
      border-radius: px2vw(6, $vw);
      font-size: px2vw(24, $vw);

      &.result {
        padding-bottom: px2vw((56 + 20 * 2), $vw);
      }

      &.solution {
        border: px2vw(3, $vw) solid $gray-4;
        padding-top: px2vw((46 + 20 * 2), $vw);
      }

      &.consult {
        border: px2vw(3, $vw) solid $green-1;
      }

      &:nth-child(n + 3) {
        margin-top: px2vw((486 - 233 - 233), $vw);
      }

      .large {
        font-size: px2vw(42, $vw);
      }

      .advisory {
        font-size: px2vw(38, $vw);
        margin-top: px2vw(10, $vw);
        margin-bottom: px2vw(10, $vw);
      }

      .line {
        margin-top: px2vw(5, $vw);
      }

      .arrow {
        width: px2vw(56, $vw);
        height: px2vw(56, $vw);
        bottom: px2vw(20, $vw);
      }

      .icon {
        width: px2vw(46, $vw);
        height: px2vw(46, $vw);
        top: px2vw(20, $vw);
      }
    }
  }
}
</style>
