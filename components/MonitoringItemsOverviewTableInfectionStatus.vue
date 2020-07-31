<template>
  <table
    :class="$style.table"
    aria-labelledby="infectionStatusHeader"
    aria-describedby="infectionStatusBody"
  >
    <thead id="infectionStatusHeader">
      <tr>
        <th
          :class="$style['cellWidth-itemNameFullWidth']"
          scope="col"
          colspan="3"
        >
          {{ $t('項目') }}
        </th>
        <th :class="$style['cellWidth-itemValue']" scope="col">
          {{ $t('数値') }}
        </th>
      </tr>
    </thead>
    <tbody id="infectionStatusBody">
      <tr>
        <th
          :class="[$style.itemName, $style['cellWidth-itemNameFullWidth']]"
          scope="row"
          colspan="3"
        >
          {{ $t('(1)新規陽性者数') }}
        </th>
        <td :class="$style['cellWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(1)新規陽性者数'].value"
            :unit="items['(1)新規陽性者数'].unit"
          />
        </td>
      </tr>
      <tr>
        <th
          :class="$style['cellWidth-itemCategorySuperordinate']"
          scope="row"
          rowspan="3"
        >
          {{ $t('潜在・市中感染') }}
        </th>
        <th
          :class="[
            $style.itemName,
            $style.wrapAllowed,
            $style['cellWidth-itemNameCategorizedSuper'],
          ]"
          scope="row"
          colspan="2"
        >
          {{
            $t('(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 ')
          }}
        </th>
        <td :class="$style['cellWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="
              items[
                '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
              ].value
            "
            :unit="
              items[
                '(2)#7119（東京消防庁救急相談センター）における発熱等相談件数 '
              ].unit
            "
          />
        </td>
      </tr>
      <tr>
        <th
          :class="[
            $style.itemName,
            $style.wrapAllowed,
            $style['cellWidth-itemNameCategorizedSuperSub'],
          ]"
          scope="row"
          rowspan="2"
        >
          {{ $t('(3)新規陽性者における接触歴等不明者') }}
        </th>
        <th :class="$style['cellWidth-itemCategorySubordinate']" scope="row">
          {{ $t('人数') }}
        </th>
        <td :class="$style['cellWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(3)新規陽性者における接触歴等不明者（人数）'].value"
            :unit="items['(3)新規陽性者における接触歴等不明者（人数）'].unit"
          />
        </td>
      </tr>
      <tr>
        <th :class="$style['cellWidth-itemCategorySubordinate']" scope="row">
          {{ $t('増加比') }}
        </th>
        <td :class="$style['cellWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="
              items['(3)新規陽性者における接触歴等不明者（増加比）'].value
            "
            :unit="items['(3)新規陽性者における接触歴等不明者（増加比）'].unit"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { MonitoringItems } from '@/utils/formatMonitoringItems'
import MonitoringItemsOverviewTableValueWithTranslatableUnit from '@/components/MonitoringItemsOverviewTableValueWithTranslatableUnit.vue'

export default Vue.extend({
  components: {
    MonitoringItemsOverviewTableValueWithTranslatableUnit,
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
