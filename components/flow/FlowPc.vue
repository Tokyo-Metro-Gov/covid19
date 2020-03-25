<template>
  <div :class="$style.FlowCard">
    <h3>{{ $t('帰国者・相談者相談センターにご相談いただく目安') }}</h3>
    <div :class="[$style.Outer, $style.OuterUpper]">
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
    <h3>
      <i18n
        :class="$style.TitleSmall"
        tag="span"
        path="{advisory}による相談結果"
      >
        <span :class="$style.TitleLarge" place="advisory">
          {{ $t('新型コロナ受診相談窓口') }}
        </span>
      </i18n>
    </h3>
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
</style>
