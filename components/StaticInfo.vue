<template>
  <div class="staticInfoOuter">
    <a :href="url">{{ text }}</a>
    <div class="btn">{{ btnText }}</div>
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
    background: #FFF;
    border: 1px solid #D9D9D9;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .15);
    border-radius: 4px;
    padding: .5em 1em;
  }
  .btn {
    border: 1px solid #00B849;
    border-radius: 4px;
    color: #00A040;
    font-size: .875rem;
    padding: .5em;
  }
</style>
