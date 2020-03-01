<template>
  <div class="whatsNewOuter">
    <v-icon>mdi-information</v-icon>
    <time class="px-2">{{ date }}</time>
    <a :href="url">{{ text }}</a>
  </div>
</template>

<script>
  export default {
    props: ['date', 'url', 'text'],
  }
</script>

<style>
  .whatsNewOuter {
    display: flex;
    align-items: center;
    background: #FFF;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .15);
    border-radius: 4px;
    padding: .7em 1em;
  }
</style>
