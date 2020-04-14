<template>
  <div class="Worker">
    <page-header class="mb-3">
      {{ $t('企業の皆様・はたらく皆様へ') }}
    </page-header>
    <static-card>
      <h3>
        <external-link
          url="http://www.sangyo-rodo.metro.tokyo.jp/chushou/kinyu/yuushi/yuushi/new"
          :icon-size="24"
          >{{ $t('新型コロナウイルス感染症に対応した制度融資') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '感染症により事業活動に影響を受けている中小企業等を対象とした制度融資（「緊急融資」、「緊急借換」、「危機対応融資」）です。いずれも融資限度額は2億8千万円で、信用保証料を都が補助します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.tokyo-kosha.or.jp/topics/2003/0001.html"
          :icon-size="24"
          >{{ $t('新型コロナウイルスによる経営課題に関する専門家派遣') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルス感染症により経営面の影響を受けている中小企業を対象に、中小企業診断士等の専門家を無料で派遣し、経営改善等に向けたアドバイスを実施します（1社あたり4回まで・無料）。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.tokyo-kosha.or.jp/support/josei/jigyo/kinkyu.html"
          :icon-size="24"
          >{{ $t('緊急販路開拓助成事業（新型コロナウイルス感染症緊急対策）') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '感染症の影響を受け、売上が減少した都内中小企業の展示会出展費用の一部を助成します（限度額：150万円 / 助成率：5分の4 / 助成対象期間：交付決定日から1年1カ月 / 受付期間：5月11日～20日〈予定〉）。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          :icon-size="24"
          >{{ $t('中小企業従業員融資') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '感染症等の影響による休業での収入減等に備え、中小企業の従業員向けに実質無利子の融資を行います（融資限度額100万円）。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          :icon-size="24"
          >{{
            $t('新型コロナウイルス感染症に係る休業等支援事業（専門家派遣）')
          }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '感染症の拡大を理由とする従業員の休業等にあたり、国の雇用調整助成金の特例措置等を利用する中小企業等を対象に、社会保険労務士派遣による相談助言を行います（1社5回まで。無料）。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          :icon-size="24"
          >{{ $t('新型コロナウイルス感染症対策雇用環境整備促進事業') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '感染症の拡大を理由として、国の雇用調整助成金等を活用し、非常時における勤務体制づくりなど職場環境整備に取り組む都内中小企業に奨励金を支給します（1事業所10万円）。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.hataraku.metro.tokyo.jp/kansensyo/index.html"
          :icon-size="24"
          >{{ $t('テレワーク導入モデル体験事業') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            'テレワーク導入を検討している中堅・中小企業等を対象に、テレワークを体験できる端末やツールを無償貸与することにより、テレワークのメリット・効果を体感できる機会を提供します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.shigotozaidan.or.jp/koyo-kankyo/joseikin/kinkyutaisaku.html"
          :icon-size="24"
          >{{ $t('事業継続緊急対策（テレワーク）助成金') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '都内中堅・中小企業に対し、テレワークの導入に必要な機器やソフトウェア等の経費を助成します（限度額250万円、助成率10/10）。ぜひご活用ください。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link url="https://tokyo-telework.jp/" :icon-size="24"
          >{{ $t('テレワークオンラインセミナー開催') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '経済団体と連携したテレワーク導入のきっかけづくりのためのオンラインセミナーを開催します。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="http://www.sangyo-rodo.metro.tokyo.jp/attention/2020/0305_13201.html"
          :icon-size="24"
          >{{ $t('中小企業者等特別相談窓口') }}
        </external-link>
      </h3>
      <p>
        {{ $t('資金繰りに関する相談、経営に関する相談') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="http://www.sangyo-rodo.metro.tokyo.jp/attention/2020/0305_13201.html"
          :icon-size="24"
          >{{ $t('フリーランスを含む個人事業主特別相談窓口') }}
        </external-link>
      </h3>
      <p>
        {{
          $t('資金繰りに関する相談、経営に関する相談（契約におけるトラブル等）')
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.hataraku.metro.tokyo.lg.jp/sodan/sodan/index.html"
          :icon-size="24"
          >{{ $t('緊急労働相談ダイヤル') }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            '新型コロナウイルスに関する休暇や休業の取り扱い、職場のハラスメント、内定取り消しなどについての相談'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://smooth-biz.metro.tokyo.lg.jp/"
          :icon-size="24"
          >{{
            $t('新しいワークスタイルや企業活動の東京モデル「スムーズビズ」')
          }}
        </external-link>
      </h3>
      <p>
        {{
          $t(
            'テレワーク・時差出勤などスムーズビズの取組は、新型コロナウイルス感染症の対策としても効果的です。感染症対策として、東京2020大会時の交通混雑緩和に向けた取組の前倒しをお願いします。'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
