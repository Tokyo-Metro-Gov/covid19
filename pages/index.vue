<template>
  <div>
    <site-top-upper />
    <cards-tabs />
    <cards-monitoring v-if="this.$route.query.tab !== 'reference'" />
    <cards-reference v-else />
  <div class="MainPage">
    <page-header
      :icon="headerItem.icon"
      :title="headerItem.title"
      :date="headerItem.date"
    />
    <whats-new class="mb-4" :items="newsItems" />


<div class="row DataBlock">

  <div class="DataCard col-md-6 col-12">
    <div class="WhatsNew" style="height:100%">
      <h3 class="WhatsNew-heading"><i aria-hidden="true" class="v-icon notranslate WhatsNew-heading-icon mdi mdi-information theme--light" style="font-size:24px;"></i>
          県内の重要なニュース
        </h3>
      <div class="TopNews">
      <span class="TopNewsImp2">感染者・濃厚接触者や、診療に携わった医療機関・医療関係者その他の対策に携わった方々に対して、誤解や偏見に基づく差別を行わないよう、ご理解とご配慮をお願いします（福井県 県民行動指針ver.2より一部抜粋）</span><br>
      <br>
      【5/5】福井県から5月20日までの県民の外出自粛、休業要請、学校再開などについて発表がありました <a href="https://www.pref.fukui.lg.jp/doc/kenkou/covid19_honb_d/fil/200505.pdf" target="_blank">詳しくはこちら</a>
      <br>

      <span class="TopNewsImp3">【5/4】政府が「緊急事態宣言」延長（5月31日まで）</span><br>
      【4/28】福井県が学校再開について指針を発表 <a href="https://www.pref.fukui.lg.jp/doc/kenkou/covid19_chiji_d/fil/200428.pdf" target="_blank">詳しくはこちら</a><br>
      ・県立学校：当面の間、<span class="TopNewsImp3">休校を継続</span>（休校措置の内容を変更する場合は１週間前に周知）<br>
      ・小中学校：市町の教育委員会に、県立学校と同様の対応を要請<br>
      

      </div>
    </div>
  </div>

  <div class="DataCard col-md-6 col-12">
    <div class="WhatsNew" style="height:100%">
      <h3 class="WhatsNew-heading"><i aria-hidden="true" class="v-icon notranslate WhatsNew-heading-icon mdi mdi-information theme--light" style="font-size:24px;"></i>
        県民行動指針ver.3（5月20日(水)まで）
        <a class="TopNews" href="https://www.pref.fukui.lg.jp/doc/kenkou/covid19_honb_d/fil/200505.pdf" target="_blank">詳しくはこちら</a>
      </h3>
      <div class="TopNews">
      1.不要不急の外出や会合・会食を自粛<br>
      2.感染防止対策の徹底<br>
      3.感染リスクが高まる密閉・密集・密接の場を「つくらない」「近づかない」<br>
      4.職場における感染防止対策を徹底<br>
      5.医療機関を受診する前に電話で相談<br>
      6.県内医療を守るために最大限協力<br>
      7.緊急事態宣言の対象地域など他県との往来を自粛<br>
      8.必要以上の買い物を控えるなど冷静に行動する<br>
      9.人権・個人情報の保護を徹底する
      </div>
    </div>
  </div>

</div>

    <static-info
      class="mb-4"
      url="https://www.pref.fukui.lg.jp/doc/kouho/navi.html"
      target="_blank"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <confirmed-cases-number-card />
      <confirmed-cases-attributes-card />
      <tested-number-card />
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteTopUpper from '@/components/SiteTopUpper.vue'
import CardsTabs from '@/components/CardsTabs.vue'
import CardsMonitoring from '@/components/CardsMonitoring.vue'
import CardsReference from '@/components/CardsReference.vue'

export default Vue.extend({
  components: {
    SiteTopUpper,
    CardsTabs,
    CardsMonitoring,
    CardsReference
  }
})
</script>
    PageHeader,
    WhatsNew,
    StaticInfo,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    MetroCard,
    AgencyCard
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('福井県内の最新感染動向'),
        date: Data.lastUpdate
      },
      newsItems: News.newsItems
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('福井県内の最新感染動向') as string
    }
  }
})
</script>

<style lang="scss" scoped>
.TopNews {
  font-size: 13px;
  line-height: 1.8em;
  padding: 0 10px;
}
.TopNewsImp {
  font-size: 14px;
  font-weight: bold;
  text-decoration: underline;
  color: red;
}
.TopNewsImp2 {
  font-size: 14px;
  color: red;
}
.TopNewsImp3 {
  font-size: 14px;
  color: red;
  text-decoration: underline;
}
.MainPage {
  .DataBlock {
    margin: 20px -8px;
    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}
</style>
