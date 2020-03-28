<template>
  <v-col cols="12" md="12" class="DataCard">
    <map-card
      :title="''"
      :caption="$t('※7:30〜8:30の平均値')"
      :title-id="'tokyo-city-heatmap'"
      :chart-id="'tokyo-city-chart'"
      :map-id="'tokyo-city-map'"
      :initial-bounds="[
        [139.695239, 35.676437],
        [139.773774, 35.694493]
      ]"
      :map-height="640"
      :map-options="{ interactive: true }"
      :unit="'人'"
      :url="'https://ds.yahoo.co.jp/datapolicy/'"
      :source-link-header="$t('※本データは2020年3月31日までの掲載となります')"
      :heatmap-legend="[20000, 40000, 60000]"
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
