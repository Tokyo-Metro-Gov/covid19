<template>
  <v-col cols="12" md="6">
    <div class="StayingPopulation">
      <div class="StayingPopulation-title">
        ●緊急事態宣言中の<br />都内の滞在人口の増減状況<br />詳細はこちら<v-icon
          color="#D9D9D9"
          >{{ mdiChevronRight }}</v-icon
        >
      </div>
      <div class="StayingPopulation-place">新宿</div>
      <div class="StayingPopulation-state">
        [ ****年**月**日時点 ]<br />
        ****年**月比↓**％<br />
        ****年**月比↓**％<br />
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      showStaticInfo: false,
    }
  },
  methods: {
    onScroll() {
      this.showStaticInfo = true
    },
  },
})
</script>

<style lang="scss" scoped>
.StayingPopulation {
  @include card-container();

  padding: 3px;
  min-height: 5em;
  display: flex;
  align-items: center;

  .StayingPopulation-title {
    padding: 2px 5px;
    text-align: left;
    @include card-h2();
    @include font-size(12);
  }
  .StayingPopulation-place {
    padding: 5px 5px 5px 5px;
    margin: 2px 5px 2px 5px;
    background-color: #008830;
    color: #fff;
    vertical-align: middle;
    text-align: center;
    writing-mode: vertical-rl;
    font-weight: bold;

    @include font-size(12);
  }
  .StayingPopulation-state {
    flex: 1;
    border: 2px solid;
    padding: 2px;
    margin: 2px 5px 2px 5px;
    border-color: #008830;
    text-align: center;
    vertical-align: middle;
    @include font-size(11);
  }
}
</style>
