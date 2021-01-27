<template>
  <div class="InfectionMedicalcareprovisionStatus">
    <div class="InfectionMedicalcareprovisionStatus-heading">
      <h3 class="InfectionMedicalcareprovisionStatus-title">
        {{ $t('感染状況・医療提供体制（サマリ）') }} ****年**月**日時点
      </h3>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">感染状況</div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('新規陽性者') }}<span>*,***人</span> / {{ $t('検査数')
        }}<span>**,***件</span>（**/**参考値）、
        {{ $t('うち65歳以上の高齢者数') }}<span>***人</span>、
        {{ $t('死亡者数') }}<span>*人</span>、
        {{ $t('都外からの持込検体による陽性数') }}<span>**</span>
      </div>
    </div>
    <div class="InfectionMedicalcareprovisionStatus-Box">
      <div class="InfectionMedicalcareprovisionStatus-Headline">
        {{ $t('医療提供体制') }}
      </div>
      <div class="InfectionMedicalcareprovisionStatus-description">
        {{ $t('入院数') }}<span>*,***人</span> （{{ $t('確保病床数')
        }}<span>*,***床</span>）、 {{ $t('うち重症者数')
        }}<span>***人</span> （{{ $t('うち重症病床数') }}<span>***床</span>）
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style lang="scss">
.InfectionMedicalcareprovisionStatus {
  @include card-container();

  padding: 10px;
  margin-bottom: 10px;

  .InfectionMedicalcareprovisionStatus-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    .InfectionMedicalcareprovisionStatus-title {
      display: flex;
      align-items: center;
      padding: 5px;
      color: $gray-2;

      @include card-h2();
    }
  }

  .InfectionMedicalcareprovisionStatus-Box {
    overflow: hidden;
    font-weight: bold;

    .InfectionMedicalcareprovisionStatus-Headline {
      float: left;
      text-align: center;
      width: 10em;
      border: 1px solid;
      border-color: #000;
      margin-bottom: 1px;
      color: $gray-3;

      @include font-size(14);
    }

    .InfectionMedicalcareprovisionStatus-description {
      @include font-size(14);

      padding: 3px 0 0 0;

      > span {
        color: #008830;
      }

      > a {
        @include text-link();

        text-decoration: none;
      }
    }
  }
}
</style>
