<template>
  <div class="Worker">
    <h2 class="Worker-Heading">
      企業の皆様・はたらく皆様へ
    </h2>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.chiba.lg.jp/keishi/ncov/colona4.html"
          target="_blank"
          rel="noopener"
          >新型コロナウイルス感染症対応緊急融資<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        新型コロナウイルス感染症により事業活動に影響を受けている中小企業等を対象とした緊急融資制度です。
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.chiba.lg.jp/keisei/singata-koronauirusu-kigyousoudan.html"
          target="_blank"
          rel="noopener"
          >新型コロナウイルスによる経営課題に関する専門家派遣<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        今般の新型コロナウイルスの流行により、事業活動に影響を受ける、または、その恐れがある中小企業者等を支援するため、以下のとおり相談窓口を設置します。
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.mhlw.go.jp/stf/newpage_09477.html"
          target="_blank"
          rel="noopener"
          >雇用調整助成金<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        新型コロナウイルス感染症に伴う日中間の人の往来の急減により影響を受ける事業主であって、前年度又は直近１年間の中国（人）関係の売上高等が総売上高等の一定割合（10％）以上である事業主について、下記のとおり雇用調整助成金の特例を適用します。
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.chiba.lg.jp/keisei/singata-koronauirusu-kigyousoudan.html"
          target="_blank"
          rel="noopener"
          >中小企業者等特別相談窓口<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        千葉県は、今般の新型コロナウイルスの流行により、事業活動に影響を受ける、または、その恐れがある中小企業者等を支援するため、相談窓口を設置します。
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a
          href="https://www.pref.chiba.lg.jp/nousui/nousaigaisien/n_coronavirus_agri.html"
          target="_blank"
          rel="noopener"
          >農林漁業者向け<v-icon
            aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        新型コロナウイルス感染症の影響により、農林漁業経営の維持が困難な農林漁業者を対象に、一時的な影響に対し、緊急的に対応するために必要な長期資金を日本政策金融公庫が融資しています。
      </p>
    </StaticCard>
    <!--StaticCard>
      <h3>
        <a
          href="https://www.pref.chiba.lg.jp/kenshidou/shafuku-hojin/ncov-index.html"
          target="_blank"
          rel="noopener"
          >社会福祉事業者向け<v-icon
                        aria-label="別タブで開く"
            role="img"
            :aria-hidden="false"
          >
            mdi-open-in-new
          </v-icon></a
        >
      </h3>
      <p>
        社会福祉事業者向けに新型コロナウイルス感染症の情報がまとめてあります。
      </p>
    </StaticCard-->
  </div>
</template>
<script lang="ts">
import StaticCard from '@/components/StaticCard.vue'
export default {
  components: {
    StaticCard
  },
  head() {
    return {
      title: '企業の皆様・はたらく皆様へ'
    }
  }
}
</script>
<style lang="scss" scoped>
.Worker {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
}
</style>
