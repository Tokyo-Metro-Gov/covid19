<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table" v-bind="tableAttrs">
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
            <td class="content" v-bind="headingAttrs">
              {{ $t('サイトの技術面に関すること') }}<br />{{ $t('オープンデータ、オープンソースに関すること') }}<br />{{ $t('サイト全般に関すること') }}
            </td>
            <td class="bureau">{{ $t('CODE for OKINAWA') }}</td>
            <td class="tel"><a href="mailto:codeforokinawa@gmail.com">codeforokinawa@gmail.com</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('県公式ホームページに関すること') }}<br />{{
                $t('県公式SNSアカウントに関すること')
              }}
            </td>
            <td class="bureau">{{ $t('沖縄県庁') }}</td>
            <td class="tel"><a href="tel:098-866-2333">098-866-2333</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症の予防・検査・医療に関すること') }}
            </td>
            <td class="bureau">{{ $t('沖縄県 新型コロナウィルス感染症 相談窓口') }}</td>
            <td class="tel"><a href="tel:098-866-2129">098-866-2129</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('県立学校に関すること') }}
            </td>
            <td class="bureau">{{ $t('沖縄県教育庁県立学校教育課') }}</td>
            <td class="tel"><a href="tel:098-866-2715">098-866-2715</a></td>
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
  created() {
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
