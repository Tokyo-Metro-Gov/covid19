<template>
  <div class="PrinterButton">
    <v-btn outlined color="#00a040">
      <div class="PrinterButton-PrinterIcon">
        <PrinterIcon />
      </div>
      <span class="PrinterButton-Text">印刷する</span>  
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator'
import PrinterIcon from '@/static/printer.svg'

export default {
  components: {
    PrinterIcon
  },
}
</script>

<style lang="scss">
.PrinterButton {
  &-Text {
    @include lessThan($small) {
      display: none;
    }
  }
  &-PrinterIcon {
    padding-right: 7px;
    margin-top: 3px;
  }
}
</style>
