<template>
  <div class="Flow">
    <div class="Flow-Heading">
      <CovidIcon />
      <h1>新型コロナウイルス感染症が心配なときに</h1>
    </div>
    <div class="Flow-Card">
      <h2>
        新型コロナウイルス感染症にかかる相談窓口について
      </h2>
      <div class="Flow-Card-Images">
        <img src="/flow.png" alt="相談のフロー" class="only-pc" />
        <img src="/flow_sp.png" alt="相談のフロー" class="only-sp" />
      </div>
      <a
        href="https://www.metro.tokyo.lg.jp/tosei/tosei/news/2019-ncov.html"
        target="_blank"
      >
        <div class="Flow-Card-Button">
          <span>
            詳細を見る(東京都福祉保健局)
            <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="15">
              mdi-open-in-new
            </v-icon>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import CovidIcon from '@/static/covid.svg'

export default {
  components: { CovidIcon }
}
</script>

<style lang="scss">
.Flow {
  padding: 20px;
  margin-bottom: 20px;
  background-color: $gray-5;
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
    > h1 {
      @include font-size(30);
      font-weight: normal;
      color: $gray-2;
      margin-left: 4px;
    }
  }
  &-Card {
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
        width: 100%;
        margin: 18px auto;
        &.only-sp {
          margin: 0 auto;
        }
      }
    }
    &-Button {
      flex: 1 0 auto;
      text-align: center;
      margin-top: 12px;
      > span {
        @include button-text('md');
      }
      &-ExternalLinkIcon {
        margin-left: 2px;
        color: $green-1 !important;
      }
    }
  }
}
@include largerThan($small) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
@include lessThan($small) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}
</style>
