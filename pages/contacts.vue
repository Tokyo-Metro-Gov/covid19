<template>
  <div class="Contacts">
    <page-header class="mb-3">
      <t-i18n>{{ $t('お問い合わせ先一覧') }}</t-i18n>
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              <t-i18n>{{ $t('お問い合わせ内容') }}</t-i18n>
            </th>
            <th class="text-center" scope="col">
              <t-i18n>{{ $t('局名') }}</t-i18n>
            </th>
            <th class="text-center" scope="col">
              <t-i18n>{{ $t('電話番号') }}</t-i18n>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('サイト全般に関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('政策企画局') }}</t-i18n>
            </td>
            <td class="tel"><a href="tel:03-5388-2171">03-5388-2171</a></td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('サイトの技術面に関すること') }}</t-i18n
                ><br />
                <t-i18n>{{
                  $t('オープンデータ、オープンソースに関すること')
                }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <div>
                <t-i18n>{{ $t('戦略政策情報推進本部') }}</t-i18n>
              </div>
            </td>
            <td class="tel"><a href="tel:03-5320-7930">03-5320-7930</a></td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{
                  $t('新型コロナウイルス感染症対策本部会議に関すること')
                }}</t-i18n
                ><br />
                <t-i18n>{{ $t('都庁来庁者データに関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('総務局') }}</t-i18n>
            </td>
            <td class="tel">
              <t-i18n>{{ $t('感染症対策本部会議に関すること') }}</t-i18n
              ><br />
              <a href="tel:03-5388-2453">03-5388-2453</a><br />
              <t-i18n>{{ $t('都庁来庁者データに関すること') }}</t-i18n
              ><br />
              <a href="tel:03-5388-2319">03-5388-2319</a>
            </td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('都公式ホームページに関すること') }}</t-i18n>
                <br />
                <t-i18n>{{ $t('都公式SNSアカウントに関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('生活文化局') }}</t-i18n>
            </td>
            <td class="tel">
              <t-i18n> {{ $t('都公式ホームページに関すること') }}</t-i18n
              ><br />
              <a href="tel:03-5388-3061">03-5388-3061</a><br />
              <t-i18n>{{ $t('都公式SNSアカウントに関すること') }}</t-i18n
              ><br />
              <a href="tel:03-5388-3094">03-5388-3094</a>
            </td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{
                  $t('中小企業支援、テレワークに関すること')
                }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('産業労働局') }}</t-i18n>
            </td>
            <td class="tel">
              <t-i18n>{{ $t('資金繰りに関すること') }}</t-i18n
              ><br />
              <a href="tel:03-5320-4877">03-5320-4877</a><br />
              <t-i18n>{{ $t('経営に関すること') }}</t-i18n
              ><br />
              <a href="tel:03-3251-7881">03-3251-7881</a><br />
              <t-i18n>{{ $t('労働関係に関すること') }}</t-i18n
              ><br />
              <a href="tel:0570-00-6110">0570-00-6110</a>
            </td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{
                  $t('新型コロナウイルス感染症の予防・検査・医療に関すること')
                }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('福祉保健局') }}</t-i18n>
            </td>
            <td class="tel">
              <a href="tel:0570-550-571">0570-550-571</a><br />
              <t-i18n>{{ $t('（新型コロナコールセンター）') }}</t-i18n>
              <p class="caution">
                <t-i18n>{{
                  $t(
                    '電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。'
                  )
                }}</t-i18n>
              </p>
            </td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('都立学校に関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('教育庁') }}</t-i18n>
            </td>
            <td class="tel"><a href="tel:03-5320-6705">03-5320-6705</a></td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('スムーズビズに関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('都市整備局') }}</t-i18n>
            </td>
            <td class="tel"><a href="tel:03-5388-3317">03-5388-3317</a></td>
          </tr>
          <tr>
            <th class="content" scope="row" v-bind="headingAttrs">
              <div>
                <t-i18n>{{ $t('都営交通に関すること') }}</t-i18n>
              </div>
            </th>
            <td class="bureau">
              <t-i18n>{{ $t('交通局') }}</t-i18n>
            </td>
            <td class="tel">
              <a href="tel:03-3816-5700">03-3816-5700</a><br />
              <t-i18n>{{ $t('（都営交通お客様センター）') }}</t-i18n>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import TI18n from '@/components/TI18n.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    TI18n
  },
  data() {
    return {
      pc: true
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    }
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        @include font-size(14);

        padding: 1rem;
      }

      td {
        @include font-size(14);

        padding: 1rem;
      }

      tbody th {
        text-align: left;
        font-weight: inherit;
      }

      @include largerThan($medium) {
        thead tr {
          height: auto;
        }

        tbody tr {
          height: auto;
        }

        th.tel {
          width: 35%;
        }
        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding: 1rem;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 1rem;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        th,
        td {
          display: block;
          padding: 0.2rem 1rem;
        }
      }

      p.caution {
        font-size: 12px;
        margin: 0;
      }
    }
  }
}
</style>
