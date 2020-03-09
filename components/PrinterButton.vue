<template>
  <div class="PrinterButton">
    <v-btn outlined color="#00a040" href="/print/flow">
      <div class="PrinterButton-PrinterIcon">
        <PrinterIcon />
      </div>
      <span class="PrinterButton-Text">印刷する</span>  
    </v-btn>
  </div>
</template>

<script lang="ts">
import PrinterIcon from '@/static/printer.svg'

export default {
  components: {
    PrinterIcon
  },
}
</script>

<style lang="scss">
.PrinterButton {
  margin: 0 0 0 auto;

  &-Text {
    @include lessThan($small) {
      display: none;
    }
  }
  &-PrinterIcon {
    margin-top: 3px;

    @include largerThan($small) {
      padding-right: 7px;
    }
  }
}
</style>
