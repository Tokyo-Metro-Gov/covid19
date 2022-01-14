<template>
  <div>
    <div
      class="MonitoringCommentFrame"
      :style="{ borderColor: `${colors[floorLevel]}` }"
    >
      <p>
        {{ $t('レベル') }}<span>{{ level }}</span>
      </p>
    </div>
    <div
      class="MonitoringCommentFrameAfter"
      :style="{
        borderColor: `${colors[floorLevel]}`,
        background: `${colors[floorLevel]}`,
      }"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  props: {
    level: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  data() {
    return {
      colors: ['#AEAAAA', '#00B0F0', '#A9D08E', '#FFC000', '#C65911'],
    }
  },
  computed: {
    floorLevel() {
      return Math.floor(this.level)
    },
  },
})
</script>

<style lang="scss" scoped>
.MonitoringCommentFrame {
  border: solid 1px;
  text-align: center;
  margin-bottom: 10px;

  > p {
    margin-top: auto;
    margin-bottom: auto;
    position: relative;
    font-style: normal;
    font-weight: 600;
    color: $gray-2;
    padding: 10px 0 10px 0;

    @include font-size(14);

    > span {
      @include font-size(15);
    }
  }
}

.MonitoringCommentFrameAfter {
  margin-top: -11px;
  content: '';
  padding: 7px;
  border: solid 1px;
}
</style>
