<template>
  <div
    class="Contacts"
    aria-labelledby="pageHeader"
    aria-describedby="contactsCardTable"
  >
    <page-header id="pageHeader" class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table
        id="contactsCardTable"
        class="Contacts-Card-Table"
        v-bind="tableAttrs"
        aria-describedby="pageHeader"
      >
        <thead>
          <tr>
            <th class="text-center" scope="col">
              {{ $t('お問い合わせ内容') }}
            </th>
            <th class="text-center" scope="col">{{ $t('局名') }}</th>
            <th class="text-center tel" scope="col">{{ $t('電話番号') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症の予防・検査・医療に関すること') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('新型コロナコールセンター') }}
            </td>
            <td class="tel">
              <a href="tel:0570-550571" class="importantContact">0570-550571</a
              ><br />
              <p class="caution">
                {{ $t(`午前9時00分から午後10時00分（土日祝含む）`) }}
              </p>
              <p class="caution">
                {{
                  $t(
                    `電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。`
                  )
                }}
              </p>
            </td>
          </tr>
          <tr>
            <td class="content importantContact" v-bind="headingAttrs">
              {{ $t('東京都緊急事態措置等・感染拡大防止協力金等に関すること') }}
            </td>
            <td class="bureau importantContact">
              {{ $t('東京都緊急事態措置等・感染拡大防止協力金相談センター') }}
            </td>
            <td class="tel">
              <a href="tel:03-5388-0567" class="importantContact"
                >03-5388-0567</a
              ><br />
              <p class="caution">
                {{ $t('午前9時00分から午後7時00分（土日祝含む）') }}
              </p>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('本サイトの管理・運営に関すること') }}
            </td>
            <td class="bureau">{{ $t('政策企画局') }}</td>
            <td class="tel"><a href="tel:03-5388-2171">03-5388-2171</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('新型コロナウイルス感染症対策本部会議に関すること')
              }}<br />{{ $t('都庁来庁者データに関すること') }}
            </td>
            <td class="bureau">{{ $t('総務局') }}</td>
            <td class="tel">
              <ul>
                <li>
                  {{ $t('新型コロナウイルス感染症対策本部会議に関すること') }}
                  <br />
                  <a href="tel:03-5388-2453"> 03-5388-2453 </a>
                </li>
                <li>
                  {{ $t('都庁来庁者データに関すること') }}
                  <br />
                  <a href="tel:03-5388-2319"> 03-5388-2319 </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('都公式ホームページに関すること') }}<br />{{
                $t('都公式SNSアカウントに関すること')
              }}
            </td>
            <td class="bureau">{{ $t('生活文化局') }}</td>
            <td class="tel">
              <ul>
                <li>
                  {{ $t('都公式ホームページに関すること') }}<br /><a
                    href="tel:03-5388-3061"
                    >03-5388-3061</a
                  >
                </li>
                <li>
                  {{ $t('都公式SNSアカウントに関すること') }}<br /><a
                    href="tel:03-5388-3094"
                    >03-5388-3094</a
                  >
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('中小企業支援、テレワークに関すること') }}
            </td>
            <td class="bureau">{{ $t('産業労働局') }}</td>
            <td class="tel">
              <ul>
                <li>
                  {{ $t('資金繰りに関すること') }}<br /><a
                    href="tel:03-5320-4877"
                    >03-5320-4877</a
                  >
                </li>
                <li>
                  {{ $t('経営に関すること') }}<br /><a href="tel:03-3251-7881"
                    >03-3251-7881</a
                  >
                </li>
                <li>
                  {{ $t('労働関係に関すること') }}<br /><a
                    href="tel:0570-00-6110"
                    >0570-00-6110</a
                  >
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('都立学校に関すること') }}
            </td>
            <td class="bureau">{{ $t('教育庁') }}</td>
            <td class="tel"><a href="tel:03-5320-6705">03-5320-6705</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('スムーズビズに関すること') }}
            </td>
            <td class="bureau">{{ $t('都市整備局') }}</td>
            <td class="tel"><a href="tel:03-5388-3317">03-5388-3317</a></td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('都営交通に関すること') }}
            </td>
            <td class="bureau">{{ $t('交通局') }}</td>
            <td class="tel">
              <a href="tel:03-3816-5700">03-3816-5700</a><br />
              {{ $t('（都営交通お客様センター）') }}
            </td>
          </tr>
          <tr>
            <td class="content" v-bind="headingAttrs">
              {{ $t('ご家庭でのマスク等の捨て方に関すること') }}
            </td>
            <td class="bureau">{{ $t('環境局') }}</td>
            <td class="tel"><a href="tel:03-5388-3581">03-5388-3581</a></td>
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
    PageHeader,
  },
  data() {
    return {
      pc: true,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string,
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    },
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
    },
  },
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
        padding: 1em 0;
        @include font-size(14, true);
      }

      td {
        padding: 1em 16px;
        @include font-size(14);
      }

      .importantContact {
        font-weight: 600;
        @include font-size(16, true);
      }

      .tel ul {
        list-style: none;
        padding: 0;
      }

      .tel li {
        margin: 8px 0;
      }

      @include largerThan($medium) {
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
              font-weight: 600;
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

      p.caution {
        margin: 0;
        @include font-size(12);
      }
    }
  }
}
</style>
