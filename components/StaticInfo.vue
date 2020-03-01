<template>
  <div class="staticInfoOuter">
    <a :href="url">{{ text }}</a>
    <div class="btnOuter">
      <span @click="location.href=url" class="btn">
        {{ btnText }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['url', 'text', 'btnText'],
}
</script>

<style>
.staticInfoOuter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #fff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.5em 1em;
}
.btnOuter {
  flex: 1 0 auto;
  text-align: right;
}
.btn {
  display: inline-block;
  border: 1px solid #00b849;
  border-radius: 4px;
  color: #00a040;
  font-size: 0.875rem;
  padding: 0.3em 0.5em;
  cursor: pointer;
}
</style>
