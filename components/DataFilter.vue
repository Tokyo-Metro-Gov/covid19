<template>
  <div class="DataFilter">
    <label class="filter"
      ><input v-model="isFilterEnabled" type="checkbox" /> フィルター</label
    >
    <template v-if="isFilterEnabled">
      <ul v-if="filterLabels.length" class="labels">
        <li v-for="(item, index) in filterLabels" :key="index" class="label">
          <span class="label__remove" @click="handleRemoveLabelClick(item)"
            >&#10005;</span
          >
          <span class="label__text">{{ `${item.key}: ${item.value}` }}</span>
        </li>
      </ul>
      <select ref="key" v-model="filterKey">
        <option
          v-for="item in chartData.headers"
          :key="item.value"
          :value="item.value"
          >{{ item.text.replace('※', '') }}
        </option>
      </select>
      <select v-if="filterValues.length" ref="value">
        <option v-for="item in filterValues" :key="item">{{ item }} </option>
      </select>
      <select v-else disabled>
        <option>すべて選択されています</option>
      </select>
      <button
        type="button"
        :disabled="!filterValues.length"
        @click.prevent="handleAddButtonClick"
      >
        追加
      </button>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.DataFilter {
  font-size: 12px;
  margin-bottom: 10px;
}

select {
  font-size: 12px;
  padding: 3px 6px;
  border: 1px solid #999;
}

button {
  background-color: #4d4d4d;
  padding: 3px 6px;
  color: #fff;
  line-height: normal;
  border-radius: 4px;
}

.filter {
  display: block;
}

.labels {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
}

.label {
  display: inline-flex;
  background-color: #ccc;
  padding: 5px;
  font-size: 10px;
  align-items: center;
  line-height: 1;
  margin: 0 5px 5px 0;

  &__remove {
    margin-right: 5px;
    cursor: pointer;
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'

type HeaderData = {
  text: string
  value: string
}

type Dataset = { [prop: string]: any }

type KeyAndValue = {
  key: string
  value: any
}

type Data = {
  datasets: Dataset[]
  isFilterEnabled: boolean
  filterKey: string
  filters: { [key: string]: any[] }
}

type Methods = {
  handleAddButtonClick: (event: Event) => void
  handleRemoveLabelClick: (item: KeyAndValue) => void
}

type Computed = {
  filterKeys: string[]
  filterLabels: KeyAndValue[]
  filterMap: { [key: string]: any[] }
  filterValues: string[]
  filteredDatasets: Dataset[]
}

type Props = {
  chartData: {
    headers: HeaderData[]
    datasets: Dataset[]
  }
}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  name: 'DataFilter',
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          headers: [],
          datasets: []
        }
      }
    }
  },
  data() {
    return {
      datasets: [],
      isFilterEnabled: false,
      filterKey: this.chartData.headers[0].value,
      filters: {}
    }
  },
  computed: {
    // 選択中のフィルタキーのリストです。
    // 例）['公表日', '居住地']
    filterKeys() {
      return Object.keys(this.filters)
    },
    // フィルターのキーとバリューをすべて保有するマップです。
    // 例）{
    // '性別': ['男性', '女性', '不明', '調査中'],
    // '年代': ['10代', '20代', ...]
    // }
    filterMap() {
      const reducer = (filters: { [key: string]: any }, dataset: Dataset) => {
        for (const key in dataset) {
          const value = dataset[key]
          if (filters[key] === undefined) {
            this.$set(filters, key, [value])
            filters[key] = [value]
          } else if (
            !filters[key].some((filterValue: any) => filterValue === value)
          ) {
            filters[key].push(value)
          }
        }
        return filters
      }
      return this.datasets.reduce(reducer, {})
    },
    // 選択中のフィルタのラベルリストです。
    filterLabels() {
      const reducer = (keyAndVals: KeyAndValue[], filterKey: string) => {
        const values = this.filters[filterKey] || []
        const keyAndValues = values.map(value => {
          return { key: filterKey, value }
        })
        return keyAndVals.concat(keyAndValues)
      }
      return this.filterKeys.length ? this.filterKeys.reduce(reducer, []) : []
    },

    // 左から 2 番目のプルダウンメニューで使うデータです。
    // 選択中の属性名をもとに、その候補値のリストを返却します。
    // 例） ユーザが「性別」を選択すると、「男性」「女性」「不明」「調査中」を要素とするリストを返却します。
    filterValues() {
      const filterValues = this.filterMap[this.filterKey]
      const selectedLabels = this.filterLabels.filter(
        label => label.key === this.filterKey
      )
      return filterValues.filter(
        filterValue =>
          !selectedLabels.some(({ value }) => value === filterValue)
      )
    },
    // フィルタリングされたリストを返却します。
    // 例）ユーザが「性別：男性」「年代:30代」「年別40代」でフィルタリングしているときは、
    // 「30代男性」 OR 「40代男性」のリストを返却します。
    filteredDatasets() {
      // フィルター設定がない場合はすべてのデータを返却
      if (this.isFilterEnabled && this.filterKey.length === 0) {
        return this.datasets
      } else {
        return this.datasets.filter(dataset => {
          let isMatched = true
          for (const key in this.filters) {
            const values = this.filters[key]
            // 属性毎のフィルタリングは OR でマッチングさせます
            // 例）「年代」が「30代」「40代」指定されている場合は、30代 OR 40代のデータにマッチさせます
            isMatched = values.some(value => {
              // 以下の if 文は「退院」属性が空のときのマッチングです。
              // この場合は、キーは value には空文字、データには null が入ってます。
              if (value === '' && dataset[key] === null) return true
              return value === dataset[key]
            })
            // マッチしない属性があった場合は、その時点でフィルタリング対象外となります。(AND検索)
            // 例）「年代:30代」「年別40代」がマッチしなかった場合、「性別：男性」かどうかの判別は行いません
            if (!isMatched) break
          }
          return isMatched
        })
      }
    }
  },
  methods: {
    // フィルタリング項目を、属性名を key に、属性値を要素とする配列オブジェクトに追加します。
    // 例） filters['性別'] = ['男性', '女性']
    handleAddButtonClick() {
      const selectedKey = (this.$refs.key as HTMLSelectElement).value
      const selectedValue = (this.$refs.value as HTMLSelectElement).value
      const isValid = selectedKey !== '' && selectedKey !== ''
      if (isValid) {
        const values = this.filters[selectedKey]
        if (values === undefined) {
          this.$set(this.filters, selectedKey, [selectedValue])
          this.filters[selectedKey] = [selectedValue]
        } else if (!values.some(value => value === selectedValue)) {
          values.push(selectedValue)
        }
      }
    },
    // フィルタリング項目を削除します。
    handleRemoveLabelClick({ key, value }) {
      const values = this.filters[key]
      if (values !== undefined) {
        for (let i = 0, len = values.length; i < len; i++) {
          if (values[i] === value) {
            values.splice(i, 1)
            break
          }
        }
      }
      // [IMPORTANT]
      // 空要素の配列はプロパティごと削除すること
      if (values.length === 0) {
        delete this.filters[key]
        this.$delete(this.filters, key)
      }
    }
  },
  watch: {
    // フィルタリストの変更を監視し、リストを送出します。
    filteredDatasets(): void {
      this.$emit('update', this.filteredDatasets)
    }
  },
  mounted() {
    // プロパティで受け取ったデータセットをコピーします。
    this.datasets = this.chartData.datasets.concat()
  }
}

export default Vue.extend(options)
</script>
