<template>
  <div class="TokyoAlert">
    <div class="TokyoAlert-heading">
      <h3 class="TokyoAlert-title">
        {{ $t('東京アラート') }}
      </h3>
      <div class="TokyoAlert-link">
        <active-tokyo-alert />
      </div>
    </div>
    <div class="TokyoAlert-description">
      <p v-if="$i18n.locale === 'ja'">
        {{ $t(tokyoAlert.description['@ja']) }}
      </p>
      <p v-else>{{ $t(tokyoAlert.description['@en']) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ActiveTokyoAlert from '@/components/ActiveTokyoAlert.vue'
import tokyoAlert from '@/data/tokyo_alert.json'

export default Vue.extend({
  components: {
    ActiveTokyoAlert
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tokyoAlert
    }
  }
})
</script>

<style lang="scss">
.TokyoAlert {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .TokyoAlert-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .TokyoAlert-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .TokyoAlert-link {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .TokyoAlert-description {
    @include font-size(14);
  }
}
</style>
