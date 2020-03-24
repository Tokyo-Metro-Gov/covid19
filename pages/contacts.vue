<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" role="presentation">
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">{{ $t('局名') }}</th>
            <th class="text-center" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('サイト全般に関すること') }}
            </td>
            <td class="bureau">{{ $t('政策企画局') }}</td>
            <td class="tel"><a href="tel:03-5388-2171">03-5388-2171</a></td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('サイトの技術面に関すること') }}<br />{{
                $t('オープンデータ、オープンソースに関すること')
              }}
            </td>
            <td class="bureau">{{ $t('戦略政策情報推進本部') }}</td>
            <td class="tel"><a href="tel:03-5320-7930">03-5320-7930</a></td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('新型コロナウイルス感染症対策本部会議に関すること')
              }}<br />{{ $t('都庁来庁者データに関すること') }}
            </td>
            <td class="bureau">{{ $t('総務局') }}</td>
            <td class="tel">
              {{ $t('感染症対策本部会議に関すること') }}<br /><a
                href="tel:03-5320-7891"
                >03-5320-7891</a
              ><br />
              {{ $t('都庁来庁者データに関すること') }}<br /><a
                href="tel:03-5388-2319"
                >03-5388-2319</a
              >
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('都公式ホームページに関すること') }}<br />{{
                $t('都公式SNSアカウントに関すること')
              }}
            </td>
            <td class="bureau">{{ $t('生活文化局') }}</td>
            <td class="tel">
              {{ $t('都公式ホームページに関すること') }}<br /><a
                href="tel:03-5388-3061"
                >03-5388-3061</a
              ><br />
              {{ $t('都公式SNSアカウントに関すること') }}<br /><a
                href="tel:03-5388-3094"
                >03-5388-3094</a
              >
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('中小企業支援、テレワークに関すること') }}
            </td>
            <td class="bureau">{{ $t('産業労働局') }}</td>
            <td class="tel">
              {{ $t('資金繰りに関すること') }}<br /><a href="tel:03-5320-4877"
                >03-5320-4877</a
              ><br />
              {{ $t('経営に関すること') }}<br /><a href="tel:03-3251-7881"
                >03-3251-7881</a
              ><br />
              {{ $t('労働関係に関すること') }}<br /><a href="tel:0570-00-6110"
                >0570-00-6110</a
              >
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('新型コロナウイルス感染症の予防・検査・医療に関すること') }}
            </td>
            <td class="bureau">{{ $t('福祉保健局') }}</td>
            <td class="tel">
              <a href="tel:0570-550-571">0570-550-571</a><br />
              {{ $t('（新型コロナコールセンター）') }}
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('都立学校に関すること') }}
            </td>
            <td class="bureau">{{ $t('教育庁') }}</td>
            <td class="tel"><a href="tel:03-5320-6705">03-5320-6705</a></td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('スムーズビズに関すること') }}
            </td>
            <td class="bureau">{{ $t('都市整備局') }}</td>
            <td class="tel"><a href="tel:03-5388-3317">03-5388-3317</a></td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('都営交通に関すること') }}
            </td>
            <td class="bureau">{{ $t('交通局') }}</td>
            <td class="tel">
              <a href="tel:03-3816-5700">03-3816-5700</a><br />
              {{ $t('（都営交通お客様センター）') }}
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
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
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
        font-size: 14px !important;
      }

      td {
        padding: 0 16px;
        font-size: 14px;
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
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
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }
    }
  }
}
</style>
