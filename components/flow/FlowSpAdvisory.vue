<template>
  <div>
    <h3 :class="[$style.AlignCenter, $style.FontSize22]">
      新型コロナ受診相談窓口
    </h3>
    <p :class="$style.AlignCenter">
      帰国者・接触者電話相談センター
    </p>
    <div :class="$style.AlignCenter">
      <div :class="$style.ConsultationChip">
        24時間対応
      </div>
    </div>
    <dl>
      <div :class="$style.ConsultationDaytime">
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
      <div :class="$style.PaddingTop12">
        <dt :class="$style.AlignCenter">
          平日（夜間）
          <br />
          <span :class="$style.FontSize14">午後5時から翌朝午前9時</span>
          <br />
          土日祝 終日
        </dt>
        <dd :class="[$style.TelLink, $style.FontSize24]">
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
@each $size in 14, 22, 24 {
  .FontSize#{$size} {
    @include font-size($size);
  }
}
.AlignCenter {
  text-align: center;
}
.PaddingTop12 {
  padding-top: 12px;
}
.ConsultationChip {
  display: inline-block;
  background-color: $white;
  border-radius: 4px;
  padding: 8px 24px;
  margin: 0 auto 12px;
  color: $green-1;
  font-weight: bold;
}
.ConsultationDaytime {
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-width: 0.5px 0;
  border-style: solid;
  border-color: $gray-4;
  &Title {
    width: 70%;
    margin-right: 5px;
  }
}
.TelLink {
  font-weight: bold;
  display: flex;
  justify-content: center;
  a {
    color: $gray-2;
    text-decoration: none;
  }
}
.Link {
  @include text-link();
}
</style>
