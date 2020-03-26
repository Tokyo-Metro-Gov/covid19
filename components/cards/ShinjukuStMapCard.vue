<template>
  <v-col cols="12" md="6" class="DataCard">
    <map-card
      :title="$t('新宿駅周辺の人口推移（参考値）')"
      :caption="$t('※7:30〜8:30の平均値')"
      :title-id="'shinjuku-st-heatmap'"
      :chart-id="'shinjuku-station-chart'"
      :map-id="'shinjuku-station-map'"
      :initial-bounds="[
        [139.695239, 35.685448],
        [139.706397, 35.694493]
      ]"
      :unit="'人'"
      :url="'https://ds.yahoo.co.jp/datapolicy/'"
      :source-link-header="$t('※本データは2020年3月31日までの掲載となります')"
      :detail-page-url="'/largemap'"
      :detail-page-string="$t('東京23区の人口推移（参考値）')"
      :link-string="$t('ヤフー・データソリューション')"
      :date="''"
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
