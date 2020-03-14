<template>
  <div :class="wrapperClass">
    <div class="PrinterButton">
      <v-btn outlined color="#00a040" href="/print/flow" target="_blank">
        <div class="PrinterButton-PrinterIcon">
          <PrinterIcon />
        </div>
        <span class="PrinterButton-Text">
          {{ $t('print') }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<i18n src="./PrinterButton.i18n.json"></i18n>

<script>
import PrinterIcon from '@/static/printer.svg'

export default {
  components: {
    PrinterIcon
  },
  props: {
    wrapperClass: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.PrinterButton {
  &-Text {
    @include lessThan($small) {
      position: absolute !important;
      height: 1px !important;
      width: 1px !important;
      padding: 0 !important;
      border: 0 !important;
      white-space: nowrap !important;
      overflow: hidden !important;
      clip: rect(1px, 1px, 1px, 1px) !important;
      clip-path: inset(50%) !important;
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
