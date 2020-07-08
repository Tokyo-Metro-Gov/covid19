<template>
  <table
    :class="$style.table"
    aria-labelledby="medicalSystemHeader"
    aria-describedby="medicalSystemBody"
  >
    <thead id="medicalSystemHeader">
      <tr>
        <th
          :class="$style['cellMaxWidth-itemNameFullWidth']"
          scope="col"
          colspan="3"
        >
          {{ $t('項目') }}
        </th>
        <th :class="$style['cellMaxWidth-itemValue']" scope="col">
          {{ $t('数値') }}
        </th>
      </tr>
    </thead>
    <tbody id="medicalSystemBody">
      <tr>
        <th
          :class="$style['cellMaxWidth-itemCategorySuperordinate']"
          scope="row"
          rowspan="2"
        >
          {{ $t('検査体制') }}
        </th>
        <th
          :class="[
            $style.itemName,
            $style['cellMaxWidth-itemNameCategorizedSuperSub']
          ]"
          scope="row"
          rowspan="2"
        >
          {{ $t('(4)PCR・抗原検査') }}
        </th>
        <th :class="$style['cellMaxWidth-itemCategorySubordinate']" scope="row">
          {{ $t('陽性率') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(4)PCR・抗原検査（陽性率）'].value"
            :unit="items['(4)PCR・抗原検査（陽性率）'].unit"
          />
        </td>
      </tr>
      <tr>
        <th :class="$style['cellMaxWidth-itemCategorySubordinate']" scope="row">
          {{ $t('検査人数') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(4)PCR・抗原検査（検査人数）'].value"
            :unit="items['(4)PCR・抗原検査（検査人数）'].unit"
          />
        </td>
      </tr>
      <tr>
        <th
          :class="$style['cellMaxWidth-itemCategorySuperordinate']"
          scope="row"
          rowspan="5"
        >
          {{ $t('受入体制') }}
        </th>
        <th
          :class="[
            $style.itemName,
            $style['cellMaxWidth-itemNameCategorizedSuper']
          ]"
          scope="row"
          colspan="2"
        >
          {{ $t('(5)救急医療の東京ルールの適用件数') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(5)救急医療の東京ルールの適用件数'].value"
            :unit="items['(5)救急医療の東京ルールの適用件数'].unit"
          />
        </td>
      </tr>
      <tr>
        <th
          :class="[
            $style.itemName,
            $style.aboveEmptyCell,
            $style['cellMaxWidth-itemNameCategorizedSuper']
          ]"
          scope="row"
          colspan="2"
        >
          {{ $t('(6)入院患者数') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(6)入院患者数'].value"
            :unit="items['(6)入院患者数'].unit"
          />
        </td>
      </tr>
      <tr>
        <th
          :class="[
            $style.emptyCell,
            $style['cellMaxWidth-itemNameCategorizedSuperSub']
          ]"
          scope="row"
        />
        <th :class="$style['cellMaxWidth-itemCategorySubordinate']" scope="row">
          {{ $t('確保病床') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          {{ items['(6)入院患者確保病床数'].value }}
        </td>
      </tr>
      <tr>
        <th
          :class="[
            $style.itemName,
            $style.aboveEmptyCell,
            $style['cellMaxWidth-itemNameCategorizedSuper']
          ]"
          scope="row"
          colspan="2"
        >
          {{ $t('(7)重症患者数') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          <monitoring-items-overview-table-value-with-translatable-unit
            :value="items['(7)重症患者数'].value"
            :unit="items['(7)重症患者数'].unit"
          />
        </td>
      </tr>
      <tr>
        <th
          :class="[
            $style.emptyCell,
            $style['cellMaxWidth-itemNameCategorizedSuperSub']
          ]"
          scope="row"
        />
        <th :class="$style['cellMaxWidth-itemCategorySubordinate']" scope="row">
          {{ $t('確保病床') }}
        </th>
        <td :class="$style['cellMaxWidth-itemValue']">
          {{ items['(7)重症患者確保病床数'].value }}
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
    MonitoringItemsOverviewTableValueWithTranslatableUnit
  },
  props: {
    items: {
      type: Object as PropType<MonitoringItems>,
      required: true
    }
  }
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
