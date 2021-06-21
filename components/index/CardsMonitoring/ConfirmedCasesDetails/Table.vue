<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span> {{ $t('陽性者数') }} ({{ $t('累計') }}) </span>
        <span>
          <strong>{{ 陽性者数.toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.parent]">
          <div :class="$style.content">
            <span>{{ $t('入院') }}</span>
            <span>
              <strong>{{ 入院中.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
          <ul :class="$style.group">
            <li :class="[$style.box]">
              <div :class="$style.content">
                <!-- eslint-disable vue/no-v-html-->
                <span v-html="$t('軽症・中等症')" />
                <!-- eslint-enable vue/no-v-html-->
                <span>
                  <strong>{{ 軽症中等症.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
              </div>
            </li>
            <li :class="[$style.box]">
              <div :class="$style.content">
                <span>{{ $t('重症') }}</span>
                <span>
                  <strong>{{ 重症.toLocaleString() }}</strong>
                  <span :class="$style.unit">{{ $t('人') }}</span>
                </span>
              </div>
            </li>
          </ul>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('宿泊療養') }}</span>
            <span>
              <strong>{{ 宿泊療養.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('自宅療養') }}</span>
            <span>
              <strong>{{ 自宅療養.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('入院・療養等調整中') }}</span>
            <span>
              <strong>{{ 調査中.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('死亡') }}</span>
            <span>
              <strong>{{ 死亡.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('退院等（療養期間経過を含む）') }}</span>
            <span>
              <strong>{{ 退院.toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

/* eslint-disable vue/prop-name-casing */
export default Vue.extend({
  props: {
    陽性者数: {
      type: Number,
      required: true,
    },
    入院中: {
      type: Number,
      required: true,
    },
    軽症中等症: {
      type: Number,
      required: true,
    },
    重症: {
      type: Number,
      required: true,
    },
    宿泊療養: {
      type: Number,
      required: true,
    },
    自宅療養: {
      type: Number,
      required: true,
    },
    調査中: {
      type: Number,
      required: true,
    },
    死亡: {
      type: Number,
      required: true,
    },
    退院: {
      type: Number,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
