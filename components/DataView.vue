<template>
  <v-card class="DataView pa-1">
    <v-toolbar flat class="DataView-content">
      <div class="DataView-TitleContainer">
        <h3 :id="titleId" class="DataView-ToolbarTitle">
          {{ title }}
        </h3>
        <slot name="button" />
      </div>
      <v-spacer />
      <slot name="infoPanel" />
    </v-toolbar>
    <v-card-text
      :class="
        $vuetify.breakpoint.xs ? 'DataView-CardTextForXS' : 'DataView-CardText'
      "
    >
      <slot />
    </v-card-text>
    <v-footer class="DataView-Footer">
      <a
        class="Permalink"
        :href="'/cards/' + titleId"
      >
        <time :datetime="date">{{ date }} 更新</time>
      </a>
      <a
        v-if="url"
        class="OpenDataLink"
        :href="url"
        target="_blank"
        rel="noopener"
      >
        オープンデータへのリンク
        <v-icon class="ExternalLinkIcon" size="15">
          mdi-open-in-new
        </v-icon>
      </a>
    </v-footer>
    <v-footer class="DataView-Share">
      <button v-on:click="openGraphEmbed = true">
        <div>埋め込む</div>
      </button>
      <button v-on:click="twitter">
        <div>Twitter</div>
      </button>
      <button v-on:click="facebook">
        <div>Facebook</div>
      </button>
      <button v-on:click="line">
        <div>LINE</div>
      </button>
    </v-footer>
    <v-footer v-if="openGraphEmbed">
      <div>グラフの埋め込み</div>
      <textarea v-model="graphEmbedValue" />
    </v-footer>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class DataView extends Vue {
  @Prop() private title!: string
  @Prop() private titleId!: string
  @Prop() private date!: string
  @Prop() private url!: string
  @Prop() private info!: any // FIXME expect info as {lText:string, sText:string unit:string}

  data() {
    const graphEmbedValue = '<iframe width="560" height="315" src="https://stopcovid19.metro.tokyo.lg.jp/embed/' + this.titleId + '" frameborder="0"></iframe>'

    const data = {
      openGraphEmbed: false,
      graphEmbedValue,
    }
    return data
  }

  twitter() {
  }

  facebook() {
  }

  line() {
  }
}
</script>

<style lang="scss">
.DataView {
  &-DataInfo {
    &-summary {
      color: $gray-2;
      font-family: Hiragino Sans;
      font-style: normal;
      font-size: 30px;
      line-height: 30px;
      white-space: nowrap;
      &-unit {
        font-size: 0.6em;
        width: 100%;
      }
    }
    &-date {
      font-size: 12px;
      line-height: 12px;
      color: $gray-3;
      width: 100%;
      display: inline-block;
    }
  }
}
.DataView {
  @include card-container();
  height: 100%;
  &-content {
    height: auto !important;
    .v-toolbar__content {
      align-items: start;
    }
  }
  &-Header {
    background-color: transparent !important;
    height: auto !important;
  }
  &-TitleContainer {
    padding: 14px 0 8px;
    color: $gray-2;
  }
  &-Title {
    @include card-h2();
  }
  &-ToolbarTitle {
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 1.5;
  }
  &-CardText {
    margin-bottom: 46px;
    margin-top: 35px;
  }
  &-CardTextForXS {
    margin-bottom: 46px;
    margin-top: 70px;
  }
  &-Footer {
    background-color: $white !important;
    margin: 2px 4px 12px;
    @include font-size(12);
    color: $gray-3 !important;
    justify-content: space-between;
    flex-direction: row-reverse;
    .Permalink {
      color: $gray-3 !important;
    }
    .OpenDataLink {
      text-decoration: none;
      .ExternalLinkIcon {
        vertical-align: text-bottom;
      }
    }
  }
  &-Share {
    display: flex;
    justify-content: space-around;
    background-color: $white !important;
  }
}
textarea {
  font: 400 11px system-ui;
  width: 100%;
  height: 2.4rem;
}
.v-toolbar__content {
  height: auto !important;
}
</style>
