<template>
  <v-app class="app-print">
    <div v-if="loading" class="loader">
      <img src="/logo.svg" :alt="$t('東京都')" />
      <scale-loader color="#00A040" />
    </div>
    <v-container v-else>
      <v-row align="center" class="PrintMeta">
        <v-col :cols="12" :sm="6">
          <div class="PrintMeta-HeadingWrapper">
            <div class="PrintMeta-Logo">
              <img src="/logo.svg" :alt="$t('東京都')" />
            </div>
            <h1 class="PrintMeta-Heading">
              {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト') }}
            </h1>
          </div>
        </v-col>
        <v-col :cols="12" :sm="6">
          <v-card class="d-flex flex-row" flat tile color="transparent">
            <v-spacer />
            <v-card
              class="PrintMeta-QR flex-shrink-0"
              flat
              tile
              color="transparent"
            >
              <img src="/site-qr.svg" :alt="$t('2次元コード')" />
            </v-card>
            <v-card class="flex-shrink-0" flat tile color="transparent">
              <p class="PrintMeta-Text">
                {{ $t('※最新の情報はWebページをご覧ください') }}
              </p>
              <p class="PrintMeta-Link">
                https://stopcovid19.metro.tokyo.lg.jp/
              </p>
            </v-card>
          </v-card>
        </v-col>
      </v-row>
      <nuxt />
    </v-container>
  </v-app>
</template>

<i18n>
{
  "ja": {
    "東京都": "東京都",
    "新型コロナウイルス感染症": "新型コロナウイルス感染症",
    "対策サイト": "対策サイト",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  },
  "en": {
    "東京都": "Tokyo",
    "新型コロナウイルス感染症": "COVID-19",
    "対策サイト": "Task Force website",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  },
  "zh-cn": {
    "東京都": "东京都",
    "新型コロナウイルス感染症": "新型冠状病毒",
    "対策サイト": "资讯站",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  },
  "zh-tw": {
    "東京都": "東京都",
    "新型コロナウイルス感染症": "新型冠狀病毒",
    "対策サイト": "疫情中心",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  },
  "ko": {
    "東京都": "도쿄도",
    "新型コロナウイルス感染症": "코로나19",
    "対策サイト": "TF 웹사이트",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  },
  "ja-basic": {
    "東京都": "とうきょうと",
    "新型コロナウイルス感染症": "あたらしいコロナウイルスの",
    "対策サイト": "びょうきについて",
    "2次元コード": "2次元コード",
    "※最新の情報はWebページをご覧ください": "※最新の情報はWebページをご覧ください"
  }
}
</i18n>

<script>
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
export default {
  components: {
    ScaleLoader
  },
  data() {
    return {
      loading: true
    }
  },
  mounted() {
    this.loading = false
    window.addEventListener('load', this.print)
  },
  beforeDestroy() {
    window.removeEventListener('load', this.print)
  },
  methods: {
    print() {
      window.print()
    }
  },
  head() {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://stopcovid19.metro.tokyo.lg.jp${this.$route.path}`
        }
      ]
    }
  }
}
</script>
<style lang="scss">
.app-print {
  margin: 0 auto;
  background-color: inherit !important;
}
.loader {
  height: 200px;
  width: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>

<style lang="scss" scoped>
.PrintMeta {
  margin-bottom: 1em;
  &-HeadingWrapper {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  &-Logo {
    margin: 0 16px 0 0;
    width: 110px;
  }
  &-Heading {
    font-size: 13px;
    color: #898989;
    padding: 0.5em 0;
    text-decoration: none;
  }
  &-QR {
    height: 60px;
    width: 60px;
    margin-right: 1em;

    img {
      max-width: 100%;
    }
  }
  &-Text {
    font-size: 13px;
    color: gray;
    margin-bottom: 0;
    padding-top: 1em;
    width: max-content;
  }
  &-Link {
    font-size: 13px;
    color: gray;
    margin-bottom: 0;
    width: max-content;
  }
}
</style>
