<template>
  <div class="Flow">
    <h1 class="Flow-Heading">
      感染症が心配な方へ
    </h1>
    <div class="Flow-Card">
      <h2>
        新型コロナウイルス感染症にかかる相談窓口について
      </h2>
      <div class="Flow-Card-Images">
        <img src="/flowing-pc.png" alt="相談のフロー" class="only-pc" />
        <img src="/flowing-sp.png" alt="相談のフロー" class="only-sp" />
      </div>
      <div class="Flow-Card-Button">
        <span>
          詳細を見る(東京都福祉保健局)
          <v-icon class="Flow-Card-Button-ExternalLinkIcon" size="15">
            mdi-open-in-new
          </v-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.Flow {
  padding: 20px;
  margin-bottom: 20px;
  background-color: $gray-5;
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
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

@media screen and (max-width: 480px) {
  .only-sp {
    display: block;
  }
  .only-pc {
    display: none;
  }
}

@media screen and (min-width: 481px) {
  .only-sp {
    display: none;
  }
  .only-pc {
    display: block;
  }
}
</style>
