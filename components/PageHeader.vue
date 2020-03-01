<template>
  <div class="header">
    <h1 class="pageTitle">
      <v-icon size="40" class="mr-2">
        {{ icon }}
      </v-icon>
      {{ title }}
    </h1>
    <div class="date">
      <span>最終更新 </span><time>{{ date }}</time>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'icon', 'date']
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.pageTitle {
  display: flex;
  align-items: center;
  font-size: 1.875rem;
  line-height: 1;
  font-weight: normal;
  margin: 0 0.5em 0 0;
}
.date {
  font-size: 0.875rem;
  color: #808080;
}
</style>
