<template>
  <div class="RelaxationStep">
    <div class="RelaxationStep-heading">
      <h3 class="RelaxationStep-title">
        {{ $t('施設別休止要請の緩和ステップ') }}
      </h3>
      <div class="RelaxationStep-link">
        <link-to-information-about-roadmap />
      </div>
    </div>
    <div class="RelaxationStep-content">
      <div class="RelaxationStep-block RelaxationStep-block-description">
        <p>
          {{
            $t(
              '休業要請緩和のステップについては、令和2年5月22日時点の状況を「ステップ0」とし、施設の特性やクラスター発生歴等から判断して、「ステップ3」までの4段階を設定し、段階的に施設の休業要請を緩和します。'
            )
          }}
        </p>
      </div>
      <div class="RelaxationStep-block RelaxationStep-block-steps">
        <ul class="RelaxationStep-steps-list">
          <li v-for="i in steps" :key="i" class="RelaxationStep-steps-item">
            <span
              v-if="i === RelaxationStep.step"
              class="RelaxationStep-steps RelaxationStep-steps-on"
            >
              {{ $t('ステップ {num}', { num: i }) }}
            </span>
            <span v-else class="RelaxationStep-steps RelaxationStep-steps-off">
              {{ $t('ステップ {num}', { num: i }) }}
            </span>
          </li>
        </ul>
        <p class="RelaxationStep-changed-text">
          {{
            $t('{date} ステップ {num}に移行', {
              date: formattedDayForDisplay,
              num: RelaxationStep.step
            })
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LinkToInformationAboutRoadmap from '~/components/LinkToInformationAboutRoadmap.vue'
import RelaxationStep from '~/data/tokyo_alert.json'

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
      RelaxationStep,
      steps: [0, 1, 2, 3]
    }
  },
  computed: {
    formattedDayForDisplay() {
      return this.$d(
        new Date(RelaxationStep.changed),
        'dateTimeRelaxationSteps'
      )
    }
  }
})
</script>

<style lang="scss">
@function px2vw($px, $vw: 900) {
  @return $px / $vw * 100vw;
}

.RelaxationStep {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .RelaxationStep-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .RelaxationStep-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .RelaxationStep-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .RelaxationStep-steps {
    position: relative;
    display: block;
    font-size: px2vw(14);
    margin-left: px2vw(16);
    text-align: center;
    padding: px2vw(5) px2vw(10) px2vw(5) px2vw(25);
    z-index: 3;
    &-on {
      color: $white;
      background-color: $green-1;
    }
    &-off {
      color: $gray-2;
      background-color: $gray-4;
    }
    &::after {
      position: absolute;
      content: '';
      top: 0;
      right: 1px;
      transform: translateX(100%);
      border-width: px2vw(15.5) 0 px2vw(15.5) px2vw(15.5);
      border-style: solid;
      border-color: transparent;
    }
    &-on::after {
      border-left-color: $green-1;
    }
    &-off::after {
      border-left-color: $gray-4;
    }
    &-on::before,
    &-off::before {
      position: absolute;
      content: '';
      top: 0;
      left: px2vw(15.5);
      transform: translateX(-100%);
      border-width: px2vw(15.5) 0 px2vw(15.5) px2vw(15.5);
      border-style: solid;
      border-color: transparent;
      border-left-color: $white;
    }
  }

  @include lessThan($small) {
    .RelaxationStep-steps {
      font-size: 1rem;
      margin-left: 1.4rem;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      &::after,
      &::before {
        border-width: 1.3rem 0 1.3rem 1.3rem;
        border-style: solid;
        border-color: transparent;
      }
      &-on::after {
        border-left-color: $green-1;
      }
      &-off::after {
        border-left-color: $gray-4;
      }
      &-on::before,
      &-off::before {
        left: 1.3rem;
        border-left-color: $white;
      }
    }
  }

  @include largerThan(900) {
    .RelaxationStep-steps {
      font-size: 1.4rem;
      margin-left: 1.6rem;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      &::after,
      &::before {
        border-width: 1.55rem 0 1.55rem 1.55rem;
        border-style: solid;
        border-color: transparent;
      }
      &-on::after {
        border-left-color: $green-1;
      }
      &-off::after {
        border-left-color: $gray-4;
      }
      &-on::before,
      &-off::before {
        left: 1.55rem;
        border-left-color: $white;
      }
    }
  }

  .RelaxationStep-content {
    @include font-size(14);

    display: flex;
    flex-wrap: wrap;

    .RelaxationStep-block {
      padding: 12px;
      flex: 0 0 100%;

      @include largerThan($large) {
        &-description {
          flex-basis: 40%;
        }
        &-steps {
          flex-basis: 60%;
        }
      }
    }

    .RelaxationStep-steps-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      list-style: none;
      padding: 0;
      font-weight: bold;
      white-space: nowrap;
      width: 100%;

      @include largerThan(420) {
        flex-wrap: nowrap;
      }

      .RelaxationStep-steps-item {
        margin-bottom: 12px;
        flex: 0 1 20%;

        @include largerThan($large) {
          flex: 1 1 auto;
        }
      }
      .RelaxationStep-steps-item:first-child {
        .RelaxationStep-steps {
          border-radius: 5px 0 0 5px;
          margin-left: 0;
          &::before {
            margin-top: -9999px;
            margin-left: -9999px;
          }
        }
      }
    }

    .RelaxationStep-changed-text {
      text-align: center;
      font-weight: bold;
      color: $green-1;
      @include font-size(16);
    }
  }
}
</style>
