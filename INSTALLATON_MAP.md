# 地図について

## Mapboxの利用

- はじめに

  Mapbox GL JSというSDKを利用して実装してます。トップページの実装に合わせるため、vue.jsでのサンプルを作成しております。
  また、ベースとなるイメージは、サンプルの物を使うか、ご自身で作成いただくことも可能です。

- 事前準備

  1. account.mapbox.com[https://account.mapbox.com] にてアカウントを取得して、account tokenを取得

  1. 必要なパッケージをインストール
  ```
  yarn install
  yarn add mapbox-gl-vue
  yarn add mapbox-gl and @types/mapbox-gl
  ```
  1. 起動
　```
　yarn dev
　```  
  1. Styleを変更する  

    ご自身のスタイルを利用することも可能です
    上述のアカウントをお持ちでしたら、studio.mapbox.comを使って編集が出来ます。  

    参考: https://docs.mapbox.com/help/tutorials/style-single-country/

    Studioの`Share`ボタンから共有するエンドポイントを取得します。  

    ```
    style: 'mapbox://styles/lobenichou/cjto9zfpj00jq1fs7gajbuaas',
    ```
    `mapbox://`で始まる部分を作成したスタイルで置き換えます。

  1. Tokenを変更する

    ご自身のTokenを使うことも可能です。
    ```
    access-token="YOUR_TOKEN_NUMBER"
    ```

    上述したaccount.mapbox.comからtokenを取得して下さい。
    デフォルトでは、`default public token`を利用いただけます。

- マップの説明

  - 位置情報と症例のカウントについては`data/japan_covid19_data.json`にあるgeojsonを利用してます。
  - `count` propertiesにて、それぞれの都道府県ごとのデータを登録してます。
  - 上記データについては、厚生労働省のホームページ、`新型コロナウイルス感染症の現在の状況について`より引用しております。
      [厚生労働省 報道発表資料](https://www.mhlw.go.jp/stf/newpage_10251.html)

  - 都道府県の場所は、国土地理院のデータから県庁所在地の緯度経度を取得してます。
    [日本の東西南北端点の経度緯度について
](https://www.gsi.go.jp/KOKUJYOHO/center.htm)


- サンプルはこちら

  https://github.com/tichimura/covid19
