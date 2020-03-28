<template>
  <v-col cols="12" md="6" class="DataCard">
    <map-card
      :title="$t('東京駅周辺の人口推移（参考値）')"
      :caption="$t('※7:30〜8:30の平均値')"
      :title-id="'tokyo-st-heatmap'"
      :chart-id="'tokyo-station-chart'"
      :map-id="'tokyo-station-map'"
      :initial-bounds="[
        [139.761908, 35.676437],
        [139.773774, 35.686703]
      ]"
      :unit="'人'"
      :url="'https://ds.yahoo.co.jp/datapolicy/'"
      :source-link-header="$t('※本データは2020年3月31日までの掲載となります')"
      :detail-page-url="'/largemap'"
      :detail-page-string="$t('東京23区の人口推移（参考値）')"
      :link-string="$t('ヤフー・データソリューション')"
    />
  </v-col>
</template>

<script>
import MapCard from '@/components/MapCard.vue'

export default {
  components: {
    MapCard
  }
}
</script>
