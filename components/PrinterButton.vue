<template>
  <div :class="wrapperClass">
    <div class="PrinterButton">
      <v-btn outlined color="#00a040" href="/print/flow">
        <div class="PrinterButton-PrinterIcon">
          <PrinterIcon />
        </div>
        <span class="PrinterButton-Text">印刷する</span>
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import PrinterIcon from '@/static/printer.svg'

export default {
  props: {
    wrapperClass: {
      type: String,
      required: false,
      default: ''
    }
  },
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
    margin-top: 3px;

    @include largerThan($small) {
      padding-right: 7px;
    }
  }
}
</style>
