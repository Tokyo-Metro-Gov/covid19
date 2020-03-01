<template>
  <div class="whatsNewOuter">
    <v-icon>mdi-information</v-icon>
    <time class="px-2">{{ date }}</time>
    <a :href="url">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ['date', 'url', 'text']
}
</script>

<style>
.whatsNewOuter {
  display: flex;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.7em 1em;
}
</style>
