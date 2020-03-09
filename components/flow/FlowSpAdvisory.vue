<template>
  <div :class="$style.SpAdvisory">
    <h4 id="consult" :class="['mb-4', $style.Heading]">
      新型コロナ受診相談窓口<br />
      <small>帰国者・接触者電話相談センター</small>
    </h4>
    <div :class="['px-6 py-2 mb-4', $style.ConsultationChip]">
      24時間対応
    </div>
    <dl>
      <div :class="['py-3', $style.ConsultationDaytime]">
        <dt :class="$style.ConsultationDaytimeTitle">
          平日（日中）
        </dt>
        <dd>
          <a
            :class="$style.Link"
            href="https://www.fukushihoken.metro.tokyo.lg.jp/iryo/kansen/coronaConsultation.html"
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
      <div :class="['pt-3', $style.ConsultationWeekend]">
        <dt class="mb-3">
          <span :class="$style.ConsultationWeekendTitle">平日（夜間）</span>
          <br />
          午後5時から翌朝午前9時
          <br />
          <span :class="$style.ConsultationWeekendTitle">土日祝 終日</span>
        </dt>
        <dd :class="$style.TelLink">
          <img src="/flow/phone-24px.svg" alt="Phone" />
          <a href="tel:0353204592">
            03-5320-4592
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<style module lang="scss">
.SpAdvisory {
  color: $gray-2;
  text-align: center;
}
.Heading {
  @include font-size(24);
  line-height: 1.5rem;
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
    &Title {
      width: 70%;
      margin-right: 5px;
      @include font-size(18);
    }
    .Link {
      color: $gray-2;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  &Weekend {
    font-weight: bold;
    &Title {
      @include font-size(18);
    }
  }
}

.TelLink {
  @include font-size(24);
  font-weight: bold;
  display: flex;
  justify-content: center;
  img {
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
