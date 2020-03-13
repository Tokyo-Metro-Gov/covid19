<template>
  <div :class="$style.SpAdvisory">
    <h4 id="consult" :class="['mb-4 mt-n6', $style.Heading]">
      {{ $t('新型コロナ受診相談窓口') }}
      <small>{{ $t('帰国者・接触者電話相談センター') }}</small>
    </h4>
    <div :class="['px-6 py-2 mb-4', $style.ConsultationChip]">
      {{ $t('24時間対応') }}
    </div>
    <dl>
      <div :class="['py-3', $style.ConsultationDaytime]">
        <dt :class="$style.ConsultationDaytimeTitle">
          {{ $t('平日（日中）') }}
        </dt>
        <dd :class="$style.ConsultationDaytimeLink">
          <a
            :class="$style.Link"
            href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronasodan.html"
            target="_blank"
            rel="noopener"
          >
            {{ $t('各保健所の電話番号は福祉保健局HPへ') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
      <div :class="['pt-3', $style.ConsultationWeekend]">
        <dt :class="['mb-3', $style.ConsultationWeekendDescription]">
          <span :class="$style.ConsultationWeekendTitle">
            {{ $t('平日（夜間）') }}
          </span>
          {{ $t('午後5時から翌朝午前9時') }}
          <span :class="$style.ConsultationWeekendTitle">
            {{ $t('土日祝 終日') }}
          </span>
        </dt>
        <dd :class="$style.TelLink">
          <PhoneIcon :class="$style.TelLinkImg" alt="Phone" />
          <a href="tel:0353204592">
            03-5320-4592
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<i18n src="./FlowSpAdvisory.i18n.json"></i18n>

<script lang="ts">
import PhoneIcon from '@/static/flow/phone-24px.svg'

export default {
  components: { PhoneIcon }
}
</script>

<style module lang="scss">
.SpAdvisory {
  color: $gray-2;
  text-align: center;
}
.Heading {
  @include lessThan($small) {
    @include font-size(22);
  }
  @include largerThan($small) {
    @include font-size(24);
  }
  line-height: 1.5rem;
  white-space: pre-line;
  small {
    @include font-size(16);
  }
}
.Consultation {
  &Chip {
    display: inline-block;
    background-color: $white;
    border-radius: 4px;
    color: $green-1;
    font-weight: bold;
  }
  &Daytime {
    display: flex;
    align-items: center;
    border-width: 0.5px 0;
    border-style: solid;
    border-color: $gray-4;
    font-weight: bold;
    justify-content: space-around;
    &Title {
      flex-basis: 40%;
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(18);
      }
    }
    &Link {
      flex-basis: 55%;
      a {
        color: $gray-2;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  &Weekend {
    font-weight: bold;
    &Description {
      white-space: pre-line;
    }
    &Title {
      @include lessThan($small) {
        @include font-size(16);
      }
      @include largerThan($small) {
        @include font-size(18);
      }
    }
  }
}

.TelLink {
  @include font-size(24);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  &Img {
    width: 2rem;
  }
  a {
    color: $gray-2;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
