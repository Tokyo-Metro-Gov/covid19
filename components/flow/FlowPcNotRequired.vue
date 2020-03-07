<template>
  <div :class="$style.flowContainer">
    <h3 :class="$style.sectionTitle">
      <span>
        新型コロナ外来
      </span>
      <strong>受診が不要</strong>
      <span>
        と判断された場合
      </span>
    </h3>
    <ul :class="$style.actions">
      <li>
        <v-icon class="mr-2">
          mdi-home
        </v-icon>
        自宅で安静に過ごす
      </li>
      <li>
        <v-icon class="mr-2">
          mdi-hospital-building
        </v-icon>
        一般の医療機関を受診
      </li>
    </ul>
    <div :class="$style.nextAction">
      <p>
        症状が <br />
        よくならない場合は
      </p>
      <p>
        <strong>新型コロナ受診相談窓口</strong>
      </p>
      <p>
        に相談
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

const FlowPcNotRequired = Vue.extend({
  name: 'FlowPcNotRequired'
})

export default FlowPcNotRequired
</script>
<style module lang="scss">
.flowContainer {
  @include card-container();
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
}
.sectionTitle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  text-align: end;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  vertical-align: bottom;
  span {
    padding-bottom: 0.2rem;
  }
  strong {
    margin: 0 0.5;
    font-size: 1.8rem;
    font-weight: bold;
  }
}
.actions {
  width: 49%;
  justify-items: auto;
  margin: auto 0;
  padding: 1rem !important;
  li {
    list-style-type: none;
    text-align: start;
    margin-bottom: 1rem;
    display: flex;
  }
}
.nextAction {
  width: 49%;
  padding: 1rem;
  border: $green-1 1.5px solid;
  border-radius: 4px;
  strong {
    font-size: 1.5rem;
  }
}
</style>
