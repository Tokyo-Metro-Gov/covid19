<template>
  <div class="News">
    <page-header class="mb-3">
      {{ $t('県内各所のお知らせ') }}
    </page-header>
    <StaticCard>
      <h3>{{ $t('島根県立中央病院') }}</h3>
      <ul>
        <li>
          <a href="https://www.spch.izumo.shimane.jp/new/2020/03/06165409.html">
            {{ $t('【重要】新型コロナウイルス感染症対策について') }}
          </a>
        </li>
      </ul>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('島根大学') }}</h3>
      <ul>
        <li>
          <a
            href="https://www.shimane-u.ac.jp/introduction/crisis_management/index2.html?node_id=9045"
          >
            {{ $t('新型コロナウイルスに対する対応について') }}
          </a>
        </li>
      </ul>
    </StaticCard>
    <p>
      {{
        $t(
          '※ 県内全てのお知らせを網羅できているわけではないことをご了承ください。'
        )
      }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内各所のお知らせ') as string
    }
  }
})
</script>
