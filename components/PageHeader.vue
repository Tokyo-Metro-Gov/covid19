<template>
  <div class="header mb-3">
    <h2 class="pageTitle">
      <v-icon size="40" class="mr-2">
        {{ icon }}
      </v-icon>
      {{ title }}
    </h2>
    <div class="date">
      <span>{{ $t('最終更新') }} </span>
      <time :datetime="formattedDate">{{ date }}</time>
    </div>
    <div v-show="!['ja', 'ja-basic'].includes($i18n.locale)" class="annotation">
      <span>{{ $t('注釈') }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    }
  }
})
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.pageTitle {
  display: flex;
  align-items: center;
  font-size: 1.875rem;
  line-height: 1;
  font-weight: normal;
  margin: 0 0.5em 0 0;
  @include lessThan($small) {
    font-size: 1.25rem;
  }
}
.date {
  font-size: 0.875rem;
  color: $gray-3;
}
.annotation {
  font-size: 0.75rem;
  color: $gray-3;
}
@include largerThan($small) {
  .annotation {
    margin: 0 0 0 auto;
  }
}
</style>
