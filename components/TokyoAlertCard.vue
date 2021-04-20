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
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import ActiveTokyoAlert from '@/components/ActiveTokyoAlert.vue'
import { TokyoAlert as ITokyoAlert } from '@/libraries/auto_generated/data_converter/convertTokyoAlert'

type Data = {}
type Methods = {}
type Computed = {
  description: string
  tokyoAlert: ITokyoAlert
}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    ActiveTokyoAlert,
  },
  computed: {
    description() {
      const { description } = this.tokyoAlert

      if (['ja', 'ja-basic'].includes(this.$i18n.locale)) {
        return description.ja
      }

      return description.en
    },
    tokyoAlert() {
      return this.$store.state.tokyoAlertRepository
    },
  },
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
      padding: 12px;
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
      padding-left: 12px;

      @include lessThan($medium) {
        justify-content: flex-start;
      }
    }
  }

  .TokyoAlert-description {
    padding: 12px;

    @include font-size(14);
  }
}
</style>
