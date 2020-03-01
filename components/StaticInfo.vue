<template>
  <div class="staticInfoOuter">
    <a :href="url">{{ text }}</a>
    <div class="btnOuter">
      <span class="btn" @click="location.href = url">
        {{ btnText }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class StaticInfo extends Vue {
  @Prop({ default: '', required: false })
  url!: string

  @Prop({ default: '', required: false })
  text!: string

  @Prop({ default: '', required: false })
  btnText!: string
}
</script>

<style lang="scss">
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
  @include button-text('sm');
}
</style>
