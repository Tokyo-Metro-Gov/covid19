<template>
  <div class="About">
    <h2 class="About-Heading">
      他自治体の対策サイト
    </h2>
    <TextCard title="北海道" link="https://stopcovid19.hokkaido.dev/" />
    <TextCard title="東京都" link="https://stopcovid19.metro.tokyo.lg.jp/" />
    <TextCard
      title="神奈川県"
      link="https://www.pref.kanagawa.jp/osirase/1369/"
    />
  </div>
</template>

<script lang="ts">
import TextCard from '@/components/TextCard.vue'

export default {
  components: {
    TextCard
  },
  head() {
    return {
      title: '他自治体の対策サイト'
    }
  }
}
</script>

<style lang="scss">
.About {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  & &-Browser-List {
    // セレクタ指定が&-Browser-List のみだと
    // .v-application ul の設定が勝ってしまい padding-left が24px となってしまうため
    // このようなセレクタ指定としています
    list-style: none;
    padding: 12px 0;
  }
}

a {
  @include text-link();
}
</style>
