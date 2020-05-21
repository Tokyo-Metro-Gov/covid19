<template>
  <table :class="$style.table">
    <thead>
      <tr>
        <th scope="col" rowspan="2">
          <div>
            {{ $t('項目') }}
          </div>
        </th>
        <th scope="col" rowspan="2">
          <div>
            {{ $t('数値') }}
          </div>
        </th>
        <th :class="$style.headerDivided" scope="colgroup" colspan="2">
          <div>
            {{ $t('目安となる数値') }}
          </div>
        </th>
      </tr>
      <tr>
        <th :class="$style.headerDivided" scope="col">
          <div>
            {{ $t('緩和') }}
          </div>
        </th>
        <th :class="$style.headerDivided" scope="col">
          <div>
            {{ $t('再要請') }}
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in status" :key="item.itemName">
        <th scope="row">
          <div>{{ $t(replaceFullWidthByHalfWidth(item.itemName)) }}</div>
        </th>
        <td :class="$style.value">
          <div>
            {{ item.itemValue.value }}
            <span :class="$style.unit">{{ $t(item.itemValue.unit) }}</span>
          </div>
        </td>
        <template
          v-if="
            item.itemValue.goThreshold !== null &&
              item.itemValue.stopThreshold !== null
          "
        >
          <td :class="$style.threshold">
            <div>
              {{ $t(item.itemValue.goThreshold) }}
            </div>
          </td>
          <td :class="$style.threshold">
            <div>
              {{ $t(item.itemValue.stopThreshold) }}
            </div>
          </td>
        </template>
        <template v-else>
          <td colspan="2">
            <div>
              &ndash;
            </div>
          </td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    status: {
      type: Array,
      required: true
    }
  },
  methods: {
    replaceFullWidthByHalfWidth(str: string) {
      return str.replace(
        /[０-９]/g,
        s => String.fromCharCode(s.charCodeAt(0) - 0xfee0) // eslint-disable-line unicorn/number-literal-case
      )
    }
  }
})
</script>

<style lang="scss" module>
$default-bdw: 2px;
$default-pad: 0.5rem;

.table {
  height: 0;
  width: 100%;
  color: $green-1;
  border-collapse: collapse;
  @include font-size(16);

  th,
  td {
    padding: 1px 0;
  }

  th > div,
  td > div {
    padding: $default-pad;
    border: $default-bdw solid $green-1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .headerDivided > div {
    padding: {
      top: calc(#{$default-pad} * 0.6);
      bottom: calc(#{$default-pad} * 0.6);
    }
  }

  th[scope='row'] > div {
    justify-content: flex-start;
    text-align: left;
  }

  tr > :not(:first-child) > div {
    border-left-width: 0;
  }

  .headerDivided {
    &[scope='colgroup'] {
      padding-bottom: 0;
    }

    &[scope='col'] {
      padding-top: 0;
      > div {
        border-top-width: 0;
      }

      &:first-child > div {
        border-left-width: 0;
      }
    }
  }

  .value,
  .threshold {
    white-space: nowrap;
  }
}

@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $pad) {
  .table {
    border-width: $bdw;
    @include font-size($fz);

    th > div,
    td > div {
      padding: $pad;
      border-width: $bdw;
    }

    .headerDivided > div {
      padding: {
        top: calc($pad * 0.6);
        bottom: calc($pad * 0.6);
      }
    }
  }
}

/*
// variables.scss Breakpoints: huge (1440)
@include lessThan(1440) {
  @include override(1440, 3, 15, 150);
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 2, 13, 107);
}

// variables.scss Breakpoints: large (1170)
@include lessThan(1170) {
  @include override(1170, 2, 13, 107);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 4, 14, 180);
}

@include lessThan(767) {
  @include override(960, 3, 14, 180);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 150);
}

@include lessThan(420) {
  @include override(600, 2, 12, 150);
}
*/
</style>
