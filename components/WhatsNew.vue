<template>
  <a class="whatsNewOuter" :href="url">
    <v-icon size="18" class="whatsNewOuter-Icon">
      mdi-information
    </v-icon>
    <time class="time px-2">{{ date }}</time>
    <span class="link">{{ text }}</span>
  </a>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
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
  text-decoration: none;
  &-Icon {
    color: $gray-2 !important;
  }
}
.link {
  @include text-link();
}
.time {
  flex: 0 0 auto;
  color: $gray-1;
  font-weight: bold;
}
</style>
