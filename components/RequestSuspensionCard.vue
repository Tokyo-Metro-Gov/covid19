<template>
  <div class="RequestSuspension">
    <div class="RequestSuspension-heading">
      <h3 class="RequestSuspension-title">
        {{ $t('施設別休止要請について') }}
      </h3>
      <div class="RequestSuspension-link">
        <link-to-information-about-roadmap />
      </div>
    </div>
    <div class="RequestSuspension-content">
      <p>
        {{ $t('6月18日（木）をもって、全ての休業要請を終了しました。') }}
      </p>
      <p>
        {{
          $t(
            '※イベントの開催に当たっては、引き続き規模に応じた制限があります。'
          )
        }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToInformationAboutRoadmap from '@/components/LinkToInformationAboutRoadmap.vue'

export default Vue.extend({
  components: {
    LinkToInformationAboutRoadmap
  }
})
</script>

<style lang="scss" scoped>
.RequestSuspension {
  @include card-container();

  padding: 12px 12px 12px 22px;
  margin-bottom: 20px;

  .RequestSuspension-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .RequestSuspension-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
    }

    .RequestSuspension-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .RequestSuspension-content {
    @include font-size(14);

    p {
      margin: 0;
    }
  }
}
</style>
