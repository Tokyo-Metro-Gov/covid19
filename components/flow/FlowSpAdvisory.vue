<template>
  <div>
    <h3 :class="[$style.SodanHeader, $style.Title]">
      新型コロナ受診相談窓口
    </h3>
    <p :class="$style.SodanHeader">
      帰国者・接触者電話相談センター
    </p>
    <div :class="$style.SodanHeader">
      <div :class="$style.SodanChip">
        24時間対応
      </div>
    </div>
    <dl>
      <div :class="$style.SodanHeijitsu">
        <dt :class="$style.Heijitsu">
          平日（日中）
        </dt>
        <dd>
          <a
            :class="$style.Link"
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
      <div :class="$style.SodanYakan">
        <dt :class="$style.Yakan">
          平日（夜間）
          <br />
          <span :class="$style.SodanTime">午後５時から翌朝午前９時</span>
          <br />
          土日祝 終日
        </dt>
        <dd :class="$style.TelLink">
          <a href="tel:0353204592">
            <img src="/flow/sp/sp_flow_tel_03@2x.png" alt="03-5320-4592" />
          </a>
        </dd>
      </div>
    </dl>
  </div>
</template>

<style module lang="scss">
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
  border-color: $gray-3;
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
.TelLink {
  width: 80%;
  margin: 0 auto;
}
.Link {
  @include text-link();
}
</style>
