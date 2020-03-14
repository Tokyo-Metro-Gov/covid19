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
