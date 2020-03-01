<template>
  <div class="staticInfoOuter">
    <a :href="url">{{ text }}</a>
    <div class="btn">
      {{ btnText }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'text', 'btnText']
}
</script>

<style>
.staticInfoOuter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.5em 1em;
}
.btn {
  border: 1px solid #00b849;
  border-radius: 4px;
  color: #00a040;
  font-size: 0.875rem;
  padding: 0.3em 0.5em;
}
</style>
