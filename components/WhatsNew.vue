<template>
  <div class="whatsNewOuter">
    <v-icon size="18">mdi-information</v-icon>
    <time class="time px-2">{{ date }}</time>
    <a :href="url" class="link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ['date', 'url', 'text'],
}
</script>

<style lang="scss">
.whatsNewOuter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.7em 1em;
  @include font-size(14);
}
.link {
  @include text-link();
}
.time {
  flex: 0 0 auto;
}
</style>
