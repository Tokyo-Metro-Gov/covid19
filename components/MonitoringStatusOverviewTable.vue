<template>
  <table
    :class="$style.table"
    aria-labelledby="tableHeader"
    aria-describedby="tableBody"
  >
    <thead id="tableHeader">
      <tr>
        <th scope="col" rowspan="2">
          {{ $t('項目') }}
        </th>
        <th scope="col" rowspan="2">
          {{ $t('数値') }}
        </th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <tr v-for="item in status" :key="item.itemName">
        <th scope="row">
          {{ $t(replaceFullWidthByHalfWidth(item.itemName)) }}
        </th>
        <td :class="$style.value">
          {{ item.itemValue.value }}
          <span v-if="item.itemValue.unit !== '%'" :class="$style.unit">{{
            $t(item.itemValue.unit)
          }}</span>
          <span v-else :class="$style.unit">{{ item.itemValue.unit }}</span>
        </td>
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
        /[０-９（）]/g,
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
    padding: $default-pad;
    border: $default-bdw solid $green-1;
    height: 100%;
  }

  td {
    text-align: center;
  }

  thead {
    white-space: nowrap;
  }

  .headerDivided {
    padding: {
      top: calc(#{$default-pad} * 0.6);
      bottom: calc(#{$default-pad} * 0.6);
    }
  }

  th[scope='row'] {
    justify-content: flex-start;
    text-align: left;
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

    th,
    td {
      padding: $pad;
      border-width: $bdw;
    }

    .headerDivided {
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
