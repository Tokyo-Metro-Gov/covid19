<template>
  <div class="Contacts">
    <h2 class="Contacts-Heading">
      {{ $t('お問い合わせ先一覧') }}
    </h2>
    <div class="Contacts-Card">
      <v-simple-table class="Contacts-Card-Table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('お問い合わせ内容') }}</th>
              <th class="text-center">{{ $t('局名') }}</th>
              <th class="text-center">{{ $t('電話番号') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ $t('〇 サイト全般に関すること') }}</td>
              <td>{{ $t('政策企画局') }}</td>
              <td><a href="tel:03-5388-2171">03-5388-2171</a></td>
            </tr>
            <tr>
              <td>
                {{ $t('〇 サイトの技術面に関すること') }}<br />{{
                  $t('〇 オープンデータ、オープンソースに関すること')
                }}
              </td>
              <td>{{ $t('戦略政策情報推進本部') }}</td>
              <td><a href="tel:03-5320-7930">03-5320-7930</a></td>
            </tr>
            <tr>
              <td>
                {{ $t('〇 新型コロナウイルス感染症対策本部会議に関すること')
                }}<br />{{ $t('〇 都庁来庁者データに関すること') }}
              </td>
              <td>{{ $t('総務局') }}</td>
              <td>
                {{ $t('〇 感染症対策本部会議に関すること') }}<br /><a
                  href="tel:03-5320-7891"
                  >03-5388-7891</a
                ><br />
                {{ $t('〇 都庁来庁者データに関すること') }}<br /><a
                  href="tel:03-5388-2319"
                  >03-5388-2319</a
                >
              </td>
            </tr>
            <tr>
              <td>
                {{ $t('〇 都公式ホームページに関すること') }}<br />{{
                  $t('〇 都公式SNSアカウントに関すること')
                }}
              </td>
              <td>{{ $t('生活文化局') }}</td>
              <td>
                {{ $t('〇 都公式ホームページに関すること') }}<br /><a
                  href="tel:03-5388-3061"
                  >03-5388-3061</a
                ><br />
                {{ $t('〇 都公式SNSアカウントに関すること') }}<br /><a
                  href="tel:03-5388-3094"
                  >03-5388-3094</a
                >
              </td>
            </tr>
            <tr>
              <td>{{ $t('〇 中小企業支援、テレワークに関すること') }}</td>
              <td>{{ $t('産業労働局') }}</td>
              <td>
                {{ $t('〇 資金繰りに関すること') }}<br /><a
                  href="tel:03-5320-4877"
                  >03-5320-4877</a
                ><br />
                {{ $t('〇 経営に関すること') }}<br /><a href="tel:03-3251-7881"
                  >03-3251-7881</a
                ><br />
                {{ $t('〇 労働関係に関すること') }}<br /><a
                  href="tel:0570-00-6110"
                  >0570-00-6110</a
                >
              </td>
            </tr>
            <tr>
              <td>
                {{
                  $t(
                    '〇 新型コロナウイルス感染症の予防・検査・医療に関すること'
                  )
                }}
              </td>
              <td>{{ $t('福祉保健局') }}</td>
              <td>
                <a href="tel:0570-00-6110">0570-00-6110</a><br />
                {{ $t('（新型コロナコールセンター）') }}
              </td>
            </tr>
            <tr>
              <td>{{ $t('〇 都立学校に関すること') }}</td>
              <td>{{ $t('教育庁') }}</td>
              <td><a href="tel:03-5320-6705">03-5320-6705</a></td>
            </tr>
            <tr>
              <td>{{ $t('〇 スムーズビズに関すること') }}</td>
              <td>{{ $t('都市整備局') }}</td>
              <td><a href="tel:03-5388-3317">03-5388-3317</a></td>
            </tr>
            <tr>
              <td>{{ $t('〇 都営交通に関すること') }}</td>
              <td>{{ $t('交通局') }}</td>
              <td>
                <a href="tel:03-3816-5700">03-3816-5700</a><br />
                {{ $t('（都営交通お客様センター）') }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

export default Vue.extend({
  head: (): MetaInfo => ({
    title: 'お問い合わせ先一覧'
  })
})
</script>

<style lang="scss">
.Contacts {
  &-Heading {
    @include font-size(30);
    font-weight: normal;
    color: $gray-2;
    margin-bottom: 12px;
  }
  &-Card {
    @include card-container();
    padding: 1px; // tr:hover で外枠が消えないように
    &-Table {
      td {
        height: 96px;
      }
      tr:hover {
        background: $white !important;
      }
    }
  }
}
</style>
