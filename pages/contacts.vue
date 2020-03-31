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
              {{ $t('オープンデータ、オープンソースに関すること') }}
            </td>
            <td class="bureau">{{ $t('島根県地域振興部情報政策課') }}</td>
            <td class="tel"><a href="tel:0852-22-5700">0852-22-5700</a></td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{ $t('島根県公式ホームページに関すること') }}
            </td>
            <td class="bureau">{{ $t('島根県庁') }}</td>
            <td class="tel">
              <a href="tel:0852-22-5111">0852-22-5111</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('松江市・島根県共同設置松江保健所') }}</td>
            <td class="tel">
              <a href="tel:0852-33-7673">0852-33-7673</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('雲南保健所') }}</td>
            <td class="tel">
              <a href="tel:0854-47-7778">0854-47-7778</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('出雲保健所') }}</td>
            <td class="tel">
              <a href="tel:0853-24-7028">0853-24-7028</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('県央保健所') }}</td>
            <td class="tel">
              <a href="tel:0854-84-9812">0854-84-9812</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('浜田保健所') }}</td>
            <td class="tel">
              <a href="tel:0855-29-5970">0855-29-5970</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('益田保健所') }}</td>
            <td class="tel">
              <a href="tel:0856-31-9512">0856-31-9512</a>
            </td>
          </tr>
          <tr>
            <td class="content" role="heading" aria-level="3">
              {{
                $t(
                  '新型コロナウイルス感染症が疑われる者の相談及び「帰国者・接触者外来」'
                )
              }}
            </td>
            <td class="bureau">{{ $t('隠岐保健所') }}</td>
            <td class="tel">
              <a href="tel:08512-2-9600">08512-2-9600</a>
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
