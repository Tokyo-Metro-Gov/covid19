<template>
  <div class="wrapper">
    <h2 class="heading">
      <v-icon size="24" class="heading-icon">mdi-information</v-icon>
      最新のお知らせ
    </h2>
    <div v-for="(item, i) in items" :key="i">
      <a class="item" :href="item.url" target="_blank">
        <time class="time px-2">{{ item.date }}</time>
        <span class="link">{{ item.text }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.wrapper{
  @include card-container();
  padding: 10px;
  margin-bottom: 20px;
}

.heading {
  display: flex;
  align-items: center;
  @include card-h2();
  margin-bottom: 12px;
  color: $gray-2;
  margin-left: 12px;

  &-icon {
    margin: 3px;
  }
}

.item {
  display: flex;
  text-decoration: none;
  margin: 5px;
  font-size: 14px;

  .time {
    flex: 0 0 90px;
    color: $gray-1;
  }

  .link {
    flex: 0 1 auto;
    @include text-link();
  }
}
</style>
