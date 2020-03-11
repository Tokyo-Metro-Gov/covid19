<template>
  <div :class="wrapperClass">
    <v-btn
      class="PrinterButton"
      outlined
      color="#00a040"
      href="/print/flow"
      target="_blank"
      @mouseover="mouseover"
      @mouseleave="mouseleave"
    >
      <div class="PrinterButton-PrinterIcon">
        <PrinterOutlineIcon v-if="hover" />
        <PrinterIcon v-else />
      </div>
      <span class="PrinterButton-Text">
        {{ $t('print') }}
      </span>
    </v-btn>
  </div>
</template>

<i18n>
{
  "ja": {
    "print": "印刷する"
  }
}
</i18n>

<script>
import PrinterIcon from '@/static/printer.svg'
import PrinterOutlineIcon from '@/static/printer_outline.svg'

export default {
  components: {
    PrinterIcon,
    PrinterOutlineIcon
  },
  props: {
    wrapperClass: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      hover: this.hover
    }
  },
  methods: {
    mouseover() {
      this.hover = true
    },
    mouseleave() {
      this.hover = false
    }
  }
}
</script>

<style lang="scss">
.PrinterButton {
  @include button-text('md');
  &:hover {
    color: $white !important;
  }
  &-Text {
    margin: 6px auto 0;
    @include lessThan($small) {
      display: none;
    }
  }
  &-PrinterIcon {
    margin-top: 8px;
    width: 25px;

    @include largerThan($small) {
      padding-right: 7px;
    }
  }
}
</style>
