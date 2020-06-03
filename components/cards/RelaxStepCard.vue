<template>
  <div class="RelaxStep">
    <div class="RelaxStep-heading">
      <h3 class="RelaxStep-title">
        {{ $t('施設別休止要請の緩和ステップ') }}
      </h3>
      <div class="RelaxStep-link">
        <link-to-information-about-roadmap />
      </div>
    </div>
    <div class="RelaxStep-content">
      <div class="RelaxStep-description">
        <p>
          {{
            $t(
              '休業要請緩和のステップについては、令和2年5月22日時点の状況を「ステップ0」とし、施設の特性やクラスター発生歴等から判断して、「ステップ3」までの4段階を設定し、段階的に施設の休業要請を緩和します。'
            )
          }}
        </p>
      </div>
      <div>
        <ul class="RelaxStep-steps">
          <li v-for="i in steps" :key="i" class="RelaxStep-steps">
            <p v-if="i === RelaxStep.step" class="RelaxStep-steps-on">
              {{ $t('ステップ {num}', { num: i }) }}
            </p>
            <p v-else class="RelaxStep-steps-off">
              {{ $t('ステップ {num}', { num: i }) }}
            </p>
          </li>
        </ul>
        <p class="RelaxStep-changed-text">
          {{
            $t('{date} ステップ {num}に移行', {
              date: formattedDayForDisplay,
              num: RelaxStep.step
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToInformationAboutRoadmap from '@/components/LinkToInformationAboutRoadmap.vue'
import RelaxStep from '@/data/tokyo_alert.json'

export default Vue.extend({
  components: {
    LinkToInformationAboutRoadmap
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      RelaxStep,
      steps: [0, 1, 2, 3]
    }
  },
  computed: {
    formattedDayForDisplay() {
      return this.$d(new Date(RelaxStep.changed), 'dateWithoutYear')
    }
  }
})
</script>

<style lang="scss">
.RelaxStep {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .RelaxStep-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .RelaxStep-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .RelaxStep-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .RelaxStep-content {
    @include largerThan($medium) {
      display: flex;
    }

    .RelaxStep-description,
    .RelaxStep-steps {
      display: block;
      @include font-size(14);
    }

    .RelaxStep-description {
      @include largerThan($medium) {
        width: 50%;
      }
    }

    .RelaxStep-steps {
      position: relative;
      list-style: none;
      font-weight: bold;
      box-sizing: border-box;
      white-space: nowrap;
      width: 100%;

      > li {
        display: inline-block;
        width: calc(100% / 4);
      }

      > li:first-child {
        > p {
          border-radius: 5px 0 0 5px;
        }
        > p::before {
          margin-top: -9999px;
          margin-left: -9999px;
        }
      }

      &-on {
        margin-left: 16px;
        border-top: $green-1 solid 5px;
        border-bottom: $green-1 solid 5px;
        border-left: $green-1 solid 25px;
        border-right: $green-1 solid 10px;
        color: $white;
        background-color: $green-1;
      }

      &-off {
        margin-left: 16px;
        border-top: $gray-4 solid 5px;
        border-bottom: $gray-4 solid 5px;
        border-left: $gray-4 solid 25px;
        border-right: $gray-4 solid 10px;
        color: $gray-2;
        background-color: $gray-4;
      }

      &-on::after {
        position: absolute;
        content: '';
        margin-top: -5px;
        margin-left: 10px;
        border-top: 15.5px solid transparent;
        border-bottom: 15.5px solid transparent;
        border-left: 15.5px solid $green-1;
        border-right: 15.5px solid transparent;
      }

      &-off::after {
        position: absolute;
        content: '';
        margin-top: -5px;
        margin-left: 10px;
        border-top: 15.5px solid transparent;
        border-bottom: 15.5px solid transparent;
        border-left: 15.5px solid $gray-4;
        border-right: 15.5px solid transparent;
      }

      &-on::before,
      &-off::before {
        position: absolute;
        content: '';
        margin-top: -5px;
        margin-left: -25px;
        border-top: 15.5px solid transparent;
        border-bottom: 15.5px solid transparent;
        border-left: 15.5px solid $white;
        border-right: 15.5px solid transparent;
      }
    }

    .RelaxStep-changed-text {
      text-align: center;
      font-weight: bold;
      color: $green-1;
      @include font-size(16);
    }
  }
}
</style>
