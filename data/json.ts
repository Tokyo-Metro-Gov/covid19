/* eslint-disable camelcase */

export namespace Json {
  // data.json
  export type data = {
    contacts: {
      date: string
      data: data.contact[]
    }
    querents: {
      date: string
      data: data.querent[]
    }
    patients: {
      date: string
      data: data.patient[]
    }
    patients_summary: {
      date: string
      data: data.summary[]
    }
    discharges_summary: {
      date: string
      data: data.summary[]
    }
    discharges: {
      date: string
      data: data.discharge[]
    }
    inspections: {
      date: string
      data: data.inspection[]
    }
    inspections_summary: {
      date: string
      data: { [area: string]: number[] }
      labels: string[]
    }
    better_patients_summary: {
      date: string
      data: {
        [attribute: string]: {
          [datetime: string]: number
        }
      }
    }
    lastUpdate: string
    main_summary: data.main_summary
  }
  export namespace data {
    export type contact = {
      日付: string
      曜日: string
      '9-13時': number | null
      '13-17時': number | null
      '17-21時': number | null
      date: string
      w: number
      short_date: string
      小計: number
    }
    export type querent = {
      日付: string
      曜日: string
      '9-17時': string | null
      '17-翌9時': string | null
      date: string
      w: number
      short_date: string
      小計: number
    }
    export type patient = {
      No: number
      リリース日: string
      曜日: number
      居住地: string
      年代: string
      性別: '男性' | '女性'
      属性: string
      備考: string | null
      補足: string | null
      退院: string
      date: string
      w: number
      short_date: string
    }
    export type summary = {
      日付: string
      小計: number
    }
    export type discharge = {
      No: number
      リリース日: string
      曜日: number
      居住地: string
      年代: string
      性別: '男性' | '女性'
      属性: string
      備考: string | null
      補足: string | null
      退院: string
      date: string
      w: number
      short_date: string
    }
    export type inspection = {
      判明日: string
      検査検体数: string
      疑い例検査: string
      接触者調査: string
      陰性確認: string
      '（小計①）': string
      チャーター便: string
      クルーズ船: string
      陰性確認2: string
      '（小計②）': string
    }
    export type main_summary = {
      attr: string
      value: number
      children?: main_summary[]
    }
  }

  // metro.json
  export type metro = {
    date: string
    datasets: metro.data[]
    labels: string[]
    base_period: string
  }
  export namespace metro {
    export type data = {
      label: string
      data: number[]
    }
  }

  // news.json
  export type news = {
    newsItems: news.item[]
  }
  export namespace news {
    export type item = {
      date: string
      url: string
      text: string
    }
  }
}
